import React, { useEffect, useState } from "react";
import ChatArea from "../LayoutChat/Chatarea/Chatarea";
import ChatPrompt from "../LayoutChat/Chatprompt/Chatpromt";
import {
  addMessage,
  setChatTitleFromMessage,
  setMessages,
} from "../../../redux/slices/chat";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ChatPage = () => {
  const { id } = useParams();
  const [ws, setWs] = useState(null);
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [chunks, setChunks] = useState("");
  const dispatch = useDispatch();
  const selectedMode = useSelector((state) => state.chat.selectedMode);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`/chat/${id}/messages/`, {
          method: "GET",
          headers: {
            Authorization: `JWT ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }

        const data = await response.json();
        dispatch(setMessages(data));
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    if (id) {
      fetchMessages();
    }

    const newWs = new WebSocket(
      `ws://localhost:8000/ws/chat/${id}/?token=${token}`
    );
    setWs(newWs);

    return () => {
      newWs.close();
    };
  }, [id, token, dispatch]);

  const sendMessage = (message) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      setLoading(true);
      ws.send(
        JSON.stringify({
          message,
          type: selectedMode,
        })
      );
    }
  };

  useEffect(() => {
    if (!ws) return;

    ws.onmessage = (event) => {
      const res = JSON.parse(event.data);

      if (res.user_data) {
        dispatch(addMessage(res.user_data));
        dispatch(
          setChatTitleFromMessage({
            chatId: parseInt(id, 10),
            title: res.title,
          })
        );
      }
      if (res.llm_response) {
        dispatch(addMessage(res.llm_response));
        setLoading(false);
        setChunks("");
      }

      if (res.data_stream) {
        const newChunk = res.data_stream;
        setChunks((prevChunks) => prevChunks + newChunk);
      }
    };

    return () => {
      ws.onmessage = null;
    };
  }, [ws, dispatch, id]);

  return (
    <div className="flex flex-col h-screen">
      {/* ChatArea chiếm 80% chiều cao */}
      <div className="flex-1 overflow-auto" style={{ flex: "0 0 80%", maxHeight: "80vh" }}>
        <ChatArea chatId={id} chunks={chunks} />
      </div>
      
      {/* ChatPrompt chiếm 20% chiều cao còn lại và luôn cố định dưới cùng */}
      <div className="flex-shrink-0" style={{ flex: "0 0 20%" }}>
        <ChatPrompt chatId={id} onSendMessage={sendMessage} loading={loading} />
      </div>
    </div>
  );
  
};

export default ChatPage;
