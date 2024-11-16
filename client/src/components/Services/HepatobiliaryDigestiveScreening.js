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
      to={`/tam-soat-tieu-hoa-gan-mat/${formatTitleForURL(title)}`}
      style={{ cursor: "pointer" }}
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
    </Link>
    <Link
      to={`/tam-soat-tieu-hoa-gan-mat/${formatTitleForURL(title)}`}
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

const HepatobiliaryDigestiveScreening = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const checkupCardsData = [
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731746634/goi-kham-tam-soat-ung-thu-thuc-quan-da-day_veq18o.jpg",
      title: "GÓI TẦM SOÁT UNG THƯ DẠ DÀY",
      description:
        "Ung thư dạ dày và thực quản là ung thư về đường tiêu hóa rất phổ biến. Ung thư thực quản dạ dày hoàn toàn có thể chữa khỏi nếu người bệnh được tầm soát ung thư sớm.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731746690/goi-kham-tam-soat-ung-thu-dai-truc-trang-_1_s1dnvv.jpg",
      title: "GÓI TẦM SOÁT UNG THƯ ĐẠI TRỰC TRÀNG",
      description:
        "Tầm soát ung thư đại trực tràng là phương pháp phát hiện tế bào ung thư hoặc các tế bào bất thường có thể phát triển thành ung thư. Tầm soát ung thư đại trực tràng để phát hiện bệnh sớm có ý nghĩa rất quan trọng trong việc nâng cao hiệu quả điều trị, giảm đau đớn và tăng tuổi thọ cho người bệnh.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731746696/noi-soi-tieu-hoa_dimpnf.jpg",
      title: "NỘI SOI HỆ TIÊU HÓA THỰC QUẢN, DẠ DÀY, TÁ TRÀNG, ĐẠI TRÀNG",
      description:
        "Nội soi tiêu hóa là việc thực hiện thăm khám trực tiếp Thực quản - Dạ Dày - Tá tràng hoặc Đại tràng bằng một ống mềm có Camera gắn ở đầu ống. Điều khiển đa hướng, nhìn thấy, nhận định, phân loại, cảm giác được mật độ tổn thương và có thể trực tiếp can thiệp vào tổn thương đó là Nội soi tiêu hoá.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731746642/tam-soat-ung-thu-he-tieu-hoa-2_sbxvcd.jpg",
      title: "GÓI TẦM SOÁT UNG THƯ HỆ TIÊU HÓA",
      description:
        "Tầm soát ung thư hệ tiêu hóa là một tầm soát rất quan trọng.Việc tầm soát ung thư hệ tiêu nên được thực hiện định kỳ hàng năm nhằm phát hiện sớm những dấu hiệu bất thường của hệ tiêu hóa.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731746704/goi-tam-soat-viem-gan-1_sazjfx.jpg",
      title: "GÓI TẦM SOÁT UNG THƯ GAN",
      description:
        "Hiện Việt Nam là nước có tỷ lệ nhiễm virus viêm gan B và C cao nhất trong khu vực. Theo báo cáo của Cục Y tế Dự phòng (BYT), Việt Nam có 10 triệu trường hợp nhiễm viêm gan B và gần 1 triệu người nhiễm virus viêm gan C. Điều cần quan tâm là bệnh viêm gan B, C có thể dẫn đến xơ gan, ung thư gan. Do vậy, bạn nên thực hiện tầm soát viêm gan để có thể phát hiện sớm các yếu tố nguy cơ giúp điều trị hiệu quả các bệnh lý về gan.",
    },
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = checkupCardsData.slice(startIndex, endIndex);

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
          TẦM SOÁT TIÊU HÓA GAN MẬT
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
            to={`/tam-soat-tieu-hoa-gan-mat/${formatTitleForURL(
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
            to={`/tam-soat-tieu-hoa-gan-mat/${formatTitleForURL(
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
          <p style={{ marginBottom: "20px" }}>
            {checkupCardsData[0].description}
          </p>
          <Link
            to={`/tam-soat-tieu-hoa-gan-mat/${formatTitleForURL(
              checkupCardsData[0].title
            )}`}
          >
            <button className="btn btn-outline-primary">Xem chi tiết</button>
          </Link>
        </Col>
      </Row>

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

export default HepatobiliaryDigestiveScreening;
