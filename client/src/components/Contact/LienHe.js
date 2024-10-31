import React, { useRef } from "react";
import { Row, Col, Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import HeaderComponent from "../../components/Header/Header";
import FooterComponent from "../../components/component/Footer";

import "bootstrap/dist/css/bootstrap.css";

// Define news items array for the NewsSection
const newsItems = [
  {
    src: "https://umcclinic.com.vn/Data/Sites/1/News/86/vector-smart-object-1.png",
    alt: "Tiên phong",
    title: "TIÊN PHONG",
  },
  {
    src: "https://umcclinic.com.vn/Data/Sites/1/News/87/layer-600juykyfu.png",
    alt: "Thấu hiểu",
    title: "THẤU HIỂU",
  },
  {
    src: "https://umcclinic.com.vn/Data/Sites/1/News/88/layer-601.png",
    alt: "Chuẩn mực",
    title: "CHUẨN MỰC",
  },
  {
    src: "https://umcclinic.com.vn/Data/Sites/1/News/89/layer-602.png",
    alt: "An toàn",
    title: "AN TOÀN",
  },
];

const LienHe = () => {
  return (
    <div className="container mx-auto py-8">
      <HeaderComponent />
      <HeaderSection />
      <AccessSectionHeader />
      {/* <AccessSection /> */}
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
      THÔNG TIN LIÊN HỆ CỦA BỆNH VIỆN
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

const AccessSectionHeader = () => (
  <div>
    {renderAccessContentHeader(
      `
        <br />Liên hệ hotline 1900 6923 để đăng ký và được tư vấn chi tiết về chương trình.
        <br />====================
        <br />🏥 PHÒNG KHÁM BỆNH VIỆN ĐẠI HỌC Y DƯỢC 1
        <br />🌎20-22 Dương Quang Trung, Phường 12, Quận 10
        <br />📮Email: contact.us@umcclinic.com.vn
        <br />🌎 Website: https://umcclinic.com.vn/
        <br />☎️ Hotline: 1900 6923
    `
    )}
  </div>
);

const AccessSection = () => (
  <div>
    {renderAccessContent(
      1,
      "a",
      `
        <br />
    `
    )}
  </div>
);

const renderAccessContentHeader = (content) => (
  <Col className="py-4">
    <Row>
      <p
        style={{ width: "100%" }}
        className="text-center text-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Row>
  </Col>
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

export default LienHe;
