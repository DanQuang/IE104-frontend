// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h2>Liên hệ</h2>
        <p>
          Chúng tôi ở đây để hỗ trợ bạn. Xin vui lòng liên hệ với chúng tôi nếu
          có bất kỳ câu hỏi hoặc thắc mắc nào. Phản hồi của bạn rất quan trọng
          đối với chúng tôi và chúng tôi cam kết cung cấp cho bạn thông tin và
          hỗ trợ bạn cần.
        </p>
      </header>
      <div className="contact-cards-container">
        {/* Call Now Section */}
        <div className="contact-card">
          <h3>Gọi ngay</h3>
          <p>Thắc mắc chung: +84 911 617 838</p>
          <p>Hỗ trợ kĩ thuật: +1 (202) 888-5383</p>
          <a href="tel:+84911617838" className="contact-link">
            Gọi ngay →
          </a>
        </div>

        {/* Email Support Section */}
        <div className="contact-card">
          <h3>Hỗ trợ qua Email</h3>
          <p>
            Bạn thích Email hơn? Gửi mail cho chúng tôi ngay bây giờ và chúng
            tôi sẽ sớm liên hệ lại với bạn.
          </p>
          <a href="mailto:tquangdan03@gmail.com" className="contact-link">
            Gửi Email →
          </a>
        </div>

        {/* Visit Us Section */}
        <div className="contact-card">
          <h3>Ghé thăm chúng tôi</h3>
          <p>Chúng tôi làm việc trong giờ hành chính:</p>
          <p>Thứ hai - Thứ sáu: 9:00 AM - 5:00 PM (Giờ địa phương)</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
