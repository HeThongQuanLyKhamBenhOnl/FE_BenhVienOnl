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

const QuickTestOmicron = () => {
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
        TEST NHANH CÓ PHÁT HIỆN ĐƯỢC OMICRON TÀNG HÌNH KHÔNG?
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
            <img alt="img" style="width: 500px" src="https://i.postimg.cc/htFSpbrm/test-nhanh-co-phat-hien-duoc-omiron-tang-hinh-khong.jpg" />
        </div>
    `
    )}
  </div>
);

const AccessSection = () => (
  <div>
    {renderAccessContent(
      1,
      "Omicron tàng hình là gì?",
      `
        <br />Omicron tàng hình có tên chính thức BA.2 là biến thể phụ của Omicron, hiện đang lây lan rất nhanh và chiếm đa số các trường hợp mắc bệnh Covid-19 mới ở nhiều nước trên thế giới và cả Việt Nam.
    `
    )}
    {renderAccessContent(
      2,
      "Test nhanh có thể phát hiện được Omicron tàng hình không?",
      `
        <br />Các biến thể phụ của Omicron có nhiều đặc điểm tương đồng với biến thể Omicron gốc. Nhưng gần đây BA.2 đang được chú ý hơn cả bởi tốc độ lây lan nhanh với cái tên “Omicron tàng hình” khiến nhiều người nghĩ rằng biến thể phụ này có thể “trốn” được test nhanh Covid-19.
        <br />
        <br />Omicron tàng hình có khả năng lây lan nhanh gấp 1,5 lần biến thể Omicron BA.1 và làm giảm khả năng bảo vệ khỏi nhiễm bệnh của các loại vaccine hiện nay.
        <br />
        <br />Nhiều người có các triệu chứng Covid-19 như đau họng, ho, hắt hơi, sốt nhưng test nhanh nhiều lần vẫn cho ra kết quả âm tính. Đến khi test PCR mới cho ra kết quả dương tính. Các chuyên gia khẳng định, điều này không phải do Omicron “tàng hình” nên test nhanh không ra, mà có thể do một trong các nguyên nhân dưới đây:
        <br />
        <br />- Omicron lây bệnh nhanh nên đôi khi kháng nguyên chưa biểu hiện trong một vài ngày đầu phơi nhiễm, dẫn đến chưa phát hiện được bằng test nhanh.
        <br />- Thao tác lấy mẫu không đúng, thời gian đọc mẫu sai quy định. Đọc kết quả sớm có thể âm tính giả.
        <br />- Một số kit test có độ nhạy kém, không hiệu quả khi tải lượng virus trong cơ thể thấp. Bên cạnh đó là tình trạng kit test giả, nhái, kém chất lượng dẫn đến kết quả xét nghiệm sai.
        <br />
        <br />Trên thực tế, Ocmicron được gọi là tàng hình vì biến thể này không mang đột biến đặc trưng của Omicron. Do đó khi xét nghiệm PCR khó phân biệt được đó là BA.2 hay chủng Delta, chỉ khi giải mã trình tự gen virus mới phát hiện được là Omicron.
    `
    )}
    {renderAccessContent(
      3,
      "Các triệu chứng khi nhiễm Omicron tàng hình BA.2?",
      `
        <br />Theo WHO thì biến thể phụ BA.2 không gây bệnh nặng hơn so với biến thể gốc. Các triệu chứng khi nhiễm Omicron BA.2 tương tự như chủng gốc, với các triệu chứng phổ biến là đau họng, ho, sổ mũi. Nó cũng có thể gây ra:
        <br />
        <br />- Mệt mỏi
        <br />- Chóng mặt
        <br />- Sốt
        <br />- Đau đầu
        <br />- Nhức mỏi cơ thể
        <br />- Nhịp tim nhanh
        <br />- Các triệu chứng đường ruột: buồn nôn, tiêu chảy, đau bụng…
        <br />
        <br />Theo các dữ liệu có sẵn về lây truyền, mức độ nghiêm trọng, tái nhiễm, chẩn đoán, điều trị và tác động của vaccine, nhóm chuyên gia của WHO khẳng định cần xem BA.2 là một biến thể cần quan tâm và các cơ quan y tế công nên giám sát chặt chẽ BA.2 như một dòng phụ của Omicron.
        <br />
        <br />Để chống lại các tác động của biến thể BA.2 thì vaccine vẫn là biện pháp cần thiết để bảo vệ cơ thể chống lại bệnh nặng, giảm trường hợp nhập viện. Bên cạnh đó, cách ly khi bị nhiễm Covid-19, đeo khẩu trang và sát khuẩn tay thì những biện pháp cần được áp dụng.
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

export default QuickTestOmicron;
