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

const HealthCarePlatinum = () => {
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
      GÓI KHÁM SỨC KHOẺ TỔNG QUÁT PLATINUM
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
      "Thông tin về gói khám sức khoẻ tổng quát Platinum tại Phòng khám Bệnh viện",
      `
      <br />- Phòng khám Bệnh viện thiết kế gói khám sức khỏe tổng quát Platinum nhằm đáp ứng nhu cầu kiểm tra toàn diện sức khỏe của bạn và gia đình. Đây là gói khám sức khoẻ Vip với 73 hạng mục từ cơ bản đến chuyên sâu bao gồm:

      <br /><b><i>a. Khám lâm sàng và nhận tư vấn của Bác sĩ chuyên khoa</i></b>
      <br />- Kiểm tra mạch, huyết áp, chiều cao, cân nặng, chỉ số BMI… Sau đó, bác sĩ sẽ khám, kiểm tra và tư vấn các vấn đề về: Nội tổng quát, mắt, tai mũi họng, răng, phụ khoa, tuyến vú, trao đổi bệnh sử và đánh giá các yếu tố, nguy cơ.

      <br /><b><i>b. Chuyên khoa dành cho nữ</i></b>
      <br />- Xét nghiệm mẫu bệnh phẩm tế bào cổ tử cung, soi tươi huyết trắng, soi tươi cổ tử cung, phát hiện nhiễm HPV.

      <br /><b><i>c. Xét nghiệm máu</i></b>
      <br />- Xét nghiệm công thức máu và sinh hóa nhằm phát hiện số lượng và tỷ lệ các thành phần. Thông qua các số liệu phản ánh tình trạng dinh dưỡng và chức năng hoạt động của các cơ quan thận, gan, tụy, dạ dày, đại trực tràng, buồng trứng…; tầm soát khả năng đái tháo đường, viêm khớp, gout, ung thư; có bị nhiễm vi rút, giun sán hoặc ký sinh trùng không…

      <br /><b><i>d. Xét nghiệm nước tiểu</i></b>
      <br />- Tổng phân tích các thông số nước tiểu giúp phát hiện các bệnh lý về thận hoặc viêm nhiễm đường tiết niệu và một số bệnh lý rối loạn chuyển hóa khác.

      <br /><b><i>e. Chẩn đoán hình ảnh và thăm dò chức năng</i></b>
      <br />- Thực hiện nội soi, siêu âm, chụp cắt lớp, chụp cộng hưởng, điện tim nhằm phát hiện và chẩn đoán một số bệnh lý về tai mũi họng,  gan mật, tụy, thận, tử cung, buồng trứng, tiền liệt tuyến…, đánh giá chức năng tim, tình trạng loãng xương…
    `
    )}
    {renderAccessContent(
      2,
      "Bảng giá chi tiết của gói khám sức khỏe tổng quát Platinum",
      `
        <br />- Giá áp dụng cho nữ độc thân: 33.500.000đ
        <br />- Giá áp dụng cho nữ có gia đình: 36.000.000đ
        <br />- Giá áp dụng cho nam: 32.500.000đ
    `
    )}
    {renderAccessContent(
      3,
      "MỘT SỐ LƯU Ý KHI SỬ DỤNG GÓI KHÁM SỨC KHOẺ TỔNG QUÁT PLATINUM TẠI PHÒNG KHÁM BỆNH VIỆN",
      `
        <br />- Trong gói khám sức khoẻ tổng quát Platinum có một số dịch vụ chỉ được xây dựng riêng cho khách hàng nữ, khách hàng nữ đã có gia đình hoặc khách hàng nam;
        <br />- Khách hàng là nữ nếu đang có thai hoặc nghi ngờ có thai vui lòng thông báo ngay cho nhân viên y tế để không chụp X-quang;
        <br />- Khi đi khám nếu cơ thể có bất kỳ dấu hiệu bất thường, bạn vui lòng thông báo ngay với nhân viên y tế để nhận tư vấn và được khám với chuyên khoa phù hợp;
        <br />- Gói khám sức khoẻ tổng quát Platinum thường sẽ được thực hiện từ 02 đến 03 ngày làm việc, do vậy quý khách hàng vui lòng sắp xếp thời gian phù hợp để thuận tiện cho việc thăm khám.
    `
    )}
    {renderAccessContent(
      4,
      "Tại sao nên chọn Phòng khám Bệnh viện để khám sức khoẻ tổng quát định kỳ?",
      `
      <br />- Được thăm khám và nhận tư vấn từ đội ngũ chuyên gia là các Giáo sư, Tiến sĩ, Bác sĩ đầu ngành, có chuyên môn cao;
      <br />- Trang thiết bị được đầu tư hiện đại theo chuẩn quốc tế và tương đương với các bệnh viện lớn, giúp Bác sĩ có những chẩn đoán chính xác và điều trị hiệu quả;
      <br />- Thời gian chờ đợi ít, Bác sĩ thăm khám và tư vấn kỹ lưỡng;
      <br />- Đội ngũ chăm sóc khách hàng tận tình, chu đáo, chuyên nghiệp;
      <br />- Thủ tục đặt hẹn thuận tiện qua tổng đài 1900 6923.
      <br />
      <b>Lưu ý: Giá gói khám có thể thay đổi theo từng thời điểm mà không báo trước.</b>
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

export default HealthCarePlatinum;
