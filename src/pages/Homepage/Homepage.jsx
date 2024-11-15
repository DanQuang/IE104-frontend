import image_robot from "../../assets/image_robot.webp";
import { Link } from "react-router-dom";
import "./Homepage.css";

function HomePage() {
  return (
    <div className={`homepage-container ${window.innerWidth >= 1024 ? 'homepage-container-lg' : ''}`}>
      {/* Left Section: Text Content */}
      <div className={`text-content ${window.innerWidth >= 1024 ? 'text-content-lg' : ''}`}>
        <h1 className={`main-title ${window.innerWidth >= 1024 ? 'main-title-lg' : ''}`}>
          AI-Powered{" "}
          <span className="title-highlight">Quan bede</span> at Your Fingertips
        </h1>
        <p className="description-text">
          Navigate complex legal landscapes with ease using our cutting-edge AI Lawyer chatbot.
        </p>
        <Link to="/chat">
          <button className="start-button">Get Started</button>
        </Link>
      </div>

      {/* Right Section: Image */}
      <div className={`image-section ${window.innerWidth >= 1024 ? 'image-section-lg' : ''}`}>
        <img className="chatbot-image" src={image_robot} alt="Robot offering legal Chatbot" />
      </div>

      <div>
        <h2 className="services-heading">AI SERVICES</h2>
      </div>
    </div>
  );
}

export default HomePage;
