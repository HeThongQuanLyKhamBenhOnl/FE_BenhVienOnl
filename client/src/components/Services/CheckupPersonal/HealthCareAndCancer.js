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

const HealthCareAndCancer = () => {
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
      GÓI KHÁM SỨC KHOẺ TỔNG QUÁT NÂNG CAO
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
      "Tại sao nên khám sức khỏe tổng quát và tầm soát ung thư định kỳ",
      `
        <br />Khám sức khỏe tổng quát và tầm soát ung thư định kỳ đóng vai trò quan trọng trong việc phát hiện sớm các vấn đề bất thường về sức khỏe (nếu có) trước khi chuyển thành bệnh hoặc phát hiện bệnh ở giai đoạn sớm khi chưa có biểu hiện ra bên ngoài để điều trị hiệu quả hơn, khả năng lành bệnh cao hơn, tiết kiệm được thời gian, tiền bạc và tránh được các biến chứng do bệnh gây ra.
    `
    )}
    {renderAccessContent(
      2,
      "Những giá trị công thêm khi thực hiện khám sức khỏe tổng quát định kỳ tại Phòng khám Bệnh viện",
      `
        <br />- Được thăm khám và nhận tư vấn từ đội ngũ chuyên gia là các Giáo sư, Tiến Sĩ, Bác Sĩ đầu ngành, có chuyên môn cao từ Bệnh viện Đại học Y dược TP.HCM;
        <br />- Trang thiết bị được đầu tư hiện đại theo chuẩn quốc tế và tương đương với các bệnh viện lớn, giúp bác sĩ có những chẩn đoán chính xác và điều trị hiệu quả;
        <br />- Thời gian chờ đợi ít, bác sĩ thăm khám và tư vấn kỹ lưỡng;
        <br />- Đội ngũ chăm sóc khách hàng tận tình, chu đáo, chuyên nghiệp;
        <br />- Thủ tục đặt hẹn thuận tiện qua tổng đài 1900 6923.
    `
    )}
    {renderAccessContent(
      3,
      "Chi tiết gói tầm soát ung thư bằng huyết thanh và chẩn đoán giun sán tại Phòng khám Bệnh viện",
      `
        <br />+ Giá gói áp dụng cho Nam: 3.900.000đ
        <br />+ Giá gói áp dụng cho Nữ độc thân: 4.250.000đ
        <br />+ Giá gói áp dụng cho Nữ có gia đình: 5.300.000đ
    `
    )}
    {renderAccessContent(
      4,
      "Tại sao nên chọn Phòng khám Bệnh viện để khám sức khoẻ tổng quát định kỳ?",
      `
        <br />- Gói bổ sung tâm soát ung thư bằng huyết thành và chẩn đoán giun sán của Phòng khám Bệnh viện Đại học Y Dược 1 có thể linh hoạt kết hợp với các gói khám sức khoẻ tổng quát từ cơ bản đến nâng cao. 

        <br />a. Gói xét nghiệm dấu ấn ung thư bằng huyết thanh
        <br />{1}
        <br />- Giá chi tiết gói xét nghiệm dấu ấn ung thư bằng huyết thanh:
        <br />+ Giá áp dụng cho Nam : 1.300.000đ
        <br />+ Giá áp dụng cho Nữ: 1.600.000đ
        
        <br />b. Gói huyết thanh chẩn đoán giun sán
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background-color: #f2f2f2; text-align: left;">
                <th style="padding: 8px; border: 1px solid #ddd;">Stt</th>
                <th style="padding: 8px; border: 1px solid #ddd;">Dịch vụ</th>
                <th style="padding: 8px; border: 1px solid #ddd;">Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;">1</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Clonorchis sinensis</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Phát hiện nhiễm sán lá gan nhỏ - Nam/Nữ</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;">2</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Cysticercus cellulosae</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Phát hiện nhiễm sán dải heo - Nam/Nữ</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;">3</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Fasciola sp</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Phát hiện nhiễm sán lá gan lớn - Nam/Nữ</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;">4</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Strongyloides</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Phát hiện nhiễm giun lươn - Nam/Nữ</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;">5</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Toxocara canis</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Phát hiện nhiễm giun đũa chó - Nam/Nữ</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;">6</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Toxoplasma IgM miễn dịch tự động</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Phát hiện nhiễm ký sinh trùng Toxoplasma - Nam/Nữ</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;">7</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Toxoplasma IgG miễn dịch tự động</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Phát hiện nhiễm ký sinh trùng Toxoplasma - Nam/Nữ</td>
              </tr>
            </tbody>
          </table>
        <br />- Giá chi tiết gói huyết thanh chẩn đoán giun sán:
        <br />+ Giá áp dụng cho Nam/Nữ: 1.800.000đ
        <br/><b>Lưu ý: Giá gói khám có thể thay đổi theo từng thời điểm mà không báo trước.</b>
    `
    )}
    {renderAccessContent(
      5,
      "Cách kết hợp gói khám sức khoẻ tổng quát và tầm soát ung thư",
      `
        <br />- Khi thực hiện gói khám sức khoẻ tổng quát và tầm soát ung thư tại Phòng khám Bệnh viện Đại học Y Dược 1 bạn có thể dễ dàng kết hợp giữa gói khám tổng quát cơ bản, nâng cao, chuyên sâu và  gói xét nghiệm dấu ấn ung thư bằng huyết thanh hoặc cộng thêm gói huyết thanh chẩn đoán giun sán.
        
        <br />a. Kết hợp gói khám sức khoẻ tổng quát nâng cao và tầm soát ung thư Phòng khám Bệnh viện
        <br /><p style="text-align: center; display: flex; justify-content: center;"><a href="/kham-suc-khoe-tong-quat-ca-nhan/goi-kham-suc-khoe-tong-quat-nang-cao"><img alt="img" src="https://i.postimg.cc/7hbjtczn/goi-kham-suc-khoe-tong-quat-nang-cao.jpg" style="width: 500px;"></a></p>
        
        <br />b. Kết hợp gói khám sức khoẻ tổng quát chuyên sâu và tầm soát ung thư
        <br /><p style="text-align: center; display: flex; justify-content: center;"><a href="/kham-suc-khoe-tong-quat-ca-nhan/goi-kham-suc-khoe-tong-quat-nang-cao"><img alt="img" src="https://i.postimg.cc/j5MGXKDj/goi-kham-suc-khoe-tong-quat-chuyen-sau.jpg" style="width: 500px;"></a></p>

        <br/><b>Lưu ý: Giá gói khám có thể thay đổi theo từng thời điểm mà không báo trước.</b>
    `
    )}
    {renderAccessContent(
      6,
      "Một số lưu ý khi thực hiện khám sức khỏe tổng quát và tầm soát ung thư tại Phòng khám Bệnh viện",
      `
        <br />- Một số danh mục trong dịch vụ sẽ không áp dụng cho khách hàng lớn tuổi hoặc theo khuyến cáo của Bác sĩ;
        <br />- Trang phục thuận tiện để Bác sĩ có thể thăm khám dễ dàng hơn;
        <br />- Nhịn ăn sáng để thực hiện các xét nghiệm trong gói khám sức khỏe tổng quát và tầm soát ung thư;
        <br />- Không nên hút thuốc và uống bia rượu trong vòng 24 tiếng.
    `
    )}
    {renderAccessContent(
      7,
      "Thông tin chung",
      `
        <br />- Thời gian làm việc: 7h30 đến 16h30 từ thứ 2 đến thứ 7
        <br />- Địa chỉ phòng khám: 20-22 Dương Quang Trung, Phường 12, Quận 10, TP.HCM
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
        dangerouslySetInnerHTML={{
          __html: content.replace(
            "{1}",
            `
                <table style="width:100%; border-collapse:collapse; text-align:left;">
                  <thead>
                    <tr>
                      <th style="border: 1px solid #ddd; padding: 8px;">Stt</th>
                      <th style="border: 1px solid #ddd; padding: 8px;">Dịch vụ</th>
                      <th style="border: 1px solid #ddd; padding: 8px;">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px;">1</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Định lượng AFP (Alpha Fetoproteine)</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Xét nghiệm dấu ấn ung thư gan</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px;">2</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Định lượng CEA (Carcino Embryonic Antigen)</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Xét nghiệm dấu ấn ung thư đại-trực tràng</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px;">3</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Định lượng CA 72 - 4 (Cancer Antigen 72- 4)</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Xét nghiệm dấu ấn ung thư dạ dày</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px;">4</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Định lượng CA 19 - 9 (Carbohydrate Antigen 19-9)</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Xét nghiệm dấu ấn ung thư tụy</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px;">5</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Định lượng CA 15 - 3 (Cancer Antigen 15-3)</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Xét nghiệm dấu ấn ung thư vú</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px;">6</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Định lượng CA 125 (Cancer antigen 125)</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Xét nghiệm dấu ấn ung thư buồng trứng</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px;">7</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Định lượng PSA toàn phần (Total prostate-Specific Antigen)</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Xét nghiệm dấu ấn ung thư tiền liệt tuyến</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px;">8</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Định lượng Cyfra 21- 1</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Xét nghiệm dấu ấn ung thư phổi</td>
                    </tr>
                  </tbody>
                </table>
              `
          ),
        }}
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

export default HealthCareAndCancer;
