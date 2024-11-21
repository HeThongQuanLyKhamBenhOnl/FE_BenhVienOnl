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
    <div>
      <HeaderComponent />

      <Col style={{ margin: "40px 0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
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
                backgroundColor: "#a3d1ef", /* Màu xanh nhạt */
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
            <Col key={index} span={7.5}>
              <img
                className="section-image"
                src={src}
                alt={`img-${index}`}
                style={{ width: "100%", height: "auto" }}
              />
            </Col>
          ))}
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
      <FooterComponent />
    </div>
  );
};

export default Support;
