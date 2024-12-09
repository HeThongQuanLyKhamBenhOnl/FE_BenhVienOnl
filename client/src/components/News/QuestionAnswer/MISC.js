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

const MISC = () => {
  return (
    <div>
      <HeaderComponent />
      <HeaderSection />
      <AccessSectionHeader />
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
        TÌNH TRẠNG HO KHAN HẬU COVID-19
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

const AccessSectionHeader = () => (
  <div>
    {renderAccessContentHeader(
      `
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://i.postimg.cc/brRQLz8W/tinh-trang-ho-khan-hau-covid-19.jpg" />
        </div>
    `
    )}
  </div>
);

const AccessSection = () => (
  <div>
    {renderAccessContent(
      1,
      "MIS-C là gì?",
      `
        <br />Hội chứng viêm đa hệ thống ở trẻ em (MIS-C) là một tình trạng rất hiếm gặp, trong đó các bộ phận khác nhau của cơ thể như tim, phổi, thận, não, da, mắt hoặc cơ quan tiêu hóa bị viêm. MIS-C là một tình trạng nghiêm trọng nhưng có phục hồi nhanh chóng nếu được điều trị sớm.
    `
    )}
    {renderAccessContent(
      2,
      "Nguyên nhân của MIS-C",
      `
        <br />Hiện nay vẫn chưa biết chính xác nguyên nhân gây ra hội chứng viêm đa hệ thống, nhưng hầu hết trẻ em bị MIS-C đều có kết quả xét nghiệm dương tính với SARS-CoV-2 - virus gây bệnh Covid-19.
        <br />Trẻ em khi mắc Covid-19 thường nhẹ và ít cần nhập viện hơn so với người lớn. Tuy nhiên, ở một số trẻ, Covid-19 gây ra phản ứng miễn dịch quá mức dẫn đến phản ứng viêm khắp cơ thể. Các triệu chứng của MIS-C thường xuất hiện từ tuần thứ 2 đến tuần thứ 6 sau khi nhiễm virus, nhiều nhất vào tuần thứ 4. Mặc dù MIS-C cũng có thể xảy ra trước hoặc sau thời gian này.
    `
    )}
    {renderAccessContent(
      3,
      "Ai có thể bị MIS-C",
      `
        <br />Đa phần trẻ bị MIS-C ở độ tuổi từ 3-12 tuổi. Nhưng trẻ sơ sinh và thanh thiếu niên cũng có thể bị hội chứng này. 
        <br />
        <br />Ở người lớn, tình trạng này gọi là MIS-A, ít gặp hơn. Hội chứng viêm đa hệ ở người lớn cũng rất nguy hiểm nếu không được điều trị kịp thời.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://www.umcclinic.com.vn/Data/Sites/1/media/h%E1%BB%8Fi-%C4%91%C3%A1p-y-khoa/h%E1%BB%99i-ch%E1%BB%A9ng-vi%C3%AAm-%C4%91a-h%E1%BB%87-th%E1%BB%91ng-%E1%BB%9F-tr%E1%BA%BB-em-(mis-c)-l%C3%A0-g%C3%AC/cha-me-can-luu-y-hoi-chung-viem-da-he-thong-o-tre-em.jpg" />
            <p style="font-size: 13px">Cha mẹ cần lưu ý hội chứng viêm đa hệ thống ở trẻ em</p>
        </div>
        <br />
    `
    )}
    {renderAccessContent(
      4,
      "Nguyên nhân của MIS-C",
      `
        <br />Covid-19 rất dễ lây lan nhưng không có bằng chứng cho thấy MIS-C có thể lây nhiễm từ người này sang người khác.
    `
    )}
    {renderAccessContent(
      5,
      "Các triệu chứng của MIS-C",
      `
        <br />Các triệu chứng của hội chứng viêm đa hệ thống xuất hiện từ tuần thứ 2-6 sau khi nhiễm Covid-19 có thể bao gồm:
        <br />
        <br />- Sốt cao liên tục
        <br />- Đau bụng
        <br />- Tiêu chảy
        <br />- Da phát ban
        <br />- Mắt, môi và lưỡi đỏ
        <br />- Tim đập nhanh, chóng mặt hoặc choáng váng
        <br />- Ngón tay, ngón chân sưng nhẹ
        <br />- Nôn ói
        <br />- Sưng hạch bạch huyết ở cổ
        <br />
        <br />Không phải tất cả trẻ em đều có triệu chứng giống nhau. Nếu trẻ bị sốt cao kéo dài hoặc có các triệu chứng bất thường, cha mẹ nên đưa trẻ đi khám. Đặc biệt là khi trẻ bị: khó thở; đau hoặc tức ngực kéo dài; lú lẫn, không tỉnh táo; môi, da, móng tay xanh, tím tái; đau bụng dữ dội, cha mẹ cần đưa trẻ đi khám càng sớm càng tốt.
    `
    )}
    {renderAccessContent(
      6,
      "Chẩn đoán MIS-C",
      `
        <br />Bác sĩ có thể chỉ định cho trẻ làm các xét nghiệm phát hiện tình trạng viêm nhiễm như: xét nghiệm máu, X-quang, siêu âm.
        <br />Các xét nghiệm cũng sẽ giúp bác sĩ chẩn đoán phân biệt với các tình trạng khác, ví dụ như bệnh Kawasaki. Kawasaki là một bệnh hiếm gặp nhưng có các triệu chứng tương tự như MIS-C, nếu không điều trị kịp thời có thể dẫn đến viêm tim, phình giãn mạch vành, nhồi máu cơ tim, thậm chí có thể dẫn đến tử vong.
        <br />Trẻ em bị MIS-C cần nhập viện để theo dõi và điều trị. Một số trẻ bị ảnh hưởng nghiêm trọng cần được chăm sóc đặc biệt (ICU). Hầu hết trẻ được chẩn đoán và điều trị kịp thời đều đáp ứng tốt. Sau khi trẻ xuất viện, cha mẹ cần tiếp tục theo dõi sức khỏe của trẻ, đưa trẻ đi tái khám định kỳ hoặc khám ngay khi các triệu chứng khác thường xuất hiện.
    `
    )}
    {renderAccessContent(
      7,
      "Cách phòng ngừa trẻ bị MIS-C",
      `
        <br />MIS-C có thể xảy ra ở cả những trẻ chỉ bị Covid-19 nhẹ. Vì vậy cách phòng ngừa MIS-C tốt nhất là bảo vệ trẻ trước nguy cơ lây nhiễm Covid-19, bằng cách:
        <br />
        <br />- Trẻ từ 5 tuổi trở lên có thể tiêm vaccine Covid-19 để phòng ngừa lây nhiễm và hạn chế nguy cơ mắc bệnh Covid-19 nặng.
        <br />- Thường xuyên rửa tay bằng xà phòng với nước trong ít nhất 20 giây, hoặc sử dụng nước rửa tay sát khuẩn.
        <br />- Không tiếp xúc với người đang nhiễm bệnh, nhất là nếu họ đang ho hay hắt hơi.
        <br />- Đeo khẩu trang ở nơi công cộng.
        <br />- Không chạm tay vào mắt, mũi và miệng.
        <br />
        <br />MIS-C có thể rất nghiêm trọng, thậm chí gây tử vong, vì vậy sau khi trẻ nhiễm Covid-19 và đã khỏi bệnh, cha mẹ cần tiếp tục quan sát trẻ trong nhiều tuần sau đó. Khi phát hiện trẻ có triệu chứng bất thường cần đưa trẻ đến bệnh viện càng sớm càng tốt. Việc điều trị sớm sẽ giúp trẻ phục hồi nhanh chóng, tránh các tổn thương cơ quan lâu dài.
    `
    )}
  </div>
);

const renderAccessContentHeader = (content) => (
  <Col className="py-4">
    <Row>
      <p
        style={{ width: "100%" }}
        className="text-justify text-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Row>
  </Col>
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

export default MISC;
