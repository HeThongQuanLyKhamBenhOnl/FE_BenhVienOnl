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

const CancerScreeningOverall = () => {
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
      GÓI KHÁM TẦM SOÁT UNG THƯ TỔNG QUÁT
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
      "Vì sao nên thực hiện tầm soát ung thư tổng quát?",
      `
      Ung thư là bệnh lý nguy hiểm, tỷ lệ tử vong rất cao vì phần lớn những ca bệnh khi đến khám ung thư đã tiến vào giai đoạn cuối. Việc tầm soát ung thư tổng quát định kỳ là rất quan trọng để giúp phát hiện bệnh sớm, nâng cao hiệu quả điều trị và tăng khả năng chữa khỏi cho người bệnh.
      <br />- Tầm soát ung thư tổng quát định kỳ không chỉ giúp phát hiện những dấu hiệu ung thư, mà còn phát hiện được những tổn thương tiền ung thư, có nguy cơ phát triển thành ung thư. Từ đó đưa ra các phương pháp điều trị thích hợp. Đây là phương pháp hiệu quả nhất để phát hiện ra các dấu hiệu ung thư ngay cả khi người bệnh chưa có triệu chứng rõ ràng nào.
    `
    )}
    {renderAccessContent(
      2,
      "Những đối tượng cần thực hiện tầm soát ung thư tổng quát?",
      `
        <br />- Người thường xuyên sử dụng bia, rượu, hút thuốc lá;
        <br />- Người mắc bệnh mạn tính về phổi, gan, dạ dày, đại trực tràng…;
        <br />- Người có tiền sử trong gia đình có người thân bị ung thư, nhất là quan hệ cận huyết;
        <br />- Người có chế độ ăn uống thiếu khoa học, sinh hoạt rối loạn, ít vận động, thường xuyên căng thẳng, mệt mỏi…
    `
    )}
    {renderAccessContent(
      3,
      "Thông tin chi tiết gói Tầm soát ung thư tổng quát tại Phòng khám Bệnh viện",
      `
      Gói khám tầm soát ung thư tổng quát của Phòng khám Bệnh viện Đại học Y Dược 1 được đội ngũ chuyên môn xây dựng theo nguyên tắc: Khoa học, hiệu quả, có tính thực tiễn cao, tiết kiệm chi phí cho khách hàng. Khi thực hiện gói khám này khách hàng có thể linh hoạt lựa chọn thêm các dịch vụ khác tại Phòng khám.
      <br />
      <div style="display: flex; justify-content: center; width: 100%"><img alt="img" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731745529/1_jzbhyz.jpg" /></div>
      <div style="display: flex; justify-content: center; width: 100%"><img alt="img" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731745540/2_fsjfxq.jpg" /></div>
      <div style="display: flex; justify-content: center; width: 100%"><img alt="img" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731745536/3_qm1gpb.jpg" /></div>
    `
    )}
    {renderAccessContent(
      4,
      "Giá chi tiết của Gói khám tầm soát ung thư tổng quát",
      `
        <br />a. Giá áp dụng cho nữ độc thân dưới 60 tuổi: 10.500.000đ
        <br />b. Giá áp dụng cho nữ độc thân trên 60 tuổi: 10.900.000đ
        <br />c. Giá áp dụng cho nữ có gia đình dưới 60 tuổi: 12.500.000đ
        <br />d. Giá áp dụng cho nữ có gia đình trên 60 tuổi: 12.900.000đ
        <br />e. Giá áp dụng cho nam dưới 60 tuổi: 9.900.000đ
        <br />f. Giá áp dụng cho nam trên 60 tuổi: 10.300.000đ
    `
    )}
    {renderAccessContent(
      5,
      "Những giá trị cộng thêm khi sử dụng dịch vụ tại Phòng khám Bệnh viện",
      `
        <br />- Được thăm khám và nhận tư vấn từ đội ngũ chuyên gia là các Giáo sư, Tiến Sĩ, Bác Sĩ đầu ngành, có chuyên môn cao từ Bệnh viện Đại học Y dược TP.HCM;
        <br />- Trang thiết bị được đầu tư hiện đại theo chuẩn quốc tế và tương đương với các bệnh viện lớn, giúp bác sĩ có những chẩn đoán chính xác và điều trị hiệu quả;
        <br />- Thời gian chờ đợi ít, bác sĩ thăm khám và tư vấn kỹ lưỡng;
        <br />- Đội ngũ chăm sóc khách hàng tận tình, chu đáo, chuyên nghiệp;
        <br />- Thủ tục đặt hẹn thuận tiện qua tổng đài 1900 6923.
    `
    )}
    {renderAccessContent(
      6,
      "Lưu ý trước khi thực hiện Tầm soát ung thư tổng quát",
      `
        <br />- Một số danh mục trong dịch vụ sẽ không áp dụng theo khuyến cáo của Bác sĩ;
        <br />- Sử dụng trang phục thuận tiện để Bác sĩ có thể thăm khám dễ dàng;
        <br />- Nhịn ăn sáng để thực hiện các xét nghiệm trong gói tầm soát ung thư;
        <br />- Không uống các loại nước uống như cà phê, trà, sữa, nước ngọt và nước trái cây, chỉ nên uống nước lọc trước khi đến khám;
        <br />- Không nên hút thuốc và uống bia rượu trong vòng 24 tiếng trước khi đến khám;
        <br />- Đối với phụ nữ, chỉ nên thực hiện gói tầm soát ung thư sau chu kỳ kinh nguyệt 5 đến 7 ngày.
        <br /><b>Lưu ý: Giá gói khám có thể thay đổi tuỳ thời điểm mà không cần báo trước.</b>
        <br />
        <br /><h5 style="color: blue"><b>PHÒNG KHÁM BỆNH VIỆN</b></h5>
        <br /> Địa chỉ: 20-22 Dương Quang Trung, Phường 12, Quận 10
        <br /> Hotline: 1900 6923
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

export default CancerScreeningOverall;
