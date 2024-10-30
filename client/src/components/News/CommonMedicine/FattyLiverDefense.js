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

const FattyLiverDefense = () => {
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
      PHÒNG NGỪA BỆNH GAN NHIỄM MỠ
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
      "PHÒNG NGỪA BỆNH GAN NHIỄM MỠ",
      `
        Phòng ngừa bệnh gan nhiễm mỡ là cách để chúng ta có một lá gan khỏe mạnh. Mỗi người nên tìm hiểu về bệnh gan nhiễm mỡ và thay đổi lối sống tích cực để phòng ngừa các bệnh lý về gan hiệu quả.
    `
    )}
    {renderAccessContent(
      2,
      "Vì sao gan bị nhiễm mỡ?",
      `
      <br />Gan là nơi diễn ra hầu hết mọi quá trình sinh hóa. Sau khi được ly giải, các chất dinh dưỡng từ thức ăn sẽ hấp thụ qua thành ruột sau đó vào máu và đưa đến gan. 
      <br />Tại gan, hệ men tiêu hóa phong phú sẽ tiếp tục chuyển hóa các chất thành sản phẩm phù hợp để phục vụ cho các hoạt động sống của cơ thể cũng như dự trữ hoặc đào thải độc tố ra bên ngoài.
      <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://umcclinic.com.vn/Data/Sites/1/media/y-hoc-thuong-thuc/ti%C3%AAu-ho%C3%A1/gan-m%E1%BA%ADt/gan-nhi%E1%BB%85m-m%E1%BB%A1/ph%C3%B2ng-ng%E1%BB%ABa-b%E1%BB%87nh-gan-nhi%E1%BB%85m-m%E1%BB%A1/v%C3%AC-sao-gan-b%E1%BB%8B-nhi%E1%BB%85m-m%E1%BB%A1.jpg" />
            <p style="font-size: 13px">Vì sao gan bị nhiễm mỡ?</p>
        </div>
      <br />
      <br />Vì thế, quá trình hấp thụ chất béo và chuyển hóa chúng cũng hoạt động theo quy trình trên. Qua đó, khi dư thừa chất béo, cơ thể không sử dụng hết sẽ được dự trữ tại gan. Thông thường, gan sẽ dự trữ lượng mỡ khoảng 2-4% trọng lượng gan.
      <br />Tuy nhiên, khi lượng mỡ tích tụ trong gan từ 5-10% (trên mức thông thường) sẽ khiến gan bị nhiễm mỡ. 
    `
    )}
    {renderAccessContent(
      3,
      "Biến chứng nguy hiểm của bệnh gan nhiễm mỡ",
      `
        <br />Khi gan tích tụ quá nhiều mỡ gây ra tình trạng gan nhiễm mỡ, có thể ở giai đoạn đầu, bệnh không gây nguy hiểm và chỉ có thể phát hiện được khi người bệnh tình cờ kiểm tra sức khỏe định kỳ.
        <br />
        <br />Tuy nhiên, về lâu dài, không được điều trị, bệnh gan nhiễm mỡ có thể gây ra biến chứng nguy hiểm, ảnh hưởng đến sức khỏe người bệnh do hệ quả trên rối loạn chức năng gan.
        <br />Tùy theo tình trạng nhu mô gan ứ mỡ ở mức độ nào thông qua kết quả siêu âm, gan nhiễm mỡ có thể được chia thành 3 mức độ là độ I, độ II và độ III.
        <br />
        <br />Ở giai đoạn đầu khi bị gan nhiễm mỡ, phần lớn người bệnh đều cảm thấy khỏe mạnh hoàn toàn, nếu cảm thấy có triệu chứng khó chịu thì thường chúng sẽ không biểu hiện rõ ràng hoặc dễ nhầm lẫn với các tình trạng bệnh lý khác.
        <br />
        <br />Về sau, khi bệnh gan nhiễm mỡ tiến triển, người bệnh có thể cảm thấy bụng tức âm ỉ ở vùng gan, ăn uống khó tiêu, thậm chí chán ăn, buồn nôn, nôn ói và vàng da. Khi đó, gan đã tích tụ một lượng mỡ quá nhiều và đủ lâu để dẫn đến bệnh viêm gan.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://umcclinic.com.vn/Data/Sites/1/media/y-hoc-thuong-thuc/ti%C3%AAu-ho%C3%A1/gan-m%E1%BA%ADt/gan-nhi%E1%BB%85m-m%E1%BB%A1/ph%C3%B2ng-ng%E1%BB%ABa-b%E1%BB%87nh-gan-nhi%E1%BB%85m-m%E1%BB%A1/ng%C6%B0%E1%BB%9Di-b%E1%BB%8B-gan-nhi%E1%BB%85m-m%E1%BB%A1-c%C3%B3-th%E1%BB%83-b%E1%BB%8B-v%C3%A0ng-da.png" />
            <p style="font-size: 13px">Người bị gan nhiễm mỡ có thể bị vàng da</p>
        </div>
        <br />
        <br />Nếu người bệnh gặp phải các triệu chứng bất thường nhưng chủ quan không đi khám có thể khiến tình trạng viêm gan kéo dài gây xơ hóa gan, từ đó chức năng gan bị ảnh hưởng trì trệ.
        <br />Lúc này, người bệnh có thể bị suy kiệt do không thể hấp thu được các chất dinh dưỡng cần thiết cho cơ thể, toàn thân bị phù, báng bụng, khó thở và tràn dịch màn phổi. 
        <br />Ngoài ra, gan cũng không thể loại bỏ chất độc hay điều chỉnh đông máu khiến người bệnh bị chảy máu không cầm được hay dễ bị hôn mê do ảnh hưởng của bệnh não gan.
    `
    )}
    {renderAccessContent(
      4,
      "Phòng ngừa bệnh gan nhiễm mỡ như thế nào?",
      `
        <br />Sau virus viêm gan B, rượu bia là nguyên nhân chính thứ hai gây tình trạng gan nhiễm mỡ dẫn đến căn bệnh xơ gan nguy hiểm. Vì thế, hạn chế uống rượu bia hay đồ uống có cồn để phòng ngừa các bệnh lý về gan.
        <br />
        <br />Đồng thời, người bệnh viêm gan tuyệt đối không được uống bia rượu, tránh tình trạng bệnh trở nên trầm trọng hơn. Ngoài ra, mỗi người có thể chủ động phòng ngừa bệnh gan nhiễm mỡ bằng cách:
        <br />
        <br />a. Kiểm soát tốt tình trạng các bệnh lý nền
        <br />Người có các bệnh lý đi kèm như bệnh tiểu đường, rối loạn lipid máu, tăng huyết áp … cần tuân thủ chỉ định điều trị, uống thuốc đúng liều lượng và tái khám đều đặn theo lịch hẹn của bác sĩ.
        <br />Điều này sẽ giúp bác sĩ đánh giá hiệu quả điều trị, điều chỉnh thuốc phù hợp và kịp thời cũng như phát hiện sớm các nguy cơ biến chứng. 
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://umcclinic.com.vn/Data/Sites/1/media/y-hoc-thuong-thuc/ti%C3%AAu-ho%C3%A1/gan-m%E1%BA%ADt/gan-nhi%E1%BB%85m-m%E1%BB%A1/ph%C3%B2ng-ng%E1%BB%ABa-b%E1%BB%87nh-gan-nhi%E1%BB%85m-m%E1%BB%A1/ki%E1%BB%83m-so%C3%A1t-t%E1%BB%91t-b%E1%BB%87nh-ti%E1%BB%83u-%C4%91%C6%B0%E1%BB%9Dng-%C4%91%E1%BB%83-ng%C4%83n-ng%E1%BB%ABa-t%C3%ACnh-tr%E1%BA%A1ng-gan-nhi%E1%BB%85m-m%E1%BB%A1.png" />
            <p style="font-size: 13px">Kiểm soát tốt bệnh tiểu đường để ngăn ngừa tình trạng gan nhiễm mỡ</p>
        </div>
        <br />
        <br />b. Chế độ dinh dưỡng khoa học
        <br />Để ngăn ngừa bệnh gan nhiễm mỡ, bên cạnh hạn chế uống bia rượu, việc ăn uống khoa học cũng rất quan trọng, hạn chế tình trạng mỡ tích tụ ở gan bằng cách:
        <br />
        <br />- Ăn nhiều rau xanh, trái cây tươi, thực phẩm giàu chất xơ.
        <br />- Hạn chế tiêu thụ thực phẩm chế biến sẵn, đồ chiên dầu như thức ăn nhanh, món chiên xào, đồ ngọt …
        <br />- Tránh đồ uống có đường.
        <br />- Tăng cường thực phẩm có nhiều chất béo không bão hòa, chất béo bão hòa đơn và omega 3 như dầu ô liu, cá hồi, cá mòi. Nên ăn 2-3 lần mỗi tuần và ăn các loại hạt, quả hạch hàng ngày.
        <br />
        <br />c. Tập thể dục thường xuyên
        <br />Thường xuyên tập thể dục ít nhất 5 ngày mỗi tuần, mỗi ngày 30 phút với các bài tập như đi bộ, chạy bộ, bơi lội, yoga … để tiêu thụ tình trạng mỡ dự trữ khi ngồi trong thời gian dài cũng như giảm cân để duy trì trọng lượng cơ thể khỏe mạnh.
        <br />
        <br />d. Định kỳ kiểm tra sức khỏe tổng quát
        <br />Thăm khám sức khỏe đều đặn sẽ giúp chúng ta tầm soát yếu tố nguy cơ gây bệnh, không chỉ mỗi tình trạng gan nhiễm mỡ mà còn rất nhiều bệnh lý khác.
        <br />Gan nhiễm mỡ không là bệnh lý quá nguy hiểm nếu chúng ta nắm rõ về nguyên nhân gây bệnh để có thể phòng ngừa và điều trị hiệu quả. Một chế độ hoạt động thể chất tích cực, ăn uống đầy đủ chất dinh dưỡng và lối sống lành mạnh, hạn chế uống rượu là cách đơn giản để có một lá gan khỏe mạnh. 
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

export default FattyLiverDefense;
