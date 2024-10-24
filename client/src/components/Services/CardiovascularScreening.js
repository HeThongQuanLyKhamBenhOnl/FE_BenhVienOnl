import React, { useState } from "react";
import { Row, Col, Pagination } from "antd";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";

import "bootstrap/dist/css/bootstrap.css";

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
    <img
      src={imgSrc}
      alt="img"
      style={{
        width: "100%",
        height: "160px",
        objectFit: "cover",
        objectPosition: "bottom",
        borderRadius: "10px",
      }}
    />
    <h4
      className="text-lg font-bold text-blue-900"
      style={{ padding: "25px 0px" }}
    >
      {title}
    </h4>
    <p style={{ textAlign: "justify" }}>{description}</p>
  </Col>
);

const CardiovascularScreening = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const checkupCardsData = [
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/220/tam-soat-nguy-co-dot-quy.jpg",
      title: "GÓI TẦM SOÁT NGUY CƠ ĐỘT QUỴ",
      description:
        "Đột quỵ có thể tấn công sức khỏe của bạn một cách ngẫu nhiên và đôi khi không có dấu hiệu báo trước nào. Có một số đối tượng đã được nghiên cứu chứng minh là sẽ có nguy cơ cao hơn người hình thường như: người bị cao huyết áp, đái tháo đường, Cholesterol cao, người có bệnh lý về tim mạch, hút thuốc lá, tiền sử gia đình có nguy cơ đột quỵ…",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/219/goi-tam-soat-dai-thao-duong-roi-loan-mo-mau-va-gut-3.jpg",
      title: "GÓI TẦM SOÁT ĐÁI THÁO ĐƯỜNG, RỐI LOẠN MỠ MÁU VÀ GÚT",
      description:
        "Tăng cholesterol, triglycerid, đường trong máu là các yếu tố nguy cơ gây ra các bệnh lý tim mạch, đái tháo đường và một số biến chứng nguy hiểm như đột quỵ, nhồi máu cơ tim…Tăng acid uric máu dễ dẫn đến bệnh gút, lâu dài có thể ảnh hưởng đến thận và các cơ quan khác.",
    },
  ];

  // Calculate the start and end indices for slicing the array
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data array to display only the current page items
  const currentData = checkupCardsData.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto py-8">
      <HeaderComponent />

      {/* First full-width card */}
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
          TẦM SOÁT TIM MẠCH
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
      </Row>

      {/* Full-width first card */}
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 100px",
          flexWrap: "wrap",
        }}
      >
        {/* Image on the left */}
        <Col
          xs={24}
          sm={24}
          md={10} // Takes 10/24 columns on medium screens and larger
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: "20px",
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
        </Col>

        {/* Content (Title, Description, Button) on the right */}
        <Col
          xs={24}
          sm={24}
          md={14} // Takes 14/24 columns on medium screens and larger
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "20px",
          }}
        >
          <h4
            className="text-xl font-bold text-blue-900"
            style={{
              marginBottom: "15px",
            }}
          >
            {checkupCardsData[0].title}
          </h4>
          <p
            style={{
              textAlign: "justify",
              marginBottom: "20px",
            }}
          >
            {checkupCardsData[0].description}
          </p>
          <button className="btn btn-outline-primary">Xem chi tiết</button>
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
        {currentData.slice(1).map((card, index) => (
          <CheckupCard
            key={index}
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

      <FooterComponent />
    </div>
  );
};

export default CardiovascularScreening;
