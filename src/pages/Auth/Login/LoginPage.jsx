import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/slices/auth";
import "./LoginPage.css";
import animationData from "../../../assets/chatbot.json";
import Lottie from "lottie-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Actual API call for login using fetch
  const loginAPI = async (email, password) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/auth/jwt/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("An error occurred. Please try again.");
      }

      const data = await response.json();
      return data; // Assuming the response contains the token
    } catch (error) {
      throw new Error(error.message || "An error occurred. Please try again.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await loginAPI(email, password); // Call the backend API
      const token = response.access;
      dispatch(logIn({ token }));
      Cookies.set("authToken", token, { expires: 7, secure: true });

      // Show success toast notification for 3 seconds
      toast.success("Login successful! Welcome back!", {
        autoClose: 5000, // 3 seconds
        // position: toast.POSITION.BOTTOM_CENTER,
      });

      navigate("/chat");
    } catch (error) {
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

      {/* ToastContainer for notifications */}
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
