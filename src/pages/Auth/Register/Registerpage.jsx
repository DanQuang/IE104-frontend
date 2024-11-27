import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./RegisterPage.css"; // Import file CSS
import animationData from "../../../assets/chatbot.json"; // Import the animation data
import Lottie from "lottie-react";
import "./Registerpage.css";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
  const [isLoading, setIsLoading] = useState(false); 

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    // Kiểm tra xác nhận mật khẩu
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("https://api.example.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Điều hướng đến trang đăng nhập sau khi đăng ký thành công
        navigate("/login");
      } else {
        // Hiển thị lỗi từ máy chủ
        setErrorMessage(data.message || "An error occurred during registration.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-form-container">
        <div className="register-form-logo">
          <Lottie
            animationData={animationData}
            loop={true}
            alt="Register Logo"
            className="logo"
          />
          <h2 className="register-heading">Register</h2>
        </div>
        <p className="register-subheading">Join the Legal Chatbot community today!</p>

        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label htmlFor="name">Full Name*</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

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

          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password*</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>} 

          <button type="submit" className="register-button" disabled={isLoading}>
            {isLoading ? "Registering..." : "Register"}
          </button>

          <div className="login-link">
            <p>
              Already have an account? <Link to="/auth/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
      <div className="register-image-container">
        <img src="/src/assets/legal-advice.webp" alt="Register Illustration" />
        <div className="register-image-text">
          <p>
            Unlock the power of <span>Legal Chatbot</span> today! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
