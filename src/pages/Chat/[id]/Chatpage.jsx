import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, setChatTitleFromMessage, setMessages } from "../../../redux/slices/chat";
import ChatArea from "../LayoutChat/Chatarea/Chatarea";
import ChatPrompt from "../LayoutChat/Chatprompt/Chatpromt";

const ChatPage = () => {
  const { id: rawId } = useParams(); // Lấy id từ URL (dạng chuỗi)
  const id = parseInt(rawId, 10); // Chuyển đổi id sang số nguyên
  // console.log("ID:", id); // Kiểm tra kiểu dữ liệu của id

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth); // Lấy token từ Redux
  const selectedMode = useSelector((state) => state.chat.selectedMode); // Lấy chế độ chat từ Redux

  const [ws, setWs] = useState(null); // WebSocket
  const [loading, setLoading] = useState(false); // State cho loading
  const [chunks, setChunks] = useState(""); // State lưu chuỗi dữ liệu từ WebSocket

  // Fetch tin nhắn khi id hoặc token thay đổi
  useEffect(() => {
    if (!id || !token || isNaN(id)) return;

    const fetchMessages = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/chat/${id}/messages/`, {
          method: "GET",
          headers: {
            Authorization: `JWT ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }

        const data = await response.json();
        // console.log("Fetched messages:", data);
        dispatch(setMessages({ chatId: id, messages: data }));
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [id, token, dispatch]);

  // Thiết lập WebSocket khi id và token thay đổi
  useEffect(() => {
    if (!id || !token || isNaN(id)) return;

    const newWs = new WebSocket(`ws://localhost:8000/ws/chat/${id}/?token=${token}`);
    setWs(newWs);

    newWs.onmessage = (event) => {
      const res = JSON.parse(event.data);
      if (res.user_data) {
        dispatch(addMessage({ chatId: id, message: res.user_data }));
        dispatch(setChatTitleFromMessage({ chatId: id, title: res.title }));
      }
      if (res.llm_response) {
        dispatch(addMessage({ chatId: id, message: res.llm_response }));
        setLoading(false);
        setChunks(""); // Reset chunks khi nhận phản hồi hoàn chỉnh
      }
      if (res.data_stream) {
        setChunks((prevChunks) => prevChunks + res.data_stream); // Append chunks
      }
    };

    newWs.onerror = (error) => {
      console.error("WebSocket error:", error);
      // You can add a retry mechanism here
    };

    newWs.onclose = () => console.log("WebSocket closed");

    return () => {
      newWs.close(); // Đóng WebSocket khi unmount
    };
  }, [id, token, dispatch]);

  // Hàm gửi tin nhắn qua WebSocket
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

      {/* ChatPrompt chiếm 20% chiều cao còn lại */}
      {<div className="flex-shrink-0" style={{ flex: "0 0 20%" }}>
        <ChatPrompt chatId={id} onSendMessage={sendMessage} loading={loading} />
      </div>}
    </div>
  );
};

export default ChatPage;
