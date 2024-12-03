import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from "js-cookie"; // Import thư viện js-cookie
import { useDispatch } from "react-redux"; // Import dispatch để gửi action đến Redux
import { logIn } from "../../../redux/slices/auth"; // Import action logIn để cập nhật Redux store
import "./LoginPage.css";
import animationData from "../../../assets/chatbot.json"; // Import animation data
import Lottie from "lottie-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Error state
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Khai báo dispatch

  // Mock API call for login
  const mockLoginAPI = async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "user@example.com" && password === "password123") {
          resolve({ token: "mock-jwt-token-1234567890" }); // Giả lập token
        } else {
          reject({ message: "Invalid email or password." });
        }
      }, 1000); // Giả lập độ trễ
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(""); // Clear previous error

    try {
      const response = await mockLoginAPI(email, password); // Call mock API
      const token = response.token;

      // Lưu token vào Redux store và cookie
      dispatch(logIn({ token }));
      Cookies.set("authToken", token, { expires: 7, secure: true }); // Cookie sẽ tồn tại trong 7 ngày

      navigate("/chat/1"); // Chuyển hướng đến trang chat
    } catch (error) {
      // Handle login failure
      setErrorMessage(error.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <div className="login-form-logo">
          <Lottie
            animationData={animationData}
            loop={true}
            alt="Legal Chatbot Logo"
            className="logo"
          />
          <h2 className="login-heading">Đăng nhập</h2>
        </div>
        <p className="login-subheading">
          Làm sao để bắt đầu với Legal Chatbot?
        </p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập Email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Mật khẩu*</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Đăng nhập..." : "Đăng nhập"}
          </button>
          <div className="forgot-password">
            <Link to="/auth/forgot-password">Quên mật khẩu?</Link>
          </div>
          <div className="register-link">
            <p>
              Không có tài khoản? <Link to="/auth/register">Đăng ký</Link>
            </p>
          </div>
          <div className="back-to-home">
            <Link to="/">← Trở về trang chủ</Link>
          </div>
        </form>
      </div>
      <div className="login-image-container">
        <img src="/src/assets/mock-trial.webp" alt="Login Illustration" />
        <div className="login-image-text">
          <p>
            Cùng nâng cấp bản thân và đi tìm sự thật với{" "}
            <span>Legal Chatbot</span> ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
