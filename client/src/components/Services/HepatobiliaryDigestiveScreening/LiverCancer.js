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

const LiverCancer = () => {
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
      GÓI TẦM SOÁT UNG THƯ GAN
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
      "Tại sao bạn nên tầm soát ung thư gan?",
      `
        <br />- Hiện Việt Nam là nước có tỷ lệ nhiễm virus viêm gan B và C cao nhất trong khu vực. Theo báo cáo của Cục Y tế Dự phòng (BYT), Việt Nam có 10 triệu trường hợp nhiễm viêm gan B và gần 1 triệu người nhiễm virus viêm gan C. Điều cần quan tâm là bệnh viêm gan B, C có thể dẫn đến xơ gan, ung thư gan. Do vậy, bạn nên thực hiện tầm soát viêm gan để có thể phát hiện sớm các yếu tố nguy cơ giúp điều trị hiệu quả các bệnh lý về gan.
        <br />- Đa phần người bị ung thư gan là do bị nhiễm virus viêm gan B, C mạn tính. Hiện nay, các bệnh lý về viêm gan đã có thể được phát hiện và điều trị tốt ở giai đoạn sớm nhưng thực tế lại thường được phát hiện và điều trị muộn khiến việc điều trị trở nên khó khăn và tốn kém hơn.
        <br />- Do đó, tầm soát viêm gan thực sự rất quan trọng và mang lại nhiều lợi ích. Việc tầm soát này sẽ giúp Bác sĩ phát hiện bệnh sớm, đánh giá việc tiêm vắc-xin phòng bệnh có hiệu quả hay không….
    `
    )}
    {renderAccessContent(
      2,
      "Những đối tượng cần thực hiện tầm soát ung thư gan",
      `
        <br />- Những người có tiền sử gia đình mắc các bệnh về gan đặc biệt xơ gan, ung thư gan;
        <br />- Những đối tượng đã từng tiếp xúc với người bị nhiễm virus Viêm gan B, C;
        <br />- Sử dụng nhiều đồ uống có cồn;
        <br />- Người bị béo phì, thừa cân;
        <br />- Sống ở môi trường ô nhiễm;
        <br />- Có triệu chứng, mệt mỏi, vàng da.
    `
    )}
    {renderAccessContent(
      3,
      "Thông tin chi tiết Gói khám Tầm soát ung thư gan",
      `
        <br />- Gói khám Tầm soát viêm gan tại Phòng khám Bệnh viện Đại học Y Dược 1 được xây dựng dựa trên nhu cầu thực tế của khách hàng.
        <br />- Khi thực hiện tầm soát viêm gan, khách hàng sẽ được thực hiện các xét nghiệm từ cơ bản đến nâng cao để đánh giá tình trạng hoạt động hiện tại của gan, phát hiện sớm các bệnh lý của gan như: Viêm gan siêu vi B, C, xơ gan, ung thư gan và có những hướng dẫn điều trị kịp thời.
        <br />
        <div style="display: flex; justify-content: center;"><img style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731745959/goi-tam-soat-ung-thu-gan_ya6eli.jpg" /></div>
    `
    )}
    {renderAccessContent(
      4,
      "Lợi ích nhận được khi thực hiện tầm soát viêm gan tại Phòng khám Bệnh viện",
      `
        <br />- Được thăm khám và nhận tư vấn từ đội ngũ chuyên gia là các Giáo sư, Tiến Sĩ, Bác Sĩ đầu ngành, có chuyên môn cao từ Bệnh viện Đại học Y dược TP.HCM;
        <br />- Trang thiết bị được đầu tư hiện đại theo chuẩn quốc tế và tương đương với các bệnh viện lớn, giúp bác sĩ có những chẩn đoán chính xác và điều trị hiệu quả;
        <br />- Thời gian chờ đợi ít, bác sĩ thăm khám và tư vấn kỹ lưỡng;
        <br />- Đội ngũ chăm sóc khách hàng tận tình, chu đáo, chuyên nghiệp;
        <br />- Thủ tục đặt hẹn thuận tiện qua tổng đài 1900 6923
    `
    )}
    {renderAccessContent(
      5,
      "Thông tin Phòng khám Bệnh viện",
      `
        <br />- Thời gian làm việc: 7h30 đến 16h30 từ thứ 2 đến thứ 7
        <br />- Địa chỉ phòng khám: 20-22 Dương Quang Trung, Phường 12, Quận 10, TP.HCM
        <br /><b>Lưu ý: Gói khám chỉ mang tính tham khảo. Khách hàng vui lòng đăng ký gặp Bác sĩ để được tư vấn chi tiết. </b>
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

export default LiverCancer;
