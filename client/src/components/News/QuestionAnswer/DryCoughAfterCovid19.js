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

const DryCoughAfterCovid19 = () => {
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
    TÌNH TRẠNG HO KHAN HẬU COVID-19
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
            <img alt="img" style="width: 500px" src="https://i.postimg.cc/brRQLz8W/tinh-trang-ho-khan-hau-covid-19.jpg" />
        </div>
    `
    )}
  </div>
);

const AccessSection = () => (
  <div>
    {renderAccessContent(
      1,
      "Ho khan trong hội chứng hậu COVID-19",
      `
        <br />Sau khi khỏi bệnh COVID-19, nhiều người vẫn bị ho một thời gian dài sau đó. Nguyên nhân gây ho có thể là do cơ thể đào thải chất tiết, do kích thích trung khu thần kinh đường hô hấp, do có cơ địa dị ứng hoặc bị hen. Cuối cùng có thể là do người bệnh bị trào ngược dạ dày thực quản (có thể do sử dụng nhiều thuốc tây hoặc tình trạng stress) gây ho.
        <br />Tình trạng ho khan hậu covid-19 có thể kéo dài vài tuần rồi sẽ bớt và khỏi hẳn. Cơn ho có thể là ho túc tắc hoặc ho thành cơn sặc sụa. Ho xảy ra sau khi nói chuyện, gắng sức, hít không khí lạnh, hít phải khói bụi, khô họng hoặc cơn ho có thể xảy ra vào ban đêm gây mất ngủ và mệt mỏi. Trong một số trường hợp, ho có thể kéo dài dẫn đến khàn giọng, tắt tiếng, tức ngực, khó thở. 
    `
    )}
    {renderAccessContent(
      2,
      "Một số cách giảm ho khan hậu covid-19",
      `
        <br />Ho sau COVID-19 cũng giống như ho sau cảm cúm, cảm lạnh hoặc nhiễm trùng đường hô hấp do virus khác. Một số cách để giảm ho như:
        <br />- Uống nhiều nước.
        <br />- Uống từng ngụm nước ấm, tránh để khô họng.
        <br />- Áp dụng các bài tập kiểm soát cơn ho: Hít và thở ra bằng mũi một cách chậm rãi cho đến khi hết ho, có động tác nuốt và ngậm miệng, tập thở bụng.
        <br />- Không uống nước đá, tránh hít khói bụi, hạn chế nói chuyện.
        <br />- Sử dụng nước muối ấm súc họng.
        <br />- Uống thuốc giảm ho, siro ho thảo dược hoặc ngậm kẹo ho không đường.
        <br />- Có thể uống thêm trà gừng, trà hoa cúc mật ong, chanh/tắc mật ong.
        <br />- Khi ngủ kê cao đầu hoặc nằm nghiêng để hạn chế cơn ho về đêm.
        <br />- Nghỉ ngơi hợp lý, hạn chế căng thẳng, lo lắng để cơ thể nhanh hồi phục hơn.
    `
    )}
    {renderAccessContent(
      3,
      "Khi nào thì cần đi khám?",
      `
        <br />Sau giai đoạn nhiễm COVID-19 cấp tính, nếu người bệnh bị ho khan kéo dài hơn 03 tuần, ho diễn tiến nặng hơn, hoặc ho kèm theo tức ngực, khó thở thì người bệnh nên đến bệnh viện để khám. 
        <br />
        <br />Chỉ dựa vào triệu chứng thì không thể xác định được nguyên nhân gây ho. Người bệnh cần đi khám để xác định bản thân bị ho do hậu COVID-19 hay do bệnh phổi (viêm phổi, lao phổi) hoặc nguyên nhân khác (dị ứng, hen, trào ngược dạ dày thực quản…).
        <br />
        <br />Tham khảo chi tiết gói kiểm tra sức khoẻ hậu covid-19
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

export default DryCoughAfterCovid19;
