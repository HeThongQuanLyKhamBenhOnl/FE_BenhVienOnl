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

const NewsEvent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const checkupCardsData = [
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/440/390x246.jpg",
      title: "Những ưu điểm vượt trội của đo loãng xương bằng phương pháp DEXA",
      description:
        "Biến chứng nặng nề nhất của Loãng xương là làm gia tăng nguy cơ gãy xương...",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/891/nguyen-nhan-gay-benh-gan-nhiem-mo.jpg",
      title: "NGUYÊN NHÂN GÂY BỆNH GAN NHIỄM MỠ",
      description:
        "Gan nhiễm mỡ là tình trạng dư thừa mỡ trong gan quá nhiều, nếu không được điều trị kịp thời...",
    },
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/893/soi-mat.jpg",
      title: "SỎI MẬT: NGUYÊN NHÂN, TRIỆU CHỨNG, CÁCH CHẨN ĐOÁN VÀ ĐIỀU TRỊ",
      description:
        "Sỏi mật là các viên sỏi có kích thước từ hạt cát đến quả bóng bàn...",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/894/8-cach-don-gian-giup-giam-dau-bung-kinh-hieu-qua.jpg",
      title: "8 CÁCH ĐƠN GIẢN GIÚP GIẢM ĐAU BỤNG KINH HIỆU QUẢ",
      description:
        "Nhiều chị nữ phụ nữ gặp phải tình trạng đau bụng kinh trước và trong kỳ kinh nguyệt...",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/886/bien-chung-cua-dai-thao-duong-va-cach-phong-ngua.jpg",
      title: "BIẾN CHỨNG CỦA BỆNH TIỂU ĐƯỜNG VÀ CÁCH PHÒNG NGỪA",
      description:
        "Người bệnh tiểu đường nếu không thể kiểm soát tốt mức đường huyết có thể xảy ra nhiều biến chứng nguy hiểm...",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/887/khi-noi-soi-da-day-can-luy-y-nhung-gi.jpg",
      title: "KHI NỘI SOI DẠ DÀY CẦN LƯU Ý NHỮNG GÌ?",
      description:
        "Nội soi dạ dày là phương pháp đưa ống soi vào đường tiêu hóa của bệnh nhân giúp quan sát trực tiếp...",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/890/phong-ngua-benh-gan-nhiem-mo.jpg",
      title: "PHÒNG NGỪA BỆNH GAN NHIỄM MỠ",
      description:
        "Phòng ngừa bệnh gan nhiễm mỡ là cách để chúng ta có một lá gan khỏe mạnh...",
    },
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/882/ung-thu-vu.jpg",
      title: "UNG THƯ VÚ: NGUYÊN NHÂN, TRIỆU CHỨNG, CHẨN ĐOÁN VÀ ĐIỀU TRỊ",
      description:
        "Ung thư vú xảy ra khi các tế bào ác tính hình thành từ trong mô tuyến vú...",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/888/trieu-chung-cua-gan-nhiem-mo-la-gi.jpg",
      title: "TRIỆU CHỨNG CỦA GAN NHIỄM MỠ LÀ GÌ?",
      description:
        "Người bị gan nhiễm mỡ khi có dấu hiệu rối loạn chức năng gan hay không có triệu chứng cũng nên chủ động thăm khám...",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/881/viem-gan-a-nguyen-nhan-trieu-chung-va-cach-dieu-tri.jpg",
      title: "XUẤT HUYẾT DẠ DÀY CÓ NGUY HIỂM KHÔNG?",
      description:
        "Xuất huyết dạ dày là triệu chứng rối loạn đường tiêu hóa, có nguy cơ gây biến chứng nguy hiểm nếu không điều trị kịp thời...",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/892/u-xo-tu-cung-co-bien-chung-thanh-ung-thu-khong.jpg",
      title: "U XƠ TỬ CUNG CÓ BIẾN CHỨNG THÀNH UNG THƯ KHÔNG?",
      description:
        "U xơ tử cung thường gặp ở nữ giới trong độ tuổi sinh sản, ít phát triển thành ung thư...",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/881/viem-gan-a-nguyen-nhan-trieu-chung-va-cach-dieu-tri.jpg",
      title: "VIÊM GAN A: NGUYÊN NHÂN, TRIỆU CHỨNG VÀ ĐIỀU TRỊ",
      description:
        "Viêm gan siêu vi A là nguyên nhân gây bệnh viêm gan A, ảnh hưởng đến hoạt động ổn định của gan...",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/884/khi-nao-can-chup-cong-huong-tu(mri)-mach-mau-nao.jpg",
      title: "KHI NÀO CẦN CHỤP CỘNG HƯỞNG TỪ (MRI) MẠCH MÁU NÃO?",
      description:
        "Chụp cộng hưởng từ (MRI) mạch máu não giúp tạo ra hình ảnh 3 chiều của mạch máu não...",
    },
    {
      imgSrc:
        "https://umcclinic.com.vn/Data/Sites/1/News/887/khi-noi-soi-da-day-can-luy-y-nhung-gi.jpg",
      title: "KHI NỘI SOI DẠ DÀY CẦN LƯU Ý NHỮNG GÌ?",
      description:
        "Nội soi dạ dày là phương pháp đưa ống soi vào đường tiêu hóa giúp quan sát trực tiếp các tổn thương...",
    },
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/882/ung-thu-vu.jpg",
      title: "UNG THƯ VÚ: NGUYÊN NHÂN, TRIỆU CHỨNG, CHẨN ĐOÁN VÀ ĐIỀU TRỊ",
      description:
        "Ung thư vú xảy ra khi các tế bào ác tính hình thành từ trong mô tuyến vú...",
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

export default NewsEvent;