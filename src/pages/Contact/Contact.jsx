// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h2>Get in Touch</h2>
        <p>
          We are here to assist you. Please feel free to reach out to us with
          any questions or inquiries. Your feedback is important to us, and we
          are committed to providing you with the information and support you
          need.
        </p>
      </header>
      <div className="contact-cards-container">
        {/* Call Now Section */}
        <div className="contact-card">
          <h3>Call Now</h3>
          <p>General Inquiries: +1 (888) 850-0025</p>
          <p>Technical Support: +1 (202) 888-5383</p>
          <a href="tel:+18888500025" className="contact-link">
            Call Now →
          </a>
        </div>

        {/* Email Support Section */}
        <div className="contact-card">
          <h3>Email Support</h3>
          <p>
            Prefer Email? Send us a Mail Now and we&#39;ll get back to you soon.
          </p>
          <a href="mailto:support@legalmaster.ai" className="contact-link">
            Send Email →
          </a>
        </div>

        {/* Visit Us Section */}
        <div className="contact-card">
          <h3>Visit Us</h3>
          <p>We&#39;re Available during our Office Hours:</p>
          <p>Monday - Friday: 9:00 AM - 5:00 PM (Local Time)</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
