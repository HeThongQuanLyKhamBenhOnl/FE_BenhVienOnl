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

const RiskOfSevereCovidIllness = () => {
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
        AI CÓ NGUY CƠ MẮC BỆNH COVID-19 NẶNG?
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
            <img alt="img" style="width: 500px" src="https://i.postimg.cc/QN0wXXHw/ai-co-nguy-co-mac-benh-covid-19-nang.jpg" />
        </div>
    `
    )}
  </div>
);

const AccessSection = () => (
  <div>
    {renderAccessContent(
      1,
      "Đối tượng có nguy cơ mắc bệnh Covid-19 nặng?",
      `
        <br />Các triệu chứng của bệnh Covid-19 ở mỗi người không giống nhau. Một số người không có triệu chứng gì, trong khi một số người khác bị bệnh nặng ảnh hưởng nghiêm trọng đến sức khỏe. 
        <br />
        <br />Người lớn tuổi, người có bệnh lý nền và người bị suy giảm hệ miễn dịch là những đối tượng có nguy cơ mắc bệnh nặng hơn nếu nhiễm virus SARS-CoV-2. Bệnh nặng có nghĩa là khi bị Covid-19 có thể phải: nhập viện, cần chăm sóc đặc biệt, phải dùng máy để thở hoặc thậm chí là tử vong. Một người có nguy cơ bị Covid-19 nặng hơn khi số lượng bệnh nền mà họ mắc phải nhiều hơn.
        <br />
        <br />Các tình trạng có thể khiến một người có nguy cơ mắc bệnh Covid-19 nặng hơn là:
        <br />
        <br />- Trên 50 tuổi;
        <br />- Bệnh ung thư đã điều trị trong vòng 5 năm trở lại đây;
        <br />- Bệnh thận mạn tính, bao gồm bệnh nhân phải lọc máu;
        <br />- Bệnh gan mạn tính như bệnh gan liên quan đến rượu, gan nhiễm mỡ không do rượu, viêm gan, xơ gan,…
        <br />- Bệnh phổi mạn tính như hen suyễn, giãn phế quản, bệnh phổi tắc nghẽn mạn tính,…
        <br />- Bệnh về tim như suy tim, bệnh mạch vành, bệnh cơ tim, tăng huyết áp…
        <br />- Xơ nang;
        <br />- Bệnh thần kinh mạn tính;
        <br />- Bệnh đái tháo đường tuýp 1 hoặc tuýp 2;
        <br />- Hội chứng Down;
        <br />- Nhiễm HIV;
        <br />- Tình trạng suy giảm miễn dịch nguyên phát và thứ phát do điều trị hóa trị, cấy ghép tạng hoặc sử dụng một số loại thuốc,…
        <br />- Bệnh lý huyết học như thalassemia và thiếu máu hồng cầu hình liềm;
        <br />- Bệnh mạch máu não;
        <br />- Rối loạn sức khỏe tâm thần như: trầm cảm, tâm thần phân liệt,…
        <br />- Béo phì (mức BMI trên 30);
        <br />- Trẻ em mắc các bệnh lý di truyền hoặc chuyển hóa;
        <br />- Phụ nữ mang thai
        <br />
        <br />Các tình trạng trên đây không xếp theo thứ tự nguy cơ và cũng không phải là tất cả các tình trạng có thể làm cho bệnh Covid-19 diễn tiến nặng hơn.
        <br />
        <br />Những đối tượng có nguy cơ mắc bệnh Covid-19 nặng cũng là những đối tượng có nguy cơ bị hội chứng hậu Covid-19. Do đó, sau khi khỏi bệnh Covid-19, những đối tượng này cần có kế hoạch theo dõi và phục hồi sức khỏe, cũng như đi khám nếu các triệu chứng Covid-19 kéo dài không thuyên giảm.
    `
    )}
    {renderAccessContent(
      2,
      "Phòng ngừa Covid-19 cho người có nguy cơ cao",
      `
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://www.umcclinic.com.vn/Data/Sites/1/media/h%E1%BB%8Fi-%C4%91%C3%A1p-y-khoa/covid-19/ai-c%C3%B3-nguy-c%C6%A1-m%E1%BA%AFc-b%E1%BB%87nh-covid-19-n%E1%BA%B7ng/nguoi-lon-tuoi-co-nguy-co-mac-benh-covid-19-nang.jpg" />
            <p style="font-size: 13px">Người lớn tuổi có nguy cơ mắc bệnh Covid-19 nặng</p>
        </div>
        <br />
        <br />Kể từ khi vaccine được phổ biến trên toàn cầu, tỷ lệ người bị bệnh nặng và tử vong do Covid-19 đã giảm đáng kể. Tuy nhiên những đối tượng có nguy cơ mắc bệnh nặng cần có hành động để tự bảo vệ chính mình, chẳng hạn như:
        <br />
        <br />- Đảm bảo tiêm đủ các liều vaccine theo cập nhật của Bộ Y tế.
        <br />- Đeo khẩu trang khi đi đến nơi công cộng.
        <br />- Rửa tay thường xuyên, tránh chạm tay vào mắt, mũi và miệng.
        <br />- Tránh tiếp xúc gần với người đang nhiễm bệnh.
        <br />- Quản lý tốt các bệnh lý hiện có.
        <br />- Có chế độ ăn uống, nghỉ ngơi và rèn luyện hợp lý.
        <br />- Chú ý theo dõi sức khỏe hàng ngày và liên hệ với cơ sở y tế khi cần thiết.
        <br />
        <br />Để bảo vệ nhóm đối tượng có nguy cơ cao bị bệnh Covid-19 nặng, mọi người và đặc biệt là gia đình cần quan tâm hơn đến sức khỏe của người thân, cũng như thực hiện tốt các biện pháp phòng tránh lây nhiễm.
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

export default RiskOfSevereCovidIllness;
