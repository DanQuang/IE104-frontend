import React, { useState, useEffect, useCallback } from "react";
import about_first from "../../assets/about_first.webp"; // Ensure this is the correct image path
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const handleResize = useCallback(() => {
    setIsLargeScreen(window.innerWidth >= 1024);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div className="about-page">
      {/* First Section: About Us with Text and Image */}
      <div className="tab-inner-content">
        <div className="tab-text-content">
          <h3>About Us</h3>
          <p>
            At Build Champions Non-Profit, our mission is crystal clear: we are dedicated to empowering individuals and underserved communities by transforming justice from a privilege into a fundamental right.
          </p>
          <p>
            Our motto, <strong>'Justice should not be a privilege but a fundamental right'</strong>, underscores our unwavering commitment to democratizing access to justice. We achieve this by providing cutting-edge AI legal services to public defenders, legal aid clinics, law students, unrepresented individuals, and small law firms.
          </p>
          <p>
            As a 501(c)(3) Non-Profit Organization, we operate with utmost transparency, accountability, and a steadfast focus on our mission. We acknowledge the pivotal role that public defenders and legal aid clinics play in ensuring equitable access to justice. We are equally dedicated to supporting law students, unrepresented individuals, and small law firms, recognizing their integral role in our community.
          </p>
          <p>
            With your support, we're on a mission to make justice a fundamental right for everyone. Together, we're reshaping the world so that 'Justice should not be a privilege but a fundamental right' becomes a reality for all.
          </p>
        </div>
        <div className="tab-image-content">
          <img
            src={about_first}
            alt="Legal Queries"
            className="tab-image"
          />
        </div>
      </div>

      {/* New Section: Drafting Legal Documents Text */}
      <div className="drafting-section">
        <p className="drafting-text">
          <strong>Drafting legal documents can be a time-consuming and complex task.</strong>
        </p>
        <p>
          This service saves you time and effort, allowing you to focus on the strategic aspects of your legal endeavors.
        </p>
      </div>

      {/* New Content Block Section */}
      <div className="content_block_3_4">
        <div className="content_block_left">
          <div className="image-box">
            <img src="/src/assets/mock-trial.webp" alt="Mock Trial" />
          </div>
        </div>
        <div className="content_block_right">
          <h4>Mission Statement</h4>
          <p>
            At Build Champions Non-Profit, our mission is to empower individuals and communities by making justice accessible to all. We provide cutting-edge AI legal services to public defenders, legal aid clinics, law students, unrepresented individuals, and small law firms. Our goal is to ensure that justice is not a privilege but a fundamental right for every person.
          </p>
          <ul className="mission-list">
            <li>1. Extensive Legal Database: Your Gateway to Legal Insight</li>
            <li>2. Effortless Document Drafting: Simplify Your Legal Process with AI</li>
            <li>3. Legal Consultancy: Instant Legal Advice, Anytime</li>
            <li>4. Advanced Voice Recognition: Interact Naturally with Our AI Lawyer</li>
            <li>5. Legal Mock Trials: Practice, Perfect, Prevail</li>
          </ul>
          <div className="btn-box">
            <Link to="/chat" className="tab-btn">
              Try AI Consultation
            </Link>
          </div>
        </div>
        
      </div>
      {/* Legal Master AI Section: Add Below */}
      <div className="legal-master-ai-section">
        <h3>Legal Master AI</h3>
        <p>
          Legal Master AI is at the heart of our mission, offering a range of essential services:
        </p>
        <div className="legal-services">
          <div className="service">
            <h4>1. Extensive Legal Database: Your Gateway to Legal Insight</h4>
            <p>
              Legal Master AI offers a vast and up-to-date legal database that includes Supreme Court judgments, Federal Rules of Civil Procedure, and specific rules for civil and criminal procedures in all 50 states and Washington D.C. This database serves as a critical resource for research and informed decision-making, offering users access to a broad range of legal information. It's especially beneficial for legal professionals, researchers, and students who require detailed and accurate legal data.
            </p>
          </div>

          <div className="service">
            <h4>2. Effortless Document Drafting: Simplify Your Legal Process with AI</h4>
            <p>
              Drafting legal documents can be a time-consuming and complex task. Legal Master AI streamlines this process effortlessly with its AI-powered document drafting tool. It ensures that documents are not only accurately drafted but also customized to your specific needs, compliant with the latest regulations, and ready for any legal scrutiny. This service saves you time and effort, allowing you to focus on the strategic aspects of your legal endeavors.
            </p>
          </div>

          <div className="service">
            <h4>3. Legal Consultancy: Instant Legal Advice, Anytime</h4>
            <p>
              Accessing legal guidance has never been easier. Legal Master AI's Legal Consultancy service provides immediate, reliable, and personalized legal advice to help you navigate any legal query or dilemma. Leveraging vast databases of legal knowledge and current case law, our AI Lawyer offers comprehensive legal counsel on-demand. Say goodbye to waiting for appointments, and get expert legal advice instantly, 24/7, to make informed decisions quickly and confidently.
            </p>
          </div>

          <div className="service">
            <h4>4. Advanced Voice Recognition: Interact Naturally with Our AI Lawyer</h4>
            <p>
              Engage with our AI Lawyer as naturally as you would with a human attorney. Legal Master AI's advanced voice recognition feature understands and processes your spoken queries, delivering accurate legal insights and assistance in response. Powered by sophisticated Natural Language Processing (NLP) algorithms, it comprehensively understands context, nuances, and legal terminology from your voice commands. This hands-free support ensures your legal needs are heard and addressed promptly and precisely.
            </p>
          </div>

          <div className="service">
            <h4>5. Legal Mock Trials: Practice, Perfect, Prevail</h4>
            <p>
              Sharpen your legal skills and strategy with Legal Master AI's Legal Mock Trials feature. Whether you're an attorney preparing for a case, a law student honing your advocacy, or a business professional seeking insight into litigation, our AI Lawyer provides a realistic and invaluable trial simulation experience. Step into the courtroom, present your case, and receive feedback and analysis to fine-tune your legal prowess. This immersive experience helps you practice, perfect, and ultimately prevail in the legal arena.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
