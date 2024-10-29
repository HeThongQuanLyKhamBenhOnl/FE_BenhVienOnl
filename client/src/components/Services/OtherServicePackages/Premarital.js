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

const Premarital = () => {
  return (
    <div className="container mx-auto py-8">
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
      GÓI KHÁM SỨC KHOẺ TIỀN HÔN NHÂN
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
      "GÓI KHÁM SỨC KHOẺ TIỀN HÔN NHÂN",
      `
        Việc khám sức khỏe tiền hôn nhân không chỉ là quan tâm sức khỏe của bản thân mà còn thể hiện trách nhiệm với bạn đời, vì cuộc sống gia đình hạnh phúc và sức khỏe của con cái trong tương lai.
    `
    )}
    {renderAccessContent(
      2,
      "Tại sao phải khám sức khỏe tiền hôn nhân?",
      `
        - Trên thực tế nhiều người vẫn e ngại việc khám sức khỏe tiền hôn nhân có thể làm tan vỡ hạnh phúc hoặc tự ái khi bị nghi ngờ về sức khỏe, tổn thương vì cho rằng đối phương không tin tưởng mình. Tuy nhiên đây là một quan điểm không tiến bộ. Việc khám sức khỏe là rất quan trọng để phát hiện ra các vấn đề tiềm ẩn của cơ thể. Giải quyết sớm các vấn đề này mới là tiền đề cho cuộc sống hạnh phúc vợ chồng có thể kéo dài cả đời người.
        <br /> - Trên thực tế nhiều người vẫn e ngại việc khám sức khỏe tiền hôn nhân có thể làm tan vỡ hạnh phúc hoặc tự ái khi bị nghi ngờ về sức khỏe, tổn thương vì cho rằng đối phương không tin tưởng mình. Tuy nhiên đây là một quan điểm không tiến bộ. Việc khám sức khỏe là rất quan trọng để phát hiện ra các vấn đề tiềm ẩn của cơ thể. Giải quyết sớm các vấn đề này mới là tiền đề cho cuộc sống hạnh phúc vợ chồng có thể kéo dài cả đời người.
    `
    )}
    {renderAccessContent(
      3,
      "Lợi ích của việc khám sức khỏe tiền hôn nhân",
      `
        <br />- Có kiến thức và sự chuẩn bị vững vàng về mặt tâm lý để khởi đầu cuộc sống hôn nhân hài hòa và khỏe mạnh;
        <br />- Phát hiện và điều trị một số bệnh lý, đặc biệt là các bệnh có thể lây nhiễm qua đường tình dục;
        <br />- Phát hiện các bệnh lý tiềm ẩn hoặc các nguy cơ có thể phát triển thành bệnh để ngăn chặn, điều dưỡng kịp thời, không làm ảnh hưởng đến cuộc sống sau này;
        <br />- Kiểm tra và chẩn đoán khả năng sinh sản của vợ chồng, từ đó có phương pháp nâng cao khả năng thụ thai và sinh con an toàn;
        <br />- Kiểm tra và tư vấn cho vợ chồng việc bổ sung dinh dưỡng, khoáng chất và chế độ sinh hoạt lành mạnh để chuẩn bị sức khỏe mang thai;
        <br />- Phát hiện một số nguy cơ từ tiền sử gia đình, bệnh tiền sử, bệnh di truyền để phòng tránh những bệnh lý và dị tật bẩm sinh cho con cái trong tương lai.
    `
    )}
    {renderAccessContent(
      4,
      "Thông tin về gói khám sức khỏe tiền hôn nhân tại Phòng khám Bệnh viện",
      `
        <br />Khám sức khỏe tiền hôn nhân có thể được thực hiện tại Phòng khám Bệnh viện Đại học Y Dược 1 với đội ngũ bác sĩ chuyên nghiệp và trang thiết bị hiện đại, giúp các cặp đôi có kết quả toàn diện về tình hình sức khỏe tổng quát và sức khỏe sinh sản, tiết kiệm thời gian và chuẩn bị tâm lý vững vàng để bước vào ngưỡng cửa quan trọng của cuộc đời. Chi tiết gói khám gồm:
        <br /><div style="display: flex; justify-content: center; width: 100%"><img alt="img" style="width: 500px" src="https://umcclinic.com.vn/Data/Sites/1/media/dich-vu/c%C3%A1c-g%C3%B3i-d%E1%BB%8Bch-v%E1%BB%A5-kh%C3%A1c/g%C3%B3i-kh%C3%A1m-s%E1%BB%A9c-kho%E1%BA%BB-ti%E1%BB%81n-h%C3%B4n-nh%C3%A2n/noi-dung-goi-kham-suc-khoe-tien-hon-nhan-1.jpg" /></div>
    `
    )}
    {renderAccessContent(
      5,
      "Giá chi tiết của gói khám sức khỏe tiền hôn nhân ",
      `
        <br />- Giá áp dụng cho nữ: 3.400.000đ
        <br />- Giá áp dụng cho nữ: 2.900.000đ
    `
    )}
    {renderAccessContent(
      6,
      "Một số lưu ý khi sử dụng gói khám sức khỏe tiền hôn nhân tại Phòng khám Bệnh viện",
      `
        <br />- Khi đi khám nếu cơ thể có bất kỳ dấu hiệu bất thường, vui lòng thông báo ngay với nhân viên y tế để nhận tư vấn và được khám với chuyên khoa phù hợp;
        <br />- Trang phục thuận tiện để Bác sĩ có thể thăm khám dễ dàng hơn;
        <br />- Nhịn ăn sáng và chỉ uống nước lọc để thực hiện các xét nghiệm máu;
        <br />- Không nên hút thuốc và uống bia rượu trong vòng 24 tiếng trước khi đến khám;
        <br />- Đối với phụ nữ, chỉ nên đến khám sau chu kỳ kinh nguyệt 5 đến 7 ngày;
        <br />- Khi khám sức khoẻ tiền hôn nhân tại Phòng khám Bệnh viện Đại học Y Dược 1, quý khách hàng có thể dễ dàng lựa chọn thêm các dịch vụ tầm soát nếu thấy thực sự cần thiết như: tầm soát ung thư tổng quát, tầm soát ung thư hệ tiêu hoá xét nghiệm huyết thanh chỉ dấu ung thư, chẩn đoán giun sán, đo gắng sức tim mạch – hô hấp.
    `
    )}
    {renderAccessContent(
      7,
      "Tại sao nên chọn Phòng khám Bệnh viện để khám sức khoẻ tiền hôn nhân?",
      `
        <br />- Được thăm khám và nhận tư vấn từ đội ngũ chuyên gia là các Giáo sư, Tiến sĩ, Bác sĩ đầu ngành, có chuyên môn cao từ Trường và Bệnh viện Đại học Y Dược TP.HCM;
        <br />- Trang thiết bị được đầu tư hiện đại theo chuẩn quốc tế và tương đương với các bệnh viện lớn, giúp Bác sĩ có những chẩn đoán chính xác và điều trị hiệu quả;
        <br />- Thời gian chờ đợi ít, Bác sĩ thăm khám và tư vấn kỹ lưỡng;
        <br />- Đội ngũ chăm sóc khách hàng tận tình, chu đáo, chuyên nghiệp;
        <br />- Thủ tục đặt hẹn thuận tiện qua tổng đài 1900 6923;

        <br /><b>Lưu ý: Giá gói khám có thể thay đổi theo từng thời điểm mà không báo trước.</b>
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

export default Premarital;
