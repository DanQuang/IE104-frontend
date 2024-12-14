import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "react-modal"; // Import React Modal
import "./RegisterPage.css"; // Import file CSS
import animationData from "../../../assets/chatbot.json"; // Import the animation data
import Lottie from "lottie-react";
import "./Registerpage.css";

Modal.setAppElement("#root"); // Thiết lập vùng gốc để tránh lỗi truy cập ngoài modal

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
  const [isLoading, setIsLoading] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false); // State cho modal

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Mật khẩu không chính xác.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: name,
          email: email,
          password: password,
          re_password: confirmPassword,
        }),
        mode: "cors",
      });

      const data = await response.json();
      if (response.ok) {
        // Mở modal thông báo đăng ký thành công
        setIsModalOpen(true);
      } else {
        setErrorMessage(data.message || "Đã xảy ra lỗi trong quá trình đăng ký.");
      }
    } catch (error) {
      setErrorMessage("Đã xảy ra lỗi. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/auth/login"); // Điều hướng đến trang đăng nhập sau khi đóng modal
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
          <h2 className="register-heading">Đăng ký</h2>
        </div>
        <p className="register-subheading">Gia nhập cộng đồng Legal Chatbot ngay hôm nay!</p>

        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label htmlFor="name">Họ và tên*</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập họ và tên"
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
              placeholder="Nhập email"
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

          <div className="input-group">
            <label htmlFor="confirm-password">Xác nhận mật khẩu*</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Xác nhận mật khẩu"
              required
            />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>} 

          <button type="submit" className="register-button" disabled={isLoading}>
            {isLoading ? "Đăng ký..." : "Đăng ký"}
          </button>

          <div className="login-link">
            <p>
              Đã có tài khoản? <Link to="/auth/login">Đăng nhập</Link>
            </p>
          </div>
        </form>
      </div>
      <div className="register-image-container">
        <img src="/src/assets/legal-advice.webp" alt="Register Illustration" />
        <div className="register-image-text">
          <p>
            Khai phá sức mạnh của <span>Legal Chatbot</span> ngay hôm nay! 🚀
          </p>
        </div>
      </div>

      {/* Modal thông báo đăng ký thành công */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Success Modal"
        className="success-modal"
        overlayClassName="success-modal-overlay"
      >
        <h2>Đăng ký thành công!</h2>
        <p>Hãy đăng nhập ngay để khám phá!</p>
        <button onClick={closeModal} className="modal-button">Tiếp tục</button>
      </Modal>
    </div>
  );
};

export default RegisterPage;
