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

const CovidSymptom = () => {
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
    TRIỆU CHỨNG CỦA HỘI CHỨNG HẬU COVID-19 LÀ GÌ?
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
      "Hội chứng hậu Covid-19 là gì?",
      `
        <br />Các triệu chứng của hội chứng hậu Covid-19 kéo dài từ đợt cấp tính trước đó hoặc tái phát sau khi đã khỏi bệnh, kéo dài vài tuần hoặc thậm chí vài tháng. Các triệu chứng này xuất hiện mà không thể giải thích bằng một nguyên nhân nào khác.
    `
    )}
    {renderAccessContent(
      2,
      "Những triệu chứng thường gặp của hội chứng hậu covid-19",
      `
        <br />Hội chứng hậu Covid-19 có thể xảy ra với bất kỳ ai từng nhiễm virus SARS-CoV-2, kể cả những người bị bệnh nhẹ hoặc không có triệu chứng. Đến nay đã ghi nhận được hơn 200 triệu chứng sau Covid-19. Một số triệu chứng thường gặp là:
        <br />
        <br />- Mệt mỏi
        <br />- Đau đầu
        <br />- Khó suy nghĩ hoặc tập trung 
        <br />- Rụng tóc
        <br />- Khó thở
        <br />- Thay đổi vị giác, khứu giác
        <br />- Hụt hơi khi gắng sức
        <br />- Đau nhức cơ khớp
        <br />- Ho, đau họng 
        <br />- Đổ mồ hôi
        <br />- Buồn nôn hoặc nôn
        <br />- Đau hoặc tức ngực
        <br />- Hay quên
        <br />- Ù tai, đau tai
        <br />- Lo lắng
        <br />- Trầm cảm
        <br />- Khó tiêu, tiêu chảy, đau bụng
        <br />- Phát ban, xuất huyết da
        <br />- Tim đập nhanh, hồi hộp, đánh trống ngực (tim đập thình thịch)
        <br />- Sốt không liên tục
        <br />- Rối loạn giấc ngủ
        <br />- Rối loạn căng thẳng sau sang chấn
        <br />- Buồn nôn, khó tiêu, tiêu chảy, đau bụng
        <br />- Chóng mặt 
        <br />- Chán ăn
        <br />-	…
        <br />Một người có thể có một hoặc nhiều triệu chứng, gây ảnh hưởng đến khả năng làm việc, vận động và sinh hoạt bình thường. Các triệu chứng này có thể diễn ra trong một thời gian ngắn hoặc kéo dài trên 9 tháng, thậm chí lâu hơn. Các triệu chứng kéo dài có thể gây ảnh hưởng đến phổi, tim, hệ thống mạch máu, não... và gây ra các vấn đề sức khỏe lâu dài khác. 
        <br />
        <br />Khó để biết được đối tượng nào có thể bị hội chứng hậu Covid-19 sau nhiễm SARS-CoV-2. Do đó cách tốt nhất là phòng ngừa nhiễm bệnh, bao gồm tuân thủ 5K và tiêm chủng vắc xin. Những người đã bị nhiễm Covid-19 nên tăng cường sức khỏe thông qua chế độ ăn uống, tập luyện và nghỉ ngơi.
        <br />Nếu các triệu chứng kéo dài quá 4 tuần kể từ nhiễm bệnh Covid-19, bạn nên đến bệnh viện để được chẩn đoán và điều trị chính xác. Ngoài ra nếu bạn bị rối loạn sức khỏe tâm thần như lo lắng quá mức, trầm cảm, rối loạn căng thẳng sau sang chấn (PTSD)… nên liên hệ với bác sĩ tâm thần kinh
        <br />
        <br />Tham khảo gói khám hậu Covid-19
        <br />
        <br />- <a href="/kham-suc-khoe-tong-quat-ca-nhan/goi-kiem-tra-hau-suc-khoe-covid19-nang-cao">Gói kiểm tra sức khoẻ hậu covid-19 nâng cao</a>
        <br />- <a href="/kham-suc-khoe-tong-quat-ca-nhan/goi-kham-suc-khoe-hau-covid19-chuyen-sau">Gói kiểm tra sức khoẻ hậu covid-19 chuyên sâu</a>
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

export default CovidSymptom;
