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

const CovidSyndrome = () => {
  return (
    <div className="container mx-auto py-8">
      <HeaderComponent />
      <HeaderSection />
      <AccessSectionHeader />
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
    HỘI CHỨNG HẬU COVID-19 KÉO DÀI BAO LÂU
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

const AccessSectionHeader = () => (
  <div>
    {renderAccessContentHeader(
      `
        <br />
    `
    )}
  </div>
);

const AccessSection = () => (
  <div>
    {renderAccessContent(
      1,
      "Hội chứng hậu Covid-19 kéo dài bao lâu?",
      `
        <br />Cho đến thời điểm hiện nay chưa thể xác định chính xác hội chứng hậu Covid-19 có thể kéo dài bao lâu. Những trường hợp được ghi nhận bị hội chứng hậu Covid-19 kéo dài trong nhiều tuần hoặc nhiều tháng, thậm chí lên đến 9 tháng hoặc lâu hơn.
        <br />Vào đầu tháng 10/2021, Tổ chức Y tế Thế giới (WHO) đã công bố định nghĩa chính thức đầu tiên về hội chứng hậu Covid-19 (post COVID-19 condition). Theo đó, tình trạng hậu Covid-19 xảy ra ở những người có tiền sử nhiễm SARS-CoV-2, thường là 3 tháng kể từ khi bắt đầu nhiễm Covid-19 với các triệu chứng và kéo dài ít nhất 2 tháng mà không thể giải thích bằng chẩn đoán thay thế.
    `
    )}
    {renderAccessContent(
      2,
      "Các triệu chứng thường gặp của hội chứng hậu Covid-19",
      `
        <br />Hầu hết những người bị Covid-19 đều không có triệu chứng hoặc chỉ bị bệnh nhẹ, có thể khỏi bệnh trong 1-2 tuần kể từ khi nhiễm virus SARS-CoV-2. Tuy nhiên, sau khi các triệu chứng Covid-19 giảm bớt, nhiều người vẫn bị một loạt các triệu chứng kéo dài hoặc tái phát. Các triệu chứng thường gặp là:
        <br />
        <br />- Mệt mỏi
        <br />- Khó thở khi gắng sức
        <br />- Ho kéo dài
        <br />- Tim đập nhanh, hồi hộp, đánh trống ngực
        <br />- Hay quên, khó suy nghĩ hoặc tập trung
        <br />- Phát ban, xuất huyết da
        <br />- Khó tiêu, tiêu chảy
        <br />- Biếng ăn
        <br />- Rối loạn giấc ngủ
        <br />- Thay đổi vị giác, khứu giác
        <br />
        <br />Hội chứng hậu Covid-19 cần được lưu ý bởi nó không chỉ gây mệt mỏi thể chất và tinh thần, mà các triệu chứng kéo dài còn ảnh hưởng đến các phổi, tim mạch, thận, não và các cơ quan khác. 
        <br />
        <br />Các biện pháp cho hội chứng hậu Covid-19 bao gồm chăm sóc sức khỏe thông qua chế độ ăn uống, nghỉ ngơi và tập thể dục. Khi các triệu chứng kéo dài sau 4 tuần kể từ khi mắc bệnh thì nên đến bệnh viện để chẩn đoán đúng bệnh và điều trị kịp thời.
    `
    )}
  </div>
);

const renderAccessContentHeader = (content) => (
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

export default CovidSyndrome;
