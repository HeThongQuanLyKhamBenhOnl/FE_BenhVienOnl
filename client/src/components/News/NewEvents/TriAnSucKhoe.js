import React, { useRef } from "react";
import { Row, Col, Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import HeaderComponent from "../../Header/Header";
import FooterComponent from "../../component/Footer";
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

const TriAnSucKhoe = () => {
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
    5 NĂM VÌ SỨC KHOẺ NGÀN QUÀ TẶNG TRI ÂN
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
      `
        <br />Nhân kỷ niệm 5 năm thành lập Phòng khám Bệnh viện, ưu đãi và tặng nhiều phần quà xinh xắn cho tất cả các khách hàng đăng ký gói khám sức khỏe bất kỳ.
        <br />- Ưu đãi 10% chi phí gói khám sức khỏe tổng quát Gold và Platinum
        <br />
        <br />• Gói khám sức khỏe tổng quát Gold:
        <br />- Khách hàng nam: 26.500.000đ chỉ còn 23.850.000đ
        <br />- Khách hàng nữ độc thân: 27.000.000đ chỉ còn 24.300.000đ
        <br />- Khách hàng nữ có gia đình: 29.500.000đ chỉ còn 26.550.000đ
        <br />
        <br />• Gói khám sức khỏe tổng quát Platinum:
        <br />- Khách hàng nam: 31.000.000đ chỉ còn 27.900.000đ
        <br />- Khách hàng nữ độc thân: 32.000.000đ chỉ còn 28.800.000đ
        <br />- Khách hàng nữ có gia đình: 34.500.000đ chỉ còn 31.050.000đ
        <br />
        <br />Tặng phần quà xinh xắn khi đăng ký gói khám sức khỏe bất kỳ
        <br />
        <br />• Gói khám sức khỏe tổng quát
        <br />- Gói khám sức khỏe tổng quát Platinum
        <br />- Gói khám sức khỏe tổng quát Gold
        <br />- Gói khám sức khỏe tổng quát Chuyên sâu
        <br />- Gói khám sức khỏe tổng quát Nâng cao
        <br />- Gói khám sức khỏe tổng quát Cơ bản
        <br />• Gói khám tầm soát ung thư
        <br />- Tổng quát
        <br />- Phổi
        <br />- Gan 
        <br />- Vú
        <br />- Cổ tử cung
        <br />- Tiêu hóa
        <br />- Dạ dày - thực quản
        <br />- Đại trực tràng
        <br />- Tuyến giáp
        <br />- Vòm họng
        <br />
        <br />• Gói khám tầm soát đột quỵ
        <br />• Gói khám sức khỏe tiền hôn nhân
        <br />• Gói khám sức khỏe tim mạch - hô hấp
        <br />• Gói khám rối loạn chuyển hóa - thừa cân béo phì
        <br />• Gói khám bổ sung
        <br />- Gói huyết thanh chỉ dấu ung thư
        <br />- Gói huyết thanh chẩn đoán giun sán
        <br />
        <br />Thời gian áp dụng chương trình: Từ ngày 27/02 - 27/04/2023.
        <br />
        <br />* Điều kiện áp dụng chương trình:
        <br />- Chương trình không áp dụng cho khách thực hiện gói khám sức khoẻ Doanh nghiệp.
        <br />- Chương trình không áp dụng cùng lúc với các chương trình khuyến mại khác.
        <br />
        <br />  Liên hệ tổng đài 1900 6923 để đăng ký và được tư vấn chi tiết về chương trình.
    `
    )}
  </div>
);

const renderAccessContent = (content) => (
  <Col className="py-4">
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

export default TriAnSucKhoe;
