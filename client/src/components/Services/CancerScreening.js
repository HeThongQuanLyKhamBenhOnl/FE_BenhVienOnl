import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Pagination } from "antd";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";
import "bootstrap/dist/css/bootstrap.css";

// Helper function to format title for URL
const formatTitleForURL = (title) =>
  title
    .normalize("NFD") // Normalize to split characters and their diacritics
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-zA-Z0-9\s]/g, "") // Remove any special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .toLowerCase();

const CheckupCard = ({ imgSrc, title, description }) => (
  <Col
    style={{
      flexBasis: "30%",
      flexGrow: 1,
      backgroundColor: "#cecece26",
      padding: "10px",
      margin: "10px",
      borderRadius: "15px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
    xs={24}
    sm={12}
    md={8}
    lg={7}
    xl={6}
  >
    <Link
      to={`/tam-soat-ung-thu/${formatTitleForURL(title)}`}
      style={{ cursor: "pointer" }}
    >
      <img
        src={imgSrc}
        alt="img"
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
          objectPosition: "center center",
          borderRadius: "10px",
        }}
      />
    </Link>
    <Link
      to={`/tam-soat-ung-thu/${formatTitleForURL(title)}`}
      style={{ cursor: "pointer" }}
    >
      <h4
        className="text-lg font-bold text-blue-900"
        style={{ padding: "25px 0px" }}
      >
        {title}
      </h4>
    </Link>
    <p style={{ textAlign: "justify" }}>{description}</p>
  </Col>
);

const CancerScreening = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const checkupCardsData = [
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731746140/goi-tam-soat-ung-thu-tong-quat_efs4vr.jpg",
      title: "GÓI KHÁM TẦM SOÁT UNG THƯ TỔNG QUÁT",
      description:
        "Gói khám tầm soát ung thư tổng quát của Phòng khám Bệnh viện  được đội ngũ chuyên môn xây dựng theo nguyên tắc: Khoa học, hiệu quả, có tính thực tiễn cao, tiết kiệm chi phí cho khách hàng. Khi thực hiện gói khám này khách hàng có thể linh hoạt lựa chọn thêm các dịch vụ khác tại Phòng khám",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731746152/goi-kham-tam-soat-ung-thu-vom-hong_cwvdj6.jpg",
      title: "GÓI TẦM SOÁT UNG THƯ VÒM HỌNG",
      description:
        "Tầm soát ung thư vòm họng (vòm hầu) cần được thực hiện định kỳ ngay cả khi chưa có triệu chứng nào để kiểm soát các nguy cơ có thể xảy ra, vì đây là một căn bệnh có triệu chứng âm thầm và khả năng di căn xa.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731746158/goi-tam-soat-ung-thu-co-tu-cung_botxnp.jpg",
      title: "GÓI TẦM SOÁT UNG THƯ CỔ TỬ CUNG",
      description:
        "Tầm soát ung thư cổ tử cung là cách hiệu quả nhất để phát hiện và ngăn chặn ung thư cổ tử cung, căn bệnh gây tử vong hàng đầu trong các loại ung thư ở phụ nữ. ",
    },
    {
      imgSrc: "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731746147/p_400x600_ysqhpo.jpg",
      title: "GÓI KHÁM TẦM SOÁT UNG THƯ PHỔI",
      description:
        "Tầm soát ung thư phổi là phương pháp phát hiện dấu hiệu ung thư ngay cả khi chưa có các triệu chứng rõ ràng giúp người bệnh phát hiện bệnh sớm, điều trị và chăm sóc sức khỏe kịp thời, giảm đau đớn, tăng khả năng khỏi bệnh, ngăn chặn di căn và các biến chứng nguy hiểm khác.",
    },
  ];

  // Calculate the start and end indices for slicing the array
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data array to display only the current page items
  const currentData = checkupCardsData.slice(startIndex, endIndex);

  return (
    <div>
      <HeaderComponent />

      <Col style={{ margin: "40px 0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%"}}></Col>
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
          TẦM SOÁT UNG THƯ
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
            <span style={{ fontSize: "1.5rem", color: "#73c2ec" }}>✦</span>
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

      {/* First full-width card */} 
      <Row
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "20px 10%",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <Col xs={24} sm={24} md={10}>
          <Link
            to={`/tam-soat-ung-thu/${formatTitleForURL(
              checkupCardsData[0].title
            )}`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img
              src={checkupCardsData[0].imgSrc}
              alt={checkupCardsData[0].title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Link>
        </Col>
        <Col xs={24} sm={24} md={12} style={{ textAlign: "justify" }}>
          <Link
            to={`/tam-soat-ung-thu/${formatTitleForURL(
              checkupCardsData[0].title
            )}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            <h4
              className="text-xl font-bold text-blue-900"
              style={{ marginBottom: "15px" }}
            >
              {checkupCardsData[0].title}
            </h4>
          </Link>
          <p style={{ marginBottom: "20px" }}>{checkupCardsData[0].description}</p>
          <Link
            to={`/tam-soat-ung-thu/${formatTitleForURL(
              checkupCardsData[0].title
            )}`}
          >
            <button className="btn btn-outline-primary">Xem chi tiết</button>
          </Link>
        </Col>
      </Row>

      {/* Remaining items in rows of 3 */}
      <Row
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {currentData.slice(1).map((card) => (
          <CheckupCard
            key={card.title}
            imgSrc={card.imgSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </Row>

      {/* Pagination Component */}
      <Row justify="center" style={{ marginTop: "20px" }}>
        <Pagination
          current={currentPage}
          total={checkupCardsData.length}
          pageSize={itemsPerPage}
          onChange={(page) => setCurrentPage(page)}
        />
      </Row>

      {/* Phần Giá trị cốt lõi */}
      <div className="py-8" style={{width: "100%"}}>
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

      <FooterComponent />
    </div>
  );
};

export default CancerScreening;
