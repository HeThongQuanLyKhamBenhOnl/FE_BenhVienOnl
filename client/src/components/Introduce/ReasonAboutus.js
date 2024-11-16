import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Pagination } from "antd";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";
import "bootstrap/dist/css/bootstrap.css";

const formatTitleForURL = (title) =>
  title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

const ReasonCard = ({ imgSrc, title, description, isFirst }) => (
  <div
    style={{
      backgroundColor: "#cecece26",
      padding: "10px",
      margin: "10px",
      borderRadius: "15px",
      display: "flex",
      flexDirection: isFirst ? "row" : "column",
      alignItems: isFirst ? "center" : "stretch",
    }}
  >
    <Link to={`/tai-sao-chon-chung-toi/${formatTitleForURL(title)}`}>
      <img
        src={imgSrc}
        alt="reason-img"
        style={{
          width: isFirst ? "90%" : "100%",
          height: isFirst ? "auto" : "250px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
    </Link>
    <div style={{ flex: 1 }}>
      <Link to={`/tai-sao-chon-chung-toi/${formatTitleForURL(title)}`}>
        <h4
          className="text-lg font-bold text-blue-900"
          style={{ padding: isFirst ? "0px" : "25px 0px" }}
        >
          {title}
        </h4>
      </Link>
      <p style={{ textAlign: "justify" }}>{description}</p>
    </div>
  </div>
);

const ReasonAboutus = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const reasonsData = [
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731741706/layer-511-_2_wwx6ui.jpg",
      title: "Trang thiết bị hiện đại",
      description:
        "Với quy mô gồm 30 phòng khám và các phòng chức năng được đầu tư thiết bị máy móc hiện đại của các thương hiệu hàng đầu thế giới như GE, Fuji, Olympus, Kart Stoz, Phillip, Sysmex...",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731741722/layer-5111-_2_kbmcq4.jpg",
      title: "Bác sĩ chuyên môn cao",
      description:
        "Phòng khám Bệnh viện quy tụ đội ngũ chuyên gia, bác sĩ, dược sĩ và điều dưỡng có trình độ chuyên môn cao, tay nghề giỏi, luôn tận tâm và chu đáo với người bệnh...",
    },
    {
      imgSrc: "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731741736/layer-6041_plxflh.jpg",
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

      <Row justify="center">
        {currentData[0] && (
          <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
            <ReasonCard {...currentData[0]} isFirst={true} />
          </Col>
        )}
      </Row>

      <Row
        justify="center"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "20px",
        }}
      >
        {currentData.slice(1).map((reason) => (
          <Col
            key={reason.title}
            xs={24}
            sm={12}
            md={12}
            lg={10}
            xl={10}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ReasonCard {...reason} />
          </Col>
        ))}
      </Row>

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
