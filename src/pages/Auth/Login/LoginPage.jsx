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

  useEffect(() => {
    // Fetch dữ liệu người dùng từ backend Django
    fetch('http://localhost:8000/api/auth/profile/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();  // Chuyển response thành JSON
      })
      .then((data) => {
        setUser(data);  // Lưu dữ liệu người dùng vào state
        setLoading(false);  // Cập nhật trạng thái loading
      })
      .catch((error) => {
        console.error('There was an error fetching the user data!', error);
        setLoading(false);
      });
  }, []);  // Chạy một lần khi component mount

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(""); 

    try {
      const response = await mockLoginAPI(email, password); 
      const token = response.token;

      // Lưu token vào Redux store và cookie
      dispatch(logIn({ token }));
      Cookies.set("authToken", token, { expires: 7, secure: true }); 

      navigate("/chat"); 
    } catch (error) {
      // Handle login failure
      setErrorMessage(error.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="avatar">
          <img src="https://via.placeholder.com/150" alt="User Avatar" />
        </div>
        <div className="profile-info">
          <h1>{user.full_name}</h1>
          <p className="email">{user.email}</p>
          <p className="tier">Cấp độ hiện tại: <span>{user.current_tier}</span></p>
        </div>
      </div>

      <div className="profile-details">
        <div className="detail-item">
          <h3>Thông tin tài khoản</h3>
          <ul>
            <li><strong>Email:</strong> {user.email}</li>
            <li><strong>Tên tài khoản:</strong> {user.account_name}</li>
            <li><strong>Số tài khoản:</strong> {user.account_number}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
