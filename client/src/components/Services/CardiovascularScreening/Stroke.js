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

const Stroke = () => {
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
  <Col
    style={{
      margin: "40px 0px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%"
    }}>
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
        GÓI TẦM SOÁT NGUY CƠ ĐỘT QUỴ
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
  </Col>
);

const AccessSection = () => (
  <div>
    {renderAccessContent(
      1,
      "Tại sao nên tầm soát nguy cơ đột quỵ",
      `
      Đột quỵ có thể tấn công sức khỏe của bạn một cách ngẫu nhiên và đôi khi không có dấu hiệu báo trước nào. Có một số đối tượng đã được nghiên cứu chứng minh là sẽ có nguy cơ cao hơn người hình thường như: người bị cao huyết áp, đái tháo đường, Cholesterol cao, người có bệnh lý về tim mạch, hút thuốc lá, tiền sử gia đình có nguy cơ đột quỵ…Do vậy, việc tầm soát nguy cơ đột quỵ là rất cần thiết để có thể phát hiện sớm các yếu tố, nguy cơ giúp bạn có thể kịp thời điều chỉnh lối sống phù hợp và bác sĩ sẽ có những lời khuyên cũng như có phác đồ điều trị bệnh kịp thời nếu bạn có bất kỳ dấu hiệu bất thường nào, tránh các biến chứng nguy hiểm do đột quỵ gây ra.
    `
    )}
    {renderAccessContent(
      2,
      "Những lợi ích nhận được khi thự hiện tầm soát nguy cơ đột quỵ định kỳ",
      `
        <br />- Phát hiện sớm những chỉ số không tốt của cơ thể;
        <br />- Được bác sĩ tư vấn và giải thích cặn kẽ về những dấu hiệu đột quỵ bạn có thể gặp phải;
        <br />- Điều trị kịp thời, tránh các biến chứng nguy hiểm.
    `
    )}
    {renderAccessContent(
      3,
      "Chi tiết gói tầm soát nguy cơ đột quỵ tại Phòng khám Bệnh viện",
      `
      <br />
      <div style="display: flex; justify-content: center; width: 100%"><img alt="img" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731745742/goi-tam-soat-nguy-co-dot-quy-2_sdhybw.jpg"/></div>
      <br />- Chi phí gói tầm soát nguy cơ đột quỵ: 6.000.000đ
    `
    )}
    {renderAccessContent(
      4,
      "Những giá trị công thêm khi thực hiện tầm soát nguy cơ đột quỵ tại Phòng khám Bệnh viện",
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
      "Thông tin chung",
      `
        <br />- Thời gian làm việc: 7h30 đến 16h30 từ thứ 2 đến thứ 7
        <br />- Địa chỉ phòng khám: 20-22 Dương Quang Trung, Phường 12, Quận 10, TP.HCM
        <br /><b>Lưu ý: Giá Gói khám có thể thay đổi theo từng thời điểm mà không báo trước. Quý khách vui lòng liên hệ tổng đài: 1900 6923 để biết thêm thông tin.</b>
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
        style={{ width: "100%" }}
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

export default Stroke;
