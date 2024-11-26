import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { ReloadIcon } from '@radix-ui/react-icons';
import { toast } from 'react-toastify';

import axios from '../../../utils/axios';  // Giả sử bạn đã cấu hình axios


import './ChatAreaLayout.css'; // Import custom CSS

const ChatAreaLayout = ({ children }) => {
    const { isLoggedIn, token } = useSelector((state) => state.auth);
    const navigate = useNavigate();  // Sử dụng useNavigate từ react-router-dom
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    // Kiểm tra nếu chưa đăng nhập thì chuyển hướng đến trang login
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/auth/login');  // Chuyển hướng sử dụng react-router-dom
            return;
        }
    }, [isLoggedIn, navigate]);

    // Lấy thông tin người dùng khi đã đăng nhập
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/auth/users/me/', {
                    headers: {
                        Authorization: `JWT ${token}`,
                    },
                });
                dispatch(setUserInfo({
                    user: {
                        ...response.data,
                        profileImage: `https://ui-avatars.com/api/?name=${response.data.full_name}`,
                    },
                }));
                setLoading(false);
            } catch (error) {
                dispatch(signOut());
                toast.error('Unauthorized access detected. Please log in again', {
                    position: 'top-center',
                });
            }
        };

        if (isLoggedIn && token) {
            fetchData();
        }
    }, [dispatch, isLoggedIn, token]);

    // Nếu đang tải thì hiển thị màn hình loading
    if (loading) {
        return (
            <div className="loading-container">
                <ReloadIcon className="loading-icon" />
                <p className="text-xl">Loading...</p>
            </div>
        );
    }

    return (
        <div className="chat-container">
            <Sidebar className="sidebar" />
            <div className="main-content">
                <Header className="header" />
                {children}
            </div>
        </div>
    );
};

export default ChatAreaLayout;
