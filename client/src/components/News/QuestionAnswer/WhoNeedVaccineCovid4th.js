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

const WhoNeedVaccineCovid4th = () => {
  return (
    <div>
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
    AI CẦN TIÊM VACCINE COVID 19 MŨI 4?
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
            <img alt="img" style="width: 500px" src="https://i.postimg.cc/90W6n2hN/ai-can-tiem-vaccine-covid-19-mui-4.jpg" />
        </div>
    `
    )}
  </div>
);

const AccessSection = () => (
  <div>
    {renderAccessContent(
      1,
      "Ai cần tiêm vaccine covid-19 mũi 4?",
      `
        <br />Vaccine Covid-19 mũi thứ 4 chính là liều nhắc lại, được sử dụng để củng cố miễn dịch cho các nhóm đối tượng có yếu tố nguy cơ mắc bệnh Covid-19 nặng hoặc có nguy cơ cao tiếp xúc với bệnh nhân Covid-19.
    `
    )}
    {renderAccessContent(
      2,
      "Đối tượng tiêm vaccine Covid-19 mũi 4?",
      `
        <br />Theo hướng dẫn của Bộ Y tế, đối tượng tiêm liều nhắc lại là người từ 18 tuổi, đã tiêm đủ liều cơ bản hoặc bổ sung, ưu tiên các đối tượng:
        <br />- Có bệnh nền
        <br />- Cần được chăm sóc dài hạn tại cơ sở y tế
        <br />- Từ 50 tuổi trở lên
        <br />- Người trực tiếp xét nghiệm, chăm sóc, điều trị bệnh nhân Covid-19
        <br />- Nhân viên y tế
        <br />
        <br />
          <div style="display: flex;
                      justify-content: center;
                      width: 100%;
                      align-items: center;
                      flex-direction: column;">
              <img alt="img" style="width: 500px" src="https://www.umcclinic.com.vn/Data/Sites/1/media/h%E1%BB%8Fi-%C4%91%C3%A1p-y-khoa/covid-19/ai-c%E1%BA%A7n-ti%C3%AAm-vaccine-covid-19-m%C5%A9i-4/nguoi-lon-tuoi-la-doi-tuong-tiem-mui-4-vaccine-covid-19.jpg" />
              <p style="font-size: 13px">Người lớn tuổi là đối tượng tiêm mũi 4 vaccine Covid-19</p>
          </div>
        <br />
    `
    )}
    {renderAccessContent(
      3,
      "Vaccine Covid-19 liều nhắc lại là loại nào?",
      `
        <br />Nếu các mũi tiêm cơ bản hoặc bổ sung cùng loại vaccine thì tiêm mũi nhắc lại bằng vaccine cùng loại đó hoặc vaccine mRNA. Nếu các mũi tiêm trước đó là loại vaccine khác nhau thì tiêm mũi nhắc lại bằng vaccine mRNA
        <br />
        <br />Bộ Y tế hướng dẫn thêm, nếu tiêm liều cơ bản hoặc bổ sung là vaccine Vero Cell thì tiêm nhắc lại cùng loại đó hoặc vaccine mRNA, hoặc vaccine vector virus (AstraZeneca).
    `
    )}
    {renderAccessContent(
      4,
      "Thời gian tiêm vaccine Covid-19 mũi 4?",
      `
        <br />Mũi nhắc lại được tiêm sau 3 tháng kể từ ngày tiêm liều cuối cùng (trước đó Bộ Y tế hướng dẫn 6 tháng).
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

export default WhoNeedVaccineCovid4th;
