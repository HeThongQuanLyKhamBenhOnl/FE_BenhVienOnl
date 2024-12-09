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

const FeeInsuranceService = () => {
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
        DỊCH VỤ BẢO LÃNH VIỆN PHÍ
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
      "DỊCH VỤ BẢO LÃNH VIỆN PHÍ",
      `
      Nhằm đáp ứng nhu cầu cho khách hàng sử dụng dịch vụ bảo lãnh viện phí, Phòng khám Bệnh viện  đã không ngừng mở rộng hệ thống liên kết với các công ty, đối tác bảo hiểm lớn nhằm tạo sự thuận tiện cho khách hàng khi sử dụng dịch vụ tại Phòng khám. 
    `
    )}
    {renderAccessContent(
      2,
      "Các đối tác bảo hiểm có liên kết bảo lãnh viện phí với Phòng khám Bệnh viện",
      `
      <div style="display: flex; justify-content: center; width: 100%"><img alt="img" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731746020/cong-ty-bao-hiem-lien-ket-bao-lanh-vien-phi-tai-phong-kham_yaekhq.jpg" /></div>
    `
    )}
    {renderAccessContent(
      3,
      "Quy trình bảo lãnh viện phí tại  Phòng khám Bệnh viện",
      `
        <br />Bước 1: Điền thông tin khách hàng tại quầy tiếp nhận 
        <br />Bước 2: Xuất trình thẻ bảo hiểm, CMND, Căn cước công dân, Passport hoặc Giấy khai sinh (đối với trẻ nhỏ)
        <br />Bước 3: Đăng ký sử dụng các dịch vụ khám chữa bệnh tại Phòng khám 
        <br />Bước 4: Thanh toán tạm ứng tất cả các dịch vụ đã đăng ký 
        <br />Bước 5: Bộ phận Bảo hiểm bảo lãnh của Phòng khám Bệnh viện  sẽ tiền hành làm thủ tục xác nhận bảo lãnh với công ty bảo hiểm sau khi khách hàng có đầy đủ các kết quả xét nghiệm và chẩn đoán của Bác sĩ. Khách hàng sẽ ký xác nhận chi phí điều trị đồng thời thanh toán các khoản chi phí mà công ty Bảo hiểm từ chối bồi thường (nếu có).
    `
    )}
    {renderAccessContent(
      4,
      "Những lưu ý khi sử dụng dịch vụ bảo lãnh viện phí tại phòng khám.",
      `
        <br />- Quý khách vui lòng cung cấp đầy đủ giấy tờ và thanh toán tạm ứng tất cả các dịch vụ khám chữa bệnh cho nhân viên phòng khám theo quy định;
        <br />- Chi phí tạm ứng sẽ được hoàn lại một phần hoặc toàn bộ cho khách hàng tuỳ thuộc vào quyền lợi của khách hàng và chính sách của công ty bảo hiểm;
        <br />- Trường hợp công ty bảo hiểm từ chối bảo lãnh trực tiếp quý khách hàng có thể xuất hoá đơn và lấy giấy tờ liên quan để thực hiện thanh toán với công ty bảo hiểm;
        <br />- Đối với các công ty bảo hiểm chưa liên kết dịch vụ bảo lãnh viện phí với phòng khám bệnh viện  quý khách vui lòng yêu cầu nhân viên của Phòng khám cung cấp đầy đủ hoá đơn và các giấy tờ cần thiết để quý khách hàng tự tiến hành thanh toán với công ty Bảo hiểm.
        <br />- Thủ tục giải quyết 01 bộ hồ sơ Bảo lãnh viện phí sẽ mất nhiều thời gian hơn so với bình thường (từ 45 phút đến 60 phút) vì vậy quý khách hàng vui lòng sắp xếp thời gian phù hợp để tránh ảnh hưởng đến công việc.
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

export default FeeInsuranceService;
