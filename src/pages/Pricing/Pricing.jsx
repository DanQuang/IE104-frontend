import { Button, Card } from "antd";
import { Link } from "react-router-dom";
import "./Pricing.css";

const Pricing = () => {
  const plans = [
    {
      title: "Gói Cơ bản",
      price: "$19",
      features: [
        "Dành cho một người dùng",
        "Truy cập không giới hạn vào Hệ thống Giải đáp Pháp lý",
        "Truy cập không giới hạn vào Cơ sở dữ liệu Pháp lý",
        "Soạn thảo Tài liệu Pháp lý không giới hạn",
      ],
      tier: "basic",
    },
    {
      title: "Gói Nâng cao",
      price: "$29",
      features: [
        "Truy cập đầy đủ vào Hệ thống Giải đáp Pháp lý",
        "Truy cập đầy đủ vào Cơ sở dữ liệu Pháp lý",
        "Soạn thảo Tài liệu Pháp lý không giới hạn",
        "Tích hợp chức năng Ghi âm biên bản",
        "Hỗ trợ chuyên môn qua email và điện thoại",
      ],
      tier: "advanced",
    },
    {
      title: "Gói Chuyên nghiệp",
      price: "$49",
      features: [
        "Hỗ trợ tối đa 5 người dùng",
        "Bao gồm tất cả tính năng của Gói Nâng cao",
        "Quyền truy cập độc quyền vào Phiên Tòa Mô phỏng",
        "Dịch vụ hỗ trợ kỹ thuật cao cấp",
      ],
      tier: "professional",
    },
  ];

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h2 className="pricing-title">Gói dịch vụ AI</h2>
        <p className="pricing-subtitle">Trải nghiệm dịch vụ tối ưu với Nền tảng Pháp lý AI tiên tiến</p>
      </div>

      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <Card key={index} className="pricing-card" bordered={false}>
            <h3 className="plan-title">{plan.title}</h3>
            <h1 className="plan-price">{plan.price}</h1>
            <p className="plan-period">Theo tháng</p>
            <Link to="/auth/register-tier" state={{ plan }}>
              <Button type="default" className="subscribe-button">
                Đăng ký ngay
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
