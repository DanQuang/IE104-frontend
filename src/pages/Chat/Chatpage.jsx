
// import { StackIcon } from "@radix-ui/react-icons";
import "./Chatpage.css";

const Chatpage = () => {
    return (
        <div className="index-page">
            {/* Header Section */}
            <div className="index-page-header">
                {/* <StackIcon className="index-page-icon" /> */}
                <p className="index-page-title">Welcome to Chat Droid AI Chatbot!</p>
            </div>

            {/* Content Section */}
            <div className="index-page-content">
                <div className="index-page-card">
                    <h2>Cutting-Edge Technology</h2>
                    <p>
                        Chat Droid combines Next.js 14 for speed and shadcn styling for a sleek
                        look, backed by Django and Langchain for advanced AI capabilities.
                    </p>
                </div>
                <div className="index-page-card">
                    <h2>Future-Ready Chatbot</h2>
                    <p>
                        Experience the future of chatbots with Chat Droid. We regularly update and
                        improve our platform to provide the best AI chatbot experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Chatpage;
