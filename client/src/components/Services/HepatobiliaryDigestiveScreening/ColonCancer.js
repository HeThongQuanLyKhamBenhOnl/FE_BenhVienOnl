import React, { useRef } from "react";
import { Row, Col, Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import HeaderComponent from "../../Header/Header";
import FooterComponent from "../../component/Footer";
import "bootstrap/dist/css/bootstrap.css";

// Define news items array for the NewsSection
const newsItems = [
  {
    src: "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731740676/vector-smart-object-1_dlrqa1.png",
    alt: "Tiên phong",
    title: "TIÊN PHONG",
  },
  {
    src: "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731740700/layer-600juykyfu_gybtcl.png",
    alt: "Thấu hiểu",
    title: "THẤU HIỂU",
  },
  {
    src: "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731740719/layer-601_sb3r6p.png",
    alt: "Chuẩn mực",
    title: "CHUẨN MỰC",
  },
  {
    src: "https://res.cloudinary.com/db4ji9y1x/image/upload/v1731740741/layer-602_t2eqrw.png",
    alt: "An toàn",
    title: "AN TOÀN",
  },
];

const ColonCancer = () => {
  return (
    <div>
      <HeaderComponent />
      <HeaderSection />
      <AccessSection />
      <NewsSection />
      <FooterComponent />
    </div>
  );
};

const HeaderSection = () => (
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
      GÓI TẦM SOÁT UNG THƯ ĐẠI TRỰC TRÀNG
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
        <span
          style={{
            fontSize: "1.5rem",
            color: "#73c2ec",
          }}
        >
          ✦
        </span>
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
);

const AccessSection = () => (
  <div>
    {renderAccessContent(
      1,
      "GÓI TẦM SOÁT UNG THƯ ĐẠI TRỰC TRÀNG",
      `
        Tầm soát ung thư đại trực tràng là phương pháp phát hiện tế bào ung thư hoặc các tế bào bất thường có thể phát triển thành ung thư. Tầm soát ung thư đại trực tràng để phát hiện bệnh sớm có ý nghĩa rất quan trọng trong việc nâng cao hiệu quả điều trị, giảm đau đớn và tăng tuổi thọ cho người bệnh.
    `
    )}
    {renderAccessContent(
      2,
      "Vì sao nên thực hiện tầm soát ung thư đại trực tràng",
      `
        <br />- Ung thư đại trực tràng có các triệu chứng ban đầu nhưng người bệnh dễ chủ quan, thường nhầm lẫn sang các bệnh đường tiêu hóa thông thường khác. Vì vậy, các bác sĩ chuyên môn khuyến cáo nên thực hiện tầm soát ung thư đại trực tràng ngay cả khi chưa có triệu chứng nào để hạn chế mức độ nguy hiểm của bệnh.
        <br />- Ung thư đại trực tràng nếu được phát hiện sớm có tỷ lệ chữa khỏi lên đến 90% nhờ các phương pháp điều trị kết hợp với chế độ dinh dưỡng hợp lý. 
        <br />- Ngoài ra, việc tầm soát ung thư đại trực tràng là rất cần thiết để bảo vệ sức khỏe. Khi phát hiện ra polyd, các bác sĩ có thể chỉ định người bệnh thực hiện phẫu thuật nội soi cắt bỏ polyp, ngăn cản sự phát triển thành ung thư.
    `
    )}
    {renderAccessContent(
      3,
      "Ai nên thực hiện tầm soát ung thư đại trực tràng",
      `
        <br />- Người trên 50 tuổi;
        <br />- Người thường xuyên hút thuốc lá, uống rượu bia;
        <br />- Người có bệnh lý về đại trực tràng như: viêm ruột mạn tính, viêm loét đại tràng, viêm loét tá tràng, bệnh crohn;
        <br />- Người có polyd đại tràng hoặc đã từng phẫu thuật cắt polyd;
        <br />- Người có tiền sử người thân bị polyp hoặc ung thư đường tiêu hóa;
        <br />- Người tăng cân béo phì, ít vận động; chế độ ăn uống thiếu chất xơ, rau xanh và trái cây; lạm dụng chất béo, muối và các loại thực phẩm chế biến sẵn, thực phẩm ngâm chua, xông khói;
        <br />- Người có các triệu chứng sau nên thực hiện tầm soát ung thư đại trực tràng ngay: rối loạn tiêu hóa kéo dài, khó tiêu, đầy hơi chướng bụng, đau tức vùng bụng, đi ngoài ra máu, phân mỏng hẹp hơn bình thường, chán ăn, sụt cân nhanh, mệt mỏi suy nhược.

        <br />Một số triệu chứng của ung thư đại trực tràng rất giống bệnh lý khác, người bệnh nên đến các cơ sở khám chữa bệnh để làm kiểm tra chuyên sâu.
    `
    )}
    {renderAccessContent(
      4,
      "Thông tin chi tiết gói tầm soát ung thư đại trực tràng tại Phòng khám Bệnh viện",
      `
        <br />Gói tầm soát ung thư đại trực tràng được đội ngũ chuyên môn của Phòng khám Bệnh viện Đại học Y Dược 1 xây dựng dựa trên nguyên tắc: khoa học, hiệu quả và chính xác. Chi tiết gói khám gồm:

        <br /><div style="display: flex; justify-content: center;"><img style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731745857/noi-dung-cac-goi-kham-27_umyuwe.jpg" /></div>
    `
    )}
    {renderAccessContent(
      5,
      "Giá chi tiết của gói tầm soát ung thư đại trực tràng",
      `
        <br />- Giá áp dụng cho bệnh nhân dưới 60 tuổi: 4.250.000đ
        <br />- Giá áp dụng cho bệnh nhân trên 60 tuổi: 4.650.000đ
    `
    )}
    {renderAccessContent(
      6,
      "Những giá trị cộng thêm khi tầm soát ung thư thực quản dạ dày tại Phòng khám Bệnh viện",
      `
        <br />- Được thăm khám và nhận tư vấn từ đội ngũ chuyên gia là các Giáo sư, Tiến Sĩ, Bác Sĩ đầu ngành, có chuyên môn cao từ Bệnh viện Đại học Y Dược TP.HCM;
        <br />- Trang thiết bị được đầu tư hiện đại theo chuẩn quốc tế và tương đương với các bệnh viện lớn, giúp bác sĩ có những chẩn đoán chính xác và điều trị hiệu quả;
        <br />- Thời gian chờ đợi ít, bác sĩ thăm khám và tư vấn kỹ lưỡng;
        <br />- Đội ngũ chăm sóc khách hàng tận tình, chu đáo, chuyên nghiệp;
        <br />- Thủ tục đặt hẹn thuận tiện qua tổng đài 1900 6023.
    `
    )}
    {renderAccessContent(
      7,
      "Lưu ý trước khi đi tầm soát ung thư đại trực tràng",
      `
        <br />- Một số danh mục trong dịch vụ sẽ không áp dụng theo khuyến cáo của Bác sĩ;
        <br />- Trang phục thuận tiện để Bác sĩ có thể thăm khám dễ dàng hơn;
        <br />- Nhịn ăn trước 8 đến 12 tiếng để thực hiện các xét nghiệm và nội soi;
        <br />- Không uống các loại nước uống như cà phê, trà, sữa, nước ngọt và nước trái cây, chỉ nên uống một ít nước lọc trước khi đến khám;
        <br />- Nên tránh ăn những thức ăn có nhiều chất xơ như rau xanh trong vài ngày. Có thể ăn thức ăn nhẹ vào buổi tối hôm trước như cháo, soup. Trong trường hợp phải làm nội soi sau 12 giờ trưa, quý khách có thể uống dịch lỏng 6 giờ trước khi tiến hành nội soi như: nước lọc, nước ép táo,…
        <br />- Không nên hút thuốc và uống bia rượu trong vòng 24 tiếng trước khi đến khám;
        <br />- Đối với phụ nữ, chỉ nên tầm soát ung thư sau chu kỳ kinh nguyệt 5-7 ngày. Cần thông báo cho Bác sĩ trong trường hợp có thai hoặc nghi ngờ có thai.
    `
    )}
  </div>
);

const renderAccessContent = (index, title, content) => (
  <Col key={index} className="py-4">
    <Row>
      <h5 className="text-xl font-bold text-blue-900">
        {index}. {title}
      </h5>
    </Row>
    <Row>
      <p
        className="text-justify text-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Row>
  </Col>
);

const NewsSection = () => {
  const carouselRef = useRef(null);

  const handlePrev = () => carouselRef.current.prev();
  const handleNext = () => carouselRef.current.next();

  return (
    <div className="news-section py-8 text-center">
      <h2 className="text-blue-700 font-bold text-2xl mb-4">GIÁ TRỊ CỐT LÕI</h2>
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
        <span
          style={{
            fontSize: "1.5rem",
            color: "#73c2ec",
          }}
        >
          ✦
        </span>
        <span
          style={{
            width: "50px",
            height: "1px",
            backgroundColor: "#a3d1ef",
            margin: "0 10px",
          }}
        ></span>
      </div>

      <div style={{ position: "relative" }}>
        <Carousel ref={carouselRef} dots={false}>
          {newsItems.map((item, index) => (
            <div key={index}>
              <Col xs={24} className="text-center">
                <div
                  className="mx-auto mb-4 flex items-center justify-center"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: "#3e73d4",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                    src={item.src}
                    alt={item.alt}
                    className="icon-image"
                  />
                </div>
                <h3 className="text-blue-700 font-bold text-lg">
                  {item.title}
                </h3>
              </Col>
            </div>
          ))}
        </Carousel>
        <Button
          type="text"
          icon={<LeftOutlined />}
          onClick={handlePrev}
          style={{
            position: "absolute",
            top: "50%",
            left: "250px",
            transform: "translateY(-50%)",
          }}
        />
        <Button
          type="text"
          icon={<RightOutlined />}
          onClick={handleNext}
          style={{
            position: "absolute",
            top: "50%",
            right: "250px",
            transform: "translateY(-50%)",
          }}
        />
      </div>
    </div>
  );
};

export default ColonCancer;
