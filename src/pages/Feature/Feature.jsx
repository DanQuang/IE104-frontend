import { useState } from "react";
import legal_document from "../../assets/document-drafting.webp";
import legal_queries from "../../assets/legal-queries.webp";
import legal_advice from "../../assets/legal-advice.webp";
import voice from "../../assets/voice.webp";
import mock_trial from "../../assets/mock-trial.webp";
import "./Feature.css";

function Feature() {
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
          <div className="button-box">
            <a
              className="button-link"
              href="https://github.com/DanQuang"
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
          <div className="button-box">
            <a
              className="button-link"
              href="https://github.com/DanQuang"
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
            ensuring advice that&#39;s relevant to your unique legal context.
          </li>
          <div className="button-box">
            <a
              className="button-link"
              href="https://github.com/DanQuang"
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
        <h3>Speak Up, We&#39;re Listening - Advanced Voice Recognition</h3>
        <p>
          Interact with our AI Lawyer as naturally as you would with a human
          attorney. Our state-of-the-art voice recognition feature understands
          and processes your spoken queries, delivering accurate legal insights
          and assistance in response. Whether you&#39;re on the go or in the middle
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
          <div className="button-box">
            <a
              className="button-link"
              href="https://github.com/DanQuang"
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
          Mock Trials feature. Whether you&#39;re an attorney preparing for a case,
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
          <div className="button-box">
            <a
              className="button-link"
              href="https://github.com/DanQuang"
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
    <div className="features-container">
      <h2>AI SERVICES</h2>
      {/* Tabs Navigation */}
      <div className="tabs-container">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="tab-content">{tabContents[activeTab]}</div>
    </div>
  );
}

export default Feature;
