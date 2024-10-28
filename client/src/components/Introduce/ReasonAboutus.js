import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Pagination } from "antd";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";
import "bootstrap/dist/css/bootstrap.css";

const formatTitleForURL = (title) =>
  title
    .normalize("NFD") // Normalize to split characters and their diacritics
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-zA-Z0-9\s]/g, "") // Remove any special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .toLowerCase();

const ReasonCard = ({ imgSrc, title, description }) => (
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
      to={`/tai-sao-chon-chung-toi/${formatTitleForURL(title)}`}
      style={{ cursor: "pointer" }}
    >
      <img
        src={imgSrc}
        alt="reason-img"
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
    </Link>
    <Link
      to={`/tai-sao-chon-chung-toi/${formatTitleForURL(title)}`}
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

const ReasonAboutus = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const reasonsData = [
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/118/layer-511-(2).jpg",
      title: "Trang thiết bị hiện đại",
      description:
        "Với quy mô gồm 30 phòng khám và các phòng chức năng được đầu tư thiết bị máy móc hiện đại của các thương hiệu hàng đầu thế giới như GE, Fuji, Olympus, Kart Stoz, Phillip, Sysmex...",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/119/layer-5111-(2).jpg",
      title: "Bác sĩ chuyên môn cao",
      description:
        "Phòng khám Bệnh viện quy tụ đội ngũ chuyên gia, bác sĩ, dược sĩ và điều dưỡng có trình độ chuyên môn cao, tay nghề giỏi, luôn tận tâm và chu đáo với người bệnh...",
    },
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/117/layer-6041.jpg",
      title: "Dịch vụ chuẩn quốc tế",
      description:
        "Phòng khám Bệnh viện được quản lý và vận hành theo tiêu chuẩn quốc tế, cơ sở vật chất hiện đại, tiện nghi, không gian khám chữa bệnh rộng rãi, sạch sẽ...",
    },
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = reasonsData.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto py-8">
      <HeaderComponent />

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
          TẠI SAO CHỌN CHÚNG TÔI
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

      {/* Render reason cards */}
      <Row
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {currentData.map((reason) => (
          <ReasonCard
            key={reason.title}
            imgSrc={reason.imgSrc}
            title={reason.title}
            description={reason.description}
          />
        ))}
      </Row>

      {/* Pagination Component */}
      <Row justify="center" style={{ marginTop: "20px" }}>
        <Pagination
          current={currentPage}
          total={reasonsData.length}
          pageSize={itemsPerPage}
          onChange={(page) => setCurrentPage(page)}
        />
      </Row>

      <FooterComponent />
    </div>
  );
};

export default ReasonAboutus;
