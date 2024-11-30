import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../../../../component/ui/avatar';
import { useDispatch, useSelector } from 'react-redux';
import { toggleChatSideBar } from '@/redux/slices/app';
import NewChat from '../chat/newchat';
import ChatRow from '../Chat/ChatRow';
import axios from '@/utils/axios';
import { UpdateIcon } from '@radix-ui/react-icons';
import { setChats } from '@/redux/slices/chat';

const Sidebar = () => {
    const chatsidebar = useSelector((state) => state.app.chatsidebar);
    const { user, token } = useSelector((state) => state.auth);
    const { chats } = useSelector((state) => state.chat);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    const getChats = async () => {
        try {
            const response = await axios.get('/chats/', {
                headers: {
                    Authorization: `JWT ${token}`,
                },
            });
            setLoading(false);
            dispatch(setChats(response.data));
        } catch (error) {
            console.error('Error fetching chats:', error);
        }
    };

    useEffect(() => {
        getChats();
    }, []);

    return (
        <>
            <div className="sidebar">
                <div className="sidebar-content">
                    <div className="chats">
                        <NewChat />
                        {loading ? (
                            <div className="loading">
                                <UpdateIcon className="spin" />
                            </div>
                        ) : (
                            chats.map((chat) => (
                                <ChatRow key={chat.id} id={chat.id} title={chat.title} />
                            ))
                        )}
                    </div>

                    <div className="user-info" onClick={() => {}}>
                        <Avatar className="avatar">
                            {user ? <AvatarImage src={user.profileImage} /> : null}
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        {user ? <p>{user.full_name}</p> : null}
                    </div>
                </div>
            </div>

            {chatsidebar.open && (
                <div className="mobile-sidebar">
                    <div className="mobile-sidebar-overlay">
                        <div className="mobile-sidebar-content">
                            <button
                                onClick={() => dispatch(toggleChatSideBar())}
                                className="close-button"
                            >
                                <svg
                                    className="close-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <div className="chats">
                                <NewChat />
                                {chats.map((chat) => (
                                    <ChatRow key={chat.id} id={chat.id} title={chat.title} />
                                ))}
                            </div>

                            <div className="user-info">
                                <Avatar className="avatar">
                                    {user ? <AvatarImage src={user.profileImage} /> : null}
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                {user ? <p>{user.full_name}</p> : null}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Sidebar;
