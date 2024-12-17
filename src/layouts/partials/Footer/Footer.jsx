import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons"; // Ensure you've installed the icons
import animationData from "../../../assets/chatbot.json"; // Import the animation data
import Lottie from "lottie-react";
import "./Footer.css"; // Import your custom CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* First Part: Logo, Resources, and Primary Pages */}
        <div className="footer-top">
          {/* Logo Section */}
          <div className="footer-logo">
            <div className="logo-content">
              <Lottie
                animationData={animationData} // Load the animation data
                loop={true} // Loop the animation
                alt="Legal Chatbot Logo"
                className="logo" // Increased logo size to w-32 and h-32
              />
              <Link to="/" className="footer-link">
                Legal Chatbot
              </Link>
            </div>
          </div>

          {/* Resources and Primary Pages Sections */}
          <div className="footer-links">
            {/* Resources Section */}
            <div className="footer-section">
              <h3 className="footer-heading">Tài nguyên</h3>
              <ul className="footer-list">
                <li>
                  <Link to="/home" className="footer-item">
                    Trang Chủ
                  </Link>
                </li>
                <li>
                  <Link to="/feature" className="footer-item">
                    Dịch Vụ
                  </Link>
                </li>
                <li>
                  <Link to="/legal-assistant" className="footer-item">
                    Trò Chuyện
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="footer-item">
                    Bảng Giá
                  </Link>
                </li>
                <li>
                  <Link to="/donation" className="footer-item">
                    Ủng Hộ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Primary Pages Section */}
            <div className="footer-section">
              <h3 className="footer-heading">Trang chính</h3>
              <ul className="footer-list">
                <li>
                  <Link to="/about" className="footer-item">
                    Về Chúng Tôi
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-item">
                    Liên Hệ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Second Part: Copyright and Social Media */}
        <div className="footer-bottom">
          {/* Copyright Section */}
          <p className="footer-copyright">
            © {new Date().getFullYear()} Legal Chatbot. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=100047983584357"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FacebookOutlined className="social-icon-img" />
            </a>
            <a
              href="https://github.com/qhnhynmm"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <GithubOutlined className="social-icon-img" />
            </a>
            <a
              href="https://www.instagram.com/bosshuyman/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <InstagramOutlined className="social-icon-img" />
            </a>
            <a
              href="https://www.linkedin.com/in/huy-phạm-quang-b891a5278"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <LinkedinOutlined className="social-icon-img" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
