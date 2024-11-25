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

const ThroatCancerScreening = () => {
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
      GÓI TẦM SOÁT UNG THƯ VÒM HỌNG
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
      "Vì sao nên thực hiện tầm soát ung thư vòm họng",
      `
      Tầm soát ung thư vòm họng (vòm hầu) cần được thực hiện định kỳ ngay cả khi chưa có triệu chứng nào để kiểm soát các nguy cơ có thể xảy ra, vì đây là một căn bệnh có triệu chứng âm thầm và khả năng di căn xa.
      <br />- Ung thư vòm họng nằm sâu ở vùng đầu cổ, có thể diễn tiến trong một thời gian dài mà không có triệu chứng điển hình nào, dễ bị nhầm lẫn thành các bệnh thông thường khác. Ung thư vòm họng rất nguy hiểm vì nó có khả năng di căn xa, 70-80% sẽ di căn đến gan, phổi.
      <br />- Ung thư vòm họng có thể được điều trị dễ dàng bằng phương pháp xạ trị nếu được phát hiện sớm khi khối u đang khu trú. Việc tầm soát ung thư vòm họng giúp phát hiện ung thư và các dấu hiệu tiền ung thư có thể phát triển thành ung thư, nâng cao hiệu quả điều trị và khả năng khỏi bệnh, đồng thời giúp ngăn chặn biến chứng và khả năng tái phát.
    `
    )}
    {renderAccessContent(
      2,
      "Ai nên thực hiện tầm soát ung thư vòm họng",
      `
        <br />- Người nhiễm vi rút EBV (Epstein – Barr);
        <br />- Người bị bệnh mạn tính đường mũi họng;
        <br />- Người thường xuyên tiếp xúc nhiều với bụi gỗ, khói, formaldehyde, môi trường kém thông khí, hóa chất;
        <br />- Người hút nhiều thuốc, lạm dụng rượu bia; có chế độ ăn thiếu trái cây và rau xanh, ăn nhiều thịt cá ướp muối và đồ lên men;
        <br />- Người có tiền sử ung thư hoặc tiền sử gia đình mắc ung thư vòm họng;
        <br />- Đặc biệt người có các triệu chứng sau cần đi tầm soát ung thư vòm họng ngay: hạch cổ nổi một bên, đau tai, viêm tai, ù tai, sổ mũi, nghẹt mũi, chảy máu mũi, giảm thị lực, đau mặt, nhức đầu, đau họng…
    `
    )}
    {renderAccessContent(
      3,
      "Thông tin chi tiết gói tầm soát ung thư vòm họng tại Phòng khám Bệnh viện",
      `
      Gói khám tầm soát ung thư vòm họng của Phòng khám Bệnh viện  được đội ngũ chuyên môn xây dựng theo nguyên tắc: khoa học, hiệu quả và chính xác. Xem chi tiết gói:
      <br />
      <div style="display: flex; justify-content: center; width: 100%"><img alt="img" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731745686/tam-soat-ung-thu-vom-hong_j9dn0v.jpg" /></div>
    `
    )}
    {renderAccessContent(
      4,
      "Giá chi tiết của gói tầm soát ung thư vòm họng",
      `
        <br />- Giá áp dụng cho cả nam và nữ: 900.000đ ======> <a style="color: blue" href="/dang-ky">ĐĂNG KÝ NGAY</a>
    `
    )}
    {renderAccessContent(
      5,
      "Những giá trị cộng thêm khi tầm soát ung thư vòm họng tại Phòng khám Bệnh viện",
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
      "Lưu ý trước khi đi tầm soát ung thư vòm hầu",
      `
        <br />- Một số danh mục trong dịch vụ sẽ không áp dụng theo khuyến cáo của Bác sĩ;
        <br />- Trang phục thuận tiện để Bác sĩ có thể thăm khám dễ dàng hơn
        <br />- Nhịn ăn sáng để thực hiện các xét nghiệm trong gói tầm soát ung thư;
        <br />- Không uống các loại nước uống như cà phê, trà, sữa, nước ngọt và nước trái cây, chỉ nên uống nước lọc trước khi đến khám;
        <br />- Không nên hút thuốc và uống bia rượu trong vòng 24 tiếng trước khi đến khám;
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

export default ThroatCancerScreening;
