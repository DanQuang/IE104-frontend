import React, { useState } from "react";
import { Button } from "../../../../component/ui/button";
import { PaperPlaneIcon, ReloadIcon } from "@radix-ui/react-icons";
import Textarea from "react-textarea-autosize";

const ChatPrompt = ({ chatId, onSendMessage, loading }) => {
  const [prompt, setPrompt] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();  
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (!prompt) return;

    onSendMessage(prompt.trim());
    setPrompt("");
  };

  return (
    <div>
      <div className="sticky bottom-0 w-full">
        <div className="mx-auto md:max-w-2xl md:px-4">
          <div className="space-y-4 border-t px-4 py-2 shadow-lg md:rounded-t-xl md:border md:py-4">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex max-h-60 w-full flex-col overflow-hidden px-8 md:rounded-md md:border md:px-12">
                <Textarea
                  tabIndex={0}
                  rows={1}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Send a message..."
                  spellCheck={false}
                  onKeyDown={handleKeyDown} 
                  className="min-h-[60px] w-full resize-none px-4 py-[1.3rem] focus-within:outline-none md:text-sm disabled:cursor-not-allowed"
                />
                <div className="absolute right-0 top-4 md:right-4">
                  {loading ? (
                    <ReloadIcon className="h-6 w-6 animate-spin" />
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
