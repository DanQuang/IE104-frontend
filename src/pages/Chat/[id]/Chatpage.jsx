import React, { useEffect, useState } from "react";
import ChatArea from "../LayoutChat/chatarea/Chatarea";
import ChatPrompt from "../LayoutChat/Chatprompt/Chatpromt";
import { useDispatch, useSelector } from "react-redux";
import {
  addMessage,
  setChatTitleFromMessage,
  setMessages,
} from "../../../redux/slices/chat";
import axios from "axios"; 
import { useParams } from "react-router-dom";

import "./ChatPage.css";

const ChatPage = () => {
  const [ws, setWs] = useState(null);
  const { id } = useParams(); // Lấy ID từ URL
  const token = useSelector((state) => state.auth?.token || ""); // Lấy token từ Redux
  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn || false); // Kiểm tra trạng thái đăng nhập
  const selectedMode = useSelector((state) => state.chat?.selectedMode || "");
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false); // Trạng thái loading
  const [chunks, setChunks] = useState(""); // Dữ liệu nhận từ WebSocket
  const [error, setError] = useState(null); // Trạng thái lỗi

  // Log trạng thái Redux và các giá trị quan trọng
  useEffect(() => {
    console.log("Redux state:", { token, isLoggedIn });
    console.log("Chat ID:", id);
  }, [token, isLoggedIn, id]);

  // Fetch messages khi ID thay đổi
  useEffect(() => {
    if (!id || !token) {
      console.log("Không có ID hoặc token, không thể fetch messages.");
      setError("Bạn cần đăng nhập hoặc chọn cuộc trò chuyện.");
      return;
    }

    const fetchMessages = async () => {
      try {
        const response = await axios.get(`/chat/${id}/messages/`, {
          headers: {
            Authorization: `JWT ${token}`,
          },
        });
        console.log("Fetched messages:", response.data);
        dispatch(setMessages(response.data));
        setError(null); // Xóa lỗi nếu fetch thành công
      } catch (err) {
        console.error("Error fetching messages:", err);
        setError("Không thể tải tin nhắn. Vui lòng thử lại.");
      }
    };

    fetchMessages();
  }, [id, token, dispatch]);

  // Thiết lập WebSocket
  useEffect(() => {
    if (!id || !token) {
      console.log("Không thể thiết lập WebSocket. ID hoặc token không tồn tại.");
      return;
    }

    const newWs = new WebSocket(
      `ws://localhost:8000/ws/chat/${id}/?token=${token}`
    );
    setWs(newWs);

    console.log("WebSocket kết nối:", newWs);

    newWs.onopen = () => console.log("WebSocket đã mở kết nối.");
    newWs.onclose = () => {
      console.log("WebSocket đã đóng kết nối.");
      setError("Mất kết nối WebSocket. Vui lòng kiểm tra kết nối mạng.");
    };
    newWs.onerror = (error) => {
      console.error("WebSocket lỗi:", error);
      setError("Đã xảy ra lỗi WebSocket.");
    };

    return () => {
      console.log("Đóng WebSocket.");
      newWs.close();
    };
  }, [id, token]);

  // Xử lý tin nhắn từ WebSocket
  useEffect(() => {
    if (!ws) {
      console.log("WebSocket chưa được thiết lập.");
      return;
    }

    ws.onmessage = (event) => {
      const res = JSON.parse(event.data);
      console.log("Dữ liệu từ WebSocket:", res);

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

  // Gửi tin nhắn qua WebSocket
  const sendMessage = (message) => {
    if (ws?.readyState === WebSocket.OPEN) {
      console.log("Gửi tin nhắn:", { message, type: selectedMode });
      setLoading(true);
      ws.send(
        JSON.stringify({
          message,
          type: selectedMode,
        })
      );
    } else {
      console.error("WebSocket không sẵn sàng để gửi tin nhắn.");
      setError("Không thể gửi tin nhắn. WebSocket chưa sẵn sàng.");
    }
  };

  if (!id) {
    return (
      <div className="no-chat-page">
        <h1>Không tìm thấy cuộc trò chuyện</h1>
        <p>Vui lòng chọn hoặc tạo một cuộc trò chuyện mới.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-page">
        <h1>Lỗi</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="chat-page">
      <div>
        <p> Đăng nhập thành công</p>
      </div>
      {/* <ChatArea chatId={id} chunks={chunks} />
      <ChatPrompt chatId={id} onSendMessage={sendMessage} loading={loading} /> */}
    </div>
  );
};

export default ChatPage;
