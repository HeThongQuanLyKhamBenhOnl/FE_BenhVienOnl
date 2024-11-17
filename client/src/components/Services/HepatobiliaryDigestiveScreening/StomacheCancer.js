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

const StomacheCancer = () => {
  return (
    <div className="container mx-auto py-8">
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
      GÓI TẦM SOÁT UNG THƯ DẠ DÀY
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
      "GÓI TẦM SOÁT UNG THƯ DẠ DÀY",
      `
        Ung thư dạ dày và thực quản là ung thư về đường tiêu hóa rất phổ biến. Ung thư thực quản dạ dày hoàn toàn có thể chữa khỏi nếu người bệnh được tầm soát ung thư sớm.
    `
    )}
    {renderAccessContent(
      2,
      "Vì sao nên thực hiện tầm soát ung thư thực quản dạ dày",
      `
        <br />- Ung thư thực quản dạ dày ở nam giới cao gấp 3-4 lần nữ giới. Ung thư thực quản dạ dày thường không được phát hiện sớm vì không có triệu chứng ban đầu hoặc có rất ít triệu chứng.
        <br />- Phương pháp cắt bỏ khối u là phương pháp điều trị tiên quyết cho bệnh nhân ung thư thực quản dạ dày, cho tiên lượng sống cao nhất. Tuy nhiên, nếu không phát hiện kịp thời, ung thư thực quản dạ dày khi di căn có thể xâm lấn sang các bộ phận khác của cơ thể như gan, thận, não, xương… Lúc này, việc điều trị chỉ giúp bệnh nhân giảm đau đớn.
        <br />- Việc tầm soát ung thư thực quản dạ dày thông qua các xét nghiệm chuyên sâu giúp phát hiện ung thư hoặc những tổn thương tiền ung thư có nguy cơ phát triển thành ung thư. Từ đó giúp phòng chống ung thư, đưa ra kế hoạch chăm sóc và theo dõi sức khỏe, xây dựng phương pháp điều trị kịp thời giúp người bệnh ít đau đớn, giảm chi phí, hạn chế các biến chứng và nhanh chóng khỏi bệnh. 
    `
    )}
    {renderAccessContent(
      3,
      "Ai nên thực hiện tầm soát ung thư thực quản dạ dày",
      `
        <br />- Người thường xuyên hút thuốc lá, uống rượu bia;
        <br />- Người có bệnh lý về thực quản như trào ngược thực quản, Barrett thực quản, túi thừa thực quản;
        <br />- Người bị viêm loét dạ dày tá tràng, viêm loét tá tràng, viêm teo dạ dày, dị sản ruột, nhiễm khuẩn HP;
        <br />- Người đã từng phẫu thuật cắt dạ dày, có polyp dạ dày;
        <br />- Người tăng cân béo phì, ít vận động; chế độ ăn uống thiếu chất xơ, rau xanh và trái cây; lạm dụng chất béo, muối và các loại thực phẩm chế biến sẵn, thực phẩm ngâm chua, hun khói;
        <br />- Người có tiền sử ung thư hoặc tiền sử người thân bị ung thư hệ tiêu hóa;
        <br />- Người có biểu hiện nuốt khó, tiết nước bọt mất kiểm soát, chán ăn, căng và khó chịu vùng thượng vị, nôn hoặc buồn nôn, mệt mỏi, sút cân, táo bón hoặc tiêu chảy kéo dài...
        <br /><br />Một số triệu chứng của ung thư thực quản dạ dày rất giống bệnh lý khác, người bệnh nên đến các cơ sở khám chữa bệnh để làm kiểm tra chuyên sâu.
    `
    )}
    {renderAccessContent(
      4,
      "Thông tin chi tiết gói tầm soát ung thư thực quản dạ dày tại Phòng khám Bệnh viện",
      `
        <br />Gói tầm soát ung thư thực quản dạ dày được đội ngũ chuyên môn của Phòng khám Bệnh viện Đại học Y Dược 1 xây dựng dựa trên nguyên tắc: khoa học, hiệu quả và chính xác. Chi tiết gói khám gồm:

        <br /><div style="display: flex; justify-content: center;"><img style="width: 1000px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731745984/15.-hinh-1_fxd8gz.jpg" /></div>
    `
    )}
    {renderAccessContent(
      5,
      "Giá chi tiết của gói tầm soát ung thư thực quản dạ dày",
      `
        <br />- Giá áp dụng cho bệnh nhân dưới 40 tuổi (nội soi không gây mê): 2.500.000đ
        <br />- Giá áp dụng cho bệnh nhân trên 40 tuổi (nội soi không gây mê): 2.550.000đ
        <br />- Giá áp dụng cho bệnh nhân dưới 60 tuổi (nội soi gây mê): 4.250.000đ
        <br />- Giá áp dụng cho bệnh nhân trên 60 tuổi (nội soi gây mê): 4.650.000đ
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
      "Lưu ý trước khi đi tầm soát ung thư thực quản dạ dày",
      `
        <br />- Một số danh mục trong dịch vụ sẽ không áp dụng theo khuyến cáo của Bác sĩ;
        <br />- Trang phục thuận tiện để Bác sĩ có thể thăm khám dễ dàng hơn;
        <br />- Nhịn ăn trước 6 tiếng để thực hiện các xét nghiệm và nội soi;
        <br />- Không uống các loại nước uống như cà phê, trà, sữa, nước ngọt và nước trái cây, chỉ nên uống một ít nước lọc trước khi đến khám;
        <br />- Không nên hút thuốc và uống bia rượu trong vòng 24 tiếng trước khi đến khám;
        <br />- Đối với phụ nữ, cần thông báo cho Bác sĩ trong trường hợp có thai hoặc nghi ngờ có thai.
        <br /><b>Lưu ý: Giá gói khám có thể thay đổi theo từng thời điểm mà không báo trước.</b>
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

export default StomacheCancer;
