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

const Gallstones = () => {
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
      SỎI MẬT: NGUYÊN NHÂN, TRIỆU CHỨNG, CÁCH CHẨN ĐOÁN VÀ ĐIỀU TRỊ
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
      "SỎI MẬT: NGUYÊN NHÂN, TRIỆU CHỨNG, CÁCH CHẨN ĐOÁN VÀ ĐIỀU TRỊ",
      `
        <p><b>Sỏi mật là các viên sỏi có kích thước từ hạt cát đến quả bóng bàn, hình thành trong ống mật hoặc túi mật.</b></p>
    `
    )}
    {renderAccessContent(
      2,
      "Biến chứng nguy hiểm của bệnh sỏi mật",
      `
      <br />- Túi mật là cơ quan nhỏ có hình dạng giống quả lê nằm bên phải bụng, vùng dưới sườn và ngay bên dưới gan. Túi mật là nơi giúp dự trữ dịch mật. Cơ thể sẽ tiết dịch mật vào ruột non khi ăn để tiến hành tiêu hóa thức ăn.
      <br />- Bệnh sỏi mật xảy ra khi những viên sỏi có kích thước nhỏ như hạt cát và có thể to như quả bóng bàn, được hình thành trong ống mật hoặc túi mật. Bệnh sỏi mật là bệnh lý về túi mật lành tính.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742823/b%E1%BB%87nh-s%E1%BB%8Fi-m%E1%BA%ADt-c%C3%B3-nguy-hi%E1%BB%83m-kh%C3%B4ng_mnyagv.png" />
            <p style="font-size: 13px">Bệnh sỏi mật có nguy hiểm không?</p>
        </div>
        <br />
        <br /> Tuy nhiên, nếu người bệnh không được chẩn đoán và điều trị kịp thời, bệnh sỏi mật có thể gây tắc mật (có thể bị tắc ở túi mật hay hệ thống đường mật bên trong và bên ngoài gan) gây nhiều biến chứng nguy hiểm, ảnh hưởng sức khỏe người bệnh như viêm túi mật, ống mật tắc nghẽn,
    `
    )}
    {renderAccessContent(
      3,
      "Triệu chứng của bệnh sỏi mật",
      `
        <br />- Thông thường, bệnh sỏi mật không có triệu chứng hoặc các triệu chứng không rõ ràng, mơ hồ. Người bệnh có thể nhận biết được thông qua việc thăm khám sức khỏe định kỳ hay xuất hiện các triệu chứng khi sỏi làm tắc túi mật hay khi túi mật bị viêm. 
        <br />- Lúc này, người bệnh có thể gặp phải các cơn đau đột ngột, thường xảy ra ở bên phải, dưới xương sườn, ở vai phải hay ở giữa hai bả vai; buồn nôn, bồn chồn, nôn mửa, mệt mỏi, đổ mồ hôi hoặc sốt trên 38 độ đi kèm cảm giác rét run, tiêu hóa rối loạn
        <br />- Khi tình trạng viêm túi mật xảy ra, người bệnh cần phải thăm khám ngay cùng bác sĩ chuyên khoa để kịp thời điều trị, tránh bệnh diễn tiến nghiêm trọng gây biến chứng nguy hiểm như nhiễm trùng huyết, viêm phúc mạc mật, viêm túi mật hoại tử, sốc nhiễm trùng …
    `
    )}
    {renderAccessContent(
      4,
      "Khám phụ khoa tại Phòng khám Bệnh viện",
      `
        <br />Sỏi mật được hình thành khi mật lưu trữ trong túi mật bị cứng lại thành mảnh vật chất rắn. Tuy nhiên, quá trình hình thành sỏi mật cần yêu cầu ba điều kiện sau:
        <br />- Điều kiện 1: Lượng muối mật phải bão hòa với nồng độ cholesterol, có thể xảy ra khi cholesterol dư thừa với lượng muối mật ở mức bình thường hoặc lượng muối mật bị giảm và nồng độ cholesterol ở mức bình thường. 
        <br />- Điều kiện 2: Quá trình tinh thể cholesterol tăng tốc tạo mầm hoặc chuyển đổi nhanh chóng từ thể lỏng sang tinh thể. Nguyên nhân có thể xảy ra quá trình này do không có chất ức chế tạo mầm hay thừa yếu tố tạo mầm.
        <br />- Điều kiện 3: Túi mật giảm vận động, có thể khiến các tinh thể lưu lại đủ lâu trong túi mật để tạo thành sỏi mật.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742839/b%C3%A9o-ph%C3%AC-c%C3%B3-th%E1%BB%83-t%C4%83ng-nguy-c%C6%A1-m%E1%BA%AFc-b%E1%BB%87nh-s%E1%BB%8Fi-m%E1%BA%ADt_fyvftn.png" />
            <p style="font-size: 13px">Béo phì có thể tăng nguy cơ mắc bệnh sỏi mật</p>
        </div>
        <br />Hiện nguyên nhân gây bệnh sỏi mật vẫn chưa được xác định rõ nhưng các yếu tố có thể thuận lợi tạo sỏi ở ống mật hoặc túi mật như:
        <br />- Lối sống không khoa học như người béo phì, ít vận động, ăn nhiều chất béo cholesterol và ăn ít chất xơ, trong thời gian ngắn giảm cân nhanh chóng, mắc bệnh tiểu đường.
        <br />- Yếu tố nguy cơ sử dụng thuốc có nồng độ estrogen cao hay thuốc làm hạ cholesterol máu. 
        <br />- Yếu tố nguy cơ không thể thay đổi như người mang thai, nữ giới, người có tiền sử gia đình mắc bệnh sỏi mật, có độ tuổi từ 60 tuổi trở lên.
        <br />Đối với người có nhiều yếu tố nguy cơ bị sỏi mật thì việc phòng bệnh tốt nhất là nên chủ động thăm khám định kỳ cùng bác sĩ để tầm soát bệnh sỏi mật mỗi năm một lần. Đồng thời, mỗi người cũng nên chú ý ăn uống, sinh hoạt khoa học, giảm nguy cơ mắc bệnh sỏi mật.
    `
    )}
    {renderAccessContent(
      5,
      "Các phương pháp điều trị bệnh sỏi mật",
      `
        <br />Thông thường, sỏi mật được điều trị khi chúng gây viêm túi mật, đường mật bị tắc nghẽn hoặc khi sỏi đã đi từ đường mật vào ruột. Một số phương pháp thường gặp có thể được bác sĩ chỉ định để điều trị bệnh sỏi mật như:
        <br />- Cắt túi mật: Bác sĩ có thể thực hiện cắt túi mật bằng phương pháp nội soi hoặc mổ mở. Sau khi phẫu thuật cắt túi mật, trong vòng 1 năm bệnh sỏi mật vẫn có thể tái phát. Để ngăn ngừa bệnh tái phát, bác sĩ có thể chỉ định bổ sung chất cần thiết để hạn chế hình thành sỏi mật.
        <br />- Nội soi mật tụy ngược dòng: Nội soi mật tụy ngược dòng hay còn gọi là ERCP. Bác sĩ có thể thực hiện phương pháp này bằng cách gây tê cục bộ cho người bệnh sau đó dùng camera sợi quang linh hoạt hay ống nội soi, đi vào miệng rồi qua hệ thống tiêu hóa rồi tiến vào ống mật chủ. Đồng thời, phương pháp nội soi mật tụy ngược dòng có thể hỗ trợ lấy sỏi bị kẹt ở giai đoạn cuối của ống mật chủ.
        <br />- Tán sỏi: Phương pháp tán sỏi sử dụng sóng xung kích siêu âm để làm vỡ sỏi mật. Khi sỏi mật vỡ ra, trở nên đủ nhỏ, chúng có thể trôi qua vào ruột non an toàn. Tuy nhiên, tán sỏi là phương pháp điều trị không phổ biến và thường được chỉ định ở người bệnh có ít sỏi mật.
    `
    )}
    {renderAccessContent(
      6,
      "Cách phòng ngừa bệnh sỏi mật",
      `
        <br />Mỗi người nên chủ động phòng ngừa bệnh sỏi mật, bảo vệ sức khỏe cá nhân trước các nguy cơ biến chứng nguy hiểm, cụ thể:
        <br />- Ăn uống lành mạnh, ăn nhiều trái cây tươi, rau xanh, ngũ cốc và chất béo tốt từ dầu ô liu, cá.
        <br />- Hạn chế ăn nhiều chất tinh bột, nhiều đường hay chất béo không lành mạnh.
        <br />- Thường xuyên tập thể dục ít nhất 30 phút / ngày và mỗi tuần 5 ngày để phòng ngừa bệnh có thể tăng nguy cơ gây ra sỏi mật.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px"src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742843/ch%E1%BB%A7-%C4%91%E1%BB%99ng-th%C4%83m-kh%C3%A1m-s%E1%BB%A9c-kh%E1%BB%8Fe-%C4%91%E1%BB%8Bnh-k%E1%BB%B3-%C4%91%E1%BB%83-t%E1%BA%A7m-so%C3%A1t-b%E1%BB%87nh-s%E1%BB%8Fi-m%E1%BA%ADt-hi%E1%BB%87u-qu%E1%BA%A3_bbfjnm.png" />
            <p style="font-size: 13px">Chủ động thăm khám sức khỏe định kỳ để tầm soát bệnh sỏi mật hiệu quả</p>
        </div>
        <br />- Không nên nhịn ăn hay áp dụng các biện pháp giảm cân nhanh.
        <br />- Tránh ăn thực phẩm giàu chất béo bão hòa giúp giảm nguy cơ hình thành sỏi mật như pho mát cứng, bơ, bánh quy và bánh ngọt. 
        <br />- Chủ động thăm khám sức khỏe định kỳ giúp tầm soát bệnh tật, đồng thời sớm phát hiện sỏi mật (nếu có) để kịp thời điều trị, ngăn ngừa các biến chứng nguy hiểm.
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

export default Gallstones;
