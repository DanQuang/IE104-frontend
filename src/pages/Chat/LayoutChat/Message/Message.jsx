import React from "react";
import { Cpu, UserCircle } from "@phosphor-icons/react";
import { useSelector } from "react-redux";
import { Separator } from "../../../../component/ui/separator";
import { marked } from "marked";
import hljs from "highlight.js";

const Message = ({ message }) => {
    const { user } = useSelector((state) => state.auth);

    const renderer = new marked.Renderer();
    renderer.code = (code, language) => {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return `<pre><code class="language-${validLanguage}">${hljs.highlight(validLanguage, code).value}</code></pre>`;
    };

    marked.setOptions({ renderer });

    // Kiểm tra và xử lý nội dung
    const content = message.content || ''; // Đảm bảo luôn là chuỗi
    const html = marked(content);

    return (
        <>
            {message.sender_email ? (
                <div className='max-w-2xl mx-auto'>
                    <div className='flex space-x-5'>
                        <div className='w-10 h-10 rounded-full border flex items-center justify-center p-1'>
                            <UserCircle size={32} />
                        </div>

            <div className="flex flex-col">
              <h2 className="font-semibold text-base text-left m-0 py-2">
                {user && user.full_name ? user.full_name : "You"}
              </h2>
              <p className="pt-1 whitespace-pre-wrap m-0 text-[16px] text-left">{message.content}</p>
            </div>
          </div>
          <Separator className="w-full mb-5" />
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          <div className="flex space-x-5">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center p-1">
              <Cpu size={32} />
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold text-base text-left m-0 py-2">ChatBot</h2>
              <p className="pt-1 whitespace-pre-wrap m-0 text-[16px] text-left">{message.content}</p>
              {/* <div
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: html }}
              /> */}
            </div>
          </div>
          <Separator className="mb-5 w-full" />
        </div>
      )} 
    </>
  );
};

export default Message;
