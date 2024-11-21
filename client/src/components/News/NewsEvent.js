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
      to={`/tin-tuc-su-kien/${formatTitleForURL(title)}`}
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
      to={`/tin-tuc-su-kien/${formatTitleForURL(title)}`}
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

const NewsEvent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const checkupCardsData = [
    {
      imgSrc: "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744883/website_werpfk.jpg",
      title: "5 NĂM VÌ SỨC KHOẺ NGÀN QUÀ TẶNG TRI ÂN",
      description:
        "Nhân kỷ niệm 5 năm thành lập Phòng khám Bệnh viện Đại học Y Dược 1, ưu đãi và tặng nhiều phần quà xinh xắn cho tất cả các khách hàng đăng ký gói khám sức khỏe bất kỳ.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744902/thong-bao-nghi-le-quoc-khanh-02.09_600-x-380-px_qabi0s.jpg",
      title: "THÔNG BÁO NGHỈ LỄ QUỐC KHÁNH 02 THÁNG 09",
      description:
        "Phòng khám Bệnh viện Đại học Y Dược 1 xin thông báo lịch nghỉ lễ Quốc khánh ngày 02/09/2024 của Phòng khám như sau: ...",
    },
    {
      imgSrc: "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744907/1_dpfpbw.jpg",
      title: "NGÀY DÂN SỐ THẾ GIỚI 11 THÁNG 7",
      description:
        "Ngày Dân số Thế giới 11.07 hàng năm là lời nhắc nhở mỗi quốc gia và mỗi người trên trái đất về nguy cơ bùng nổ dân số.Bùng nổ dân số quá nhanh khiến đời sống con người gặp nhiều khó khăn - là căn nguyên khởi sinh của nhiều vấn đề trong xã hội, kìm hãm sự phát triển kinh tế. ",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744891/thong-bao-nghi-le-30-4_002_hcqn1u.jpg",
      title: "THÔNG BÁO LỊCH NGHỈ LỄ 30/04 VÀ 01/05",
      description:
        "Phòng khám Bệnh viện Đại học Y Dược 1 xin thông báo lịch nghỉ lễ 30.04 và 01.05 như sau:...",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744912/thong-bao-gio-to-hung-vuong_000_qtm3ev.jpg",
      title: "THÔNG BÁO LỊCH NGHỈ LỄ GIỖ TỔ HÙNG VƯƠNG NĂM 2024",
      description:
        "Phòng khám Bệnh viện Đại học Y Dược 1 xin thông báo lịch nghỉ lễ Giỗ tổ Hùng Vương như sau:...",
    },
    {
      imgSrc: "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744916/600x380_kdbsza.png",
      title: "MỪNG SINH NHẬT 6th - TƯNG BỪNG ƯU ĐÃI",
      description:
        "Từ ngày 04/03 - 15/04/2024, Phòng khám Bệnh viện Đại học Y Dược 1 tri ân khách hàng đăng ký sử dụng gói khám sức khỏe bất kỳ sẽ nhận được nhiều quà tặng...",
    },
    {
      imgSrc: "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744897/600x380px_qqd5dr.jpg",
      title:
        "MỪNG KHAI TRƯƠNG KHU KHÁM VIP ƯU ĐÃI 10% GÓI KHÁM GOLD VÀ PLATINUM",
      description:
        "Tại Phòng khám Bệnh viện Đại học Y Dược 1, chúng tôi cung cấp dịch vụ y tế không chỉ là “chữa bệnh” mà là “chăm sóc sức khỏe”. Bởi vì có rất nhiều bệnh lý có thể ngăn ngừa được nếu phát hiện kịp thời. Với các gói khám sức khỏe tổng quát toàn diện như Gold và Platinum, chúng tôi nỗ lực giúp bạn khỏe mạnh và giữ cho bạn luôn khỏe mạnh.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744951/mung-khai-truong-khu-kham-vip_jvsa1l.jpg",
      title: "RA MẮT KHU KHÁM VIP ƯU ĐÃI 50% PHÍ KHÁM BÁC SĨ",
      description:
        "Trong thời gian từ 21/9 - 28/9/2022, Quý khách hàng có thể liên hệ đặt lịch khám VIP để nhận ưu đãi giảm giá 50% chi phí khám bác sĩ.",
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
          TIN TỨC SỰ KIỆN
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
        <Col>
          <Link
            to={`/tin-tuc-su-kien/${formatTitleForURL(
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
                height: "240px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Link>
        </Col>

        <Col
          xs={24}
          sm={24}
          md={14}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "20px",
          }}
        >
          <Link
            to={`/tin-tuc-su-kien/${formatTitleForURL(
              checkupCardsData[0].title
            )}`}
          >
            <h4
              className="text-xl font-bold text-blue-900"
              style={{
                marginBottom: "15px",
              }}
            >
              {checkupCardsData[0].title}
            </h4>
          </Link>
          <p
            style={{
              textAlign: "justify",
              marginBottom: "20px",
            }}
          >
            {checkupCardsData[0].description}
          </p>
          <Link
            to={`/tin-tuc-su-kien/${formatTitleForURL(
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
        {currentData.slice(1).map((card, index) => (
          <CheckupCard
            key={index}
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

export default NewsEvent;
