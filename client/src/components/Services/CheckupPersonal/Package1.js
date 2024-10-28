import React, { useRef } from "react";
import { useParams } from "react-router-dom";
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

const Package1 = () => {
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
      GÓI KIỂM TRA HẬU SỨC KHỎE COVID-19 NÂNG CAO
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
      "Thông tin gói kiểm tra sức khỏe hậu Covid-19 chuyên sâu",
      `
      Hội chứng hậu Covid-19 với các triệu chứng tái phát, kéo dài hoặc xuất
        hiện các vấn đề sức khỏe mới trong nhiều tuần hoặc nhiều tháng sau khi
        khỏi bệnh, gây ảnh hưởng đến sức khỏe và cuộc sống của nhiều người. Hiểu
        được những nguy cơ của hội chứng hậu Covid -19 đội ngũ chuyên môn của
        Phòng khám Bệnh viện đã nghiên cứu và xây dựng Gói kiểm tra sức khỏe hậu
        Covid-19 chuyên sâu giúp đánh giá, chẩn đoán, điều trị và dự phòng các
        yếu tố nguy cơ của hội chứng hậu Covid-19. Giúp người bệnh trách gặp
        phải những biến chứng nguy hiểm hậu Covid-19.
        <br />
        Gói kiểm tra sức khỏe hậu Covid-19 chuyên sâu tại Phòng khám bệnh viện
        được xây dựng với 32 hạng mục, giúp đánh giá chức năng và chẩn đoán bệnh
        lý đa cơ quan. Từ đó có phương pháp điều trị các di chứng Covid-19 hiện
        tại và dự phòng các nguy cơ có thể xảy ra trong tương lai như:
        <br />
        a) Dịch vụ Khám
        <br />- Bác sĩ Nội Tổng khám và tư vấn bệnh sử.
        <br />
        b) Xét nghiệm máu trong và ngoài nước;
        <br />- Đánh giá tình trạng tế bào máu, đường huyết, rối loạn chuyển
        hóa, chức năng thận, men gan;
        <br />- Đánh giá tình trạng tăng đông;
        <br />- Giảm tác hại cho môi trường do việc in phim gây ra.
        <br />
        c) Xét nghiệm nước tiểu
        <br />- Phát hiện tổn thương thận, đường tiết niệu và một số bệnh lý
        khác như đái tháo đường, bệnh gan mật...
        <br />
        d) Chẩn đoán hình ảnh và thăm dò chức năng
        <br />- Đánh giá chức năng và phát hiện bất thường các cơ quan như: tim,
        gan, phổi, thận, não, tình trạng mạch máu và xơ vữa mạch máu.
    `
    )}
    {renderAccessContent(
      2,
      "Ai nên đăng ký gói khám sức khỏe hậu Covid-19 chuyên sâu",
      `
      - Mệt mỏi
        <br />- Khó thở, hụt hơi
        <br />- Chóng mặt khi đứng dậy
        <br />- Đau đầu
        <br />- Đau tức ngực
        <br />- Tim đập nhanh hoặc đánh trống ngực (tim đập thình thịch)
        <br />- Ho, đau họng, sốt, thay đổi khứu giác, vị giác
        <br />- Ù tai, đau tai
        <br />- Đau cơ khớp
        <br />- Buồn nôn, tiêu chảy, đau bụng
        <br />- Chán ăn
        <br />- Gặp các vấn đề về giấc ngủ
        <br />- Thay đổi tâm trạng
        <br />- Khó suy nghĩ hay tập trung (sương mù não)
        <br />- Cảm giác tê râm ran
        <br />- Phát ban
        <br />- Người xuất hiện các triệu chứng bệnh mới hoặc muốn đánh giá sức
        khỏe sau khi nhiễm Covid-19, đặc biệt là người lớn tuổi hoặc có bệnh lý
        nền.
    `
    )}
    {renderAccessContent(
      3,
      "Thông tin chi tiết gói kiểm tra sức khỏe hậu Covid-19",
      `
      Gói khám tầm soát hậu Covid-19 nâng cao của Phòng khám Bệnh viện được
        xây dựng trên nguyên tắc khoa học, hiệu quả và an toàn bởi đội ngũ bác
        sĩ giàu kinh nghiệm, được đào tạo chuyên sâu ở các lĩnh vực hô hấp, nội
        tiết, tiêu hóa, thần kinh, tim mạch…
        <br />- Khi sử dụng gói khám này quý khách hàng sẽ được kiểm tra các
        dịch vụ như:
        <br />
        a. Dịch vụ khám và tư vấn
        <br />- Khám và nhận tư vấn của Bác sĩ Nội Tổng quát;
        <br />
        b. Dịch vụ xét nghiệm - Tổng phân tích tế bào máu ngoại vi (bằng máy đếm
        laser)- 22 thông số: Phát hiện bất thường về các loại tế bào máu, đánh
        giá tình trạng thiếu máu, nhiễm trùng và rối loạn đông máu liên quan đến
        tiểu cầu;
        <br />- Xét nghiệm máu lắng (VS) (bằng máy tự động): Phát hiện và theo
        dõi tình trạng viêm;
        <br />- Xét nghiệm Định lương CRP (C-Reactive Protein): Phát hiện và
        theo dõi tình trạng viêm;
        <br />- Xét nghiệm Prothrombin (PT: Prothrombin Time), (Các tên khác:
        TQ; Tỷ lệ Prothrombin) bằng máy tự động: Kiểm tra tình trạng rối loạn
        đông máu;
        <br />- Xét nghiệm thromboplastin một phần hoạt hóa (APTT: Activated
        Partial Thromboplastin Time): Kiểm tra tình trạng rối loạn đông máu;
        <br />- Xét nghiệm định lượng Fibrinogen: Kiểm tra tình trạng rối loạn
        đông máu;
        <br />- Xét nghiệm Định lượng D-Dimer: Kiểm tra tình trạng rối loạn đông
        máu;
        <br />- Xét nghiệm Định lượng Ferritin: Đánh giá dự trữ sắt trong cơ
        thể, tình trạng viêm;
        <br />- Đo hoạt độ LDH ( Lactat dehydrogenase); Phát hiện tổn thương mô;
        <br />- Định lượng Glucose (Phát hiện đái tháo đường, tiền đái tháo
        đường và theo dõi hiệu quả điều trị đái tháo đường);
        <br />- Định lượng HbA1c (Chẩn đoán đái tháo đường, tiền đái tháo đường
        và theo dõi hiệu quả điều trị đái tháo đường);
        <br />- Định lượng Acid Uric (Đánh giá nguy cơ mắc bệnh gout);
        <br />- Định lượng Triglycerid (Phát hiện tình trạng rối loạn chuyển hóa
        mỡ máu);
        <br />- Định lượng Cholesterol toàn phần (Phát hiện tình trạng rối loạn
        chuyển hóa mỡ máu);
        <br />- Định lượng HDL-C (High density lipoprotein Cholesterol): Phát
        hiện tình trạng rối loạn chuyển hóa mỡ máu;
        <br />- Định lượng LDL-C (Low density lipoprotein Cholesterol): Phát
        hiện tình trạng rối loạn chuyển hóa mỡ máu;
        <br />- Đo hoạt độ ALT (GPT): Kiểm tra men gan, đánh giá tình trạng tổn
        thương của tế bào gan;
        <br />- Đo hoạt độ AST (GOT):Kiểm tra men gan, đánh giá tình trạng tổn
        thương của tế bào gan;
        <br />- Đo hoạt độ GGT (Gama Glutamyl Transferase): Kiểm tra men gan,
        đánh giá tình trạng tổn thương của tế bào gan
        <br />- Định lượng Ure: Đánh giá chức năng thận, theo dõi điều trị bệnh
        thận;
        <br />- Định lượng Creatinine, GFR: Đánh giá chức năng thận, theo dõi
        điều trị bệnh thận;
        <br />- Ion đồ (Na, K, Ca, Cl): Phát hiện rối loạn các chất điện giải;
        <br />- Tổng phân tích nước tiểu (Bằng máy tự động): Phát hiện tổn
        thương thận, đường tiết niệu và một số bệnh lý khác như đái tháo đường,
        bệnh gan mật...;
        <br />
        c. Chẩn đoán hình ảnh
        <br />- Điện tim thường (ECG): Phát hiện một số bất thường: dày thất,
        dày nhĩ, thiếu máu cơ tim, nhồi máu cơ tim, rối loạn nhịp tim…;
        <br />- Siêu âm bụng tổng quát (màu): Phát hiện một số hình ảnh bất
        thường của các tạng trong ổ bụng như gan mật, tụy, lách, thận, tử cung,
        buồng trứng, tiền liệt tuyến...;
        <br />- Siêu âm Doppler tim: Phát hiện bất thường của tim, van tim, đánh
        giá chức năng vận động của tim;
        <br />- Siêu âm Doppler màu động mạch cảnh: Đánh giá tình trạng động
        mach cảnh, phát hiện xơ vữa động mạch cảnh;
        <br />- Siêu âm Doppler màu mạch máu chi dưới: Phát hiện huyết khối, xơ
        vữa, suy van tĩnh mạch và một số hình ảnh bệnh lý khác tại mạch máu hai
        chân
        <br />- Chụp CT (Chụp cắt lớp vi tính lồng ngực không tiêm thuốc cản
        quang): Phát hiện tổn thương phổi và bệnh lý trong lồng ngực.
    `
    )}
    {renderAccessContent(
      4,
      "Giá gói kiểm tra sức khỏe hậu Covid-19 chuyên sâu",
      `
      - Giá gói khám: 5.100.000 đồng -------> <a href="/">ĐĂNG KÝ NGAY</a>
    `
    )}
    {renderAccessContent(
      5,
      "Những lợi ích kiểm tra sức khỏe hậu Covid-19",
      `
      - Được thăm khám và nhận tư vấn từ đội ngũ chuyên gia là các Giáo sư,
        Tiến Sĩ, Bác Sĩ đầu ngành, có chuyên môn cao từ Bệnh viện TP.HCM;
        <br />- Trang thiết bị được đầu tư hiện đại theo chuẩn quốc tế và tương
        đương với các bệnh viện lớn, giúp bác sĩ có những chẩn đoán chính xác và
        điều trị hiệu quả;
        <br />- Thời gian chờ đợi ít, bác sĩ thăm khám và tư vấn kỹ lưỡng;
        <br />- Đội ngũ chăm sóc khách hàng tận tình, chu đáo, chuyên nghiệp;
        <br />- Thủ tục đặt hẹn thuận tiện qua tổng đài 1900 6923.
    `
    )}
    {renderAccessContent(
      6,
      "Lưu ý trước khi đi kiểm tra sức khỏe hậu Covid-19",
      `
      - Một số danh mục trong dịch vụ sẽ không áp dụng theo khuyến cáo
        của Bác sĩ;
        <br />- Khách hàng là nữ nếu đang có thai hoặc nghi ngờ có thai vui lòng
        thông báo ngay cho nhân viên y tế để không chụp X-quang, CT;
        <br />- Mặc trang phục thoải mái, thuận tiện cho thăm khám;
        <br />- Không ăn sáng để thực hiện các xét nghiệm;
        <br />- Không uống các loại nước uống như cà phê, trà, sữa, nước ngọt và
        nước trái cây, chỉ nên uống nước lọc trước khi đến khám;
        <br />- Không nên hút thuốc và uống bia rượu trong vòng 24 tiếng trước
        khi đến khám.
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

export default Package1;
