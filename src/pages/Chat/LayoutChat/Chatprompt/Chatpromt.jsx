'use client';

import React, { useState } from 'react';
import { Button } from '../../../../component/ui/button';
import { PaperPlaneIcon, ReloadIcon } from '@radix-ui/react-icons';
import Textarea from 'react-textarea-autosize';
import './Chatpromt.css'; // Import file CSS

// ChatPrompt Component
const ChatPrompt = ({ chatId, onSendMessage, loading }) => {
    const [prompt, setPrompt] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();

        if (!prompt) return;

        onSendMessage(prompt.trim());
        setPrompt("");
    };

    return (
        <div>
            <div className="chat-prompt-wrapper">
                <div className="chat-prompt-container">
                    <div className="chat-prompt-box">
                        <form onSubmit={sendMessage}>
                            <div className="textarea-wrapper">
                                <Textarea
                                    tabIndex={0}
                                    rows={1}
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="Send a message..."
                                    spellCheck={false}
                                    className=""
                                />
                                <div className="textarea-icon">
                                    {loading ? (
                                        <ReloadIcon className="animate-spin" />
                                    ) : (
                                        <Button size="icon" disabled={!prompt}>
                                            <PaperPlaneIcon />
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatPrompt;
