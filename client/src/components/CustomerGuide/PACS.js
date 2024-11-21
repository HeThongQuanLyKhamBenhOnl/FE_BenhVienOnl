import React from "react";
import { Row, Col } from "antd";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";
import "bootstrap/dist/css/bootstrap.css";

const PACS = () => {
  return (
    <div>
      <HeaderComponent />
      <Col style={{ margin: "50px 0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
        {renderHeaderSection()}
        {renderInfoSection()}
        {renderDefinitionSection()}
        {renderAccessGuideSection()}
      </Col>
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
        Từ ngày 07/08/2023, Phòng Khám triển khai hình thức trả kết quả chẩn
        đoán hình ảnh thông qua hệ thống PACS thay thế in phim đối với các dịch
        vụ kỹ thuật: Chụp cộng hưởng từ (MRI), Chụp cắt lớp vi tính (CT-Scan),
        X-Quang kỹ thuật số cho khách hàng.
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
        Khách hàng. PACS (Picture Archiving and Communication Systems) là hệ
        thống lưu trữ và truyền tải hình ảnh y tế mang lại nhiều lợi ích cho
        Khách hàng và Bác sĩ như:
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
        lý tài khoản truy cập: Quý Khách hàng vui lòng tham khảo hướng dẫn đăng
        nhập, sử dụng và quản lý tài khoản truy cập:
      </p>
      <p style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
        <img
          src="https://i.postimg.cc/brSFmkqt/pacs.jpg"
          alt="Access Guide"
          style={{
            width: "50%",
            objectFit: "cover",
            objectPosition: "center top",
            borderRadius: "10px",
          }}
        />
      </p>
    </Row>

    {/* Phần Giá trị cốt lõi */}
    <div className="py-8" style={{ width: "100%" }}>
      <h2
        style={{
          textAlign: "center",
          color: "#0056a6" /* Màu xanh đậm */,
          fontSize: "2rem",
          fontWeight: "bold",
          position: "relative",
          marginBottom: "1rem",
        }}
      >
        GIÁ TRỊ CỐT LÕI
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
              backgroundColor: "#a3d1ef" /* Màu xanh nhạt */,
              margin: "0 10px",
            }}
          ></span>
          <span
            style={{
              fontSize: "1.5rem",
              color: "#73c2ec" /* Màu xanh của biểu tượng */,
            }}
          >
            ✦
          </span>{" "}
          {/* Bạn có thể thay thế icon này */}
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
      <Row gutter={[32, 32]} justify="center">
        <Col xs={24} md={6} className="text-center">
          <div
            className="mx-auto mb-4 flex items-center justify-center"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "#3e73d4",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
            }}
          >
            <img
              src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731740676/vector-smart-object-1_dlrqa1.png"
              alt="Tiên phong"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <h3 className="text-blue-700 font-bold text-lg" style={{ cursor: "pointer" }}>TIÊN PHONG</h3>
        </Col>

        <Col xs={24} md={6} className="text-center">
          <div
            className="mx-auto mb-4 flex items-center justify-center"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "#3e73d4",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
            }}
          >
            <img
              src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731740700/layer-600juykyfu_gybtcl.png"
              alt="Thấu hiểu"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <h3 className="text-blue-700 font-bold text-lg" style={{ cursor: "pointer" }}>THẤU HIỂU</h3>
        </Col>

        <Col xs={24} md={6} className="text-center">
          <div
            className="mx-auto mb-4 flex items-center justify-center"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "#3e73d4",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
            }}
          >
            <img
              src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731740719/layer-601_sb3r6p.png"
              alt="Chuẩn mực"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <h3 className="text-blue-700 font-bold text-lg" style={{ cursor: "pointer" }}>CHUẨN MỰC</h3>
        </Col>

        <Col xs={24} md={6} className="text-center">
          <div
            className="mx-auto mb-4 flex items-center justify-center"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "#3e73d4",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
            }}
          >
            <img
              src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731740741/layer-602_t2eqrw.png"
              alt="An toàn"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <h3 className="text-blue-700 font-bold text-lg" style={{ cursor: "pointer" }}>AN TOÀN</h3>
        </Col>
      </Row>
    </div>
  </Col>
);

export default PACS;
