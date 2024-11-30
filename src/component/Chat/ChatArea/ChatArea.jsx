import { RootState } from "@/redux/store";
import Message from "./message";
import { StackIcon } from "@radix-ui/react-icons";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { Cpu } from "@phosphor-icons/react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { marked } from "marked";
import hljs from "highlight.js";

import './ChatArea.css'; // Import file CSS riêng

const ChatArea = ({ chatId, chunks }) => {   
    const { messages } = useSelector((state: RootState) => state.chat);
    const chatRef = useRef(null);  
    
    const renderer = new marked.Renderer();
    renderer.code = (code, language) => {
        const validLanguage = hljs.getLanguage(language!) ? language : 'plaintext';
        return `<pre><code class="language-${validLanguage}">${hljs.highlight(validLanguage, code).value}</code></pre>`;
    };
    marked.setOptions({ renderer });
    const html = marked(chunks);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div ref={chatRef} className="chat-area">
            {messages?.length === 0 && (
                <div className="empty-chat">
                    <div className="welcome-message">
                        <StackIcon className="icon" />
                        <div className="message-box">
                            <h1 className="welcome-title">Welcome to Chat Droid AI Chatbot!</h1>
                            <p className="welcome-description">
                                Experience the future of chatbots with our Next.js 14 powered platform, featuring sleek shadcn styling, backed by Django and Langchain.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {messages && messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}

            {chunks && (
                <div className="chatbot-message">
                    <div className="message-container">
                        <div className="icon-container">
                            <Cpu size={32} />
                        </div>
                        <div className="message-content">
                            <h2 className="chatbot-title">ChatBot</h2>
                            <p className="chatbot-text">
                                <div className="chunks" dangerouslySetInnerHTML={{ __html: html }} />
                            </p>
                        </div>
                    </div>
                    <Separator className="separator" />
                </div>
            )}
        </div>
    );
}

export default ChatArea;
