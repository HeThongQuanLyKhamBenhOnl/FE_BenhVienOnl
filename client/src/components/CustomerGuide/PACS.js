import React from "react";
import { Row, Col } from "antd";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";
import "bootstrap/dist/css/bootstrap.css";

const PACS = () => {
  return (
    <div className="container mx-auto py-8">
      <HeaderComponent />
      {renderHeaderSection()}
      {renderInfoSection()}
      {renderDefinitionSection()}
      {renderAccessGuideSection()}
      <FooterComponent />
    </div>
  );
};

const renderHeaderSection = () => (
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
      HƯỚNG DẪN TRUY CẬP HỆ THỐNG LƯU TRỮ VÀ QUẢN LÝ HÌNH ẢNH (PACS)
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

const renderInfoSection = () => (
  <Row
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px 100px",
      flexWrap: "wrap",
      flexDirection: "column",
      width: "100%",
    }}
  >
    <Col
      xs={24}
      sm={24}
      md={14}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "20px",
        width: "100%",
      }}
    >
      <h5
        className="text-xl font-bold text-blue-900"
        style={{
          marginBottom: "15px",
          textAlign: "center",
          width: "1200px",
        }}
      >

        Từ ngày 07/08/2023, Phòng Khám Bệnh viện Đại học Y Dược 1 triển khai
        hình thức trả kết quả chẩn đoán hình ảnh thông qua hệ thống PACS thay
        thế in phim đối với các dịch vụ kỹ thuật: Chụp cộng hưởng từ (MRI), Chụp
        cắt lớp vi tính (CT-Scan), X-Quang kỹ thuật số cho khách hàng.
      </h5>
    </Col>
  </Row>
);
const renderDefinitionSection = () => (
  <Col style={{}}>
    <Row>
      <h5 className="text-xl font-bold text-blue-900" style={{}}>
        1. Pacs là gì?
      </h5>

        Từ ngày 07/08/2023, Phòng Khám Bệnh viện Đại học Y Dược 1 triển khai hình thức trả kết quả chẩn đoán hình ảnh thông qua hệ thống PACS thay thế in phim đối với các dịch vụ kỹ thuật: Chụp cộng hưởng từ (MRI), Chụp cắt lớp vi tính (CT-Scan), X-Quang kỹ thuật số cho khách hàng.
      </h5>
    </Col>
  </Row>

);

const renderDefinitionSection = () => (
  <Col style={{}}>
    <Row>
      <h5 className="text-xl font-bold text-blue-900" style={{}}>1. Pacs là gì?</h5>

    </Row>
    <Row>
      <p
        style={{
          textAlign: "justify",
          marginBottom: "20px",
          fontSize: "1.1rem",
        }}
      >

        PACS (Picture Archiving and Communication Systems) là hệ thống lưu trữ
        và truyền tải hình ảnh y tế mang lại nhiều lợi ích cho Khách hàng và Bác
        sĩ như:
        <br />- Khách hàng không phải chờ đợi in, trả phim, rút ngắn thời gian
        khám, chữa bệnh;
        <br />- Truy cập được toàn bộ dữ liệu, hình ảnh khách hàng đã chụp tại
        Phòng Khám một cách nhanh chóng, chính xác;
        <br />- Thuận tiện tra cứu, chia sẻ dữ liệu, hình ảnh mọi lúc mọi nơi,
        trong và ngoài nước;
        <br />- Hiệu quả cao, chính xác, nhanh chóng trong việc hội chẩn từ xa,
        so sánh các lần chụp, đối chiếu kết quả, giúp nâng cao chất lượng khám,
        chữa bệnh;
        <br />- Giúp quản lý chặt chẽ, lâu dài kết quả chẩn đoán hình ảnh của
        Khách hàng;
        <br />- Giảm tác hại cho môi trường do việc in phim gây ra.
        <br />
        <br />
        Sau khi có kết quả chụp, Khách hàng được cung cấp đường link, tên tài
        khoản và mật khẩu để truy cập vào hệ thống PACS qua các hình thức:
        <br />- Bản giấy kết quả.
        <br />- Email của người bệnh/ người đại diện Khách hàng.
        <br />- Tin nhắn SMS qua số điện thoại của Khách hàng/ Người đại diện
        Khách hàng.

        PACS (Picture Archiving and Communication Systems) là hệ thống lưu trữ và truyền tải hình ảnh y tế mang lại nhiều lợi ích cho Khách hàng và Bác sĩ như:
        <br />- Khách hàng không phải chờ đợi in, trả phim, rút ngắn thời gian khám, chữa bệnh;
        <br />- Truy cập được toàn bộ dữ liệu, hình ảnh khách hàng đã chụp tại Phòng Khám một cách nhanh chóng, chính xác;
        <br />- Thuận tiện tra cứu, chia sẻ dữ liệu, hình ảnh mọi lúc mọi nơi, trong và ngoài nước;
        <br />- Hiệu quả cao, chính xác, nhanh chóng trong việc hội chẩn từ xa, so sánh các lần chụp, đối chiếu kết quả, giúp nâng cao chất lượng khám, chữa bệnh;
        <br />- Giúp quản lý chặt chẽ, lâu dài kết quả chẩn đoán hình ảnh của Khách hàng;
        <br />- Giảm tác hại cho môi trường do việc in phim gây ra.
        <br /><br />
        Sau khi có kết quả chụp, Khách hàng được cung cấp đường link, tên tài khoản và mật khẩu để truy cập vào hệ thống PACS qua các hình thức:
        <br />- Bản giấy kết quả.
        <br />- Email của người bệnh/ người đại diện Khách hàng.
        <br />- Tin nhắn SMS qua số điện thoại của Khách hàng/ Người đại diện Khách hàng.

      </p>
    </Row>
  </Col>
);

const renderAccessGuideSection = () => (
  <Col
    style={{
      padding: "30px 0px",
    }}
  >


const renderAccessGuideSection = () => (
  <Col style={{
    padding: "30px 0px",
  }}>

    <Row>
      <h5 className="text-xl font-bold text-blue-900">2. Hướng dẫn truy cập</h5>
    </Row>
    <Row>
      <p
        style={{
          textAlign: "justify",
          marginBottom: "20px",
          fontSize: "1.1rem",
        }}
      >

        Quý Khách hàng vui lòng tham khảo hướng dẫn đăng nhập, sử dụng và quản
        lý tài khoản truy cập:

        Quý Khách hàng vui lòng tham khảo hướng dẫn đăng nhập, sử dụng và quản lý tài khoản truy cập:

      </p>
      <img
        src="https://umcclinic.com.vn/Data/Sites/1/media/h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-kh/h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-truy-c%E1%BA%ADp-h%E1%BB%87-th%E1%BB%91ng-l%C6%B0u-tr%E1%BB%AF-v%C3%A0-qu%E1%BA%A3n-l%C3%BD-h%C3%ACnh-%E1%BA%A3nh-(pacs)/pacs.jpg"
        alt="Access Guide"
        style={{
          width: "100%",
          height: "1670px",
          objectFit: "cover",
          objectPosition: "top",
          borderRadius: "10px",
        }}
      />
    </Row>
  </Col>
);

export default PACS;
