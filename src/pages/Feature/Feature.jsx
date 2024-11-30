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
    "Cơ sở dữ liệu",
    "Soạn thảo tài liệu",
    "Tư vấn pháp lý",
    "Ghi âm giọng nói",
    "Phiên tòa giả định",
  ];

  const tabContents = [
    <div key="0" className="tab-inner-content">
      <div className="tab-text-content">
        <h3>Truy vấn pháp lý: Cổng thông tin pháp lý của bạn</h3>
        <p>
          Tra cứu pháp luật một cách dễ dàng. Nền tảng dựa trên AI của chúng tôi
          cung cấp câu trả lời tức thời, đáng tin cậy cho các câu hỏi pháp lý
          của bạn, đảm bảo bạn luôn được thông báo và chuẩn bị sẵn sàng.
        </p>
        <ul>
          <li>
            Truy cập tư vấn pháp lý có cơ sở chỉ bằng một nút bấm, rút ra từ
            kho kiến thức pháp lý rộng lớn.
          </li>
          <li>
            Đi sâu vào cơ sở dữ liệu mở rộng của chúng tôi để có thông tin chi
            tiết về án lệ, quy chế và tiền lệ pháp lý.
          </li>
          <li>
            Bảo mật là điều tối quan trọng. Yêu cầu của bạn và thông tin được
            cung cấp được bảo vệ với tiêu chuẩn bảo mật cao nhất.
          </li>
          <div className="button-box">
            <a className="button-link" href="https://github.com/DanQuang">
              Khám phá Cơ sở dữ liệu pháp lý
            </a>
          </div>
        </ul>
      </div>
      <div className="tab-image-content">
        <img src={legal_queries} alt="Cơ sở dữ liệu pháp lý" className="tab-image" />
      </div>
    </div>,
    <div key="1" className="tab-inner-content">
      <div className="tab-text-content">
        <h3>Soạn thảo tài liệu pháp lý dễ dàng</h3>
        <p>
          Đơn giản hóa quy trình soạn thảo tài liệu pháp lý với công cụ AI của chúng tôi. Trải nghiệm tương lai của việc soạn thảo pháp lý, nơi độ chính xác hòa quyện với hiệu quả. Hệ thống thông minh không chỉ soạn thảo tài liệu mà còn đảm bảo chúng được tùy chỉnh theo nhu cầu cụ thể của bạn, tuân thủ các quy định mới nhất và sẵn sàng đối mặt với mọi thách thức pháp lý.
        </p>
        <ul>
          <li>
            AI của chúng tôi soạn thảo tài liệu một cách tỉ mỉ, đáp ứng các yêu cầu pháp lý cá nhân, đảm bảo từng điều khoản đều có lợi cho bạn.
          </li>
          <li>
            Cập nhật tài liệu tự động để phản ánh các quy định pháp luật mới nhất liên quan đến vụ việc của bạn.
          </li>
          <li>
            Biến hàng giờ soạn thảo thành phút giây, giúp bạn tập trung vào các khía cạnh chiến lược của công việc pháp lý.
          </li>
          <div className="button-box">
            <a className="button-link" href="https://github.com/DanQuang">
              Khám phá Tài liệu pháp lý
            </a>
          </div>
        </ul>
      </div>
      <div className="tab-image-content">
        <img src={legal_document} alt="Soạn thảo tài liệu pháp lý" className="tab-image" />
      </div>
    </div>,
    <div key="3" className="tab-inner-content">
      <div className="tab-text-content">
        <h3>Tư vấn pháp lý tức thời, mọi lúc mọi nơi</h3>
        <p>
          Tiếp cận tư vấn pháp lý theo thời gian thực mà không cần phải chờ đợi. Luật sư AI của chúng tôi cung cấp lời khuyên pháp lý đáng tin cậy, cá nhân hóa ngay lập tức, giúp bạn xử lý mọi thắc mắc hoặc tình huống pháp lý. Với cơ sở dữ liệu pháp luật phong phú và các án lệ cập nhật, AI của chúng tôi sẵn sàng mang đến cho bạn sự tư vấn toàn diện.
        </p>
        <ul>
          <li>
            Không cần chờ đợi lịch hẹn. Nhận lời khuyên pháp lý chuyên môn ngay lập tức, 24/7, để đưa ra quyết định nhanh chóng và tự tin.
          </li>
          <li>
            AI của chúng tôi tận dụng một loạt các tiền lệ pháp lý và quy định để cung cấp lời khuyên bao quát mọi khía cạnh tình huống pháp lý của bạn.
          </li>
          <li>
            Tư vấn được cá nhân hóa theo tình huống cụ thể của bạn, đảm bảo phù hợp với ngữ cảnh pháp lý riêng biệt.
          </li>
          <div className="button-box">
            <a className="button-link" href="https://github.com/DanQuang">
              Nhận tư vấn pháp lý
            </a>
          </div>
        </ul>
      </div>
      <div className="tab-image-content">
        <img src={legal_advice} alt="Tư vấn pháp lý" className="tab-image" />
      </div>
    </div>,
    <div key="4" className="tab-inner-content">
      <div className="tab-text-content">
        <h3>Ghi âm giọng nói - Chúng tôi đang lắng nghe</h3>
        <p>
          Tương tác với Luật sư AI của chúng tôi tự nhiên như khi trò chuyện với một luật sư thực thụ. Tính năng nhận diện giọng nói tiên tiến xử lý chính xác các câu hỏi được nói, cung cấp các thông tin pháp lý và hỗ trợ cần thiết. Dù bạn đang di chuyển hay bận rộn với công việc, hỗ trợ rảnh tay đảm bảo nhu cầu pháp lý của bạn được đáp ứng một cách nhanh chóng và chính xác.
        </p>
        <ul>
          <li>
            Được hỗ trợ bởi các thuật toán NLP tiên tiến, hệ thống của chúng tôi hiểu ngữ cảnh, sắc thái và thuật ngữ pháp lý từ lệnh bằng giọng nói của bạn.
          </li>
          <li>
            Tương tác linh hoạt, hiểu các câu hỏi tiếp nối và thuật ngữ pháp lý phức tạp, mang lại trải nghiệm tự nhiên và tương tác.
          </li>
          <li>
            Sử dụng giọng nói để điều hướng quy trình pháp lý, soạn thảo tài liệu hoặc nhận tư vấn, giúp bạn tiếp cận hỗ trợ pháp lý mà không cần gõ phím.
          </li>
          <div className="button-box">
            <a className="button-link" href="https://github.com/DanQuang">
              Ghi âm giọng nói
            </a>
          </div>
        </ul>
      </div>
      <div className="tab-image-content">
        <img src={voice} alt="Ghi âm giọng nói" className="tab-image" />
      </div>
    </div>,
    <div key="5" className="tab-inner-content">
      <div className="tab-text-content">
        <h3>Phiên tòa giả định - Rèn luyện, Hoàn thiện, Thành công</h3>
        <p>
          Nâng cao kỹ năng pháp lý và chiến lược của bạn với tính năng Phiên tòa giả định tiên tiến. Dù bạn là luật sư chuẩn bị cho một vụ án, sinh viên luật luyện tập tranh luận, hay chuyên gia kinh doanh tìm hiểu về kiện tụng, Luật sư AI của chúng tôi mang đến trải nghiệm mô phỏng phiên tòa thực tế. Bước vào phòng xử án, trình bày vụ việc của bạn, nhận phản hồi và phân tích để tinh chỉnh khả năng pháp lý của mình.
        </p>
        <ul>
          <li>
            Tham gia các kịch bản phiên tòa sống động, bao gồm thẩm phán, bồi thẩm đoàn, nhân chứng và luật sư đối lập, để luyện tập trình bày và lập luận vụ án.
          </li>
          <li>
            Nhận phản hồi tức thì và dựa trên dữ liệu về hiệu suất trong phiên tòa, bao gồm các điểm cần cải thiện, thế mạnh và chiến lược gợi ý để thành công.
          </li>
          <li>
            Tùy chỉnh phiên tòa giả định theo lĩnh vực thực hành pháp lý hoặc nhu cầu học thuật của bạn, đảm bảo phát triển kỹ năng có trọng tâm và nâng cao chuyên môn pháp lý.
          </li>
          <div className="button-box">
            <a className="button-link" href="https://github.com/DanQuang">
              Tham gia Phiên tòa giả định
            </a>
          </div>
        </ul>
      </div>
      <div className="tab-image-content">
        <img src={mock_trial} alt="Phiên tòa giả định" className="tab-image" />
      </div>
    </div>,
  ];

  return (
    <div className="features-container">
      <h2>DỊCH VỤ AI</h2>
      {/* Điều hướng Tabs */}
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
      {/* Nội dung Tabs */}
      <div className="tab-content">{tabContents[activeTab]}</div>
    </div>
  );
}

export default Feature;
