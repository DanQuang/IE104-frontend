import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";  // import js-cookie
import { AvatarIcon } from "@radix-ui/react-icons";  // import icon từ Radix UI
import animationData from "../../../assets/chatbot.json";
import Lottie from "lottie-react";
import { signOut } from "../../../redux/slices/auth";
import "./Navbar.css";

const NavBar = () => {
  const [current, setCurrent] = useState("home");
  const [hasScrolled, setHasScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false); // State để điều khiển dropdown
  const dropdownRef = useRef(null); // Tham chiếu đến dropdown
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, user } = useSelector((state) => state.auth); // Lấy thông tin user từ Redux

  const dispatch = useDispatch();

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
    const path = location.pathname.replace("/", "");
    setCurrent(path || "home");
  }, [location]);

  // Đóng dropdown khi bấm ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    if (dropdownVisible) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownVisible]);

  const handleNavigation = (key) => {
    setCurrent(key);
    navigate(`/${key}`);
  };

  const handleLogout = () => {
    Cookies.remove("authToken");
    dispatch(signOut());
    navigate("/home");
  };

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev); // Toggle dropdown
  };

  return (
    <header
      className={`navbar-container ${hasScrolled ? "scrolled" : ""} ${
        location.pathname.startsWith("/chat") ? "non-sticky" : ""
      }`}
    >
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
            { key: "home", label: "Trang chủ" },
            { key: "feature", label: "Dịch vụ" },
            { key: "chat", label: "Trò chuyện" },
            { key: "pricing", label: "Bảng giá" },
            { key: "donation", label: "Ủng hộ" },
            { key: "about", label: "Về chúng tôi" },
            { key: "contact", label: "Liên hệ" },
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
            <div className="navbar-user-dropdown" ref={dropdownRef}>
              <div className="navbar-user" onClick={toggleDropdown}>
                {/* Sử dụng icon Avatar từ Radix UI */}
                <AvatarIcon className="user-avatar" />
                <span>{user?.name || "User"}</span>
              </div>
              {dropdownVisible && (
                <div className="dropdown-menu">
                  <button className="dropdown-item" onClick={() => navigate("auth/profile")}>
                    Hồ sơ
                  </button>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className="navbar-login-button"
              onClick={() => navigate("/auth/login")}
            >
              Bắt đầu ngay
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
