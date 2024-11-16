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

const CovidRevinvation = () => {
  return (
    <div className="container mx-auto py-8">
      <HeaderComponent />
      <HeaderSection />
      <AccessSectionHeader />
      {/* <AccessSection /> */}
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
    BẠN CÓ THỂ BỊ TÁI NHIỄM COVID-19 BAO NHIÊU LẦN?
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
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://i.postimg.cc/9fhqSgDq/ban-co-the-bi-tai-nhiem-covid-19-bao-nhieu-lan.jpg" />
        </div>
        <br />
        <br />Sau khi nhiễm covid-19, mặc dù cơ thể đã có kháng thể chống lại virus SARS-CoV-2 nhưng một số người vẫn có thể bị nhiễm lần thứ 2, thứ 3. Điều này phụ thuộc vào khả năng sinh kháng thể ở mỗi người. Thông thường những người có sức khỏe tốt, ăn uống đầy đủ, nghỉ ngơi và rèn luyện hợp lý, không có bệnh lý nền sẽ có ít nguy cơ tái nhiễm hơn. 
        <br />
        <br />Khoảng cách giữa hai lần tái nhiễm cũng không giống nhau. Thậm chí có bệnh nhân nhiễm COVID-19 và đã khỏi bệnh, chỉ hai tháng sau bệnh nhân lại nhiễm COVID-19 một lần nữa. Mặc dù trước đó bệnh nhân đã tiêm đủ 3 liều vaccine ngừa COVID-19. 
        <br />
        <br />Cho đến nay, COVID-19 biến đổi liên tục theo thời gian với sự xuất hiện của nhiều chủng như Alpha, Beta, Gamma, Delta, Omicron... Một người nhiễm chủng này vẫn có thể bị nhiễm chủng khác. Các triệu chứng trong lần tái nhiễm có thể nhẹ hơn hoặc nặng hơn so với lần đầu tùy vào thể trạng của từng người.
        <br />
        <br />Khi biến thể phụ BA.2 của chủng Omicron hoành hành, chiếm đại đa số các ca nhiễm COVID-19, người ta đặt ra câu hỏi liệu những người nhiễm biến thể gốc Omicron có bị nhiễm BA.2 nữa không và ngược lại. Đã có những nghiên cứu xoay quanh vấn đề này, câu trả lời là mặc dù tỷ lệ tái nhiễm rất nhỏ nhưng vẫn có thể xảy ra. 
        <br />
        <br />Đến nay, các nhà nghiên cứu vẫn chưa thể trả lời một người có thể bị tái nhiễm COVID-19 bao nhiêu lần. Nhưng điều có thể dự đoán được là COVID-19 cũng sẽ giống bệnh cúm, có thể tái nhiễm nhiều lần và tiêm vaccine một lần không thể miễn nhiễm cả đời.
        <br />
        <br />Có một điều rõ ràng nữa là những người đã tiêm vaccine phòng COVID-19, mặc dù không thể phòng ngừa lây nhiễm hoàn toàn nhưng sẽ bị bệnh nhẹ hơn, hạn chế nguy cơ phải nhập viên.
        <br />
        <br />Để hạn chế nguy cơ tái nhiễm, chúng ta cần tăng cường sức đề kháng qua việc ăn uống khoa học, nghỉ ngơi kết hợp rèn luyện, ngủ đủ giấc và nhất là đeo khẩu trang để hạn chế lây nhiễm.
        <br />
    `
    )}
  </div>
);

const AccessSection = () => (
  <div>
    {renderAccessContent(
      1,
      "MIS-C là gì?",
      `
        <br />
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

export default CovidRevinvation;
