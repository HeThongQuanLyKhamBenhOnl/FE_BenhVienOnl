import React from "react";
import { Row, Col } from "antd";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";

const Support = () => {
  const images = [
    "https://umcclinic.com.vn/Data/Sites/1/News/85/1.png",
    "https://umcclinic.com.vn/Data/Sites/1/News/85/layer-615.png",
    "https://umcclinic.com.vn/Data/Sites/1/News/85/layer-611.png",
    "https://umcclinic.com.vn/Data/Sites/1/News/85/layer-610.png",
    "https://umcclinic.com.vn/Data/Sites/1/News/85/fhfhfd.png",
    "https://umcclinic.com.vn/Data/Sites/1/News/85/layer-614.png",
  ];

  return (
    <div className="container mx-auto py-8">
      <HeaderComponent />
      <Row gutter={[16, 16]} style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "50px"}}>
        <h1 className="text-3xl font-bold text-blue-900">CƠ SỞ VẬT CHẤT</h1>
      </Row>
      <Row gutter={[16, 16]} style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
        {images.map((src, index) => (
          <Col key={index} span={8}>
            <img
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
