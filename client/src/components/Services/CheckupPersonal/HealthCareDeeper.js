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

const HealthCareDeeper = () => {
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
      GÓI KHÁM SỨC KHOẺ TỔNG QUÁT CHUYÊN SÂU
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
      "Thông tin về gói khám sức khoẻ tổng quát chuyên sâu",
      `
        <br />- Khi lựa chọn một gói khám sức khoẻ tổng quát chuyên sâu, bạn luôn mong muốn gói khám có thể kiểm tra được bao quát tình hình sức khoẻ với chi phí hợp lý.
        <br />- Thấu hiểu được mối quan tâm của bạn, đội ngũ chuyên môn của Phòng khám Bệnh viện Đại học Y Dược 1 khi xây dựng gói khám luôn dựa trên nguyên tắc: khoa học, hiệu quả, có tính thực tiễn cao, tiết kiệm chi phí cho khách hàng.
        <br />- Gói khám sức khoẻ tổng quát chuyên sâu tại Phòng khám bệnh viện Đại học Y Dược 1 được xây dựng với hơn 50 hạng mục, đáp ứng được nhu cầu thực tiễn của khách hàng và giúp Bác sĩ đánh giá được bao quát về tình hình sức khoẻ của bạn. Gói khám gồm:

        <br /><b><i>a. Khám và nhận tư vấn của Bác sĩ chuyên khoa:</i></b>
        <br />- Nội tổng quát, răng-hàm-mặt, mắt, tai-mũi-họng, khám phụ khoa và tuyến vú

        <br /><b><i>b. Xét nghiệm máu:</i></b>
        <br />- Tổng phân tích tế bào máu ngoại vi (bằng máy đếm laser)- 22 thông số, men gan, viêm gan siêu vi, chức năng thận, chuyển hoá đường đạm máu, bệnh khớp…

        <br /><b><i>c. Xét nghiệm nước tiểu:</i></b>
        <br />- Tổng phân tích nước tiểu (bằng máy tự động), micro albumin /nước tiểu

        <br /><b><i>d. Chẩn đoán hình ảnh và thăm dò chức năng</i></b>
        <br />- Đo nhãn áp (Maclakov, Goldmann, Schiotz…), soi đáy mắt trực tiếp, nội soi tai mũi họng, điện tim thường (ECG), chụp x-quang ngực thẳng số hóa 1 phim, đo mật độ xương bằng phương pháp DEXA (cổ xương đùi) một bên, siêu âm bụng tổng quát (màu), siêu âm tuyến giáp, siêu âm tuyến vú hai bên, siêu âm doppler tim, siêu âm doppler màu động mạch cảnh, siêu âm doppler màu mạch máu chi dưới.
    `
    )}
    {renderAccessContent(
      2,
      "Giá chi tiết của gói khám sức khỏe tổng quát Chuyên sâu",
      `
        <br />+ Giá áp dụng cho Nam<50 tuổi: 5.400.000đ
        <br />+ Giá áp dụng cho Nam>50 tuổi: 5.900.000đ
        <br />+ Giá áp dụng cho Nữ độc thân <50: 5.800.000đ
        <br />+ Giá áp dụng cho Nữ độc thân >50: 6.200.000đ
        <br />+ Giá áp dụng cho Nữ có gia đình <50: 6.800.000đ
        <br />+ Giá áp dụng cho Nữ có gia đình >50: 7.200.000đ
    `
    )}
    {renderAccessContent(
      3,
      "Một số lưu ý khi sử dụng gói khám sức khoẻ tổng quát chuyên sâu tại Phòng khám Bệnh viện",
      `
        <br />- Một số hạng mục trong gói khám sức khoẻ tổng quát chuyên sâu được xây dựng riêng cho đối tượng nam, nữ >50t, nữ độc thân hoặc nữ có gia đình;
        <br />- Thời gian để thực hiện gói khám sức khoẻ tổng quát chuyên sâu có thể mất hơn 01 buổi vì có rất nhiều hạng mục cần thực hiện, do đó quý khách hàng vui lòng sắp xếp thời gian phù hợp và thuận tiện cho mình;
        <br />- Khách hàng là nữ nếu đang mang thai hoặc nghi ngờ có thai vui lòng thông báo ngay cho nhân viên y tế để không chụp X-quang;
        <br />- Quý khách hàng nên thực hiện khám sức khoẻ tổng quát vào buổi sáng để kết quả xét nghiệm máu được chính xác nhất;
        <br />- Khi đi khám nếu cơ thể có bất kỳ dấu hiệu bất thường bạn vui lòng thông báo với nhân viên y tế để được tư vấn và khám ngay với chuyên khoa phù hợp;
        <br />- Khi thực hiện khám sức khoẻ tổng quát tại Phòng khám Bệnh viện Đại học Y Dược 1, bạn có thể lựa chọn thêm các gói tầm soát bổ trợ để thực hiện như: xét nghiệm dấu ấn ung thư, huyết thanh chẩn đoán giun sán, nội soi tiêu hoá không đau, MRI, CT Scanner…
      `
    )}
    {renderAccessContent(
      4,
      "TẠI SAO NÊN CHỌN PHÒNG KHÁM BỆNH VIỆN LÀ NƠI KHÁM SỨC KHOẺ TỔNG QUÁT ĐỊNH KỲ",
      `
        <br />+ Được thăm khám và nhận tư vấn từ đội ngũ chuyên gia là các Giáo sư, Tiến sĩ, Bác sĩ đầu ngành, có chuyên môn cao;
        <br />+ Trang thiết bị được đầu tư hiện đại theo chuẩn quốc tế và tương đương với các bệnh viện lớn, giúp Bác sĩ có những chẩn đoán chính xác và điều trị hiệu quả;
        <br />+ Thời gian chờ đợi ít, Bác sĩ thăm khám và tư vấn kỹ lưỡng;
        <br />+ Đội ngũ chăm sóc khách hàng tận tình, chu đáo, chuyên nghiệp;
        <br />+ Thủ tục đặt hẹn thuận tiện qua tổng đài 1900 6923.
        <br/><b>Lưu ý: Giá gói khám có thể thay đổi theo từng thời điểm mà không báo trước.</b>
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

export default HealthCareDeeper;
