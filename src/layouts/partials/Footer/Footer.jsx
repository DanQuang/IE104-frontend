
import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import './footer.css'; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content footer__content--lg">
        <div className="footer__text footer__text--lg">
          <Link to="/" className="footer__title">
            Quan bede
          </Link>
          <p className="footer__copyright">
            © {new Date().getFullYear()} Legal Chatbot. All rights reserved.
          </p>
        </div>

        <div className="footer__links">
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/profile.php?id=100047983584357"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlined />
          </a>
          <a
            href="https://github.com/qhnhynmm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubOutlined />
          </a>
          <a
            href="https://www.instagram.com/bosshuyman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramOutlined />
          </a>
          <a
            href="https://www.linkedin.com/in/huy-phạm-quang-b891a5278"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinOutlined />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
