import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

// Import images
import shape49 from "../../assets/shape-49.png";
import shape50 from "../../assets/shape-50.png";
import shape47 from "../../assets/shape-47.png";
import shape48 from "../../assets/shape-48.png";
import shape52 from "../../assets/shape-52.png";
import aboutImage from "../../assets/about.png";
import mockTrialImage from "../../assets/mock-trial.webp";

const About = () => {
  return (
    <div>
      <section className="banner-section">
        <div className="pattern-layer">
          <div style={{ backgroundImage: `url(${shape49})` }}></div>
          <div style={{ backgroundImage: `url(${shape50})` }}></div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div>
                <h2>Về Chúng Tôi</h2>
                <p>
                  Tại Legal Chatbot, sứ mệnh của chúng tôi rất rõ ràng: chúng tôi cam kết trao quyền cho các cá nhân và cộng đồng chưa được phục vụ thông qua việc biến công lý từ một đặc quyền thành một quyền cơ bản.
                  <br />
                  Khẩu hiệu của chúng tôi, <strong>'Công lý không nên là đặc quyền mà phải là quyền cơ bản.'</strong>,
                  nhấn mạnh cam kết vững chắc của chúng tôi trong việc dân chủ hóa quyền tiếp cận công lý. Chúng tôi đạt được điều này bằng cách cung cấp dịch vụ pháp lý AI tiên tiến cho các công tố viên công, các phòng trợ giúp pháp lý, sinh viên luật, các cá nhân không có người đại diện và các văn phòng luật nhỏ.
                  <br />
                  Là một Tổ Chức Phi Lợi Nhuận 501(c)(3), chúng tôi hoạt động với sự minh bạch tuyệt đối, trách nhiệm và tập trung vào sứ mệnh của mình. Chúng tôi nhận thức được vai trò quan trọng mà các công tố viên công và các phòng trợ giúp pháp lý đóng vai trò trong việc đảm bảo quyền tiếp cận công lý công bằng. Chúng tôi cũng cam kết hỗ trợ sinh viên luật, các cá nhân không có người đại diện và các văn phòng luật nhỏ, nhận thức được vai trò không thể thiếu của họ trong cộng đồng.
                  <br />
                  Với sự hỗ trợ của bạn, chúng tôi đang trên hành trình biến công lý trở thành quyền cơ bản của tất cả mọi người. Cùng nhau, chúng ta đang thay đổi thế giới để khẩu hiệu 'Công lý không nên là đặc quyền mà phải là quyền cơ bản' trở thành hiện thực cho tất cả mọi người."
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <figure>
                  <img src={aboutImage} alt="Về Chúng Tôi" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="container">
          <h3>Việc soạn thảo các tài liệu pháp lý có thể mất thời gian và phức tạp.</h3>
          <p>Dịch vụ này giúp bạn tiết kiệm thời gian và công sức, giúp bạn tập trung vào các khía cạnh chiến lược của công việc pháp lý.</p>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6-img">
              <div>
                <figure>
                  <img src={mockTrialImage} alt="Phiên Tòa Giả Định" />
                </figure>
              </div>
            </div>

            <div className="col-lg-6">
                <div className="mission-detail">
                  <h3>Tuyên Bố Sứ Mệnh</h3>
                  <p>
                    Tại Legal Chatbot, sứ mệnh của chúng tôi là trao quyền cho các cá nhân và cộng đồng bằng cách làm cho công lý trở nên dễ tiếp cận đối với tất cả mọi người. Chúng tôi cung cấp dịch vụ pháp lý AI tiên tiến cho các công tố viên công, các phòng trợ giúp pháp lý, sinh viên luật, các cá nhân không có người đại diện và các văn phòng luật nhỏ.
                  </p>
                  <ul>
                    <li>Cơ sở dữ liệu pháp lý phong phú: Cổng thông tin về kiến thức pháp lý</li>
                    <li>Soạn thảo tài liệu dễ dàng: Đơn giản hóa quy trình pháp lý với AI</li>
                    <li>Tư vấn pháp lý: Tư vấn pháp lý ngay lập tức, bất cứ lúc nào</li>
                    <li>Nhận diện giọng nói tiên tiến: Tương tác tự nhiên với AI Luật sư của chúng tôi</li>
                    <li>Phiên Tòa Giả Định: Luyện tập, Hoàn thiện, Thành công</li>
                  </ul>
                  <div>
                    <Link to="/user/dashboard" className="btn">Thử Tư Vấn AI</Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="legal-master-section">
        <div className="container">
          <h3>Legal Master AI:</h3>
          <p>Legal Master AI là trung tâm trong sứ mệnh của chúng tôi, cung cấp một loạt các dịch vụ thiết yếu:</p>

          <h4>1. Cơ sở dữ liệu pháp lý phong phú: Cổng thông tin về kiến thức pháp lý</h4>
          <p>
            Legal Master AI cung cấp một cơ sở dữ liệu pháp lý rộng lớn và cập nhật bao gồm các phán quyết của Tòa án Tối cao, Quy tắc Tố tụng Dân sự Liên bang và các quy tắc cụ thể về tố tụng dân sự và hình sự tại tất cả 50 bang và Washington D.C. Cơ sở dữ liệu này là nguồn tài nguyên quan trọng để nghiên cứu và ra quyết định có cơ sở, cung cấp cho người dùng quyền truy cập vào một phạm vi lớn các thông tin pháp lý. Nó đặc biệt hữu ích cho các chuyên gia pháp lý, nhà nghiên cứu và sinh viên cần dữ liệu pháp lý chi tiết và chính xác.
          </p>

          <h4>2. Soạn thảo tài liệu dễ dàng: Đơn giản hóa quy trình pháp lý với AI</h4>
          <p>
            Soạn thảo các tài liệu pháp lý có thể là một công việc tốn thời gian và phức tạp. Legal Master AI giúp đơn giản hóa quy trình này một cách dễ dàng với công cụ soạn thảo tài liệu bằng AI của mình. Nó đảm bảo rằng các tài liệu không chỉ được soạn thảo chính xác mà còn được tùy chỉnh theo nhu cầu cụ thể của bạn, tuân thủ các quy định mới nhất và sẵn sàng cho bất kỳ sự kiểm tra pháp lý nào. Dịch vụ này giúp bạn tiết kiệm thời gian và công sức, cho phép bạn tập trung vào các khía cạnh chiến lược của công việc pháp lý.
          </p>

          <h4>3. Tư vấn pháp lý: Tư vấn pháp lý ngay lập tức, bất cứ lúc nào</h4>
          <p>
            Việc tiếp cận sự hướng dẫn pháp lý chưa bao giờ dễ dàng hơn thế. Dịch vụ Tư vấn Pháp lý của Legal Master AI cung cấp lời khuyên pháp lý đáng tin cậy, cá nhân hóa và ngay lập tức để giúp bạn giải quyết mọi câu hỏi hoặc tình huống pháp lý. Dựa vào cơ sở dữ liệu khổng lồ và các án lệ hiện hành, AI Luật sư của chúng tôi cung cấp tư vấn pháp lý toàn diện theo yêu cầu. Nói lời tạm biệt với việc chờ đợi các cuộc hẹn, và nhận lời khuyên pháp lý từ các chuyên gia ngay lập tức, 24/7, để đưa ra quyết định thông minh một cách nhanh chóng và tự tin.
          </p>

          <h4>4. Nhận diện giọng nói tiên tiến: Tương tác tự nhiên với AI Luật sư của chúng tôi</h4>
          <p>
            Tương tác với AI Luật sư của chúng tôi một cách tự nhiên như bạn giao tiếp với một luật sư thực thụ. Tính năng nhận diện giọng nói tiên tiến của Legal Master AI có khả năng hiểu và xử lý các câu hỏi bằng giọng nói của bạn, cung cấp những thông tin pháp lý chính xác và sự hỗ trợ ngay lập tức. Được hỗ trợ bởi các thuật toán Xử lý Ngôn ngữ Tự nhiên (NLP) tinh vi, AI có thể hiểu được ngữ cảnh, sắc thái và thuật ngữ pháp lý từ các lệnh giọng nói của bạn. Hỗ trợ này giúp bạn giải quyết nhanh chóng và chính xác các nhu cầu pháp lý.
          </p>

          <h4>5. Phiên Tòa Giả Định: Luyện tập, Hoàn thiện, Thành công</h4>
          <p>
            Rèn luyện kỹ năng và chiến lược pháp lý của bạn với tính năng Phiên Tòa Giả Định của Legal Master AI. Dù bạn là một luật sư đang chuẩn bị cho một vụ án, một sinh viên luật đang luyện tập khả năng biện hộ, hay một chuyên gia kinh doanh muốn hiểu rõ hơn về tố tụng, AI Luật sư của chúng tôi cung cấp một trải nghiệm mô phỏng tòa án thực tế và giá trị. Hãy bước vào phòng xử án, trình bày vụ án của bạn, và nhận phản hồi cùng phân tích để hoàn thiện khả năng pháp lý. Trải nghiệm nhập vai này giúp bạn luyện tập, hoàn thiện và cuối cùng chiến thắng trong đấu trường pháp lý.
          </p>

          <p>
            Năm dịch vụ này cùng nhau chứng tỏ cam kết của Legal Master AI trong việc cung cấp sự trợ giúp pháp lý dễ tiếp cận, hiệu quả và toàn diện trong khi thúc đẩy sự nghiệp công lý thông qua công nghệ AI tiên tiến.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
