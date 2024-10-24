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

const MoreInfomation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const checkupCardsData = [
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/821/danh-sach-van-bang-chuyen-mon-ph%E1%BA%A1m-vi-hoat-dong.png",
      title: "DANH SÁCH VĂN BẰNG CHUYÊN MÔN VÀ PHẠM VI HOẠT ĐỘNG",
      description:
        "Danh sách văn bằng chuyên môn và phạm vi hoạt động của đội ngũ Bác sĩ của Phòng khám Bệnh viện Đại học Y Dược 1",
    },
    {
      imgSrc: "",
      title: "",
      description:
      "",
    },
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/820/danh-muc-ky-thuat.png",
      title: "DANH MỤC KỸ THUẬT",
      description:
        "Phòng khám Bệnh viện Đại học Y Dược 1 được phê duyệt danh mục kỹ thuật trong khám chữa bệnh theo quyết định số 467/QĐ-SYT ngày 26 tháng 5 năm 2020 của Sở Y tế. Phòng khám đa khoa Bệnh viện Đại học Y Dược 1 do TS,BS, Nguyễn Thị Thanh Thủy chịu trách nhiệm chuyên môn tại địa chỉ 20-22 Dương Quang Trung, Phường 12, Quận 10",
    },
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/819/gia-dich-vu-kham-chua-benh.png",
      title: "BẢNG GIÁ DỊCH VỤ KHÁM CHỮA BỆNH VÀ VẬT TƯ Y TẾ",
      description:
        "Phòng khám Bệnh viện Đại Học Y Dược 1 trân trọng kính gửi đến Quý khách hàng bảng giá một số dịch vụ y tế ",
    },
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/786/luat-kham-benh-chua-benh.jpg",
      title: "LUẬT KHÁM CHỮA BỆNH 2023 (15.2023.QH15)",
      description:
        "Ngày 09/01/2023, Quốc Hội Quốc hội nước Cộng hòa xã hội chủ nghĩa Việt Nam khóa XV, trong kỳ họp bất thường lần thứ 2 đã thông qua Luật Khám bệnh, chữa bệnh.",
    },
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/447/huong-dan-khai-bao-y-te-dien-tu.jpg",
      title: "Hướng dẫn khai báo y tế điện tử",
      description:
        "Trước diễn biến phức tạp của dịch bệnh Covid-19, theo quy định của Sở Y tế và để đảm bảo an toàn cho bệnh nhân, người nhà, khách đến liên hệ công tác và nhân viên y tế, Phòng khám Bệnh viện Đại học Y Dược 1 triển khai “khai báo y tế điện tử” trên hệ thống dữ liệu của Sở Y tế.",
    },
  ];

  // Calculate the start and end indices for slicing the array
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data array to display only the current page items
  const currentData =
    currentPage === 1
      ? checkupCardsData.slice(1, itemsPerPage + 1) // On page 1, exclude the first card
      : checkupCardsData.slice(startIndex, endIndex);

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
          THÔNG TIN THAM KHẢO
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
              height: "240px",
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

export default MoreInfomation;
