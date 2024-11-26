import React, { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "./common/theme-provider";  // Giả sử bạn có component này
import { ReduxProvider } from "../redux/provider";  // Giả sử bạn có provider Redux của bạn
import "./globals.css"; // CSS toàn cục

const RootLayout = ({ children }) => {
  // Cập nhật title và description khi ứng dụng được render
  useEffect(() => {
    document.title = "ChatDroid | Craft Your Conversations";
    // Nếu cần set description, bạn có thể thêm nó vào meta tag:
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", "Experience the future of chatbots with our platform, featuring sleek styling, backed by Django and Langchain.");
    }
  }, []);

  return (
    <div className={GeistSans.className}> {/* Áp dụng font GeistSans cho toàn bộ body */}
      <ReduxProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastContainer />
          <div className="app-container">
            {children}  {/* Chứa nội dung trang */}
          </div>
        </ThemeProvider>
      </ReduxProvider>
    </div>
  );
};

export default RootLayout;
