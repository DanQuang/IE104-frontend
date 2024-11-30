import React from 'react';
import { Cpu } from "@phosphor-icons/react";
import { useSelector } from 'react-redux';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { marked } from 'marked';
import hljs from 'highlight.js';
import './Message.css'; // Import CSS riêng
import { RootState } from '@/redux/store';

const Message = ({ message }) => {
    const { user } = useSelector((state: RootState) => state.auth);

    const renderer = new marked.Renderer();
    renderer.code = (code, language) => {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return `<pre><code class="language-${validLanguage}">${hljs.highlight(validLanguage, code).value}</code></pre>`;
    };

    marked.setOptions({ renderer });
    const html = marked(message.content);

    return (
        <>
            {message.sender_email ? (
                <div className="message-container">
                    <div className="message-row">
                        <div className="avatar-container">
                            <Avatar className="avatar">
                                {user && <AvatarImage src={user.profileImage} />}
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="message-content">
                            <h2 className="sender-name">{user && user.full_name}</h2>
                            <p className="message-text">{message.content}</p>
                        </div>
                    </div>
                    <hr className="separator" />
                </div>
            ) : (
                <div className="message-container">
                    <div className="message-row">
                        <div className="avatar-container">
                            <Cpu size={32} />
                        </div>
                        <div className="message-content">
                            <h2 className="sender-name">ChatBot</h2>
                            <div
                                className="message-text"
                                dangerouslySetInnerHTML={{ __html: html }}
                            />
                        </div>
                    </div>
                    <hr className="separator" />
                </div>
            )}
        </>
    );
};

export default Message;
