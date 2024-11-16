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

const ReexaminationCovid = () => {
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
    BAO LÂU SAU KHI KHỎI BỆNH CÓ THỂ ĐI KHÁM HẬU COVID-19
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
            <img alt="img" style="width: 500px" src="https://i.postimg.cc/y6SZ1BwH/bao-lau-sau-khi-khoi-benh-co-the-di-kham-hau-covid.jpg" />
        </div>
        <br />Bao lâu sau khi khỏi bệnh có thể đi khám hậu Covid-19 có lẽ là câu hỏi mà rất nhiều F0 đang cần lời giải. Theo lời khuyên của chuyên gia thì sau 4 tuần kể từ khi mắc Covid-19, bạn có thể đi khám để kiểm tra sức khỏe hậu Covid-19. Các xét nghiệm cận lâm sàng giúp đánh giá và chẩn đoán tình trạng các cơ quan, kiểm tra tình trạng viêm và đông máu nhằm điều trị các triệu chứng hậu Covid-19 hiện tại và dự phòng các nguy cơ có thể xảy ra.
        <br />
        <br />Bệnh Covid-19 diễn tiến nặng hơn ở một số người, nhất là người lớn tuổi và có bệnh lý nền. Số còn lại thường chỉ bị bệnh nhẹ và có thể khỏi bệnh sau vài tuần. Thế nhưng hội chứng hậu Covid-19 có thể xảy ra với bất kỳ ai từng bị nhiễm virus SARS-Cov-2, kể cả những người bị Covid-19 nhẹ hoặc không có triệu chứng.
        <br />
        <br />Hội chứng hậu Covid-19 có thể kéo dài từ đợt bệnh ban đầu hoặc khởi phát sau khi đã khỏi bệnh. Có hơn 200 triệu chứng đã được báo cáo bao gồm mệt mỏi, khó thở, rối loạn giấc ngủ, rối loạn chức năng nhận thức hoặc các triệu chứng khác gây ảnh hưởng đến hoạt động hàng ngày. Các triệu chứng có thể thay đổi hoặc tái phát, kéo dài vài tuần hoặc thậm chí là vài tháng.
        <br />
        <br />Covid-19 không chỉ gây tổn thương phổi mà còn gây ảnh hưởng đến tim, hệ thống mạch máu, gan, não và một số cơ quan khác. Đặc biệt là các tổn thương ở bệnh nhân Covid-19 nặng. Một số người có thể bị biến chứng tim, suy thận mạn tính và đột quỵ sau khi bị Covid-19. Chính vì vậy, sau khi khỏi bệnh Covid-19, bạn cần lưu ý các vấn đề sức khỏe tiềm ẩn hoặc các triệu chứng kéo dài của Covid-19.
        <br />
        <br />Bên cạnh đó, bạn cũng nên tăng cường sức khỏe bằng chế độ ăn dinh dưỡng, nhiều rau quả, uống nhiều nước, tập thở để cải thiện hệ hô hấp, ngủ đủ giấc, tập thể dục thường xuyên và nghỉ ngơi hợp lý.
        <br />
    `
    )}
  </div>
);

const AccessSection = () => (
  <div>
    {renderAccessContent(
      1,
      "a",
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

export default ReexaminationCovid;
