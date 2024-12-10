import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import axios from '@/utils/axios';
import { addChat } from '@/redux/slices/chat';
import { Pencil2Icon, StackIcon } from '@radix-ui/react-icons';
import './NewChat.css';
import { RootState } from '@/redux/store';

const NewChat = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { token } = useSelector((state: RootState) => state.auth);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createNewChat = async () => {
        if (!token) {
            setError("Authentication required.");
            return;
        }

        setIsLoading(true);
        setError(null); // Clear previous errors

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
            setError('Failed to create new chat. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="new-chat-container"
            onClick={createNewChat}
            aria-label="Create new chat"
        >
            <div className="new-chat-button">
                <div className="new-chat-content">
                    <StackIcon className="icon" />
                    <h1>New chat</h1>
                </div>
                <Pencil2Icon className="icon small-icon" />
            </div>
            {isLoading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default NewChat;
