import { Button, Card } from "antd";
import { Link } from "react-router-dom";
import "./Pricing.css"; 

const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      price: "$19",
      features: [
        "Single user",
        "Unlimited access to Legal Answers",
        "Unlimited access to Legal Database",
        "Unlimited Legal Document drafting",
      ],
    },
    {
      title: "Premium",
      price: "$29",
      features: [
        "Full access to Legal Answers",
        "Full access to Legal Database",
        "Unlimited Legal Document drafting",
        "Voice Recording feature",
        "Email and phone support",
      ],
    },
    {
      title: "Elite",
      price: "$49",
      features: [
        "Up to 5 users",
        "Includes all Premium Plan features",
        "Exclusive access to Legal Mock Trials",
        "Enhanced Technical Support",
      ],
    },
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h2 className="pricing-title">AI Pricing Plan</h2>
        <p className="pricing-subtitle">Get the best services for Best AI Legal Software</p>
      </div>

      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className="pricing-card"
            bordered={false}
            style={{ backgroundColor: "#fff" }}
          >
            <h3 className="plan-title">{plan.title}</h3>
            <h1 className="plan-price">{plan.price}</h1>
            <p className="plan-period">Per Month</p>
            <Link to="/checkout">
              <Button type="default" className="subscribe-button">
                Subscribe
              </Button>
            </Link>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i} className="feature-item">
                  <span className="feature-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
