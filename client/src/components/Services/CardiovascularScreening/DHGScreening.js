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

const DHGScreening = () => {
  return (
    <div>
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
      GÓI TẦM SOÁT ĐÁI THÁO ĐƯỜNG, RỐI LOẠN MỠ MÁU VÀ GÚT
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
      1,
      "Tại sao bạn nên tầm soát đái tháo đường, rỗi loại mỡ máu và Gút?",
      `
      - Tăng cholesterol, triglycerid, đường trong máu là các yếu tố nguy cơ gây ra các bệnh lý tim mạch, đái tháo đường và một số biến chứng nguy hiểm như đột quỵ, nhồi máu cơ tim…Tăng acid uric máu dễ dẫn đến bệnh gút, lâu dài có thể ảnh hưởng đến thận và các cơ quan khác.
      <br />- Hiện nay, lối sống tĩnh tại ít vận động, khẩu phần ăn chưa hợp lý, ít rau xanh, nhiều chất bột đường, chất béo, nhiều muối, nhiều loại thức ăn nhanh…có thể làm tăng nguy cơ dẫn đến các rối loạn trên.
      <br />- Việc tầm soát đái tháo đường, rối loạn mỡ máu và gút định kỳ giúp bạn có thể phát hiện sớm các yếu tố nguy cơ gây bệnh nhằm có biện pháp ngăn chặn và điều trị bệnh sớm, tránh gặp phải những biến chứng nguy hiểm.
    `
    )}
    {renderAccessContent(
      2,
      "Những đối tượng nào nên tầm soát đái tháo đường, rỗi loại mỡ máu và Gút",
      `
        <br />- Nam giới sau 40 tuổi và nữ ở độ tuổi mãn kinh;
        <br />- Mệt mỏi;
        <br />- Chán ăn, hoặc ăn nhiều;
        <br />- Khát nước, tiểu nhiều;
        <br />- Sụt cân không rõ nguyên nhân;
        <br />- Mờ mắt;
        <br />- Tăng huyết áp;
        <br />- Béo phì nhất là béo bụng (cơ thể hình quả táo);
        <br />- Tiểu sử gia đình có người mắc bệnh Tăng huyết áp, Đái tháo đường, Gút;
        <br />- Người dùng nhiều bia rượu và hút thuốc lá.
    `
    )}
    {renderAccessContent(
      3,
      "Chi tiết tầm soát đái tháo đường, rỗi loại mỡ máu và Gút",
      `
      - Khi thực hiện tầm soát đái tháo đường, rối loạn mỡ máu và gút tại Phòng khám Bệnh viện Đại học Y dược 1 khách hàng sẽ được các bác sĩ là những chuyên gia đầu ngành khám, tư vấn và thực hiện các xét nghiệm sau:
      <br />
      <div style="display: flex; justify-content: center; width: 100%"><img alt="img" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731745713/goi-tam-soat-dai-thao-duong-roi-loan-mo-mau-va-gut-2-768x848_pfigb8.jpg"/></div>
      <br />- Chi phí gói tầm soát nguy cơ đột quỵ: 6.000.000đ
    `
    )}
    {renderAccessContent(
      4,
      "Những lưu ý để phòng ngừa đái tháo đường, rỗi loại mỡ máu và Gút",
      `
        <br />- Có chế độ ăn uống khoa học, lành mạnh, nhiều chất xơ, hạn schế thức ăn chứa nhiều đường, tinh bột, chất béo, đạm…;
        <br />- Thường xuyên tập thể dục, ít nhất 30 phút mỗi ngày;
        <br />- Hạn chế sử dụng rượu bia, thức uống có cồn;
        <br />- Nói không với thuốc lá, các chất kích thích;
        <br />- Khám, kiểm tra huyết áp các chỉ số đường huyết, mỡ máu định kỳ.
    `
    )}
    {renderAccessContent(
      5,
      "Giá trị công thêm khi tầm soát đái tháo đường, rỗi loại mỡ máu và Gút tại Phòng khám Bệnh viện",
      `
        <br />- Được thăm khám và nhận tư vấn từ đội ngũ chuyên gia là các Giáo sư, Tiến Sĩ, Bác Sĩ đầu ngành, có chuyên môn cao từ Bệnh viện Đại học Y dược TP.HCM;
        <br />- Trang thiết bị được đầu tư hiện đại theo chuẩn quốc tế và tương đương với các bệnh viện lớn, giúp bác sĩ có những chẩn đoán chính xác và điều trị hiệu quả;
        <br />- Thời gian chờ đợi ít, bác sĩ thăm khám và tư vấn kỹ lưỡng;
        <br />- Đội ngũ chăm sóc khách hàng tận tình, chu đáo, chuyên nghiệp;
        <br />- Thủ tục đặt hẹn thuận tiện qua tổng đài 1900 6923.
    `
    )}
    {renderAccessContent(
      6,
      "Thông tin chung",
      `
        <br />- Thời gian làm việc: 7h30 đến 16h30 từ thứ 2 đến thứ 7
        <br />- Địa chỉ Phòng khám: 20-22 Dương Quang Trung, Phường 12, Quận 10, TP.HCM
        <br />- Thời gian chờ đợi ít, bác sĩ thăm khám và tư vấn kỹ lưỡng;
        <br />- Đội ngũ chăm sóc khách hàng tận tình, chu đáo, chuyên nghiệp;
        <br />- Thủ tục đặt hẹn thuận tiện qua tổng đài 1900 6923.
        <br /><b>Lưu ý: Gói khám chỉ mang tính tham khảo. Khách hàng vui lòng đăng ký gặp Bác sĩ để được tư vấn chi tiết.</b>
        <br /><b style="color: red">GỌI 1900 6923 ĐỂ ĐĂNG KÝ TẦM SOÁT ĐÁI THÁO ĐƯỜNG, RỐI LOẠN MỠ MÁU VÀ GÚT TẠI PHÒNG KHÁM BỆNH VIỆN ĐẠI HỌC Y DƯỢC 1</b>
    `
    )}
  </div>
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

export default DHGScreening;
