/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ChatArea from "../LayoutChat/chatarea/Chatarea";
import ChatPrompt from "../LayoutChat/Chatprompt/Chatpromt";
import { useDispatch, useSelector } from "react-redux";
import {
  addMessage,
  setChatTitleFromMessage,
  setMessages,
} from "../../../redux/slices/chat";
import axios from '../../../utils';
import { useParams } from "react-router-dom";

import "./ChatPage.css";

const ChatPage = () => {
  const [ws, setWs] = useState(null);
  const { id } = useParams(); // Lấy id từ URL
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [chunks, setChunks] = useState("");
  const dispatch = useDispatch();
  const selectedMode = useSelector((state) => state.chat.selectedMode);

  useEffect(() => {
    if (!id) return; // Nếu không có id, bỏ qua việc fetch dữ liệu

    const fetchMessages = async () => {
      try {
        const response = await axios.get(`/chat/${id}/messages/`, {
          headers: {
            Authorization: `JWT ${token}`,
          },
        });
        dispatch(setMessages(response.data));
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();

    const newWs = new WebSocket(
      `ws://localhost:8000/ws/chat/${id}/?token=${token}`
    );
    setWs(newWs);

    return () => {
      newWs.close();
    };
  }, [id, token, dispatch]);

  const sendMessage = (message) => {
    if (ws?.readyState === WebSocket.OPEN) {
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
          setChatTitleFromMessage({ chatId: parseInt(id, 10), title: res.title })
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

  // Kiểm tra nếu không có id
  if (!id) {
    return (
      <div className="no-chat-page">
        <h1>Không tìm thấy cuộc trò chuyện</h1>
        <p>Vui lòng chọn hoặc tạo một cuộc trò chuyện mới.</p>
      </div>
    );
  }

  return (
    <div className="chat-page">
      <ChatArea chatId={id} chunks={chunks} />
      <ChatPrompt chatId={id} onSendMessage={sendMessage} loading={loading} />
    </div>
  );
};

export default ChatPage;
