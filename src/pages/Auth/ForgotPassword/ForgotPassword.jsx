import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ForgotPassword.css"; 
import animationData from "../../../assets/chatbot.json";
import Lottie from "lottie-react";
const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("https://api.example.com/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Password reset link sent to your email.");
      } else {
        setErrorMessage(data.message || "Unable to process request.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-form-container">
        <div className="forgot-password-form-logo">
          <Lottie
            animationData={animationData}
            loop={true}
            alt="Forgot Password Logo"
            className="logo"
          />
          <h2 className="forgot-password-heading">Reset Password</h2>
        </div>
        <p className="forgot-password-subheading">
          Enter your email to reset your password
        </p>

        <form onSubmit={handleForgotPassword}>
          <div className="input-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <button
            type="submit"
            className="forgot-password-button"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Reset Password"}
          </button>
          <div className="back-to-login">
            <Link to="/auth/login">Back to Login</Link>
          </div>
        </form>
      </div>

      <div className="forgot-password-image-container">
        <img src="/src/assets/legal-queries.webp" alt="Reset Password Illustration" />
        <div className="forgot-password-image-text">
          <p>
            Don't worry, we'll help you reset your <span>Password</span> 🔒
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
