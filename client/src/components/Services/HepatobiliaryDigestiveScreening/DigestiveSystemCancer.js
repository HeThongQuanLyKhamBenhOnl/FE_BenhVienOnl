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

const DigestiveSystemCancer = () => {
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
      GÓI TẦM SOÁT UNG THƯ HỆ TIÊU HÓA
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
      "Ý nghĩa gói tầm soát ung thư hệ tiêu hoá",
      `
      <br />- Tầm soát ung thư hệ tiêu hóa là một tầm soát rất quan trọng.Việc tầm soát ung thư hệ tiêu nên được thực hiện định kỳ hàng năm nhằm phát hiện sớm những dấu hiệu bất thường của hệ tiêu hóa.
      <br />- Gói tầm soát ung thư hệ tiêu hóa nên được thực hiện ở những đối tượng có nguy cơ cao mắc các bệnh về ung thư như: người có tiền sử gia đình có bệnh lý ung thư hệ tiêu hóa, hoặc thường xuyên tiếp xúc với yếu tố nguy cơ, thói quen ăn thực phẩm muối chua, mặn, hút thuốc lá thường xuyên, làm việc trong môi trường ô nhiễm…
      <br />Ngoài ra, theo lời khuyên của các chuyên gia về các bệnh lý của hệ tiêu hóa thì Nam/Nữ ở độ tuổi trên 40 cũng nên đi tầm soát định kỳ để phát hiện sớm bệnh lý ung thư hệ tiêu hóa.
    `
    )}
    {renderAccessContent(
      2,
      "Thông tin chi tiết gói khám tầm soát ung thư hệ tiêu hoá tại Phòng khám Bệnh viện",
      `
        <br />- Liên hệ tổng đài 1900 6923 để biết thông tin chi tiết 
    `
    )}
    {renderAccessContent(
      3,
      "Những giá trị cộng thêm khi thực hiện tầm soát ung thư đường tiêu hóa tại Phòng khám Bệnh viện",
      `
        <br />- Được thăm khám và nhận tư vấn từ đội ngũ chuyên gia là Giáo sư, Tiến sĩ, Bác sĩ đầu ngành, có chuyên môn cao từ Bệnh viện Đại học Y Dược TP. HCM.
        <br />- Trang thiết bị được đầu tư hiện đại theo chuẩn quốc tế và tương đương với các bệnh viện lớn, giúp bác sĩ có những chẩn đoán chính xác và điều trị hiệu quả.
        <br />- Thời gian chờ đợi ít, Bác sĩ thăm khám và tư vấn kỹ lưỡng.
        <br />- Đội ngũ chăm sóc khách hàng tận tình, chu đáo, chuyên nghiệp.
        <br />- Thủ tục đặt hẹn thuận tiện qua tổng đài 1900 6023 (miễn phí cuộc gọi)
    `
    )}
    {renderAccessContent(
      4,
      "Những lưu ý trước khi thực hiện tầm soát ung thư hệ tiêu hóa.",
      `
        <br />- Gói tầm soát ung thư đường tiêu hóa bao gồm nội soi thực quản - dạ dày - tá tràng do đó, quý khách hàng cần nhịn ăn khoảng 6 tiếng trước khi thực hiện, có thể uống nước lọc nhưng với số lượng hạn chế.
        <br />- Nên tránh ăn những thức ăn có nhiều chất xơ như rau trong vài ngày. Có thể ăn thức ăn nhẹ vào buổi tối hôm trước như cháo, soup. Đặc biệt, nếu phải làm nội soi sau 12 giờ trưa, quý khách có thể uống dịch lỏng 6 giờ trước khi tiến hành nội soi như: nước lọc, nước ép táo,…
        <br />- Nên đặt hẹn thực hiện tầm soát ung thư đường tiêu hóa trước qua hotline 1800 6023 để được hướng dẫn cụ thể trước khi tầm soát.
        <br />- Đối với những khách hàng không đủ điều kiện nội soi do các yếu tố về bệnh lý và có chỉ định rõ ràng của bác sĩ sẽ được hoàn tiền phần dịch vụ nội soi.
    `
    )}
    {renderAccessContent(
      5,
      "THÔNG TIN PHÒNG KHÁM BỆNH VIỆN",
      `
        <br />- Thời gian làm việc: 7h30 đến 16h30 từ thứ 2 đến thứ7.
        <br />- Địa chỉ phòng khám: 20-22 Dương Quang Trung, Phường 12, Quận 10, TP.HCM
        <br /><b>Quý khách hàng vui lòng đặt hẹn trước qua hotline 1900 6023 để được phục vụ tốt nhất.</b>
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

export default DigestiveSystemCancer;
