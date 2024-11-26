import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { Cpu } from "@phosphor-icons/react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { marked } from "marked";
import hljs from "highlight.js";
import { StackIcon } from "@radix-ui/react-icons";
import Message from '../Message/Message'
import "./Chatarea.css";

// eslint-disable-next-line react/prop-types
const ChatArea = ({ chunks }) => {
    const { messages } = useSelector((state) => state.chat);
    const chatRef = useRef(null);

    // Set up markdown rendering with syntax highlighting
    const renderer = new marked.Renderer();
    renderer.code = (code, language) => {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return `<pre><code class="language-${validLanguage}">${hljs.highlight(validLanguage, code).value}</code></pre>`;
    };
    marked.setOptions({ renderer });
    const html = marked(chunks);

    // Scroll to the bottom when new messages are added
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div ref={chatRef} className="chat-area custom-scrollbar">
            {messages.length === 0 && (
                <div className="welcome">
                    <div className="welcome-content">
                        <StackIcon className="icon-large" />
                        <div className="welcome-box">
                            <h1 className="welcome-title">Welcome to Chat Droid AI Chatbot!</h1>
                            <p className="welcome-text">
                                Explore the future of chatbots, powered by Next.js 14, with sleek styling and strong backend integration.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Render messages */}
            {messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}

            {/* Render chatbot's response if any */}
            {chunks && (
                <div className="markdown-container">
                    <div className="markdown-header">
                        <div className="avatar">
                            <Cpu size={32} />
                        </div>
                        <div className="markdown-content">
                            <h2 className="markdown-title">ChatBot</h2>
                            <div
                                className="markdown-html"
                                dangerouslySetInnerHTML={{ __html: html }}
                            />
                        </div>
                    </div>
                    <Separator className="separator" />
                </div>
            )}
        </div>
    );
}

export default ChatArea;
