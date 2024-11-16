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

const ListRules = () => {
  return (
    <div className="container mx-auto py-8">
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
      LUẬT KHÁM CHỮA BỆNH 2023 (15.2023.QH15)
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
      "LUẬT KHÁM CHỮA BỆNH 2023 (15.2023.QH15)",
      `
        Ngày 09/01/2023, Quốc Hội Quốc hội nước Cộng hòa xã hội chủ nghĩa Việt Nam khóa XV, trong kỳ họp bất thường lần thứ 2 đã thông qua Luật Khám bệnh, chữa bệnh.
        <br />
        <br />Trong luật này, quy định về:
        <br />- Quyền, nghĩa vụ của người bệnh; 
        <br />- Yêu cầu, quyền, nghĩa vụ của người hành nghề khám bệnh, chữa bệnh; 
        <br />- Yêu cầu, quyền và trách nhiệm của cơ sở khám bệnh, chữa bệnh; 
        <br />- Chuyên môn kỹ thuật trong khám bệnh, chữa bệnh; 
        <br />- Khám bệnh, chữa bệnh bằng y học cổ truyền và kết hợp y học cổ truyền với y học hiện đại; 
        <br />- Khám bệnh, chữa bệnh nhân đạo, không vì mục đích lợi nhuận; 
        <br />- Chuyển giao kỹ thuật chuyên môn về khám bệnh, chữa bệnh; 
        <br />- Áp dụng kỹ thuật mới, phương pháp mới và thử nghiệm lâm sàng;
        <br />- Sai sót chuyên môn kỹ thuật;
        <br />- Điều kiện bảo đảm hoạt động khám bệnh, chữa bệnh; 
        <br />- Huy động, điều động nguồn lực phục vụ công tác khám bệnh, chữa bệnh trong trường hợp xảy ra thiên tai, thảm họa, dịch bệnh truyền nhiễm thuộc nhóm A hoặc tình trạng khẩn cấp.

        <br />Xem chi tiết: <a style="font-size: 1.2rem; color: blue" href="https://umcclinic.com.vn/Data/Sites/1/media/h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-kh/Th%C3%B4ng%20tin%20tham%20kh%E1%BA%A3o/lu%E1%BA%ADt%20kh%C3%A1m%20ch%E1%BB%AFa%20b%E1%BB%87nh%202023/2.1.%20Luat%20KBCB%2015.2023.QH15.pdf">2.1. Luat KBCB 15.2023.QH15.pdf</a>
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

export default ListRules;
