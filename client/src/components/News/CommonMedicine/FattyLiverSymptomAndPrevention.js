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

const FattyLiverSymptomAndPrevention = () => {
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
      XƠ GAN: NGUYÊN NHÂN TRIỆU CHỨNG VÀ PHÒNG NGỪA
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
      "XƠ GAN: NGUYÊN NHÂN TRIỆU CHỨNG VÀ PHÒNG NGỪA",
      `
        Giai đoạn muộn của quá trình tạo sẹo (xơ hóa) ở gan được gọi là xơ gan. Xơ gan do nhiều nguyên nhân khác nhau gây ra như viêm gan do virus hay nghiện rượu mãn tính.
    `
    )}
    {renderAccessContent(
      2,
      "Ai có nguy cơ cao mắc bệnh xơ gan?",
      `
      <br />Sau mỗi lần bị tổn thương, gan sẽ cố gắng tự phục hồi dẫn đến hình thành các mô sẹo. Khi tình trạng tổn thương ở gan càng kéo dài sẽ hình thành càng nhiều mô sẹo. Khi đó, giai đoạn muộn của quá trình tạo sẹo (xơ hóa) ở gan được gọi là xơ gan.
      <br />Quá trình xơ hóa (tạo sẹo) gây cản trở hoạt động và chức năng bình thường của gan do mô sẹo ngăn chặn dòng chảy của máu qua gan. Đồng thời, quá trình này cũng làm chậm quá trình xử lý hormone, các chất dinh dưỡng, thuốc và chất độc tại gan.
      <br />Ngoài ra, các mô sẹo cũng làm giảm quá trình sản xuất protein và các chất khác do gan tạo ra. Khi xơ gan ở giai đoạn cuối có thể gây biến chứng nguy hiểm, trực tiếp đe dọa đến tính mạng người bệnh.
      <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742726/ai-c%C3%B3-nguy-c%C6%A1-m%E1%BA%AFc-b%E1%BB%87nh-x%C6%A1-gan_dem38b.png" />
            <p style="font-size: 13px">Ai có nguy cơ mắc bệnh xơ gan?</p>
        </div>
      <br />
      <br />Ai cũng có nguy cơ mắc bệnh xơ gan. Tuy nhiên, các nhóm đối tượng sau có thể có nguy cơ mắc bệnh xơ gan như:
      <br />- Người nghiện uống rượu.
      <br />- Người mắc bệnh đái tháo đường.
      <br />- Người bị viêm gan siêu vi.
      <br />- Người bị thừa cân, béo phì.
      <br />- Người sử dụng chung bơm kim tiêm, tiêm chích ma túy.
      <br />- Người có tiền sử mắc các bệnh lý về gan.
      <br />- Người quan hệ tình dục không sử dụng biện pháp bảo vệ an toàn.
    `
    )}
    {renderAccessContent(
      3,
      "Nguyên nhân gây bệnh xơ gan",
      `
        <br />Khi gan bị tổn thương bởi bất kỳ nguyên nhân nào cũng có thể gây bệnh xơ gan. Tuy nhiên, hai nguyên nhân thường gặp gây bệnh xơ gan là viêm gan do virus và thói quen lạm dượu rượu kéo dài, cụ thể như
        <br />
        <br /><b><i>a. Xơ gan do bệnh viêm gan virus</i></b>
        <br />Viêm gan virus mãn tính là nguyên nhân đang chiếm tỷ lệ cao nhất gây bệnh xơ gan tại Việt Nam. Đặc biệt, viêm gan B và viêm gan C đều có thể diễn tiến thành bệnh ung thư gan và xơ gan. 
        <br />
        <br /><b><i>b. Xơ gan do lạm dụng rượu</i></b>
        <br />Một trong những nguyên nhân hàng đầu gây bệnh xơ gan là do thói quen lạm dụng rượu của người bệnh. Khi rượu được đưa vào cơ thể sẽ gây tổn hại tế bào gan từ từ. Ban đầu, rượu có thể người bệnh bị gan nhiễm mỡ. Về sau, người bệnh có thể bị viêm gan mạn tính cuối cùng dẫn đến căn bệnh xơ gan.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742731/l%E1%BA%A1m-d%E1%BB%A5ng-r%C6%B0%E1%BB%A3u-c%C3%B3-th%E1%BB%83-g%C3%A2y-b%E1%BB%87nh-x%C6%A1-gan_yqm9kx.png" />
            <p style="font-size: 13px">Lạm dụng rượu có thể gây bệnh xơ gan</p>
        </div>
        <br />
        <br /><b><i>c. Xơ gan do các nguyên nhân khác</i></b>
        <br />- Viêm gan nhiễm mỡ không do rượu: Đây là tình trạng viêm gan liên quan đến việc người bệnh bị thừa cân, béo phì khiến gan bị thấm mỡ và người bệnh bị tiểu đường type 2
        <br />- Viêm gan tự miễn: Đây là tình trạng hệ thống miễn dịch thay đổi quay sang tấn công các mô gan khỏe mạnh dẫn đến tổn thương gan.
        <br />- Lạm dụng thuốc kê đơn và thuốc không kê đơn.
        <br />- Ký sinh trùng như amip, ký sinh trùng sốt rét và sán lá gan.
        <br />- Các tình trạng di truyền như bệnh Wilson, thiếu alpha-1 antitrypsin, hemochromatosis, hội chứng Alagille, các bệnh về dự trữ glycogen…
        <br />- Ảnh hưởng của một số bệnh lý hoặc tắc nghẽn ống dẫn mật trong gan như tắc ống mật, viêm đường mật, ung thư đường mật, ...
        <br />- Ứ động máu kéo dài như bệnh viêm mắc tĩnh mạch trên gan, bệnh suy tim ...
    `
    )}
    {renderAccessContent(
      4,
      "Triệu chứng thường gặp của bệnh xơ gan",
      `
      <br />Tùy theo giai đoạn bệnh, triệu chứng của bệnh xơ gan có thể khác nhau. Ở giai đoạn đầu của bệnh xơ gan, người bệnh có thể không biểu hiện triệu chứng nào hoặc nếu có thì các triệu chứng rất mơ hồ, dễ nhầm lẫn với bệnh lý khác.
      <br />
      <br />Một số dấu hiệu ban đầu của bệnh xơ gan như:
      <br />- Cơ thể thiếu năng lượng, mệt mỏi, có thể sốt nhẹ.
      <br />- Người bệnh ăn không ngon, chán ăn, buồn nôn, giảm cân không chủ ý.
      <br />
      <br />Khi bệnh diễn tiến sẽ dẫn đến các triệu chứng nghiêm trọng hơn như:
      <br />
      <br />- Vàng mắt, vàng da, sạm da và ngứa da.
      <br />- Người bệnh dễ bị bầm tím và chảy máu, lòng bàn tay đỏ rực lên.
      <br />- Phân có thể có màu nhạt, nước tiểu sẫm màu, đi ngoài ra máu hoặc ói ra máu.
      <br />- Trên da người bệnh xuất hiện nhiều nốt giãn mạch màu đỏ (hay còn gọi là nốt mao mạch).
      <br />- Người bệnh bị sưng (phù) ở bàn chân, cẳng chân và mắt cá chân.
      <br />- Người bệnh bị cổ trướng (báng bụng) là tình trạng dịch tích tụ trong ổ bụng.
      <br />- Người bệnh bị giảm trí nhớ, lú lẫn và có thể thay đổi tính cách.
      <br />- Người bệnh giảm ham muốn tình dục thông qua các biểu hiện mãn kinh sớm ở phụ nữ và tinh hoàn teo lại, tuyến vú phát triển ở nam giới bất thường.
      `
    )}
    {renderAccessContent(
      5,
      "Phòng ngừa bệnh xơ gan ",
      `
        <br />Tuy việc điều trị bệnh xơ gan dứt điểm khá khó khăn nhưng chúng ta có thể dễ phòng tránh bằng các biện pháp đơn giản như:
        <br />- Hạn chế uống rượu bia, bỏ hút thuốc lá.
        <br />- Ăn uống lành mạnh, cân bằng chất dinh dưỡng, bổ sung rau củ, trái cây tươi, ngũ cốc nguyên hạt và thực phẩm giàu protein. Đồng thời, cắt giảm lượng muối ăn, hạn chế chất béo.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742200/ti%C3%AAm-ng%E1%BB%ABa-vaccine-ph%C3%B2ng-b%E1%BB%87nh-vi%C3%AAm-gan-%C4%91%E1%BB%83-h%E1%BA%A1n-ch%E1%BA%BF-nguy-c%C6%A1-m%E1%BA%AFc-b%E1%BB%87nh-x%C6%A1-gan_uy6x1x.png" />
            <p style="font-size: 13px">Tiêm ngừa vaccine phòng bệnh viêm gan để hạn chế nguy cơ mắc bệnh xơ gan</p>
        </div>
        <br />
        <br />- Ăn chín uống sôi, không nên ăn sống hải sản có vỏ do chúng có thể chứa ký sinh trùng và vi khuẩn gây bệnh lý nguy hiểm. 
        <br />- Thói quen tốt trong sinh hoạt, thường xuyên rèn luyện sức khỏe.
        <br />- Kiểm soát cân nặng hợp lý, tránh tình trạng thừa cân, béo phì.
        <br />- Tránh các hành vi có nguy cơ lây nhiễm viêm gan B hoặc viêm gan C như quan hệ tình dục không sử dụng biện pháp an toàn, tiêm chích ma túy, sử dụng chung kim tiêm.
        <br />- Tiêm vaccine phòng bệnh viêm gan A và viêm gan B, tiêm phòng cúm, viêm phổi.
        <br />- Sử dụng thuốc đúng cách tuân theo chỉ định của bác sĩ. Không lạm dụng thuốc hay sử dụng sai liều, tự ý đổi thuốc.
        <br />- Chủ động kiểm tra sức khỏe tổng quát định kỳ và thăm khám cùng bác sĩ ngay khi gặp phải các triệu chứng bất thường.
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

export default FattyLiverSymptomAndPrevention;
