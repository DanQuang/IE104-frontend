import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./LoginPage.css"; // Import the CSS file
import animationData from "../../../assets/chatbot.json"; // Import the animation data
import Lottie from "lottie-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Để lưu lỗi
  const [isLoading, setIsLoading] = useState(false); // Trạng thái loading

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(""); // Reset lỗi trước khi gửi yêu cầu

    try {
      const response = await fetch("https://api.example.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const token = data.token;
        // Lưu token vào localStorage hoặc sessionStorage
        if (rememberMe) {
          localStorage.setItem("authToken", token);
        } else {
          sessionStorage.setItem("authToken", token);
        }

        // Điều hướng đến trang dashboard
        navigate("/dashboard");
      } else {
        // Hiển thị lỗi từ máy chủ (nếu có)
        setErrorMessage(data.message || "Invalid email or password.");
      }
    } catch (error) {
      // Xử lý lỗi mạng hoặc lỗi không mong muốn
      setErrorMessage("An error occurred. Please try again.");
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
          <h2 className="login-heading">Login</h2>
        </div>
        <p className="login-subheading">
          How do I get started with Legal Chatbot?
        </p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <span
              className="show-password"
              onClick="togglePasswordVisibility()"
            >
              👁️
            </span>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
          {/* Hiển thị lỗi */}
          <div className="remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <span>Remember me</span>
          </div>
          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <div className="forgot-password">
            <Link to="/auth/forgot-password">Forgot Password?</Link>
          </div>
          <div className="register-link">
            <p>
              Don't have an account? <Link to="/auth/register">Register</Link>
            </p>
          </div>
          {/* Thêm liên kết "Back to Home" */}
          <div className="back-to-home">
            <Link to="/">← Back to Home</Link>
          </div>
        </form>
      </div>
      <div className="login-image-container">
        <img src="/src/assets/mock-trial.webp" alt="Login Illustration" />
        <div className="login-image-text">
          <p>
            Build your team and improve yourself with the{" "}
            <span>Legal Chatbot</span> ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
