import React from 'react';
import { Cpu } from "@phosphor-icons/react";
import { useSelector } from 'react-redux';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { marked } from 'marked';
import hljs from 'highlight.js';
import './Message.css'; // Import CSS riêng
import { RootState } from '@/redux/store';

const Message = ({ messages }) => {
    const { user } = useSelector((state: RootState) => state.auth);

    const renderer = new marked.Renderer();
    renderer.code = (code, language) => {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return `<pre><code class="language-${validLanguage}">${hljs.highlight(validLanguage, code).value}</code></pre>`;
    };

    marked.setOptions({ renderer });

    return (
        <div className="chat-container">
            {messages.map((message, index) => {
                console.log(message.text)
                // Giả định rằng các tin nhắn với id chẵn là của người dùng, còn lẻ là ChatBot.
                const isUserMessage = index % 2 === 0;  // Chẵn: người dùng, Lẻ: ChatBot

                // Chuyển đổi nội dung Markdown cho ChatBot (nếu cần thiết)
                const html = isUserMessage ? message.text : marked(message.text);

                return (
                    <div key={message.id} className={`message-container ${isUserMessage ? 'user-message' : 'chatbot-message'}`}>
                        <div className="message-row">
                            <div className="avatar-container">
                                {isUserMessage ? (
                                    // Hiển thị avatar của người dùng nếu tin nhắn là của người dùng
                                    <Avatar className="avatar">
                                        {user && <AvatarImage src={user.profileImage} />}
                                        <AvatarFallback>{user ? user.full_name.charAt(0) : 'U'}</AvatarFallback>
                                    </Avatar>
                                ) : (
                                    // Hiển thị icon ChatBot nếu tin nhắn là của ChatBot
                                    <Cpu size={32} />
                                )}
                            </div>

                            <div className="message-content">
                                <h2 className="sender-name">
                                    {isUserMessage ? user?.full_name : 'ChatBot'}
                                </h2>
                                <div
                                    className="message-text"
                                    dangerouslySetInnerHTML={{ __html: html }}
                                />
                            </div>
                        </div>
                        <hr className="separator" />
                    </div>
                );
            })}
        </div>
    );
};

export default Message;
