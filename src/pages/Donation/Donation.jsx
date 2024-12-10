import React from "react";
import "./Donation.css";
import donationImage from "../../assets/voice.webp"; // Thay bằng đường dẫn ảnh phù hợp

function Donation() {
  return (
    <div className="donation-container">
      <div className="donation-info">
        <div className="donation-text">
          <h1>Ủng Hộ Xây Dựng Tổ Chức Phi Lợi Nhuận Chatbot Luật</h1>
          <p>
            Cảm ơn bạn đã cân nhắc việc đóng góp cho tổ chức phi lợi nhuận Chatbot Luật.
            Sự hỗ trợ của bạn đóng vai trò then chốt trong sứ mệnh của chúng tôi nhằm trao quyền
            cho các cá nhân và cộng đồng bằng cách đảm bảo rằng công lý luôn dễ tiếp cận.
          </p>
          <p>
            Tăng cường tiếp cận công lý: Sự đóng góp của bạn giúp chúng tôi cung cấp
            các dịch vụ pháp lý ứng dụng trí tuệ nhân tạo tiên tiến cho luật sư công,
            các trung tâm hỗ trợ pháp lý, sinh viên luật, các cá nhân yếu thế, và các công ty luật nhỏ,
            đảm bảo rằng công lý không phải là một đặc quyền mà là quyền cơ bản của mọi người.
          </p>
        </div>
        <div className="donation-image">
          <img src={donationImage} alt="Hình ảnh quyên góp" />
        </div>
      </div>

      <section className="donation-motto">
        <h3>"Công lý không phải là đặc quyền, mà là quyền cơ bản."</h3>
        <p>
          Sứ mệnh của chúng tôi được thúc đẩy bởi phương châm này. Sự đóng góp của bạn
          giúp chúng tôi biến phương châm này thành hiện thực, đảm bảo rằng công lý
          luôn có thể tiếp cận, bất kể hoàn cảnh của bất kỳ ai.
        </p>
      </section>

      <section className="donation-how">
        <h2>Lợi Ích Từ Sự Đóng Góp Của Bạn</h2>
        <div className="donation-breakdown">
          <div className="donation-item">
            <h3>$50</h3>
            <p>
              Cải thiện cơ sở dữ liệu pháp lý của chúng tôi trong vòng một tháng.
            </p>
          </div>
          <div className="donation-item">
            <h3>$100</h3>
            <p>
              Hỗ trợ soạn thảo 10 tài liệu pháp lý cá nhân hóa.
            </p>
          </div>
          <div className="donation-item">
            <h3>$200</h3>
            <p>
              Tài trợ phát triển hỗ trợ đa ngôn ngữ trong vòng một tuần.
            </p>
          </div>
          <div className="donation-item">
            <h3>$500</h3>
            <p>
              Tài trợ toàn bộ một buổi thực tập phiên tòa giả định cho sinh viên luật.
            </p>
          </div>
          <div className="donation-item">
            <h3>Bất Kỳ Số Tiền Nào</h3>
            <p>
              Đóng góp của bạn tạo ra sự khác biệt ý nghĩa trong sứ mệnh của chúng tôi,
              nhằm tăng cường tiếp cận công lý.
            </p>
          </div>
        </div>
        <div className="donation-transparency">
          <h2>Cam Kết Minh Bạch</h2>
          <p>
            Chúng tôi tin vào sự minh bạch hoàn toàn. Mọi khoản đóng góp của bạn sẽ được ghi nhận
            và sử dụng để thúc đẩy sứ mệnh của chúng tôi. Chúng tôi cung cấp các bản cập nhật
            thường xuyên về cách mà đóng góp của bạn đang tạo ra tác động.
          </p>
        </div>
        <div className="donation-cta">
          <a href="https://donation-link.com" className="donate-button">
            Quyên Góp Ngay
          </a>
        </div>
      </section>
    </div>
  );
}

export default Donation;
