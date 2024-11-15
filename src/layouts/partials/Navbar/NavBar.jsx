import { useState, useEffect } from "react";
import {
  ExclamationCircleOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
  WechatOutlined,
  MenuOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import { Button, Menu, Drawer, Avatar, Dropdown } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
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
        // Giải mã token để lấy userId
        const decoded = jwtDecode(storedToken);
        const userId = decoded.id;
        fetchUserData(userId);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Token decoding error:", error);
      }
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        console.error("AccessToken not found");
        return;
      }
  
      const response = await fetch(`http://localhost:8080/api/v1/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (response.ok) {
        const userData = await response.json();
        setUser({ name: userData.email });
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const items = [
    {
      label: (
        <Button
          type="link"
          icon={<HomeOutlined />}
          className={`navbar-menu-item ${current === "home" ? "active" : ""}`}
        >
          Trang chủ
        </Button>
      ),
      key: "home",
    },
        {
          label: (
            <Button
              type="link"
              icon={<ExclamationCircleOutlined />}
              className={`navbar-menu-item ${current === "feature" ? "active" : ""}`}
            >
              Feature
            </Button>
          ),
          key: "feature",
        },
    {
      label: (
        <Button
          type="link"
          icon={<WechatOutlined />}
          className={`navbar-menu-item ${current === "chat" ? "active" : ""}`}
        >
          Trò chuyện
        </Button>
      ),
      key: "chat",
    },
    {
      label: (
        <Button
          type="link"
          icon={<MoneyCollectOutlined />}
          className={`navbar-menu-item ${current === "pricing" ? "active" : ""}`}
        >
          Giá tiền
        </Button>
      ),
      key: "pricing",
    },
    {
      label: (
        <Button
          type="link"
          icon={<QuestionCircleOutlined />}
          className={`navbar-menu-item ${current === "faqs" ? "active" : ""}`}
        >
          FAQs
        </Button>
      ),
      key: "faqs",
    },
    {
      label: (
        <Button
          type="link"
          icon={<ExclamationCircleOutlined />}
          className={`navbar-menu-item ${current === "issue" ? "active" : ""}`}
        >
          Báo lỗi/Góp ý
        </Button>
      ),
      key: "issue",
    },
  ];

  const onClick = (e) => {
    setCurrent(e.key);
    navigate(`/${e.key}`);
    setDrawerVisible(false);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    setUser({ name: "" });
    navigate("/auth/login");
  };

  return (
    <header className="navbar-container">
      <div className="navbar-header">
        <Link
          to="/"
          className="navbar-title"
        >
          Quan Bede
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

        <div className="navbar-user">
          {isLoggedIn ? (
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item onClick={() => navigate("/profile")}>
                    Profile
                  </Menu.Item>
                  <Menu.Item onClick={handleLogout}>
                    Logout
                  </Menu.Item>
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
              Đăng nhập
            </Button>
          )}

          <div className="navbar-mobile-menu-button">
            <Button icon={<MenuOutlined />} onClick={showDrawer} />
          </div>
        </div>
      </div>

      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        visible={drawerVisible}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="vertical"
          items={items}
        />
      </Drawer>
    </header>
  );
};

export default NavBar;
