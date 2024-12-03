import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/slices/auth";
import "./LoginPage.css";
import animationData from "../../../assets/chatbot.json";
import Lottie from "lottie-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    setErrorMessage("");

    try {
      const response = await loginAPI(email, password); // Call the backend API
      const token = response.access;

      // Store token in Redux and cookie
      dispatch(logIn({ token }));
      Cookies.set("authToken", token, { expires: 7, secure: true }); // Cookie sẽ tồn tại trong 7 ngày

      navigate("/chat/1"); // Chuyển hướng đến trang chat
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
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
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
