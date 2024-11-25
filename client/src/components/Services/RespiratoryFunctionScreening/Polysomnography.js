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

const Polysomnography = () => {
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
      ĐO GẮNG SỨC TIM MẠCH - HÔ HẤP (PSG)
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
      "ĐO ĐA KÝ GIẤC NGỦ (Polysomnography - PSG)",
      `
        Đo đa ký giấc ngủ là một thuật ngữ y khoa chỉ một phương pháp đo đạc các hoạt động của cơ thể khi ngủ. Các hoạt động này được ghi nhận bằng các điện cực và tín hiệu sẽ truyền đến máy tính, sau đó, bác sĩ sẽ đọc đa ký giấc ngủ và thông báo cho bạn biết kết quả.
    `
    )}
    {renderAccessContent(
      2,
      "Các hoạt động được ghi nhận bằng máy đo đa ký giấc ngủ:",
      `
        <br />- Điện não (điện cực đặt trên da đầu)
        <br />- Chuyển động mắt (điện cực được đặt gần mắt)
        <br />- Trương lực cơ năm (điện lực đặt gần cằm)
        <br />- Nhịp tim (điện cực đặt trên ngực)
        <br />- Chuyển động chân (điện cực được đặt trên chân)
        <br />- Luồng khí thở (bộ cảm biến được đặt gần mũi và miệng)
        <br />- Cử động thở (hai vành đai đàn hồi đặt xung quanh ngực và bụng)
        <br />- Độ bão hòa oxy (cảm biến nhỏ gắn vào ngón tay hoặc dái tai)
        <br />- Ghi âm thanh và quay video kỹ thuật số
    `
    )}
    {renderAccessContent(
      3,
      "Đo Đa ký giấc ngủ chẩn đoán và xác định các rối loạn giấc ngủ như:",
      `
        <br />- Ngưng thở lúc ngủ tắc nghẽn
        <br />- Ngưng thở lúc ngủ trung ương
        <br />- Ngủ rũ
        <br />- Mất ngủ
        <br />- Hội chứng chân không yên
        <br />- Chuyển động chi có chu kì
        <br />- Các rối loạn liên quan giấc ngủ
    `
    )}
    {renderAccessContent(
      4,
      "Tại sao lại cần thiết để đo các hoạt động cơ thể khi ngủ?",
      `
        <br />- Trong khi bạn ngủ, các hoạt động của cơ thể khác khi bạn thức. Rối loạn giấc ngủ như ngáy và ngưng thở lúc ngủ, mất ngủ có thể ảnh hưởng hoạt động ban ngày, gây buồn ngủ quá mức vào ban ngày và có thể dẫn đến vấn đề sức khỏe nghiêm trọng. Vì phải theo dõi các hoạt động khi ngủ nên khi đo đa ký giấc ngủ, bạn sẽ ngủ qua đêm tại Phòng khám Bệnh viện .
        <br />- Qua việc đo các hoạt động của cơ thể khi ngủ, bác sĩ sẽ nhận biết được bạn đang mắc dạng rối loạn giấc ngủ nào, từ đó có kế hoạch điều trị phù hợp cho bạn.
    `
    )}
    {renderAccessContent(
      5,
      "Các câu hỏi thường gặp khi thực hiện đo đa ký giấc ngủ",
      `
        <br /><b><i>a. Nếu tôi đo đa ký giấc ngủ, các điện cực có ảnh hưởng gì đến tôi không?</i></b>
        <br />- Câu trả lời là: Không. Đa ký giấc ngủ là một phương pháp kiểm tra không xâm lấn, không gây đau đớn. Các điện cực được dán vào da đầu bạn và không gây đau hay giựt điện. Sau khi đo đa ký giấc ngủ xong, các điện cực có thể được lấy ra một cách nhẹ nhàng.

        <br /><b><i>b. Các điện cực đo đa ký giấc ngủ có cản trở tôi ngủ không?</i></b>
        <br />- Thiết bị được thiết kế để đo các hoạt động cơ thể khi ngủ nên nó sẽ giúp bạn thư giãn và sẵn sàng cho giấc ngủ. Phòng đo đa ký giấc ngủ của Phòng khám Bệnh viện  được thiết kế giúp bạn cảm thấy thân thiện, dễ dàng ngủ hơn. Trong phòng cũng có đầy đủ các tiện ích như máy điều hòa, tivi… nhằm giúp bạn cảm thấy như ở nhà…

        <br /><b><i>c. Sau khi mắc các điện cực, liệu tôi có thể di chuyển, chẳng hạn như đi vệ sinh?</i></b>
        <br />- Các điện cực và dây đeo không cản trở bạn đi lại nhưng bạn nên hạn chế di chuyển. Bạn sẽ được mang 1 bộ phát tín hiệu, các tín hiệu thu được sẽ được bộ phát tín hiệu này truyền đến máy tính. Nếu bạn muốn đi vệ sinh thì điều dưỡng trực sẽ gỡ dây nối giữa bộ truyền tín hiệu và máy tính để bạn có thể di chuyển.
    `
    )}
    {renderAccessContent(
      6,
      "Những lưu ý trước khi đo đa ký giấc ngủ?",
      `
        <br />- Hoàn thành bảng câu hỏi, mang toa thuốc, các chỉ định và hướng dẫn của Bác sĩ. Bạn có thể mang gối và mền của mình theo nếu muốn có cảm giác như ở nhà
        <br />- Mặc trang phục thoải mái để dễ ngủ hơn;
        <br />- Mang theo dụng cụ vệ sinh cá nhân và quần áo để thay vào sáng hôm sau;
        <br />- Mang theo sách nếu bạn muốn đọc trước khi ngủ
        <br />- Nếu bạn cần 01 bữa ăn nhẹ trước khi ngủ hãy báo với nhân viên Phòng khám trước và mang theo. 
    `
    )}
    {renderAccessContent(
      7,
      "Những đối tượng nên thực hiện Đo đa ký giấc ngủ.",
      `
        <br />- Người bị béo phì, ngủ ngáy, mất ngủ không rõ nguyên nhân.
        <br />- Người sử dụng bia rượu nhiều, mắc bệnh lý Tai - mũi - họng kéo dài, tái phát nhiều lần, cấu trúc vùng mũi, xoang có những bất thường (cằm lẹm, vẹo vách ngăn mũi,…)
        <br />- Người mắc các bệnh lý tăng huyết áp, suy tim, đái tháo đường,… nhưng bệnh khó kiểm soát.
    `
    )}
    {renderAccessContent(
      8,
      "Tại sao nên Đo đa ký tại Phòng khám Bệnh viện",
      `
        <br />- Đơn vị hô hấp được điều hành trực tiếp bởi PGS.TS.BS Lê Thị Tuyết Lan cùng các bác sĩ, giảng viên Đại học Y Dược TP.HCM, có nhiều kinh nghiệm và được đào tạo chuyên sâu trong điều trị các bệnh lý về hô hấp - giấc ngủ;- Hệ thống máy móc được trang bị hiện đại giúp Bác sĩ chẩn đoán chính xác và điều trị hiệu quả;
        <br />- Phòng khám có trang bị miễn phí giường phụ cho người thân;
        <br />- Đội ngũ kỹ thuật viên có chuyên môn cao, tận tình, vui vẻ, chu đáo.
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

export default Polysomnography;
