import { useState, useEffect, useCallback } from "react";
import image_robot from "../../assets/image_robot.webp";
import legal_document from "../../assets/document-drafting.webp";
import legal_queries from "../../assets/legal-queries.webp";
import legal_advice from "../../assets/legal-advice.webp";
import voice from "../../assets/voice.webp";
import mock_trial from "../../assets/mock-trial.webp";
import { Link } from "react-router-dom";
import "./Homepage.css";

function HomePage() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const handleResize = useCallback(() => {
    setIsLargeScreen(window.innerWidth >= 1024);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Legal Database",
    "Legal Document",
    "Legal Consultancy",
    "Voice Recording",
    "Legal Mock Trials",
  ];

  const tabContents = [
    <div key="0" className="tab-inner-content">
      <div className="tab-text-content">
        <h3>Legal Queries: Your Gateway to Legal Insight</h3>
        <p>
          Navigate the complexities of law with ease. Our AI-driven platform
          offers instantaneous, reliable answers to your legal questions,
          ensuring you are always informed and prepared.
        </p>
        <ul>
          <li>
            Access well-founded legal advice at the click of a button, drawing
            from a vast repository of legal knowledge.
          </li>
          <li>
            Dive into our extensive database for detailed insights into case
            laws, statutes, and legal precedents.
          </li>
          <li>
            Confidentiality is paramount. Your inquiries and the information
            provided are protected with the highest standards of privacy.
          </li>
          <div className="btn-box">
            <a
              className="tab-btn"
              href="https://www.facebook.com/profile.php?id=100047983584357"
            >
              Explore Legal Database
            </a>
          </div>
        </ul>
      </div>
      <div className="tab-image-content">
        <img src={legal_queries} alt="Legal Database" className="tab-image" />
      </div>
    </div>,
    <div key="1" className="tab-inner-content">
      <div className="tab-text-content">
        <h3>Effortless Document Drafting</h3>
        <p>
          Simplify your legal drafting process with our AI-powered tool.
          Experience the future of legal documentation, where precision meets
          efficiency. Our intelligent system not only drafts documents but also
          ensures they are customized to your specific needs, compliant with the
          latest regulations, and ready for any legal scrutiny.
        </p>
        <ul>
          <li>
            Our AI meticulously crafts documents that cater to your individual
            legal requirements, ensuring every term and clause is in your best
            interest.
          </li>
          <li>
            Stay ahead of the legal curve with documents that are automatically
            updated to reflect the latest laws and regulations relevant to your
            case.
          </li>
          <li>
            Transform hours of drafting into minutes with our AI, freeing you to
            focus on the strategic aspects of your legal endeavors.
          </li>
          <div className="btn-box">
            <a
              className="tab-btn"
              href="https://www.facebook.com/profile.php?id=100047983584357"
            >
              Explore Legal Documents
            </a>
          </div>
        </ul>
      </div>
      <div className="tab-image-content">
        <img src={legal_document} alt="Legal Database" className="tab-image" />
      </div>
    </div>,
    <div key="3" className="tab-inner-content">
      <div className="tab-text-content">
        <h3>Instant Legal Advice, Anytime</h3>
        <p>
          Access real-time legal guidance without the wait. Our AI Lawyer
          provides immediate, reliable, and personalized legal advice to help
          you navigate through any legal query or dilemma. Leveraging vast
          databases of legal knowledge and current case law, our AI is equipped
          to offer you comprehensive legal counsel on-demand.
        </p>
        <ul>
          <li>
            No more waiting for appointments. Get expert legal advice instantly,
            24/7, to make informed decisions quickly and confidently.
          </li>
          <li>
            Our AI taps into a broad spectrum of legal precedents and
            regulations to deliver advice that encompasses all angles of your
            legal situation.
          </li>
          <li>
            The AI Lawyer tailors its counsel to your specific circumstances,
            ensuring advice that's relevant to your unique legal context.
          </li>
          <div className="btn-box">
            <a
              className="tab-btn"
              href="https://www.facebook.com/profile.php?id=100047983584357"
            >
              Get Consultancy
            </a>
          </div>
        </ul>
      </div>
      <div className="tab-image-content">
        <img src={legal_advice} alt="Legal Database" className="tab-image" />
      </div>
    </div>,
    <div key="4" className="tab-inner-content">
      <div className="tab-text-content">
        <h3>Speak Up, We're Listening - Advanced Voice Recognition</h3>
        <p>
          Interact with our AI Lawyer as naturally as you would with a human
          attorney. Our state-of-the-art voice recognition feature understands
          and processes your spoken queries, delivering accurate legal insights
          and assistance in response. Whether you're on the go or in the middle
          of a task, our hands-free support ensures your legal needs are heard
          and addressed promptly and precisely.
        </p>
        <ul>
          <li>
            Powered by sophisticated NLP algorithms, our system comprehensively
            understands context, nuances, and legal terminology from your voice
            commands
          </li>
          <li>
            Engage in fluid, dynamic conversations with our AI Lawyer that
            understands follow-up questions and complex legal jargon, ensuring a
            natural and interactive experience
          </li>
          <li>
            Use your voice to navigate through legal procedures, draft
            documents, or get advice, making legal assistance accessible
            anytime, without the need for typing or clicking
          </li>
          <div className="btn-box">
            <a
              className="tab-btn"
              href="https://www.facebook.com/profile.php?id=100047983584357"
            >
              Record your Voice
            </a>
          </div>
        </ul>
      </div>
      <div className="tab-image-content">
        <img src={voice} alt="Legal Database" className="tab-image" />
      </div>
    </div>,

    <div key="5" className="tab-inner-content">
      <div className="tab-text-content">
        <h3>Legal Mock Trials - Practice, Perfect, Prevail</h3>
        <p>
          Sharpen your legal skills and strategy with our cutting-edge Legal
          Mock Trials feature. Whether you're an attorney preparing for a case,
          a law student honing your advocacy, or a business professional seeking
          insight into litigation, our AI Lawyer provides a realistic and
          invaluable trial simulation experience. Step into the courtroom,
          present your case, and receive feedback and analysis to fine-tune your
          legal prowess
        </p>
        <ul>
          <li>
            Immerse yourself in lifelike courtroom scenarios, complete with
            judges, juries, witnesses, and opposing counsel, to practice your
            case presentation and argumentation
          </li>
          <li>
            Receive instant, data-driven feedback on your trial performance,
            including areas of improvement, strengths, and suggested strategies
            for success
          </li>
          <li>
            Customize mock trials to suit your specific legal practice area or
            academic needs, ensuring targeted skill development and enhancement
            of your legal expertise.
          </li>
          <div className="btn-box">
            <a
              className="tab-btn"
              href="https://www.facebook.com/profile.php?id=100047983584357"
            >
              Get Mockup Trials
            </a>
          </div>
        </ul>
      </div>
      <div className="tab-image-content">
        <img src={mock_trial} alt="Legal Database" className="tab-image" />
      </div>
    </div>,
  ];
  return (
    <>
      <div className="pattern-layer">
        <div
          className="pattern-1"
          style={{ backgroundImage: `url('/src/assets/shape-49.png')` }}
        ></div>
        <div className="pattern-2"></div>
      </div>
      <div className="auto-container">
        <div
          className={`homepage-container ${
            isLargeScreen ? "homepage-container-lg" : ""
          }`}
        >
          {/* Left Section: Text Content */}
          <div
            className={`text-content ${isLargeScreen ? "text-content-lg" : ""}`}
          >
            <h1
              className={`main-title ${isLargeScreen ? "main-title-lg" : ""}`}
            >
              AI-Powered{" "}
              <span className="title-highlight">Legal Assistance</span> at Your
              Fingertips
            </h1>
            <p className="description-text">
              Navigate complex legal landscapes with ease using our cutting-edge
              AI Lawyer chatbot.
            </p>
            <Link to="/chat">
              <button className="start-button">Get Started</button>
            </Link>
          </div>

          {/* Right Section: Image */}
          <div
            className={`image-section ${
              isLargeScreen ? "image-section-lg" : ""
            }`}
          >
            <img
              className="chatbot-image"
              src={image_robot}
              alt="Robot offering legal Chatbot"
            />
          </div>
        </div>

        <div className="ai-service">
          <h2>AI SERVICES</h2>
        </div>

        {/* Tabs Navigation */}
        <div className="tabs-container">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
              aria-selected={activeTab === index ? "true" : "false"} // Accessibility improvement
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Content with transition effect */}
        <div className="tab-content">{tabContents[activeTab]}</div>
        <div className="content_block_3_4">
          <div className="content_block_left">
            <div className="image-box">
              <img src="/src/assets/mock-trial.webp" alt="Mock Trial" />
            </div>
          </div>
          <div className="content_block_right">
            <h3> Pioneering Legal Transformation</h3>
            <h4>Non-profit Initiative</h4>
            <p>
              Legal Master AI, a proud initiative of Build Champions 501(c)(3)
              Non Profit, is unwavering in its commitment to democratize access
              to justice. We firmly believe that Justice should Not be a
              Privilege but a Fundamental Right. Our mission is a resounding
              call to empower individuals and underserved communities through
              the formidable capabilities of cutting-edge AI technology. With
              unwavering conviction, we are dedicated to bridging the justice
              gap, ensuring that affordable, efficient, and accurate legal
              assistance is a reality for all.
            </p>
            <div className="btn-box">
              <a
                className="tab-btn"
                href="https://www.facebook.com/profile.php?id=100047983584357"
              >
                Try our Legal Assistant
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content-end">
        <h3>
          Trusted by Industry Leaders<span> Industry Leaders</span>
        </h3>
        <p>
          Join the ranks of top legal firms and businesses that leverage our AI
          Lawyer for efficient, accurate legal support.
        </p>
        <div className="inner-container">
          <div
            className="patten-layer"
            style={{ backgroundImage: `url('/src/assets/shape-51.webp')` }}
          >
            <div className="sec-title">
              <h2>
                Next-Generation <span>Legal</span> Support with AI
              </h2>
            </div>
            <p>Sign Up or Experience AI Consultation Today!</p>
            <div className="button-container">
              <button className="btn gold">Try AI Consultation</button>
              <button className="btn white">Create Free Account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
