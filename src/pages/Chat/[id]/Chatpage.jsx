import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, setChatTitleFromMessage, setMessages } from "../../../redux/slices/chat";
import ChatArea from "../LayoutChat/Chatarea/Chatarea";
import ChatPrompt from "../LayoutChat/Chatprompt/Chatpromt";

const ChatPage = () => {
  const { id } = useParams(); // Chat ID từ URL
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth); // Lấy token từ Redux
  const selectedMode = useSelector((state) => state.chat.selectedMode); // Chế độ chọn của chat

  const [ws, setWs] = useState(null); // WebSocket
  const [loading, setLoading] = useState(false);  // State cho loading
  const [chunks, setChunks] = useState("");

  // Lấy tin nhắn cho cuộc trò chuyện hiện tại từ Redux
  const messages = useSelector((state) => state.chat.messagesByChatId[id] || []); 

  // Fetching messages khi `id` thay đổi hoặc khi token thay đổi
  useEffect(() => {
    if (!id || !token) return;

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
        dispatch(setMessages({ chatId: id, messages: data })); 
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [id, token, dispatch]);

  // Mở kết nối WebSocket và thiết lập các sự kiện khi `id` và `token` thay đổi
  useEffect(() => {
    if (!id || !token) return;

    const newWs = new WebSocket(`ws://localhost:8000/ws/chat/${id}/?token=${token}`);
    setWs(newWs);

    newWs.onmessage = (event) => {
      const res = JSON.parse(event.data);
      if (res.user_data) {
        dispatch(addMessage({ chatId: id, message: res.user_data }));
        dispatch(setChatTitleFromMessage({ chatId: parseInt(id, 10), title: res.title }));
      }
      if (res.llm_response) {
        dispatch(addMessage({ chatId: id, message: res.llm_response }));
        setLoading(false);
        setChunks(""); // Clear the chunks when response is finished
      }
      if (res.data_stream) {
        const newChunk = res.data_stream;
        setChunks((prevChunks) => prevChunks + newChunk); // Append chunk to existing content
      }
    };

    return () => {
      newWs.close(); // Đảm bảo WebSocket được đóng khi component unmount
    };
  }, [id, token, dispatch]);

  // Gửi tin nhắn qua WebSocket
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
