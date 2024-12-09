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

const CervicalCancerScreening = () => {
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
        GÓI TẦM SOÁT UNG THƯ CỔ TỬ CUNG
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
      "GÓI TẦM SOÁT UNG THƯ CỔ TỬ CUNG",
      `
      Tầm soát ung thư cổ tử cung là cách hiệu quả nhất để phát hiện và ngăn chặn ung thư cổ tử cung, căn bệnh gây tử vong hàng đầu trong các loại ung thư ở phụ nữ. 
    `
    )}
    {renderAccessContent(
      2,
      "Vì sao nên thực hiện tầm soát ung thư cổ tử cung",
      `
        <br /> - Ung thư cổ tử cung có thể được điều trị dễ dàng với phương pháp cắt bỏ mô ung thư nếu được phát hiện sớm. Nhưng thực tế, tiên lượng sống sót của bệnh lý này không cao vì thường người bệnh chỉ đến khám khi đã có những triệu chứng rõ ràng, khi đó ung thư đã tiến vào giai đoạn cuối rất khó điều trị.
        <br /> - Việc tầm soát ung thư cổ tử cung định kỳ không chỉ giúp người bệnh phát hiện ung thư, từ đó có pháp đồ điều trị hiệu quả, rút ngắn thời gian điều trị, tốn ít chi phí, tránh được các rủi ro do biến chứng, nâng cao tỷ lệ sống, mà còn giúp người bệnh có kế hoạch phòng tránh ung thư từ những dấu hiệu bất thường của tế bào tại cổ tử cung.
    `
    )}
    {renderAccessContent(
      3,
      "Ai nên thực hiện tầm soát ung thư cổ tử cung",
      `
        <br />- Người nhiễm vi rút HPV;
        <br />- Suy giảm miễn dịch do mắc các bệnh lây qua đường tình dục;
        <br />- Người lạm dụng thuốc lá, thuốc tránh thai trong thời gian dài;
        <br />- Sinh con quá sớm (trước 17 tuổi) hoặc sinh đẻ nhiều lần;
        <br />- Người có tiền sử ung thư hoặc tiền sử gia đình mắc ung thư cổ tử cung;
        <br />- Đặc biệt người có các triệu chứng sau cần đi tầm soát ung thư cổ tử cung ngay: chảy máu âm đạo bất thường, đau vùng chậu, dịch tiết âm đạo nhiều hơn và có màu khác thường, tiểu tiện bất thường, sưng đau ở chân …
    `
    )}
    {renderAccessContent(
      4,
      "Thông tin chi tiết gói tầm soát ung thư cổ tử cung tại Phòng khám Bệnh viện",
      `
        Gói tầm soát ung thư cổ tử cung tại được đội ngũ chuyên môn của Phòng khám Bệnh viện  xây dựng dựa trên nguyên tắc: khoa học, hiệu quả và chính xác. Chi tiết gói khám gồm:
        
        <br />
        <div style="display: flex; justify-content: center; width: 100%"><img alt="img" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731745644/goi-tam-soat-ung-thu-co-tu-cung-1_bnblm0.jpg" /></div>
    `
    )}
    {renderAccessContent(
      5,
      "Giá chi tiết của gói tầm soát ung thư cổ tử cung",
      `
        <br />- Giá áp dụng: 2.300.000đ
    `
    )}
    {renderAccessContent(
      6,
      "Những giá trị cộng thêm khi tầm soát ung thư cổ tử cung tại Phòng khám Bệnh viện",
      `
        <br />- Được thăm khám và nhận tư vấn từ đội ngũ chuyên gia là các Giáo sư, Tiến Sĩ, Bác Sĩ đầu ngành, có chuyên môn cao từ Bệnh viện Đại học Y Dược TP.HCM;
        <br />- Trang thiết bị được đầu tư hiện đại theo chuẩn quốc tế và tương đương với các bệnh viện lớn, giúp bác sĩ có những chẩn đoán chính xác và điều trị hiệu quả;
        <br />- Thời gian chờ đợi ít, bác sĩ thăm khám và tư vấn kỹ lưỡng;
        <br />- Đội ngũ chăm sóc khách hàng tận tình, chu đáo, chuyên nghiệp;
        <br />- Thủ tục đặt hẹn thuận tiện qua tổng đài 1900 6923.
        <br /><i>Lưu ý trước khi đi tầm soát ung thư cổ tử cung:</i>
        <br />- Một số danh mục trong dịch vụ sẽ không áp dụng theo khuyến cáo của Bác sĩ;
        <br />- Trang phục thuận tiện để Bác sĩ có thể thăm khám dễ dàng hơn;
        <br />- Nhịn ăn sáng để thực hiện các xét nghiệm tầm soát ung thư;
        <br />- Không uống các loại nước uống như cà phê, trà, sữa, nước ngọt và nước trái cây, chỉ nên uống một ít nước lọc trước khi đến khám;
        <br />- Không nên hút thuốc và uống bia rượu trong vòng 24 tiếng trước khi đến khám;
        <br />- Người bệnh chỉ nên thực hiện gói tầm soát ung thư sau chu kỳ kinh nguyệt 5 đến 7 ngày;
        <br />- Không quan hệ tình dục, không sử dụng thuốc tránh thai, không bôi kem hoặc sử dụng thuốc đặt âm đạo trong vòng 2-3 ngày trước khi đi tầm soát;
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

export default CervicalCancerScreening;
