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

const PACS = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const checkupCardsData = [
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/573/tinh-trang-ho-khan-hau-covid-19.jpg",
      title: "TÌNH TRẠNG HO KHAN HẬU COVID-19",
      description:
        "Sau khi khỏi bệnh COVID-19, nhiều người vẫn bị ho một thời gian dài sau đó. Nguyên nhân gây ho có thể là do cơ thể đào thải chất tiết, do kích thích trung khu thần kinh đường hô hấp, do có cơ địa dị ứng hoặc bị hen. Cuối cùng có thể là do người bệnh bị trào ngược dạ dày thực quản (có thể do sử dụng nhiều thuốc tây hoặc tình trạng stress) gây ho.",
    },
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/568/hoi-chung-viem-da-he-thong-o-tre-em-misc-la-gi.jpg",
      title: "HỘI CHỨNG VIÊM ĐA HỆ THỐNG Ở TRẺ EM (MIS-C) LÀ GÌ?",
      description:
        "Hội chứng viêm đa hệ thống ở trẻ em (MIS-C) là một tình trạng rất hiếm gặp, trong đó các bộ phận khác nhau của cơ thể như tim, phổi, thận, não, da, mắt hoặc cơ quan tiêu hóa bị viêm. MIS-C là một tình trạng nghiêm trọng nhưng có phục hồi nhanh chóng nếu được điều trị sớm.",
    },
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/551/ban-co-the-bi-tai-nhiem-covid-19-bao-nhieu-lan.jpg",
      title: "BẠN CÓ THỂ BỊ TÁI NHIỄM COVID-19 BAO NHIÊU LẦN?",
      description:
        "Sau khi nhiễm covid-19, mặc dù cơ thể đã có kháng thể chống lại virus SARS-CoV-2 nhưng một số người vẫn có thể bị nhiễm lần thứ 2, thứ 3. Điều này phụ thuộc vào khả năng sinh kháng thể ở mỗi người. Thông thường những người có sức khỏe tốt, ăn uống đầy đủ, nghỉ ngơi và rèn luyện hợp lý, không có bệnh lý nền sẽ có ít nguy cơ tái nhiễm hơn.",
    },
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/549/ai-co-nguy-co-mac-benh-covid-19-nang.jpg",
      title: "AI CÓ NGUY CƠ MẮC BỆNH COVID-19 NẶNG?",
      description:
        "Các triệu chứng của bệnh Covid-19 ở mỗi người không giống nhau. Một số người không có triệu chứng gì, trong khi một số người khác bị bệnh nặng ảnh hưởng nghiêm trọng đến sức khỏe. ",
    },
    {
      imgSrc: "	https://umcclinic.com.vn/Data/Sites/1/News/548/ai-can-tiem-vaccine-covid-19-mui-4.jpg",
      title: "AI CẦN TIÊM VACCINE COVID 19 MŨI 4?",
      description:
        "Vaccine Covid-19 mũi thứ 4 chính là liều nhắc lại, được sử dụng để củng cố miễn dịch cho các nhóm đối tượng có yếu tố nguy cơ mắc bệnh Covid-19 nặng hoặc có nguy cơ cao tiếp xúc với bệnh nhân Covid-19. ",
    },
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/540/test-nhanh-co-phat-hien-duoc-omiron-tang-hinh-khong.jpg",
      title: "TEST NHANH CÓ PHÁT HIỆN ĐƯỢC OMICRON TÀNG HÌNH KHÔNG?",
      description:
        "Omicron tàng hình có tên chính thức BA.2 là biến thể phụ của Omicron, hiện đang lây lan rất nhanh và chiếm đa số các trường hợp mắc bệnh Covid-19 mới ở nhiều nước trên thế giới và cả Việt Nam.",
    },
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/522/trieu-chung-cua-hoi-chung-hau-covid-19-la-gi.jpg",
      title: "TRIỆU CHỨNG CỦA HỘI CHỨNG HẬU COVID-19 LÀ GÌ?",
      description:
        "Các triệu chứng của hội chứng hậu Covid-19 kéo dài từ đợt cấp tính trước đó hoặc tái phát sau khi đã khỏi bệnh, kéo dài vài tuần hoặc thậm chí vài tháng. Các triệu chứng này xuất hiện mà không thể giải thích bằng một nguyên nhân nào khác.",
    },
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/504/hoi-chung-hau-covid-19-o-tre-em.jpg",
      title: "HỘI CHỨNG HẬU COVID-19 Ở TRẺ EM",
      description:
        "Sau khi nhiễm Covid-19, một số trẻ khỏi bệnh hoàn toàn, nhưng một số trẻ sau nhiều tháng vẫn ho, hồi hộp, suy giảm trí nhớ, khó tập trung học tập, cảm thấy mệt mỏi khi chạy nhảy, vận động… Các triệu chứng này là hội chứng hậu Covid-19 ở trẻ em, có thể gặp ở cả những trẻ bị Covid-19 nhẹ hoặc không có triệu chứng.",
    },
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/496/hoi-chung-hau-covid-19-keo-dai-bao-lau.jpg",
      title: "HỘI CHỨNG HẬU COVID-19 KÉO DÀI BAO LÂU",
      description:
        "Cho đến thời điểm hiện nay chưa thể xác định chính xác hội chứng hậu covid-19 có thể kéo dài bao lâu. Những trường hợp được ghi nhận bị hội chứng hậu Covid-19 kéo dài trong nhiều tuần hoặc nhiều tháng, thậm chí lên đến 9 tháng hoặc lâu hơn.",
    },
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/495/bao-lau-sau-khi-khoi-benh-co-the-di-kham-hau-covid.jpg",
      title: "BAO LÂU SAU KHI KHỎI BỆNH CÓ THỂ ĐI KHÁM HẬU COVID-19",
      description:
        "Bao lâu sau khi khỏi bệnh có thể đi khám hậu Covid-19 có lẽ là câu hỏi mà rất nhiều F0 đang cần lời giải. Theo lời khuyên của chuyên gia thì sau 4 tuần kể từ khi mắc Covid-19, bạn có thể đi khám để kiểm tra sức khỏe hậu Covid-19. Các xét nghiệm cận lâm sàng giúp đánh giá và chẩn đoán tình trạng các cơ quan, kiểm tra tình trạng viêm và đông máu nhằm điều trị các triệu chứng hậu Covid-19 hiện tại và dự phòng các nguy cơ có thể xảy ra.",
    },
    {
      imgSrc: "	https://umcclinic.com.vn/Data/Sites/1/News/457/z2788510996357_bcca40c6468a45f0231939dd36c72789.jpg",
      title: "Hiểu sao cho đúng về bão Cytokine khiến bệnh Covid-19 diễn tiến nhanh",
      description:
        "“Cơn bão cytokine” là tình trạng sản xuất cytokine quá mức do phản ứng miễn dịch của cơ thể không được kiểm soát trước các tác nhân kích thích. Các tác nhân ở đây có thể là tình trạng nhiễm trùng, bệnh ác tính, rối loạn thấp khớp…",
    },
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/456/phu-nu-mang-thai-co-nen-tiem-vaccine-covid-19-khong.jpg",
      title: "Phụ nữ mang thai có nên tiêm Vaccine covid-19 không?",
      description:
        "Theo hướng dẫn của Bộ Y Tế Việt Nam thì Phụ nữ mang thai từ trên 13 tuần có thể tiêm vaccine COVID-19. Trước đó, Bộ Y tế xếp phụ nữ mang thai vào nhóm đối tượng hoãn tiêm phòng vaccine COVID-19. Tuy nhiên trong bối cảnh dịch bệnh diễn biến ngày càng phức tạp, số ca nhiễm COVID-19 ở nhóm đối tượng này ngày một tăng cao và có nhiều trường hợp diễn biến nặng, Bộ Y tế khuyến cáo ưu tiên tiêm vaccine cho nhóm đối tượng phụ nữ mang thai và bà mẹ đang cho con bú.",
    },
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/455/vi-sao-da-tiem-vaccine-van-co-the-bi-nhiem-covid-19.jpg",
      title: "Vì sao đã tiêm Vaccine vẫn có thể bị nhiễm Covid-19?",
      description:
        "Các nghiên cứu lâm sàng cho thấy vaccine COVID-19 bảo vệ hầu hết mọi người, và nó cũng cho thấy hiệu quả ngăn ngừa bệnh trong điều kiện thực tế. Nhưng không có vaccine nào có thể ngăn ngừa bệnh tật 100%. Do vậy, một số người đã tiêm chủng vaccine COVID-19 đầy đủ vẫn có khả năng bị nhiễm bệnh.",
    },
    {
      imgSrc: "https://umcclinic.com.vn/Data/Sites/1/News/28/vi-sao-nen-thuc-hien-tam-soat-ung-thu-dinh-ky-1600x1010-(1).jpg",
      title: "VÌ SAO NÊN THỰC HIỆN TẦM SOÁT UNG THƯ ĐỊNH KỲ",
      description:
        "Tỉ lệ mắc ung thư đang có xu hướng tăng nhanh, số lượng người trẻ bị bệnh ngày càng cao. Năm 2018, Việt Nam có hơn 165.000 ca ung thư mới, dự báo con số này có thể lên đến 190.000 người vào cuối năm 2020 (Theo thống kê của Tổ chức Nghiên cứu ung thư quốc tế IARC). Do đó, việc tầm soát ung thư định kỳ là rất quan trọng để có thể phát hiện sớm và điều trị hiệu quả ung thư.",
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
          HỎI ĐÁP Y KHOA
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

export default PACS;
