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

const MungSinhNhat = () => {
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
      MỪNG SINH NHẬT 6th - TƯNG BỪNG ƯU ĐÃI
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
        Nhân dịp kỷ niệm 6 năm thành lập. Từ ngày 04/03 - 15/04/2024, Phòng khám Bệnh viện  tri ân khách hàng đăng ký sử dụng gói khám sức khỏe tổng quát bất kỳ sẽ nhận được nhiều ưu đãi và nhiều phần quà xinh xắn.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731743656/pngtree-joyful-6th-birthday-gilded-surprise-balloon-and-box-image_13513311_bs0bfd.png" />
        </div>
    `
    )}
  </div>
);

const AccessSection = () => (
  <div>
    {renderAccessContent(
      1,
      "Ưu đãi 10% chi phí gói khám sức khỏe tổng quát Gold và Platinum",
      `
        <br /><a style="text-decoration: underline" href="/kham-suc-khoe-tong-quat-ca-nhan/goi-kham-suc-khoe-tong-quat-vip-gold">1. Gói khám sức khỏe tổng quát Gold:<a></a>
        <br />- Khách hàng nam: 26.500.000đ chỉ còn 23.850.000đ
        <br />- Khách hàng nữ độc thân: 27.000.000đ chỉ còn 24.300.000đ
        <br />- Khách hàng nữ có gia đình: 29.500.000đ chỉ còn 26.550.000đ
        <br />
        <br /><a style="text-decoration: underline" href="/kham-suc-khoe-tong-quat-ca-nhan/goi-kham-suc-khoe-tong-quat-platinum">2. Gói khám sức khỏe tổng quát Platinum:<a></a>
        <br />- Khách hàng nam: 31.000.000đ chỉ còn 27.900.000đ
        <br />- Khách hàng nữ độc thân: 32.000.000đ chỉ còn 28.800.000đ
        <br />- Khách hàng nữ có gia đình: 34.500.000đ chỉ còn 31.050.000đ
    `
    )}
    {renderAccessContent(
      2,
      "Tặng phần quà xinh xắn khi đăng ký gói khám sức khỏe bất kỳ",
      `
      <br />1. Gói khám sức khỏe tổng quát
      <br />- <a style="text-decoration: underline" href="/kham-suc-khoe-tong-quat-ca-nhan/goi-kham-suc-khoe-tong-quat-platinum">Gói khám sức khỏe tổng quát Platinum</a>
      <br />- <a style="text-decoration: underline" href="/kham-suc-khoe-tong-quat-ca-nhan/goi-kham-suc-khoe-tong-quat-vip-gold">Gói khám sức khỏe tổng quát Gold</a>
      <br />- <a style="text-decoration: underline" href="/kham-suc-khoe-tong-quat-ca-nhan/goi-kham-suc-khoe-hau-covid19-chuyen-sau">Gói khám sức khỏe tổng quát Chuyên sâu</a>
      <br />- <a style="text-decoration: underline" href="/kham-suc-khoe-tong-quat-ca-nhan/goi-kiem-tra-hau-suc-khoe-covid19-nang-cao">Gói khám sức khỏe tổng quát Nâng cao</a>
      <br />
      <br />2. Gói khám tầm soát ung thư
      <br />- Tổng quát
      <br />- Phổi
      <br />- Gan 
      <br />- Vú
      <br />- Cổ tử cung
      <br />- Tiêu hóa
      <br />- Dạ dày - thực quản
      <br />Đại trực tràng
      <br />Tuyến giáp
      <br />Vòm họng
      <br />• Gói khám tầm soát đột quỵ
      <br />• Gói khám sức khỏe tiền hôn nhân
      <br />• Gói khám sức khỏe tim mạch - hô hấp
      <br />• Gói khám rối loạn chuyển hóa - thừa cân béo phì
      <br />• Gói khám bổ sung
      <br />- Gói huyết thanh chỉ dấu ung thư
      <br />- Gói huyết thanh chẩn đoán giun sán
    `
    )}
    {renderAccessContent(
      3,
      "Biến chứng nguy hiểm của bệnh gan nhiễm mỡ",
      `
        <br />Khi gan tích tụ quá nhiều mỡ gây ra tình trạng gan nhiễm mỡ, có thể ở giai đoạn đầu, bệnh không gây nguy hiểm và chỉ có thể phát hiện được khi người bệnh tình cờ kiểm tra sức khỏe định kỳ.
        <br />
        <br />Tuy nhiên, về lâu dài, không được điều trị, bệnh gan nhiễm mỡ có thể gây ra biến chứng nguy hiểm, ảnh hưởng đến sức khỏe người bệnh do hệ quả trên rối loạn chức năng gan.
        <br />Tùy theo tình trạng nhu mô gan ứ mỡ ở mức độ nào thông qua kết quả siêu âm, gan nhiễm mỡ có thể được chia thành 3 mức độ là độ I, độ II và độ III.
        <br />
        <br />Ở giai đoạn đầu khi bị gan nhiễm mỡ, phần lớn người bệnh đều cảm thấy khỏe mạnh hoàn toàn, nếu cảm thấy có triệu chứng khó chịu thì thường chúng sẽ không biểu hiện rõ ràng hoặc dễ nhầm lẫn với các tình trạng bệnh lý khác.
        <br />
        <br />Về sau, khi bệnh gan nhiễm mỡ tiến triển, người bệnh có thể cảm thấy bụng tức âm ỉ ở vùng gan, ăn uống khó tiêu, thậm chí chán ăn, buồn nôn, nôn ói và vàng da. Khi đó, gan đã tích tụ một lượng mỡ quá nhiều và đủ lâu để dẫn đến bệnh viêm gan.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742526/ng%C6%B0%E1%BB%9Di-b%E1%BB%8B-gan-nhi%E1%BB%85m-m%E1%BB%A1-c%C3%B3-th%E1%BB%83-b%E1%BB%8B-v%C3%A0ng-da_vndyep.png" />
            <p style="font-size: 13px">Người bị gan nhiễm mỡ có thể bị vàng da</p>
        </div>
        <br />
        <br />Nếu người bệnh gặp phải các triệu chứng bất thường nhưng chủ quan không đi khám có thể khiến tình trạng viêm gan kéo dài gây xơ hóa gan, từ đó chức năng gan bị ảnh hưởng trì trệ.
        <br />Lúc này, người bệnh có thể bị suy kiệt do không thể hấp thu được các chất dinh dưỡng cần thiết cho cơ thể, toàn thân bị phù, báng bụng, khó thở và tràn dịch màn phổi. 
        <br />Ngoài ra, gan cũng không thể loại bỏ chất độc hay điều chỉnh đông máu khiến người bệnh bị chảy máu không cầm được hay dễ bị hôn mê do ảnh hưởng của bệnh não gan.
    `
    )}
    {renderAccessContent(
      4,
      "Thời gian áp dụng chương trình: Từ ngày 4/3/24 - 15/04/2024.",
      `
      <br />
    `
    )}
    {renderAccessContent(
      5,
      "Điều kiện áp dụng chương trình:",
      `
      <br />- Chương trình không áp dụng cho khách thực hiện gói khám sức khoẻ Doanh nghiệp.
      <br />
      <br />- Chương trình không áp dụng cùng lúc với các chương trình khuyến mại khác.
      <br />
      <br />Liên hệ hotline 1900 6923 để đăng ký và được tư vấn chi tiết về chương trình.
      <br />====================
      <br />🏥 PHÒNG KHÁM BỆNH VIỆN 
      <br />20-22 Dương Quang Trung, Phường 12, Quận 10
      <br />☎️ Hotline: 1900 6923
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

export default MungSinhNhat;
