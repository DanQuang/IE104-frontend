import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import './navbar.css'; 

import animationData from "../../../assets/chatbot.json";
import Lottie from "lottie-react";

const NavBar = () => {
  const [current, setCurrent] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: "", avatar: "" });
  const [hasScrolled, setHasScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Theo dõi đường dẫn hiện tại

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      try {
        const decoded = jwtDecode(storedToken);
        fetchUserData(decoded.id); // Giả sử bạn có hàm fetchUserData
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Token decoding error:", error);
      }
    }
  }, []);

  useEffect(() => {
    const path = location.pathname.replace("/", "");
    setCurrent(path || "home"); 
  }, [location]);

  const handleNavigation = (key) => {
    setCurrent(key);
    navigate(`/${key}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    setUser({ name: "", avatar: "" });
    navigate("/auth/login");
  };

  return (
    <header className={`navbar-container ${hasScrolled ? "scrolled" : ""}`}>
      <div className="navbar-header">
        <Link to="/" className="navbar-logo">
          <Lottie 
            animationData={animationData} 
            loop={true} 
            alt="Legal Chatbot Logo" 
            className="logo" 
          />
        </Link>
        <nav className="navbar-menu">
          {[
            { key: "home", label: "Home" },
            { key: "feature", label: "Feature" },
            { key: "legal-assistant", label: "Legal Assistant" },
            { key: "pricing", label: "Pricing" },
            { key: "donation", label: "Donation" },
            { key: "blogs", label: "Blogs" },
            { key: "about", label: "About" },
            { key: "contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.key}
              to={`/${item.key}`}
              className={`navbar-menu-item ${current === item.key ? "active" : ""}`}
              onClick={() => handleNavigation(item.key)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="navbar-actions">
          {isLoggedIn ? (
            <div className="navbar-user-dropdown">
              <div className="navbar-user" onClick={() => navigate("/profile")}>
                <img src={user.avatar} alt="User Avatar" className="user-avatar" />
                <span>{user.name}</span>
              </div>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <button 
              className="navbar-login-button" 
              onClick={() => navigate("/auth/login")}
            >
              Start Consulting
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
