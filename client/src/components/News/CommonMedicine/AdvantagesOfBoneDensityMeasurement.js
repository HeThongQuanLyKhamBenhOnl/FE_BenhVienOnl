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

const AdvantagesOfBoneDensityMeasurement = () => {
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
  <Col
    style={{
      margin: "40px 0px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%"
    }}>
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
        NHỮNG ƯU ĐIỂM VƯỢT TRỘI CỦA ĐO LOÃNG XƯƠNG BẰNG PHƯƠNG PHÁP DEXA
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
  </Col>
);

const AccessSection = () => (
  <div>
    {renderAccessContent(
      1,
      "Những ưu điểm vượt trội của đo loãng xương bằng phương pháp DEXA",
      `
        Biến chứng nặng nề nhất của Loãng xương là làm gia tăng nguy cơ gãy xương và các hệ quả nghiêm trọng của gãy xương như đau đớn, giảm chất lượng cuộc sống, tàn phế, thậm chí là tử vong. Tuy nhiên loãng xương lại là bệnh âm thầm, không có triệu chứng khi mới mắc bệnh, vì vậy việc chẩn đoán sẽ chậm trễ nếu chỉ dựa vào triệu chứng lâm sàng. Để chẩn đoán loãng xương, hiện nay phải dựa vào việc đánh giá mật độ khoáng của xương (còn gọi là mật độ xương hay khối lượng xương). Có nhiều phương pháp đo mật độ xương, nhưng DEXA là phương pháp chính xác nhất và được ứng dụng rộng rãi trên toàn thế giới với nhiều ưu điểm vượt trội.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;" >
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731741866/chan-doan-loang-xuong-bang-phuong-phap-do-mat-do-xuong_xkd4gh.jpg" />
            <p style="font-size: 10px">Chẩn đoán loãng xương bằng phương pháp đo mật độ xương</p>
        </div>
    `
    )}
    {renderAccessContent(
      2,
      "Loãng xương và đo loãng xương là gì? ",
      `
        - Tổ chức Y tế Thế giới (WHO) định nghĩa loãng xương là bệnh của hệ thống xương đặc trưng bởi sự giảm khối lượng xương và tổn thương vi cấu trúc của mô xương, dẫn đến suy giảm sức mạnh của xương và gia tăng nguy cơ gãy xương.
        <br />- Mật độ xương là mật độ khoáng chất trong 1 đơn vị diện tích (cm2) hoặc thể tích (cm3) của mô xương. Để chẩn đoán loãng xương, cần sử dụng các phương pháp đo mật độ xương (BMD - Body Mineral Density) để đánh giá tình trạng của xương ở hiện tại và dự đoán nguy cơ gãy xương trong tương lai.
    `
    )}
    {renderAccessContent(
      3,
      "Phương pháp DEXA là gì?",
      `
        <br />- DEXA là phương pháp hấp thu tia X năng lượng kép (Dual Energy X-ray Absorptiometry) để xác định mật độ xương.
        <br />- Thông thường phương pháp DEXA sẽ được thực hiện tại vị trí cột sống thắt lưng và cổ xương đùi (bên không thuận). Khi đo, máy sẽ phát ra chùm tia X ở một mức năng lượng cao và một mức năng lượng thấp, sau đó máy sẽ đọc độ suy giảm năng lượng của 2 chùm tia này sau khi đi qua mô xương, độ hấp thụ tỷ lệ thuận với mật độ xương. 
        <br />- Đây là phương pháp được sử dụng rộng rãi trên thế giới, được Tổ chức Y tế Thế giới (WHO) công nhận là tiêu chuẩn vàng để chẩn đoán loãng xương.
    `
    )}
    {renderAccessContent(
      4,
      "Những ưu điểm vượt trội khi đo loãng xương bằng phương pháp DEXA",
      `
        <br />Khám sức khỏe tiền hôn nhân có thể được thực hiện tại Phòng khám Bệnh viện  với đội ngũ bác sĩ chuyên nghiệp và trang thiết bị hiện đại, giúp các cặp đôi có kết quả toàn diện về tình hình sức khỏe tổng quát và sức khỏe sinh sản, tiết kiệm thời gian và chuẩn bị tâm lý vững vàng để bước vào ngưỡng cửa quan trọng của cuộc đời. Chi tiết gói khám gồm:
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731741899/may-do-loang-xuong-bang-phuong-phap-dexa_nebgww.jpg" />
            <p>Máy đo loãng xương bằng phương pháp DEXA</p>
        </div>
        <br />Phương pháp DEXA được sử dụng để:

        <br />- Phát hiện nguy cơ loãng xương
        <br />- Chẩn đoán mức độ loãng xương
        <br />- Dự đoán nguy cơ gãy xương trong tương lai
        <br />- Đánh giá và theo dõi kết quả điều trị loãng xương
        <br />- Đo thành phần cấu trúc cơ thể (khối cơ, khối mỡ, khối xương), chuyển hóa cơ bản

        <br />Với các ưu điểm vượt trội sau:
        <br />- An toàn: Liều chiếu phóng xạ thấp an toàn cho người bệnh cũng như nhân viên thực hiện.  
        <br />- Đơn giản, nhanh chóng: Người bệnh chỉ cần mặc đồ thoải mái, không đeo vật dụng trang sức và thực hiện đo trong 10-15 phút.
        <br />- Chính xác: Là phương pháp chẩn đoán loãng xương hiệu quả nhất hiện nay, cho kết quả có độ chính xác cao, sai số chỉ 1%.
        <br />- Không cần gây mê, không cần nhịn ăn, không đau, không xâm lấn.
        <br />- Có thể quét cả cơ thể để đo tỷ lệ khối cơ, khối mỡ, khối xương của cơ thể và đánh giá tình trạng chuyển hóa cơ bản để dự đoán một số nguy cơ bệnh.

        <br />Tiêu chuẩn chẩn đoán loãng xương 
        <br />Trị số mật độ xương thu được sẽ được máy tính toán để cho ra 2 chỉ số là T và Z.
        <br />Chỉ số T (T - score) được sử dụng cho phụ nữ sau mãn kinh và nam giới trên 50 tuổi, khi so sánh với người trẻ, khỏe mạnh:
        <br />- T > -1: Bình thường (Normal)
        <br />- T ≤ -1 và T > -2,5: Thiếu xương (Osteopenia)
        <br />- T ≤ -2,5: Loãng xương (Osteoporosis)
        <br />- T ≤ -2,5 kèm tiền sử gãy xương gần đây: Loãng xương nghiêm trọng (Severe osteoporosis)
        <br />Còn chỉ số Z chỉ được dùng để đánh giá cho phụ nữ trước mãn kinh, nam giới <50 tuổi và người trẻ khi so sánh với người cùng độ tuổi

        <br />Đối tượng nên đo loãng xương bằng phương pháp DEXA
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
                <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731741947/nguoi-co-tien-su-gay-xuong-nen-do-loang-xuong_qeb9sh.jpg" />
                <p>Người có tiền sử gãy xương nên đo loãng xương</p>
        </div>
        <br />Những đối tượng sau được khuyến cáo nên đi đo loãng xương định kỳ ít nhất 2 năm/lần hoặc theo sự chỉ định của bác sĩ:
        <br />- Phụ nữ sau mãn kinh và nam giới trên 50 tuổi;
        <br />- Người thừa cân béo phì hoặc có trọng lượng cơ thể thấp, chỉ số BMI ≤ 18.5 kg/m2;
        <br />- Người sử dụng glucocorticoid với liều lượng ≥ 5mg prednisone;
        <br />- Người thường xuyên hút thuốc lá, uống rượu bia và caffein;
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
        style={{ width: "100%" }}
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

export default AdvantagesOfBoneDensityMeasurement;
