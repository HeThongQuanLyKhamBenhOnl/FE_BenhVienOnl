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

const NgayDanSoTheGioi = () => {
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
      NGÀY DÂN SỐ THẾ GIỚI 11 THÁNG 7
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
        <br />“Tư vấn, khám sức khỏe trước khi kết hôn vì hạnh phúc mỗi cá nhân, gia đình, vì sự phồn vinh của đất nước”
        <br />
        <br />Ngày Dân số Thế giới 11.07 hàng năm là lời nhắc nhở mỗi quốc gia và mỗi người trên trái đất về nguy cơ bùng nổ dân số.Bùng nổ dân số quá nhanh khiến đời sống con người gặp nhiều khó khăn – là căn nguyên khởi sinh của nhiều vấn đề trong xã hội, kìm hãm sự phát triển kinh tế. 
        <br />
        <br />Hãy cùng nhau hành động tích cực trong việc giảm gia tăng dân số, nâng cao chất lượng cuộc sống, chăm sóc sức khỏe tốt hơn ngay từ bước đầu bằng cách tư vấn, khám sức khỏe trước khi kết hôn.
        <br />
        <br />Các chuyên gia y tế khuyến cáo, các cặp đôi nên đi tư vấn, khám sức khỏe trước khi kết hôn tối thiểu là 3 - 6 tháng để có nhiều thời gian chuẩn bị hơn. 
        <br />
        <br />Việc tư vấn, khám sức khỏe trước khi kết hôn mang lại nhiều lợi ích thiết thực như:
        <br />
        <br />- Giúp người chuẩn bị kết hôn có những kiến thức hữu ích nhất để khởi đầu cuộc sống hôn nhân và tình dục khỏe mạnh, an toàn. 
        <br />
        <br />- Phòng ngừa, phát hiện sớm và điều trị kịp thời bệnh tật như các bệnh lây nhiễm qua đường tình dục.
        <br />
        <br />- Dự phòng và điều trị những bệnh lý tiềm ẩn, giúp cho việc mang thai và sinh nở thuận lợi; 
        <br />
        <br />- Giúp tránh được một số dị tật bẩm sinh cho con cái trong tương lai. 
        <br />
        <br />Người được tư vấn, khám sức khỏe trước khi kết hôn sẽ được hướng dẫn các biện pháp Kế hoạch hóa gia đình phù hợp nhất, kiểm soát việc mang thai và sinh nở, tránh tình trạng nạo phá thai do mang thai ngoài ý muốn. 
        <br />====================
        <br />🏥 PHÒNG KHÁM BỆNH VIỆN
        <br />20-22 Dương Quang Trung, Phường 12, Quận 10
        <br />📮Email: contact.us@umcclinic.com.vn
        <br />🌎 Website: https://umcclinic.com.vn/
        <br />☎️ Hotline: 1900 6923
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

export default NgayDanSoTheGioi;
