import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import axios from '@/utils/axios';
import { addChat } from '@/redux/slices/chat';
import { Pencil2Icon, StackIcon } from '@radix-ui/react-icons';
import './NewChat.css'; // Import file CSS riêng
import { RootState } from '@/redux/store';

const NewChat = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { token } = useSelector((state: RootState) => state.auth);

    const createNewChat = async () => {
        try {
            const response = await axios.post('/chats/', {}, {
                headers: {
                    Authorization: `JWT ${token}`,
                },
            });
            const newChat = response.data;
            dispatch(addChat(newChat));
            router.push(`/chat/${newChat.id}`);
        } catch (error) {
            console.error('Error creating new chat:', error);
        }
    };

    return (
        <div className="new-chat-container" onClick={createNewChat}>
            <div className="new-chat-button">
                <div className="new-chat-content">
                    <StackIcon className="icon" />
                    <h1>New chat</h1>
                </div>
                <Pencil2Icon className="icon small-icon" />
            </div>
        </div>
    );
};

export default NewChat;
