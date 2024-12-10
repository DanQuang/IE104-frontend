import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { Cpu } from "@phosphor-icons/react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { marked } from "marked";
import hljs from "highlight.js";
import { StackIcon } from "@radix-ui/react-icons";
import Message from "../Message/Message";

const ChatArea = ({ chatId, chunks }) => {
  const { messagesByChatId } = useSelector((state) => state.chat);
  const messages = messagesByChatId[chatId] || [];  // Lấy tin nhắn của chatId hiện tại
  const chatRef = useRef(null);

  const renderer = new marked.Renderer();
  renderer.code = (code, language) => {
    const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
    return `<pre><code class="language-${validLanguage}">${hljs.highlight(validLanguage, code).value}</code></pre>`;
  };
  marked.setOptions({ renderer });
  const html = marked(chunks); // Chuyển đổi chunks Markdown thành HTML

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);  // Cập nhật scroll khi có tin nhắn mới
  console.log(messages)
  return (
    <div ref={chatRef} className="flex-1 overflow-y-scroll overflow-x-hidden custom-scrollbar py-5 px-2 md:p-5">
      {messages.length === 0 && (
        <div className="pb-[200px] pt-4 md:pt-10">
          <div className="mx-auto max-w-2xl px-4 flex flex-col items-center gap-5">
            <StackIcon className="w-20 h-20" />
            <div className="rounded-lg border border-foreground/15 bg-tertiary p-8">
              <h1 className="mb-2 text-lg font-semibold">Welcome to Chat Droid AI Chatbot!</h1>
              <p className="mb-2 text-muted-foreground">
                Experience the future of chatbots with our Next.js 14 powered platform, featuring sleek shadcn styling, backed by Django and Langchain.
              </p>
            </div>
          </div>
        </div>
      )}

      {messages.length > 0 && messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}

      {chunks && (
        <div className="max-w-2xl mx-auto">
          <div className="flex space-x-5">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center p-1">
              <Cpu size={32} />
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold">ChatBot</h2>
              <p className="pt-1 whitespace-pre-wrap">
                {/* Render the markdown as HTML safely */}
                <div
                  className="whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </p>
            </div>
          </div>
          <Separator className="mb-5 w-full my-5" />
        </div>
      )}
    </div>
  );
};

export default ChatArea;
