import React, { useRef } from "react";
import { Row, Col, Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import HeaderComponent from "../../Header/Header";
import FooterComponent from "../../component/Footer";
import "bootstrap/dist/css/bootstrap.css";

// Define news items array for the NewsSection
const newsItems = [
  {
    src: "https://umcclinic.com.vn/Data/Sites/1/News/86/vector-smart-object-1.png",
    alt: "Tiên phong",
    title: "TIÊN PHONG",
  },
  {
    src: "https://umcclinic.com.vn/Data/Sites/1/News/87/layer-600juykyfu.png",
    alt: "Thấu hiểu",
    title: "THẤU HIỂU",
  },
  {
    src: "https://umcclinic.com.vn/Data/Sites/1/News/88/layer-601.png",
    alt: "Chuẩn mực",
    title: "CHUẨN MỰC",
  },
  {
    src: "https://umcclinic.com.vn/Data/Sites/1/News/89/layer-602.png",
    alt: "An toàn",
    title: "AN TOÀN",
  },
];

const BusinessHealthCare = () => {
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
      GÓI KHÁM SỨC KHỎE TỔNG QUÁT DOANH NGHIỆP
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
      "GÓI KHÁM SỨC KHỎE TỔNG QUÁT DOANH NGHIỆP",
      `
        <br />- Nguồn nhân lực được xem là nguồn tài sản vô giá đối với mỗi Doanh nghiệp, một doanh nghiệp có nguồn nhân lực chất lượng, và được vận hành hiệu quả sẽ tác động rất nhiều đến sự thành bại của Doanh nghiệp đó.
        <br />- Theo khảo sát của Metlife ngoài mức lương hấp dần thì hiện nay còn rất nhiều vấn đề mà người lao động quan tâm để quyết định gắn bó lâu dài với Doanh nghiệp đó là chế độ chăm sóc sức khỏe, chế độ bảo hiểm, cơ hội thăng tiến, văn hóa công ty…
        <br />- Do vậy, cho dù trong thời kỳ khó khăn, các doanh nghiệp thắt lưng buộc bung, và cắt giảm hàng loạt các chi phí để giảm được phần nào gánh nặng cho doanh nghiệp thì chi phí dành cho việc chăm sóc sức khỏe định kỳ cho nhân viên vẫn cần phải được duy trì và đảm bảo đúng theo quy định hiện hành.
        <br />- Hiểu được những điều doanh nghiệp cần Phòng khám Bệnh viện Đại học Y Dược 1 luôn dựa theo những yêu cầu riêng cũng như tùy vào đặc điểm của từng ngành nghề để xây dựng những gói khám sức khỏe tổng quát phù hợp nhất cho doanh nghiệp trên nguyên tắc tuân thủ theo quy định hiện hành, tiết kiệm chi phí cho doanh nghiệp, đảm bảo quyền lợi cho người lao động.
    `
    )}
    {renderAccessContent(
      2,
      "HỒ SƠ VÀ BÁO CÁO SỨC KHỎE CHO DOANH NGHIỆP",
      `
        <br />- Hồ sơ khám sức khỏe được phòng khám thực hiện cho Doanh nghiệp rõ ràng gồm đầy đủ các báo cáo giúp doanh nghiệp lưu trữ, sàng lọc tình hình sức khỏe nhân viên và phục vụ cho việc kiểm tra và công tác thống kê.
        <br />- Ngoài ra hồ sơ sức khỏe của các thành viên sẽ được doanh nghiệp lưu trữ trên hệ thống cũng như bệnh án điện tử của phòng khám nhằm theo dõi tình trạng sức khỏe nếu có bất thường, và lưu trữ sử dụng cho nhu cầu tương lai.
        <br />- Hồ sơ gồm gửi về doanh nghiệp gồm: Báo cáo sức khỏe cho từng cá nhân và Báo cáo sức khỏe tổng hợp của cả công ty.
    `
    )}
    {renderAccessContent(
      3,
      "GÓI KHÁM SỨC KHỎE TỔNG QUÁT CƠ BẢN CHO DOANH NGHIỆP.",
      `
        <br /><b><i>a. Dịch vụ Lâm sàng:</i></b>
        <br />- Khám Nội, Ngoài tổng quát, Da liễu:
        <br />- Khám với Bác sĩ Chuyên khoa mắt: Soi mắt, đo mắt, đo khúc xạ
        <br />- Khám Bác sĩ chuyên khoa Răng hàm mặt: Phát hiện sâu răng mới, viêm lợi… Tư vấn phòng ngừa các bệnh răng miệng như sâu răng, viêm quang răng, viêm nha chu, bệnh về tủy răng.
        <br />- Khám Bác sĩ chuyên khoa Tai mũi họng: Phát hiện sớm bệnh ung thư TMH, thanh quản. Điều trị các bệnh viêm xoan, viêm thanh quản, hạt xơ dây thanh, polyp mũi xoang, viêm amidan, áp se…
        <br />- Điện tim (ECG): Đánh giá bước đầu các trường hợp rối loạn nhịp tim, nhồi máu cơ tim, thiếu máu…
        <br />- Chụp Xquang ngực thẳng: Đánh giá các bệnh lý của phổi: viêm phổi, lao phổi, bệnh phổi tắc nghẽn mãn tính, tràn dịch màng phổi…..và tầm soát ung thư phổi.
        <br />- Siêu âm màu Bụng Tổng Quát: Đánh giá tổng quan trong ổ bụng: gan, mật, tụy lách, phát hiện các khối u, sổi……đối với Nữ giúp đánh giá Phụ khoa: tử cung, buồng trứng.
        <br />- Khám phụ khoa (áp dụng đối với khách hàng nữ)

        <br /><b><i>b. Xét nghiệm tế bào máu</i></b>
        <br />- Tổng phân tích tế bào máu ngoại vi (bằng máy đếm laser): Hồng cầu, bạch cầu, tiểu cầu, Hemoglobin, MCHC, MCV….giúp tầm soát các bệnh lý về máu như thiếu máu…
        <br />- Định lượng Glucose

        <br /><b><i>c. Xét nghiệm lượng mỡ trong máu</i></b>
        <br />- Định lượng Cholesterol toàn phần
        <br />- Định lượng Cholesterol toàn phần
        <br />- Định lượng HDL-C (High density lipoprotein Cholesterol)
        <br />- Định lượng LDL - C (Low density lipoprotein Cholesterol)

        <br /><b><i>d. Kiểm tra chức năng thận:</i></b>
        <br />- Định lượng Creatinin
        <br />- Định lượng Ure
        <br />- Tổng phân tích nước tiểu (Bằng máy tự động): Tầm soát bệnh lý của hệ tiết niệu

        <br /><b><i>e. Kiểm tra chức năng gan:</i></b>
        <br />- Đo hoạt độ ALT (GPT)
        <br />- Đo hoạt độ AST (GOT)
        <br />- HBsAg miễn dịch tự động (Xét nghiệm Viêm gan B kháng nguyên)

        <br /><b><i>f. Xét nghiệm phụ khoa</i></b>
        <br />- Xét nghiệm phết tế bào âm đạo thông thường (áp dụng đối với nữ đã có gia đình)
    `
    )}
    {renderAccessContent(
      4,
      "GÓI KHÁM SỨC KHỎE TỔNG QUÁT NÂNG CAO",
      `
        <br />- Gói khám sức khỏe tổng quát nâng cao bao gồm tất cả các dịch vụ của gói khám cơ bản và cộng thêm các dịch vụ sau:

        <br /><b><i>a. Dịch vụ khám lâm sàng</i></b>
        <br />- Khám vú (Áp dụng cho khách hàng nữ)

        <br /><b><i>b. Chẩn đoán hình ảnh</i></b>
        <br />- Siêu âm tuyến giáp (tầm soát ung thư tuyến giáp)
        <br />- Siêu âm tuyến vú hai bên (áp dụng cho khách hàng nữ)
        <br />- Đo loãng xương bằng phương pháp DEXA (cột sống thắt lưng)

        <br /><b><i>c. Dịch vụ xét nghiệm</i></b>
        <br />- Định lượng Acid Uric: Chẩn đoán bệnh Gout, gây đau khớp
        <br />- Định lượng PSA toàn phần (Tầm soát Ung thư tiền liệt tuyến áp dụng cho khách Nam)

        <br /><b><i>* Kiểm tra chức năng gan</i></b>
        <br />- Đo hoạt độ GGT (Gama Glutamyl Transferase)
        <br />- HAV total miễn dịch tự động
        <br />- HBsAb định lượng (Xét nghiệm Viêm gan B kháng thể)
        <br />- Soi + nhuộm (dịch) (huyết trắng) (Áp dụng đối với khách hàng nữ)
    `
    )}
    {renderAccessContent(
      5,
      "LÝ DO DOANH NGHIỆP NÊN CHỌN PHÒNG KHÁM BỆNH VIỆN",
      `
        <br />- Phòng khám Bệnh viện là phòng khám chất lượng cao trực thuộc Bệnh viện;
        <br />- Đội ngũ Bác sĩ là các chuyên gia đầu ngành nhiều kinh nghiệm trong điều trị và đang giảng dạy tại trường;
        <br />- Máy móc trang thiết bị được đầu tư hiện đại tương đương với bệnh viện lớn;
        <br />- Cơ sở vật chất tiện nghi, không gian thoáng mát, thời gian linh hoạt không cần chờ đợi lâu;
        <br />- Đội ngũ chăm sóc khách hàng chuyên nghiệp, tận tình, chu đáo;
        <br />- Được khám và tư vấn với bác sĩ từng chuyên khoa riêng biệt.
    `
    )}
    {renderAccessContent(
      6,
      "KHÁCH HÀNG DOANH NGHIỆP TIÊU BIỂU CỦA PHÒNG KHÁM BỆNH VIỆN",
      `
        <br />- Phòng khám Bệnh viện Đại học y Dược 1 hoạt động với phương trâm “ĐIỀU TRỊ CHUYÊN NGHIỆP - NÂNG TẦM Y VIỆT” với mong muốn mang đến dịch vụ y tế hiện đại, chất lượng, chuyên nghiệp đến khách hàng. Trong thời gian qua phòng khám đã được rất nhiều Doanh nghiệp tin tưởng và chọn là nơi chăm sóc sức khỏe cho cán bộ nhân viên.Trong thời gian tới phòng khám sẽ không ngừng nỗ lực để ngày càng nâng cao hơn nữa chất lượng dịch vụ để xứng đáng với sự tin tưởng của quý doanh nghiệp. Quý doanh nghiệp đã chọn Phòng khám Bệnh viện Đại học Y Dược là nơi khám sức khỏe tổng quát định kỳ cho nhân viên:
        <br /><div style="display: flex; justify-content: center;"><img style="width: 1000px" src="https://umcclinic.com.vn/Data/Sites/1/media/dich-vu/doanh-nghiep/doanh-nghi%E1%BB%87p.jpg" /></div>
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

export default BusinessHealthCare;
