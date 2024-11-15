// import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 lg:px-20 py-6">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <Link
            to="/"
            className="text-transparent bg-gradient-to-r from-rose-400 to-rose-950 bg-clip-text font-bold text-xl hover:scale-105 focus:outline-none hover:text-transparent"
          >
            Quan bede
          </Link>
          <p className="text-gray-500 mt-2">
            © {new Date().getFullYear()} Legal Chatbot. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-4 text-gray-500">
          <Link to="/terms" className="hover:text-rose-600">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:text-rose-600">
            Privacy Policy
          </Link>
          <Link to="/contact" className="hover:text-rose-600">
            Contact Us
          </Link>
        </div>

        <div className="flex space-x-4 mt-4 lg:mt-0 text-gray-500">
          <a
            href="https://www.facebook.com/profile.php?id=100047983584357"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-600"
          >
            <FacebookOutlined />
          </a>
          <a
            href="https://github.com/qhnhynmm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-600"
          >
            <GithubOutlined />
          </a>
          <a
            href="https://www.instagram.com/bosshuyman/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-600"
          >
            <InstagramOutlined />
          </a>
          <a
            href="https://www.linkedin.com/in/huy-phạm-quang-b891a5278"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-600"
          >
            <LinkedinOutlined />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
