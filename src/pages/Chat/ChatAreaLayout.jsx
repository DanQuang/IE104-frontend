import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ReloadIcon } from "@radix-ui/react-icons";

import Sidebar from "./LayoutChat/Sidebar/Sidebar";
import Header from "./LayoutChat/Header/Header";
import Indexpage from "./IndexPage";
import ChatPage from "./[id]/Chatpage";

const ChatAreaLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { id } = useParams(); // Lấy id từ URL
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth/login");
      return;
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    // Lấy chiều cao của header
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;

    // Cuộn xuống bỏ qua phần header
    window.scrollTo({
      top: headerHeight,
      behavior: "smooth", // Cuộn mượt
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex h-screen w-full">
          <div className="flex-1 flex flex-col justify-center items-center gap-3">
            <ReloadIcon className="h-10 w-10 animate-spin" />
            <p className="text-2xl">Loading...</p>
          </div>
        </div>
      ) : (
        <div className="flex h-screen w-full">
          <Sidebar />
          <div className="w-full flex flex-col overflow-auto">
            {/* Header cố định */}
            <Header />
            {/* Hiển thị ChatPage nếu có id, ngược lại hiển thị IndexPage */}
            {id ? <ChatPage /> : <Indexpage />}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAreaLayout;
