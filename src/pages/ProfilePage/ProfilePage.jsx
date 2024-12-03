import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import avt from "../../assets/avatar.jpg";  // Import avatar từ thư mục assets

const ProfilePage = () => {
  const [user, setUser] = useState(null);  // State để lưu dữ liệu người dùng
  const [loading, setLoading] = useState(true);  // State để kiểm tra trạng thái loading

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

  if (loading) {
    return <div className="loading-spinner"></div>;  // Hiển thị loading khi dữ liệu chưa được fetch
  }

  if (!user) {
    return <div>No user data found</div>;  // Nếu không có dữ liệu người dùng
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="avatar">
          {/* Sử dụng ảnh import */}
          <img src={avt} alt="User Avatar" />
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
