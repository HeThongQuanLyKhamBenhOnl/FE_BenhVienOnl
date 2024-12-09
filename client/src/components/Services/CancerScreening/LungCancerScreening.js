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

const LungCancerScreening = () => {
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
        GÓI KHÁM TẦM SOÁT UNG THƯ PHỔI
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

const AccessSection = () => (
  <div>
    {renderAccessContent(
      1,
      "Vì sao nên thực hiện tầm soát ung thư phổi?",
      `
        Tầm soát ung thư phổi là phương pháp phát hiện dấu hiệu ung thư ngay cả khi chưa có các triệu chứng rõ ràng giúp người bệnh phát hiện bệnh sớm, điều trị và chăm sóc sức khỏe kịp thời, giảm đau đớn, tăng khả năng khỏi bệnh, ngăn chặn di căn và các biến chứng nguy hiểm khác.
    `
    )}
    {renderAccessContent(
      2,
      "Những đối tượng cần thực hiện tầm soát ung thư phổi",
      `
        Những nhóm đối tượng sau được khuyến nghị nên tầm soát ung thư phổi định kì ít nhất mỗi năm một lần hoặc sớm hơn theo chỉ định của bác sĩ:
        <br />- Nhóm nguy cơ trung bình: nhóm người từ 50 tuổi, không hút thuốc, sinh hoạt làm việc trong môi trường thường xuyên tiếp thu thuốc lá thụ động, hoặc hút thuốc ít, từng hút thuốc nhiều nhưng đã ngưng trong 15 năm qua.
        <br />- Nhóm nguy cơ cao: nhóm người từ 50 tuổi, hút nhiều thuốc trên 30 năm, một gói mỗi ngày trong 30 năm hoặc 2 gói mỗi ngày trong 15 năm.
        <br />- Đặc biệt người có các biểu hiện sau cần tầm soát ung thư phổi ngay: ho kéo dài, ho ra máu hoặc tái phát nhiều lần, đau tại vùng ngực, thay đổi giọng nói, khò khè khó thở, khi nuốt bị đau, cơ thể suy nhược, thường xuyên mệt mỏi.
    `
    )}
    {renderAccessContent(
      3,
      "Thông tin chi tiết gói tầm soát ung thư phổi tại Phòng khám Bệnh viện",
      `
      <br /> - Ngày nay y học đã có nhiều tiến bộ trong việc chẩn đoán và điều trị ung thư nhưng tỷ lệ tử vong vì ung thư phổi trên thế giới nói chung, ở Việt Nam nói riêng vẫn rất cao. Nguyên nhân chủ yếu là do ung thư phổi có rất ít triệu chứng ở giai đoạn đầu, thậm chí là không có, vì vậy nhiều người thường chủ quan và chỉ đến khám khi bệnh đã diễn tiến nặng.
      <br /> - Gói khám tầm soát ung thư phổi của Phòng khám Bệnh viện  được đội ngũ chuyên môn xây dựng theo nguyên tắc: khoa học, hiệu quả, có tính thực tiễn cao và tiết kiệm chi phí cho khách hàng.
    `
    )}
    {renderAccessContent(
      4,
      "Giá chi tiết của gói tầm soát ung thư phổi",
      `
        - Giá áp dụng cho cả nam và nữ: 2.850.000đ
    `
    )}
    {renderAccessContent(
      5,
      "Lưu ý trước khi thực hiện tầm soát ung thư phổi",
      `
        <br />- Một số danh mục trong dịch vụ sẽ không áp dụng theo khuyến cáo của Bác sĩ
        <br />- Trang phục thuận tiện để Bác sĩ có thể thăm khám dễ dàng hơn;
        <br />- Nhịn ăn sáng để thực hiện các xét nghiệm tầm soát ung thư;
        <br />- Không uống các loại nước uống như cà phê, trà, sữa, nước ngọt và nước trái cây, chỉ nên uống một ít nước lọc trước khi đến khám;
        <br />- Không nên hút thuốc và uống bia rượu trong vòng 24 tiếng trước khi đến khám.
    `
    )}
    {renderAccessContent(
      6,
      "Những lợi ích cộng thêm khi tầm soát ung thư phổi tại Phòng khám Bệnh viện",
      `
        <br />- Được thăm khám và nhận tư vấn từ đội ngũ chuyên gia là các Giáo sư, Tiến Sĩ, Bác Sĩ đầu ngành, có chuyên môn cao từ Bệnh viện Đại học Y Dược TP.HCM;
        <br />- Trang thiết bị được đầu tư hiện đại theo chuẩn quốc tế và tương đương với các bệnh viện lớn, giúp bác sĩ có những chẩn đoán chính xác và điều trị hiệu quả;
        <br />- Thời gian chờ đợi ít, bác sĩ thăm khám và tư vấn kỹ lưỡng;
        <br />- Đội ngũ chăm sóc khách hàng tận tình, chu đáo, chuyên nghiệp;
        <br />- Thủ tục đặt hẹn thuận tiện qua tổng đài 1900 6923.
        <br />
        <br /><h5 style="color: blue"><b>PHÒNG KHÁM BỆNH VIỆN</b></h5>
        <br /> Địa chỉ: 20-22 Dương Quang Trung, Phường 12, Quận 10
        <br /> Hotline: 1900 6923
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

export default LungCancerScreening;
