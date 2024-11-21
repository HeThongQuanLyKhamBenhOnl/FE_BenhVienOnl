import React, { useRef } from "react";
import { Row, Col, Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import HeaderComponent from "../../Header/Header";
import FooterComponent from "../../component/Footer";
import "bootstrap/dist/css/bootstrap.css";

// Define news items array for the NewsSection
const newsItems = [
  {
    src: "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731740676/vector-smart-object-1_dlrqa1.png",
    alt: "Tiên phong",
    title: "TIÊN PHONG",
  },
  {
    src: "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731740700/layer-600juykyfu_gybtcl.png",
    alt: "Thấu hiểu",
    title: "THẤU HIỂU",
  },
  {
    src: "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731740719/layer-601_sb3r6p.png",
    alt: "Chuẩn mực",
    title: "CHUẨN MỰC",
  },
  {
    src: "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731740741/layer-602_t2eqrw.png",
    alt: "An toàn",
    title: "AN TOÀN",
  },
];

const CPET = () => {
  return (
    <div>
      <HeaderComponent />
      <HeaderSection />
      <AccessSection />
      <NewsSection />
      <FooterComponent />
    </div>
  );
};

const HeaderSection = () => (
  <Row
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: "50px",
    }}
  >
    <h2 className="text-2xl font-bold text-blue-900">
      ĐO GẮNG SỨC TIM MẠCH - HÔ HẤP (CPET)
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "0.5rem",
        }}
      >
        <span
          style={{
            width: "50px",
            height: "1px",
            backgroundColor: "#a3d1ef",
            margin: "0 10px",
          }}
        ></span>
        <span
          style={{
            fontSize: "1.5rem",
            color: "#73c2ec",
          }}
        >
          ✦
        </span>
        <span
          style={{
            width: "50px",
            height: "1px",
            backgroundColor: "#a3d1ef",
            margin: "0 10px",
          }}
        ></span>
      </div>
    </h2>
  </Row>
);

const AccessSection = () => (
  <div>
    {renderAccessContent(
      1,
      "ĐO GẮNG SỨC TIM MẠCH - HÔ HẤP (CPET)",
      `
        <br />- Đo gắng sức tim mạch hô hấp (CPET: Cardiopulmonary Exercise Testing) là một xét nghiệm đánh giá đồng thời hệ thống tim mạch và hô hấp trong suốt thời gian bạn vận động gắng sức.
        <br />- Đo gắng sức tim mạch hô hấp sẽ giúp phát hiện bạn có bệnh tim mạch hay hô hấp nào tiềm ẩn không khi mà bạn đã được làm các xét nghiệm đánh giá chức năng hô hấp, tim mạch khi nghỉ ngơi không phát hiện được.
        <br />- Sự kết hợp các dữ liệu kết quả về hô hấp, tim mạch và khí máu động mạch sẽ giúp bác sĩ của bạn có nhiều thông tin chẩn đoán và tiên lượng bệnh cho bạn nhất là khi bạn có đồng thời cả bệnh tim và phổi.
    `
    )}
    {renderAccessContent(
      2,
      "KHI NÀO BẠN CẦN ĐO GẮNG SỨC TIM MẠCH HÔ HẤP?",
      `
        Bác sĩ của bạn có thể yêu cầu bạn thực hiện nghiệm pháp gắng sức tim mạch hô hấp khi:
        <br />- Cần đánh giá khả năng gắng sức của bạn.
        <br />- Cần tìm nguyên nhân của khó thở và nguyên nhân của hạn chế gắng sức của bạn.
        <br />- Cần đánh giá chức năng tim mạch, hô hấp trước khi bạn trải qua các phẫu thuật lớn ở vùng bụng hay lồng ngực.
        <br />- Bạn đang có bệnh lý tim mạch như: suy tim, sau phẫu thuật tim mạch.
        <br />- Bạn đang có bệnh lý hô hấp như: bệnh phổi tắc nghẽn mạn tính, bệnh phổi mô kẽ, bệnh mạch máu phổi, xơ phổi.
        <br />- Bạn là vận động viên hay bạn đang tham gia chương trình luyện tập thể lực.
        <br />- Bạn có bệnh lý làm ảnh hưởng tới khả năng tập luyện và có mong muốn tập luyện
    `
    )}
    {renderAccessContent(
      3,
      "NHỮNG LƯU Ý TRƯỚC KHI THỰC HIỆN ĐO GẮNG SỨC TIM MẠCH - HÔ HẤP",
      `
        <br />- Không được ăn trong vòng 2-3 giờ trước khi làm nghiệm pháp.
        <br />- Không được hút thuốc, uống nước giải khát có caffein hoặc rượu trong vòng 12 giờ trước khi làm nghiệm pháp.
        <br />- Vẫn có thể dùng các loại thuốc đang sử dụng nếu bác sĩ không có hướng dẫn gì khác
        <br />- Mang giày thể thao và mặc trang phục phù hợp cho vận động.
        <br />- Mang theo các kết quả điện tim, siêu âm tim, hô hấp ký đã được làm trước đây và toa thuốc hoặc thuốc bạn đang sử dụng.
    `
    )}
    {renderAccessContent(
      4,
      "QUY TRÌNH THỰC HIỆN ĐO GẮNG SỨC TIM MẠCH - HÔ HẤP",
      `
        <br />- Bạn sẽ cần khoảng 45 phút để thực hiện nghiệm pháp bao gồm cả thời gian chuẩn bị và vận động. Thời gian vận động thực sự chỉ khoảng 12 phút. Bạn sẽ đi bộ trên thảm lăn hay đạp xe đạp với cường độ vận động tăng dần theo thời gian.

        <br /><b><i>a. Trước khi thực hiện nghiệm pháp</i></b>
        <br />- Bạn sẽ được bác sĩ thăm khám như nghe tim, phổi, kiểm tra huyết áp xem có bất thường gì cản trở thực hiện nghiệm pháp không.
        <br />- Bác sĩ sẽ xem lại các kết quả điện tim, siêu âm tim, hô hấp ký đã được làm trước đây của bạn và toa thuốc hoặc thuốc bạn đang sử dụng
        <br />- Bác sĩ sẽ hướng dẫn bạn cách vận động trên xe đạp hay thảm lăn và giải thích các thắc mắc của bạn nếu có.
        <br />- Điều dưỡng sẽ gắn các điện cực dán trên da vùng ngực của bạn để theo dõi điện tim.
        <br />- Bạn sẽ được đeo mặt nạ để máy có thể phân tích toàn bộ khí bạn thở ra hay hít vào và để theo dõi hô hấp của bạn khi bạn vận động. Đồng thời tay bạn cũng sẽ được đeo băng quấn huyết áp để theo dõi huyết áp liên tục.

        <br /><b><i>b. Trong khi thực hiện nghiệm pháp</i></b>
        <br />- Bạn sẽ đạp xe đạp hoặc chạy trên thảm lăn với cường độ vận động tăng dần. Các bác sĩ và điều dưỡng sẽ theo dõi bạn liên tục.
        <br />- Bạn sẽ tiếp tục vận động cho đến khi các thông số đạt ngưỡng hoặc khi bạn đã mệt không thể vận động thêm nữa hay bạn có các triệu chứng như đau ngực, chóng mặt, khó thở, … bạn sẽ được dừng nghiệm pháp.

        <br /><b><i>c. Sau khi thực hiện nghiệm pháp</i></b>
        <br />- Sau khi ngưng vận động, bạn sẽ được tháo mặt nạ đeo mặt. Bạn sẽ ngồi yên trên xe đạp hoặc đứng yên trên thảm lăn một khoảng thời gian nữa cho đến khi các thông số huyết áp, nhịp tim của bạn trở lại bình thường. Sau đó bạn sẽ được tháo tất cả điện cực.
    `
    )}
    {renderAccessContent(
      5,
      "NHỮNG NGUY CƠ CÓ THỂ XÂY TRONG QUÁ TRÌNH ĐO GẮNG SỨC TIM MẠCH - HÔ HẤP?",
      `
        Đo gắng sức tim mạch, hô hấp nói chung an toàn và hiếm khi xảy ra biến chứng. Tuy nhiên, trong qúa trình đo có thể gây ra một số biến chứng như: tụt huyết áp kéo dài, hoặc nhịp tim quá chậm, rung thất hoặc nhịp nhanh thất…
    `
    )}
    {renderAccessContent(
      6,
      "KẾT QUẢ TRẢ VỀ KHI ĐO GẮNG SỨC TIM MẠCH - HÔ HẤP ĐƯỢC PHÂN TÍCH NHƯ THẾ NÀO?",
      `
        <br />- Bác sĩ sẽ phân tích kết quả và giải thích cho bạn chức năng tim mạch và hô hấp của bạn có tốt không trong quá trình vận động.
        <br />- Nếu kết quả bất thường bác sĩ sẽ tư vấn bạn cần làm gì tiếp theo.
    `
    )}
    {renderAccessContent(
      7,
      "TẠI SAO NÊN THỰC HIỆN ĐO GẮNG SỨC TIM MẠCH HÔ HẤP TẠI PHÒNG KHÁM BỆNH VIỆN",
      `
        <br />- Đơn vị hô hấp của phòng khám được đầu tư nhiều trang thiết bị hiện đại.
        <br />- Đội ngũ bác sĩ có nhiều năm kinh nghiệm của trường Đại học Y Dược Tp.HCM trực tiếp thăm khám và điều trị
        <br />- Quy trình đặt hẹn nhanh gọn qua tổng đài 1900 6923.
    `
    )}
  </div>
);

const renderAccessContent = (index, title, content) => (
  <Col key={index} className="py-4">
    <Row>
      <h5 className="text-xl font-bold text-blue-900">
        {index}. {title}
      </h5>
    </Row>
    <Row>
      <p
        className="text-justify text-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Row>
  </Col>
);

const NewsSection = () => {
  const carouselRef = useRef(null);

  const handlePrev = () => carouselRef.current.prev();
  const handleNext = () => carouselRef.current.next();

  return (
    <div className="news-section py-8 text-center">
      <h2 className="text-blue-700 font-bold text-2xl mb-4">GIÁ TRỊ CỐT LÕI</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "0.5rem",
        }}
      >
        <span
          style={{
            width: "50px",
            height: "1px",
            backgroundColor: "#a3d1ef",
            margin: "0 10px",
          }}
        ></span>
        <span
          style={{
            fontSize: "1.5rem",
            color: "#73c2ec",
          }}
        >
          ✦
        </span>
        <span
          style={{
            width: "50px",
            height: "1px",
            backgroundColor: "#a3d1ef",
            margin: "0 10px",
          }}
        ></span>
      </div>

      <div style={{ position: "relative" }}>
        <Carousel ref={carouselRef} dots={false}>
          {newsItems.map((item, index) => (
            <div key={index}>
              <Col xs={24} className="text-center">
                <div
                  className="mx-auto mb-4 flex items-center justify-center"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: "#3e73d4",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                    src={item.src}
                    alt={item.alt}
                    className="icon-image"
                  />
                </div>
                <h3 className="text-blue-700 font-bold text-lg">
                  {item.title}
                </h3>
              </Col>
            </div>
          ))}
        </Carousel>
        <Button
          type="text"
          icon={<LeftOutlined />}
          onClick={handlePrev}
          style={{
            position: "absolute",
            top: "50%",
            left: "250px",
            transform: "translateY(-50%)",
          }}
        />
        <Button
          type="text"
          icon={<RightOutlined />}
          onClick={handleNext}
          style={{
            position: "absolute",
            top: "50%",
            right: "250px",
            transform: "translateY(-50%)",
          }}
        />
      </div>
    </div>
  );
};

export default CPET;
