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

const MungKhaiTruongGoiGoldVaPlatinum = () => {
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
    MỪNG KHAI TRƯƠNG KHU KHÁM VIP ƯU ĐÃI 10% GÓI KHÁM GOLD VÀ PLATINUM
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
        <br />Tại Phòng khám Bệnh viện , chúng tôi cung cấp dịch vụ y tế không chỉ là “chữa bệnh” mà là “chăm sóc sức khỏe”. Bởi vì có rất nhiều bệnh lý có thể ngăn ngừa được nếu phát hiện kịp thời. Với các gói khám sức khỏe tổng quát toàn diện như Gold và Platinum, chúng tôi nỗ lực giúp bạn khỏe mạnh và giữ cho bạn luôn khỏe mạnh.
        <br />Khu khám VIP được thành lập trên mong muốn đó. Và hơn thế nữa, chúng tôi muốn cung cấp cho khách hàng những trải nghiệm khám bệnh tốt nhất, để việc đi khám bệnh không chỉ là để chữa bệnh, mà còn là một cách để chủ động quan tâm đến sức khỏe của chính bản thân và gia đình. 
        <br />Nhân dịp khai trương khu khám VIP, Phòng khám Bệnh viện  gửi đến khách hàng chương trình ưu đãi giảm giá 10% gói khám Gold và Platinum. Cụ thể:
        <br />
        <br />Gói khám sức khỏe tổng quát Gold:
        <br />
        <br />- Khách hàng nam: 26.500.000đ chỉ còn 23.850.000đ
        <br />- Khách hàng nữ độc thân: 27.000.000đ chỉ còn 24.300.000đ
        <br />- Khách hàng nữ có gia đình: 29.500.000đ chỉ còn 26.550.000đ
        <br />
        <br />Gói khám sức khỏe tổng quát Platinum:
        <br />
        <br />- Khách hàng nam: 31.000.000đ chỉ còn 27.900.000đ
        <br />- Khách hàng nữ độc thân: 32.000.000đ chỉ còn 28.800.000đ
        <br />- Khách hàng nữ có gia đình: 34.500.000đ chỉ còn 31.050.000đ
        <br />
        <br />Thời gian áp dụng chương trình: Từ ngày 23/09 - 22/11/2022.
        <br />
        <br />Gói khám Gold và Platinum thích hợp cho những khách hàng muốn khám sức khỏe một cách toàn diện, đặc biệt những khách hàng lớn tuổi, có bệnh lý nền, với đầy đủ các hạng mục bao gồm:
        <br />
        <br />- Kiểm tra sức khỏe tim mạch
        <br />- Kiểm tra bệnh đái tháo đường
        <br />- Kiểm tra chức năng gan, thận
        <br />- Kiểm tra chức năng hô hấp
        <br />- Khám tai - mũi - họng
        <br />- Kiểm tra bệnh lý xương khớp
        <br />- Kiểm tra chức năng tuyến giáp
        <br />- Tầm soát ung thư
        <br />- Tầm soát nhiễm ký sinh trùng
        <br />- Khám phụ khoa (nữ giới)
        <br />- Kiểm tra mắt
        <br />- Khám răng
        <br />
        <br />Quý khách hàng vui lòng liên hệ hotline 1900 6923 để nhận tư vấn và đặt lịch khám.
        <br />
        <br /><b>* Lưu ý: Chương trình không áp dụng cùng lúc với các chương trình khuyến mại khác.</b>
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

export default MungKhaiTruongGoiGoldVaPlatinum;
