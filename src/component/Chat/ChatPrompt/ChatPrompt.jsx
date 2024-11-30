import React, { FormEvent, useState } from 'react';
import { PaperPlaneIcon, ReloadIcon } from '@radix-ui/react-icons';
import Textarea from 'react-textarea-autosize';
import { Button } from '../ui/button';

import './ChatPrompt.css'; // Import file CSS riêng

const ChatPrompt = ({ chatId, onSendMessage, loading }) => {
    const [prompt, setPrompt] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();

        if (!prompt) return;

        onSendMessage(prompt.trim());
        setPrompt("");
    }

    return (
        <div className="chat-prompt-container">
            <div className="chat-prompt-content">
                <div className="chat-prompt-box">
                    <form onSubmit={sendMessage}>
                        <div className="chat-prompt-form">
                            <Textarea
                                tabIndex={0}
                                rows={1}
                                value={prompt}
                                onChange={e => setPrompt(e.target.value)}
                                placeholder="Send a message..."
                                spellCheck={false}
                                className="chat-prompt-input"
                            />
                            <div className="chat-prompt-send">
                                {loading ? (
                                    <ReloadIcon className="reload-icon" />
                                ) : (
                                    <Button size="icon" disabled={!prompt}>
                                        <PaperPlaneIcon className="send-icon" />
                                    </Button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChatPrompt;
