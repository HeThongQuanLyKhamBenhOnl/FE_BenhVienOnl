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

const HealthCareAdvance = () => {
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
        GÓI KHÁM SỨC KHOẺ TỔNG QUÁT NÂNG CAO
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
      "Thông tin về gói khám sức khoẻ tổng quát nâng cao tại Phòng khám Bệnh viện",
      `
        <br />- Gói khám sức khoẻ tổng quát nâng cao tại Phòng khám Bệnh viện  với 37 hạng mục từ cơ bản đến nâng cao được đội ngũ chuyên môn của Phòng khám thiết kế khoa học.
        <br />- Gói khám này có thể bao quát được tình trạng sức khoẻ của bạn giúp phát hiện sớm các bệnh lý để có thể điều trị hiệu quả hơn, giảm thiểu những biến chứng nguy hiểm của bệnh, tiết kiệm chi phí điều trị.
        <br />- Khi sử dụng gói khám sức khoẻ tổng quát nâng cao tại Phòng khám Bệnh viện , khách hàng sẽ được:
        <br />+ Làm các xét nghiệm máu, xét nghiệm nước tiểu, nội soi tai-mũi-họng, điện tim thường (ECG), chụp X-quang, siêu âm bụng tổng quát, siêu âm tuyến giáp, siêu âm tuyến vú 2 bên (đối với nữ), siêu âm doppler màu động mạch cảnh.
        <br />+ Được khám các chuyên khoa: răng-hàm-mặt, mắt, tai-mũi-họng, sản phụ khoa và khám tuyến vú (đối với khách nữ).
        <br />+ Khám và nhận tư vấn với Bác sĩ Nội tổng quát.
    `
    )}
    {renderAccessContent(
      2,
      "Một số lưu ý khi sử dụng gói khám sức khoẻ tổng quát nâng cao tại Phòng khám Bệnh viện",
      `
        <br />- Trong gói khám sức khoẻ tổng quát nâng cao có một số dịch vụ chỉ được xây dựng riêng cho khách hàng nam, nữ độc thân hoặc nữ đã có gia đình;
        <br />- Khách hàng là nữ nếu đang có thai hoặc nghi ngờ có thai vui lòng thông báo ngay cho nhân viên y tế để không chụp X-quang;
        <br />- Khi đi khám nếu cơ thể có bất kỳ dấu hiệu bất thường, bạn vui lòng thông báo ngay với nhân viên y tế để nhận tư vấn và được khám với chuyên khoa phù hợp;
        <br />- Gói khám sức khoẻ tổng quát nâng cao thường sẽ được thực hiện trong vòng 01 buổi, do vậy quý khách hàng vui lòng sắp xếp thời gian phù hợp để thuận tiện cho việc thăm khám;
        <br />- Khi khám sức khoẻ tổng quát tại Phòng khám Bệnh viện , quý khách hàng có thể dễ dàng lựa chọn thêm các dịch vụ tầm soát bổ trợ nếu thấy thực sự cần thiết như: Xét nghiệm dấu ấn ung thư bằng huyết thanh, huyết thanh chuẩn đoán giun sán, nội soi tiêu hoá không đau, đo gắng sức tim mạch-hô hấp (CPET), MRI, CT Scanner…
    `
    )}
    {renderAccessContent(
      3,
      "Chi tiết gói khám sức khoẻ tổng quát nâng cao",
      `
        <br />+ Giá gói áp dụng cho Nam: 3.900.000đ
        <br />+ Giá gói áp dụng cho Nữ độc thân: 4.250.000đ
        <br />+ Giá gói áp dụng cho Nữ có gia đình: 5.300.000đ
    `
    )}
    {renderAccessContent(
      4,
      "Tại sao nên chọn Phòng khám Bệnh viện để khám sức khoẻ tổng quát định kỳ?",
      `
        <br />- Được thăm khám và nhận tư vấn từ đội ngũ chuyên gia là các Giáo sư, Tiến sĩ, Bác sĩ đầu ngành, có chuyên môn cao từ Trường và Bệnh viện Đại học Y Dược TP.HCM;
        <br />- Trang thiết bị được đầu tư hiện đại theo chuẩn quốc tế và tương đương với các bệnh viện lớn, giúp Bác sĩ có những chẩn đoán chính xác và điều trị hiệu quả;
        <br />- Thời gian chờ đợi ít, Bác sĩ thăm khám và tư vấn kỹ lưỡng;
        <br />- Đội ngũ chăm sóc khách hàng tận tình, chu đáo, chuyên nghiệp;
        <br />- Thủ tục đặt hẹn thuận tiện qua tổng đài 1900 6023.
        <br/><b>Lưu ý: Giá gói khám có thể thay đổi theo từng thời điểm mà không báo trước.</b>
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

export default HealthCareAdvance;
