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
      to={`/y-hoc-thuong-thuc/${formatTitleForURL(title)}`}
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
      to={`/y-hoc-thuong-thuc/${formatTitleForURL(title)}`}
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

const CommonMedicine = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const checkupCardsData = [
    {
      imgSrc: 
      "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744264/390x246_tns2ep.jpg",
      title: "Những ưu điểm vượt trội của đo loãng xương bằng phương pháp DEXA",
      description:
        "Biến chứng nặng nề nhất của Loãng xương là làm gia tăng nguy cơ gãy xương và các hệ quả nghiêm trọng của gãy xương như đau đớn, giảm chất lượng cuộc sống, tàn phế, thậm chí là tử vong. Tuy nhiên loãng xương lại là bệnh âm thầm, không có triệu chứng khi mới mắc bệnh, vì vậy việc chẩn đoán sẽ chậm trễ nếu chỉ dựa vào triệu chứng lâm sàng. Để chẩn đoán loãng xương, hiện nay phải dựa vào việc đánh giá mật độ khoáng của xương (còn gọi là mật độ xương hay khối lượng xương). Có nhiều phương pháp đo mật độ xương, nhưng DEXA là phương pháp chính xác nhất và được ứng dụng rộng rãi trên toàn thế giới với nhiều ưu điểm vượt trội.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744269/8-cach-don-gian-giup-giam-dau-bung-kinh-hieu-qua_z6jibj.jpg",
      title: "8 CÁCH ĐƠN GIẢN GIÚP GIẢM ĐAU BỤNG KINH HIỆU QUẢ",
      description:
        "Nhiều chị nữ phụ nữ gặp phải tình trạng đau bụng kinh trước và trong kỳ kinh nguyệt. Đau bụng kinh có thể không quá nghiêm trọng, nhưng có thể gây khó khăn trong cuộc sống sinh hoạt hàng ngày. Để làm giảm cơn đau và cảm thấy dễ chịu hơn, chị em có thể tham khảo một số biện pháp đơn giản giúp giảm đau bụng kinh hiệu quả.  ",
    },
    {
      imgSrc: 
      "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744282/soi-mat_vkrelw.jpg",
      title: "SỎI MẬT: NGUYÊN NHÂN, TRIỆU CHỨNG, CÁCH CHẨN ĐOÁN VÀ ĐIỀU TRỊ",
      description:
        "Sỏi mật là các viên sỏi có kích thước từ hạt cát đến quả bóng bàn, hình thành trong ống mật hoặc túi mật.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744292/u-xo-tu-cung-co-bien-chung-thanh-ung-thu-khong_i7awtw.jpg",
      title: "U XƠ TỬ CUNG CÓ BIẾN CHỨNG THÀNH UNG THƯ KHÔNG?",
      description:
        "U xơ tử cung thường gặp ở nữ giới trong độ tuổi sinh sản, ít phát triển thành ung thư nhưng có thể gây biến chứng nguy hiểm nếu không điều trị kịp thời.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744277/nguyen-nhan-gay-benh-gan-nhiem-mo_w8j34i.jpg",
      title: "NGUYÊN NHÂN GÂY BỆNH GAN NHIỄM MỠ",
      description:
        "Gan nhiễm mỡ là tình trạng dư thừa mỡ trong gan quá nhiều, nếu không được điều trị kịp thời, bệnh có thể gây xơ gan và ung thư gan nguy hiểm. ",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744303/phong-ngua-benh-gan-nhiem-mo_zxzalk.jpg",
      title: "PHÒNG NGỪA BỆNH GAN NHIỄM MỠ",
      description:
        "BPhòng ngừa bệnh gan nhiễm mỡ là cách để chúng ta có một lá gan khỏe mạnh. Mỗi người nên tìm hiểu về bệnh gan nhiễm mỡ và thay đổi lối sống tích cực để phòng ngừa các bệnh lý về gan hiệu quả.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744308/xo-gan_ueiol5.jpg",
      title: "XƠ GAN: NGUYÊN NHÂN TRIỆU CHỨNG VÀ PHÒNG NGỪA",
      description:
        "Giai đoạn muộn của quá trình tạo sẹo (xơ hóa) ở gan được gọi là xơ gan. Xơ gan do nhiều nguyên nhân khác nhau gây ra như viêm gan do virus hay nghiện rượu mãn tính.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744313/khi-noi-soi-da-day-can-luy-y-nhung-gi_aiqjoh.jpg",
      title: "KHI NỘI SOI DẠ DÀY CẦN LƯU Ý NHỮNG GÌ?",
      description:
        "Nội soi dạ dày là phương pháp đưa ống soi vào đường tiêu hóa của bệnh nhân giúp quan sát trực tiếp các tổn thương bên trong đường tiêu hóa.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744288/bien-chung-cua-dai-thao-duong-va-cach-phong-ngua_kbtpcy.jpg",
      title: "BIẾN CHỨNG CỦA BỆNH TIỂU ĐƯỜNG VÀ CÁCH PHÒNG NGỪA",
      description:
        "Người bệnh tiểu đường (hay còn gọi là đái tháo đường) nếu không thể kiểm soát tốt mức đường huyết có thể xảy ra nhiều biến chứng nguy hiểm như tổn thương võng mạc, suy tim, suy thận, cắt bỏ bàn chân, nhiễm toan ceton",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744318/xuat-huyet-da-day-co-nguy-hiem-khong_gfsgav.jpg",
      title: "XUẤT HUYẾT DẠ DÀY CÓ NGUY HIỂM KHÔNG?",
      description:
        "Xuất huyết dạ dày là triệu chứng rối loạn đường tiêu hóa, có nguy cơ gây biến chứng nguy hiểm nếu không được điều trị kịp thời và đúng cách. ",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744323/khi-nao-can-chup-cong-huong-tu_mri_-mach-mau-nao_gbdugw.jpg",
      title: "KHI NÀO CẦN CHỤP CỘNG HƯỞNG TỪ (MRI) MẠCH MÁU NÃO?",
      description:
        "Chụp cộng hưởng từ (MRI) mạch máu não giúp tạo ra hình ảnh 3 chiều của mạch máu não với độ phóng đại lớn giúp bác sĩ xác định tình trạng bất thường bên trong mạch máu não.",
    },
    {
      imgSrc: 
      "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744327/ung-thu-vu_nhmtoe.jpg",
      title: "UNG THƯ VÚ: NGUYÊN NHÂN, TRIỆU CHỨNG, CHẨN ĐOÁN VÀ ĐIỀU TRỊ",
      description:
        "Ung thư vú xảy ra khi các tế bào ác tính hình thành từ trong mô tuyến vú. Đây là căn bệnh có tỷ lệ tử vong hàng đầu trong số các loại ung thư ở phụ nữ.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744299/viem-gan-a-nguyen-nhan-trieu-chung-va-cach-dieu-tri_k2coda.jpg",
      title: "VIÊM GAN A: NGUYÊN NHÂN, TRIỆU CHỨNG VÀ ĐIỀU TRỊ",
      description:
        "Viêm gan siêu vi A là nguyên nhân gây bệnh viêm gan A, ảnh hưởng đến hoạt động ổn định của gan và gây biến chứng nghiêm trọng đến sức khỏe của người bệnh.",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731744332/trieu-chung-cua-gan-nhiem-mo-la-gi_vsiq9u.jpg",
      title: "TRIỆU CHỨNG CỦA GAN NHIỄM MỠ LÀ GÌ?",
      description:
        "Người bị gan nhiễm mỡ khi có dấu hiệu rối loạn chức năng gan hay không có triệu chứng cũng nên chủ động thăm khám, xét nghiệm chức năng gan để kiểm tra và điều trị kịp thời, hạn chế biến chứng.",
    },
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
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
          Y HỌC THƯỜNG THỨC
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
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 100px",
          flexWrap: "wrap",
        }}
      >
        <Col xs={24} sm={24} md={10} style={{ paddingRight: "20px" }}>
          <Link
            to={`/y-hoc-thuong-thuc/${formatTitleForURL(
              checkupCardsData[0].title
            )}`}
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

        <Col xs={24} sm={24} md={14} style={{ paddingLeft: "20px" }}>
          <Link
            to={`/y-hoc-thuong-thuc/${formatTitleForURL(
              checkupCardsData[0].title
            )}`}
          >
            <h4 className="text-xl font-bold text-blue-900">
              {checkupCardsData[0].title}
            </h4>
          </Link>
          <p style={{ textAlign: "justify" }}>
            {checkupCardsData[0].description}
          </p>
          <Link
            to={`/y-hoc-thuong-thuc/${formatTitleForURL(
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

export default CommonMedicine;
