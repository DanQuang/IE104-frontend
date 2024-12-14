import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import './ProfilePage.css';
import avt from '../../../assets/quan.jpg'; // Import avatar from assets

const ProfilePage = () => {
  const { token } = useSelector((state) => state.auth); // Use useSelector outside useEffect
  const [user, setUser] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for errors

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!token) {
          setError('No access token found. Please log in again.');
          setLoading(false);
          return;
        }

        // Make the request to the backend API to get user profile data
        const response = await fetch('http://localhost:8000/api/profile/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${token}`, // Attach the token in the Authorization header
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Error ${response.status}: ${errorData.detail || response.statusText}`);
        }

        const data = await response.json(); // Parse the response data
        setUser(data); // Set the user data in state
      } catch (err) {
        setError(err.message); // If an error occurs, set the error message
      } finally {
        setLoading(false); // Set loading to false after the API call finishes
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]); // Run effect only when token changes

  // Show loading spinner if data is still being fetched
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div> {/* Custom spinner */}
        <p>Loading your profile...</p>
      </div>
    );
  }

  // Show error message if there's an error
  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  // Show message if no user data is found
  if (!user) {
    return <div>No user data found</div>;
  }

  // Display the user profile if everything is loaded
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="avatar">
          <img src={avt} alt="User Avatar" onError={(e) => (e.target.src = avt)} />
        </div>
        <div className="profile-info">
          <h1>{user.full_name}</h1>
          <p className="email">{user.email}</p>
          <p className="tier">
            Tier hiện tại: <span>{user.tier?.current_tier || 'N/A'}</span>
          </p>
        </div>
      </div>

      <div className="profile-details">
        <div className="detail-item">
          <h3>Thông tin tài khoản</h3>
          <ul>
            <li>
              <strong>Email:</strong> {user.email}
            </li>
            <li>
              <strong>Tên tài khoản:</strong> {user.credit_account?.account_name || 'Chưa có thông tin'}
            </li>
            <li>
              <strong>Số tài khoản:</strong> {user.credit_account?.account_number || 'Chưa có thông tin'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
