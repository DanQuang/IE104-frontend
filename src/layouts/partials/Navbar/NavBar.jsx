import { useState, useEffect } from "react";
import {
  HomeOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Button, Menu, Drawer, Avatar, Dropdown } from "antd";
import { Link, useNavigate } from "react-router-dom";
import './navbar.css';  // Import file CSS mới

const NavBar = () => {
  const [current, setCurrent] = useState("home");
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      try {
        // Giả sử có hàm giải mã token để lấy user
        const decoded = jwtDecode(storedToken);
        fetchUserData(decoded.id);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Token decoding error:", error);
      }
    }
  }, []);

  const items = [
    {
      label: (
        <Link to="/" className={`navbar-menu-item ${current === "home" ? "active" : ""}`}>
          Home
        </Link>
      ),
      key: "home",
    },
    {
      label: (
        <Link to="/Feature" className={`navbar-menu-item ${current === "Feature" ? "active" : ""}`}>
          Feature
        </Link>
      ),
      key: "Feature",
    },
    {
      label: (
        <Link to="/legal-assistant" className={`navbar-menu-item ${current === "legal-assistant" ? "active" : ""}`}>
          Legal Assistant
        </Link>
      ),
      key: "legal-assistant",
    },
    {
      label: (
        <Link to="/pricing" className={`navbar-menu-item ${current === "pricing" ? "active" : ""}`}>
          Pricing
        </Link>
      ),
      key: "pricing",
    },
    {
      label: (
        <Link to="/donation" className={`navbar-menu-item ${current === "donation" ? "active" : ""}`}>
          Donation
        </Link>
      ),
      key: "donation",
    },
    {
      label: (
        <Link to="/blogs" className={`navbar-menu-item ${current === "blogs" ? "active" : ""}`}>
          Blogs
        </Link>
      ),
      key: "blogs",
    },
    {
      label: (
        <Link to="/about" className={`navbar-menu-item ${current === "about" ? "active" : ""}`}>
          About
        </Link>
      ),
      key: "about",
    },
    {
      label: (
        <Link to="/contact" className={`navbar-menu-item ${current === "contact" ? "active" : ""}`}>
          Contact
        </Link>
      ),
      key: "contact",
    },
  ];

  const onClick = (e) => {
    setCurrent(e.key);
    navigate(`/${e.key}`);
    setDrawerVisible(false);
  };

  return (
    <header className="navbar-container">
      <div className="navbar-header">
        <Link to="/" className="navbar-logo">
          <img src="/path/to/logo.png" alt="Logo" />
        </Link>

        <div className="navbar-menu">
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            className="navbar-menu"
          />
        </div>

        <div className="navbar-actions">
          {isLoggedIn ? (
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item onClick={() => navigate("/profile")}>Profile</Menu.Item>
                  <Menu.Item onClick={() => {
                    localStorage.removeItem("accessToken");
                    setIsLoggedIn(false);
                    setUser({ name: "" });
                    navigate("/auth/login");
                  }}>Logout</Menu.Item>
                </Menu>
              }
            >
              <div className="navbar-user">
                <Avatar src={user.avatar} />
                <span>{user.name}</span>
              </div>
            </Dropdown>
          ) : (
            <Button
              type="primary"
              className="navbar-login-button"
              onClick={() => navigate("/auth/login")}
            >
              Start Consulting
            </Button>
          )}

          <Button icon={<MenuOutlined />} onClick={() => setDrawerVisible(true)} className="navbar-mobile-menu-button" />
        </div>
      </div>

      <Drawer
        title="Menu"
        placement="left"
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
      >
        <Menu onClick={onClick} selectedKeys={[current]} mode="vertical" items={items} />
      </Drawer>
    </header>
  );
};

export default NavBar;
