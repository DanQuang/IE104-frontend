'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { StackIcon, Pencil2Icon } from '@radix-ui/react-icons';

import { addChat } from '@/redux/slices/chat';
import axios from '@/utils/axios';

import './NewChat.css'; // Tệp CSS tách riêng

const NewChat = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth); // Lấy token từ Redux

    // Hàm xử lý tạo mới cuộc trò chuyện
    const createNewChat = async () => {
        try {
            const response = await axios.post(
                '/chats/',
                {},
                {
                    headers: {
                        Authorization: `JWT ${token}`,
                    },
                }
            );
            const newChat = response.data;

            // Cập nhật Redux và chuyển hướng
            dispatch(addChat(newChat));
            router.push(`/chat/${newChat.id}`);
        } catch (error) {
            console.error('Error creating new chat:', error);
        }
    };

    return (
        <div className="new-chat-container" onClick={createNewChat}>
            <div className="new-chat-button">
                <div className="new-chat-icon">
                    <StackIcon className="icon" />
                    <h1 className="new-chat-title">New chat</h1>
                </div>
                <Pencil2Icon className="icon" />
            </div>
        </div>
    );
};

export default NewChat;
