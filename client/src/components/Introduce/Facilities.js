import React from "react";
import { Row, Col } from "antd";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";

const Support = () => {
  const images = [
    "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731741061/1_m0sefa.png",
    "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731741077/layer-614_g84e9m.png",
    "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731741081/fhfhfd_a9nryj.png",
    "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731741090/layer-610_vetqt9.png",
    "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731741093/layer-611_zptwiu.png",
    "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731741101/layer-615_gw2bc7.png",
  ];

  return (
    <div className="container mx-auto py-8">
      <HeaderComponent />
      <Row
        gutter={[16, 16]}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
        }}
      >
        <h1 className="text-3xl font-bold text-blue-900">CƠ SỞ VẬT CHẤT</h1>
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
      </Row>
      <Row
        gutter={[16, 16]}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {images.map((src, index) => (
          <Col key={index} span={8}>
            <img
              className="section-image"
              src={src}
              alt={`img-${index}`}
              style={{ width: "100%", height: "auto" }}
            />
          </Col>
        ))}
      </Row>
      <FooterComponent />
    </div>
  );
};

export default Support;
