import React from "react";
import { Row, Col } from "antd";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";

const Introduce = () => {
  return (
    <div>
      {/* Header */}
      <HeaderComponent />

      {/* Phần giới thiệu */}
      <div style={{margin: "100px 0px"}}>
        {/* Tiêu đề */}
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
          VỀ CHÚNG TÔI
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

        {/* Phần mô tả */}
        <p className="text-center text-lg mb-8">
          Với tâm huyết nâng cao chất lượng khám chữa bệnh và tạo điều kiện
          thuận lợi cho người dân ngày càng tiếp cận dễ dàng hơn các dịch vụ y
          tế chất lượng cao và hiện đại.
        </p>

        {/* Nội dung chính */}
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12} style={{display: "flex", alignItems: "center"}}>
            <img
              src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731741061/1_m0sefa.png"
              alt="Team"
              className="w-full rounded-lg"
            />
          </Col>
          <Col xs={24} md={12} style={{display: "flex", alignItems: "center", textAlign: "center"}}>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <p className="text-lg leading-relaxed text-gray-700">
                Phòng Khám Bệnh viện là Phòng Khám đầu tiên
                được thành lập. Phòng Khám chính thức khai trương và đi
                vào hoạt động từ ngày 03 tháng 03 năm 2018.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mt-4">
                Cùng theo đuổi những giá trị cốt lõi “Tiên phong – Thấu hiểu –
                Chuẩn mực – An toàn” và mô hình quản lý dịch vụ y tế chuyên
                nghiệp theo chuẩn quốc tế của Bệnh Viện,
                Phòng Khám Bệnh viện là một làn gió mới góp
                phần thay đổi tích cực trong việc chăm sóc sức khỏe cho cộng
                đồng và tạo thêm nhiều lựa chọn trong dịch vụ khám chữa bệnh cho
                người dân.
              </p>
            </div>
          </Col>
        </Row>

        {/* Phần Tầm nhìn - Sứ mệnh */}
        <div className="py-8">
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
            TẦM NHÌN - SỨ MỆNH
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
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <div
                className="relative bg-cover bg-center rounded-lg h-64"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/db4ji9y1x/image/upload/v1731741321/layer-620_sj1cu0.jpg')`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">TẦM NHÌN</h3>
                    <p>
                      Trở thành phòng khám đa khoa chất lượng cao dẫn đầu Việt
                      Nam và đạt chuẩn quốc tế.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div
                className="relative bg-cover bg-center rounded-lg h-64"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/db4ji9y1x/image/upload/v1731741365/layer-621_mxwk2e.png')`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">SỨ MỆNH</h3>
                    <p>
                      Xây dựng một mô hình chuẩn mực phòng khám đa khoa cung cấp
                      dịch vụ khám bệnh, chữa bệnh chất lượng cao làm hài lòng
                      người bệnh.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Phần Giá trị cốt lõi */}
        <div className="py-8">
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
              <h3 className="text-blue-700 font-bold text-lg" style={{cursor: "pointer"}}>TIÊN PHONG</h3>
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
              <h3 className="text-blue-700 font-bold text-lg" style={{cursor: "pointer"}}>THẤU HIỂU</h3>
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
              <h3 className="text-blue-700 font-bold text-lg" style={{cursor: "pointer"}}>CHUẨN MỰC</h3>
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
              <h3 className="text-blue-700 font-bold text-lg" style={{cursor: "pointer"}}>AN TOÀN</h3>
            </Col>
          </Row>
        </div>
      </div>

      {/* Footer */}
      <FooterComponent />
    </div>
  );
};

export default Introduce;
