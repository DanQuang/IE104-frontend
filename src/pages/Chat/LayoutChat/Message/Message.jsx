import React from "react";
import { Cpu } from "@phosphor-icons/react";
import { Separator } from "../../../../component/ui/separator";
import { useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../component/ui/avatar";
import { marked } from "marked";
import hljs from "highlight.js";

import "./Message.css"; // Tệp CSS tách riêng

const Message = ({ message }) => {
    const { user } = useSelector((state) => state.auth);

    // Cấu hình markdown và highlight code
    const renderer = new marked.Renderer();
    renderer.code = (code, language) => {
        const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
        return `<pre><code class="language-${validLanguage}">${hljs.highlight(code, { language: validLanguage }).value}</code></pre>`;
    };

    marked.setOptions({ renderer });
    const htmlContent = marked(message.content);

    return (
        <div className="message-container">
            {message.sender_email ? (
                <div className="message-wrapper">
                    <div className="message-content">
                        <div className="message-avatar">
                            <Avatar className="avatar">
                                {user?.profileImage ? (
                                    <AvatarImage src={user.profileImage} />
                                ) : (
                                    <AvatarFallback>CN</AvatarFallback>
                                )}
                            </Avatar>
                        </div>
                        <div className="message-text">
                            <h2 className="message-title">{user?.full_name || "User"}</h2>
                            <p className="message-body">{message.content}</p>
                        </div>
                    </div>
                    <Separator className="separator" />
                </div>
            ) : (
                <div className="message-wrapper">
                    <div className="message-content">
                        <div className="message-avatar">
                            <Cpu size={32} />
                        </div>
                        <div className="message-text">
                            <h2 className="message-title">ChatBot</h2>
                            <div
                                className="message-body markdown-content"
                                dangerouslySetInnerHTML={{ __html: htmlContent }}
                            />
                        </div>
                    </div>
                    <Separator className="separator" />
                </div>
            )}
        </div>
    );
};

export default Message;
