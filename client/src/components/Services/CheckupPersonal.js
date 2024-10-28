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
      to={`/kham-suc-khoe-tong-quat-ca-nhan/${formatTitleForURL(title)}`}
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
      to={`/kham-suc-khoe-tong-quat-ca-nhan/${formatTitleForURL(title)}`}
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

const CheckupPersonal = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const checkupCardsData = [
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/media/dich-vu/g%C3%B3i-covid/chuy%C3%AAn-s%C3%A2u/goi-kham-suc-khoe-hau-covid-19-chuyen-sau.jpg",
      title: "GÓI KHÁM SỨC KHỎE HẬU COVID-19 CHUYÊN SÂU",
      description:
        "Gói kiểm tra sức khỏe hậu Covid-19 nâng cao giúp đánh giá, chẩn đoán, điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19. Sau khi nhiễm bệnh và đã khỏi, nhiều bệnh nhân Covid-19 lại gặp phải hội chứng hậu Covid-19 với các triệu chứng tái phát, kéo dài hoặc xuất hiện các vấn đề sức khỏe mới trong nhiều tuần hoặc nhiều tháng sau đó. ",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/462/goi-kiem-tra-suc-khoa-hau-covid-19-co-ban.jpg",
      title: "GÓI KIỂM TRA HẬU SỨC KHỎE COVID-19 NÂNG CAO",
      description:
        "Kiểm tra sức khỏe hậu Covid-19 giúp đánh giá, chẩn đoán, điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19. Hầu hết những người bị Covid-19 có thể hoàn toàn khỏi bệnh trong vài tuần kể từ khi mắc bệnh. Nhưng một số người khác gặp các triệu chứng tái phát, kéo dài hoặc xuất hiện các vấn đề sức khỏe mới ngay cả khi đã khỏi bệnh. Tình trạng này gọi là hội chứng hậu Covid-19.",
    },
    {
      imgSrc:
        "	https://umcclinic.com.vn/Data/Sites/1/News/212/goi-kham-suc-khoe-tong-quat-platinum-6.jpg",
      title: "GÓI KHÁM SỨC KHỎE TỔNG QUÁT PLATINUM",
      description:
        "Một sức khỏe tốt giúp chúng ta yên tâm học tập, làm việc, theo đuổi hạnh phúc và sống với đam mê. Để bảo vệ sức khỏe chúng ta cần thường xuyên khám sức khỏe tổng quát định kỳ. Đây là phương pháp hiệu quả nhất để kịp thời phát hiện ra những bất thường trong cơ thể, tăng hiệu quả điều trị, hạn chế nguy cơ biến chứng, tiết kiệm thời gian và chi phí điều trị.",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/211/goi-kham-suc-khoe-tong-quat-gold-6.jpg",
      title: "GÓI KHÁM SỨC KHỎE TỔNG QUÁT VIP GOLD",
      description:
        "Gói khám sức khỏe tổng quát Gold là gói khám sức khoẻ VIP được đội ngũ chuyên môn của Phòng khám xây dựng giúp khách hàng có thể tầm soát toàn diện các bộ phận của cơ thể gồm xét nghiệm và các dịch vụ cận lâm sàng từ cơ bản đến chuyên sâu.",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/media/dich-vu/g%C3%B3i-covid/goi-kiem-tra-suc-khoe-hau-covid-19-nang-cao.jpg",
      title: "GÓI KHÁM SỨC KHỎE TỔNG QUÁT CHUYÊN SÂU",
      description:
        "Khi lựa chọn một gói khám sức khoẻ tổng quát chuyên sâu, bạn luôn mong muốn gói khám có thể kiểm tra được bao quát tình hình sức khoẻ với chi phí hợp lý.",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/209/1goi-kham-suc-khoe-tong-quat-nang-cao.jpg",
      title: "GÓI KHÁM SỨC KHOẺ TỔNG QUÁT NÂNG CAO",
      description:
        "Kiểm tra sức khỏe hậu Covid-19 giúp đánh giá, chẩn đoán, điều trị và dự phòng các yếu tố nguy cơ của hội chứng hậu Covid-19. Hầu hết những người bị Covid-19 có thể hoàn toàn khỏi bệnh trong vài tuần kể từ khi mắc bệnh. Nhưng một số người khác gặp các triệu chứng tái phát, kéo dài hoặc xuất hiện các vấn đề sức khỏe mới ngay cả khi đã khỏi bệnh. Tình trạng này gọi là hội chứng hậu Covid-19. ",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/206/goi-kham-suc-khoe-tong-quat-va-tam-soat-ung-thu-1.jpg",
      title: "KHÁM SỨC KHỎE TỔNG QUÁT VÀ TẦM SOÁT UNG THƯ",
      description:
        "Khám sức khỏe tổng quát và tầm soát ung thư định kỳ đóng vai trò quan trọng trong việc phát hiện sớm các vấn đề bất thường về sức khỏe (nếu có) trước khi chuyển thành bệnh hoặc phát hiện bệnh ở giai đoạn sớm khi chưa có biểu hiện ra bên ngoài để điều trị hiệu quả hơn, khả năng lành bệnh cao hơn, tiết kiệm được thời gian, tiền bạc và tránh được các biến chứng do bệnh gây ra.",
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
          KHÁM SỨC KHỎE TỔNG QUÁT CÁ NHÂN
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
            to={`/kham-suc-khoe-tong-quat-ca-nhan/${formatTitleForURL(
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
            to={`/kham-suc-khoe-tong-quat-ca-nhan/${formatTitleForURL(
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
            to={`/kham-suc-khoe-tong-quat-ca-nhan/${formatTitleForURL(
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

      <FooterComponent />
    </div>
  );
};

export default CheckupPersonal;
