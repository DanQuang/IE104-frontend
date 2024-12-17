import { useState, useEffect, useCallback } from "react";
import image_robot from "../../assets/image_robot.webp";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Feature from "../Feature/Feature";

function HomePage() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const handleResize = useCallback(() => {
    setIsLargeScreen(window.innerWidth >= 1024);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <>
      <div className="pattern-layer">
        <div
          className="pattern-1"
          style={{ backgroundImage: `url('/src/assets/shape-49.png')` }}
        ></div>
        <div className="pattern-2"></div>
      </div>
      <div className="auto-container">
        <div
          className={`homepage-container ${
            isLargeScreen ? "homepage-container-lg" : ""
          }`}
        >
          {/* Phần Bên Trái: Nội Dung Văn Bản */}
          <div
            className={`text-content ${isLargeScreen ? "text-content-lg" : ""}`}
          >
            <h1
              className={`main-title ${isLargeScreen ? "main-title-lg" : ""}`}
            >
              Hỗ Trợ Pháp Lý{" "}
              <span className="title-highlight">Dựa Trên AI</span> Trong Tầm Tay
            </h1>
            <p className="description-text">
              Dễ dàng vượt qua các rào cản pháp lý phức tạp với chatbot luật sư
              tiên tiến của chúng tôi.
            </p>
            <Link to="/chat">
              <button className="start-button">Bắt Đầu Ngay</button>
            </Link>
          </div>

          {/* Phần Bên Phải: Hình Ảnh */}
          <div
            className={`image-section ${
              isLargeScreen ? "image-section-lg" : ""
            }`}
          >
            <img
              className="chatbot-image"
              src={image_robot}
              alt="Robot cung cấp chatbot pháp lý"
            />
          </div>
        </div>

        <Feature />

        {/* Nội dung động với hiệu ứng chuyển đổi */}
        {/* <div className="tab-content">{tabContents[activeTab]}</div> */}
        <div className="content_block_3_4">
          <div className="content_block_left">
            <div className="image-box">
              <img src="/src/assets/mock-trial.webp" alt="Phiên tòa giả định" />
            </div>
          </div>
          <div className="content_block_right">
            <h3> Tiên Phong Cải Tiến Pháp Lý</h3>
            <h4>Sáng kiến phi lợi nhuận</h4>
            <p>
              Legal Master AI, một sáng kiến tự hào của tổ chức phi lợi nhuận
              Build Champions 501(c)(3), luôn cam kết cung cấp quyền tiếp cận
              pháp lý công bằng cho mọi người. Chúng tôi tin tưởng rằng công lý
              không nên là một đặc quyền mà là một quyền cơ bản. Sứ mệnh của
              chúng tôi là trao quyền cho cá nhân và cộng đồng khó khăn thông
              qua công nghệ AI tiên tiến, giúp thu hẹp khoảng cách pháp lý và
              đảm bảo rằng sự hỗ trợ pháp lý hiệu quả, chính xác và chi phí thấp
              trở thành hiện thực cho tất cả mọi người.
            </p>
            <div className="btn-box">
              <Link to="/chat" className="tab-btn">
                Thử Luật Sư AI
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="content-end">
        <h3>
          Được Tin Cậy Bởi Các Nhà Lãnh Đạo<span> Trong Ngành</span>
        </h3>
        <p>
          Tham gia cùng các công ty luật hàng đầu và doanh nghiệp tận dụng Luật
          Sư AI của chúng tôi để hỗ trợ pháp lý chính xác và hiệu quả.
        </p>
        <div className="inner-container">
          <div
            className="patten-layer"
            style={{ backgroundImage: `url('/src/assets/shape-51.webp')` }}
          >
            <div className="sec-title">
              <h2>
                Hỗ Trợ Pháp Lý <span>Thế Hệ Mới</span> Với AI
              </h2>
            </div>
            <p>Đăng ký hoặc Trải nghiệm Tư vấn AI ngay hôm nay!</p>
            <div className="button-container">
              <Link to="/chat">
                <button className="btn white">Thử Tư Vấn AI</button>
              </Link>
              <Link to="/auth/register">
                <button className="btn white">Tạo Tài Khoản Miễn Phí</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
