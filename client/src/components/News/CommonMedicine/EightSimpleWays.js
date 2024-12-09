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

const EightSimpleWays = () => {
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
        8 CÁCH ĐƠN GIẢN GIÚP GIẢM ĐAU BỤNG KINH HIỆU QUẢ
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
      "8 CÁCH ĐƠN GIẢN GIÚP GIẢM ĐAU BỤNG KINH HIỆU QUẢ",
      `
        <p><b>Nhiều chị nữ phụ nữ gặp phải tình trạng đau bụng kinh trước và trong kỳ kinh nguyệt. Đau bụng kinh có thể không quá nghiêm trọng, nhưng có thể gây khó khăn trong cuộc sống sinh hoạt hàng ngày. Để làm giảm cơn đau và cảm thấy dễ chịu hơn, chị em có thể tham khảo một số biện pháp đơn giản giúp giảm đau bụng kinh hiệu quả.  </b></p>
    `
    )}
    {renderAccessContent(
      2,
      "Đau bụng kinh là gì?",
      `
        - Đau bụng kinh là cảm giác đau và khó chịu ở vùng bụng dưới, có thể xuất hiện trước hoặc trong suốt thời gian hành kinh. Theo Hiệp hội Sản Phụ khoa Hoa Kỳ ghi nhận có hơn một nửa chị em phụ nữ bị đau bụng kinh kéo dài từ 1-2 ngày trong suốt những ngày đầu hành kinh.
        <br />- Cơn đau bụng kinh có thể đau âm ỉ dai dẳng đến đau dữ dội, ảnh hưởng đến đời sống sinh hoạt và công việc của chị em khi đến ngày hành kinh.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742241/%C4%91au-b%E1%BB%A5ng-kinh-c%C3%B3-th%E1%BB%83-%E1%BA%A3nh-h%C6%B0%E1%BB%9Fng-%C4%91%E1%BA%BFn-sinh-ho%E1%BA%A1t-v%C3%A0-c%C3%B4ng-vi%E1%BB%87c-h%C3%A0ng-ng%C3%A0y-c%E1%BB%A7a-ch%E1%BB%8B-em_c4ilnf.jpg" />
            <p>Đau bụng kinh có thể ảnh hưởng đến sinh hoạt và công việc hàng ngày của chị em</p>
        </div>
        <br />
        <br /> Đôi khi, chị em có thể gặp phải các triệu chứng khác như đau đùi, đau lưng, nôn, buồn nôn, tiêu chảy, mệt mỏi …
        <br />Cơn đau bụng kinh nguyên phát (hay còn gọi là cơn đau bụng kinh bình thường) có tính chất lặp đi lặp lại hàng tháng và không do bệnh lý gây ra.
        <br />Tuy nhiên, nếu chị em gặp phải các dấu hiệu bất thường sau có thể báo hiệu cơn đau bụng kinh thứ phát (đau bụng kinh bất thường có liên quan đến bệnh lý):
        <br />- Cơn đau bắt đầu sớm hơn trước khi có kinh nguyệt.
        <br />- Cơn đau kéo dài hơn cơn đau bụng kinh thông thường
        <br />- Cơn đau dữ dội ảnh hưởng đến khả năng sinh hoạt và công việc thường ngày.
        <br />- Cơn đau ngày càng trầm trọng không thuyên giảm.
        <br />
        <br />Không phải ai có các triệu chứng trên đều mắc các bệnh lý liên quan. Tuy nhiên, để chẩn đoán chính xác tình trạng sức khỏe, chị em cần khám phụ khoa sớm để phát hiện và điều trị kịp thời.
    `
    )}
    {renderAccessContent(
      3,
      "10 cách đơn giản giúp chị em giảm đau bụng kinh hiệu quả",
      `
        <br />- Để làm dịu cơn đau bụng kinh một cách hiệu quả, chị em có thể thử 10 phương pháp đơn giản sau:
        <br />
        <br /><b><i>a. Chườm ấm bụng và tắm nước ấm</i></b>
        <br />Để giảm đau bụng kinh, chị em phụ nữ có thể sử dụng chai nước nóng, túi chườm hoặc miếng dán giữ nhiệt cho vùng bụng dưới. Ngoài ra, tắm nước ấm trong kỳ kinh nguyệt cũng giúp tăng cường lưu thông máu và ổn định cơ thể, từ đó giảm thiểu cơn đau.
        <br />
        <br /><b><i>b. Uống nhiều nước</i></b>
        <br />Chị em nên uống nhiều nước ấm để cải thiện lưu thông khí huyết đến các cơ quan trong cơ thể, giảm tình trạng thiếu oxy và thiếu máu, từ đó làm cho tử cung co bóp nhẹ nhàng hơn.
        <br />
        <br /><b><i>c. Massage vùng bụng dưới</i></b>
        <br />Massage đúng cách có thể giúp làm giãn sự căng cứng của cơ bụng dưới trong thời gian hành kinh, từ đó giảm thiểu các cơn co thắt tử cung đột ngột gây đau bụng. Chị em có thể nhẹ nhàng xoa bóp vùng bụng dưới bằng tay để thư giãn và giảm cơn đau hiệu quả.
        <br />
        <br /><b><i>d. Kiểm soát căng thẳng, lo âu</i></b>
        <br />Căng thẳng, lo lắng có thể khiến các cơn đau bụng kinh trở nên nghiêm trọng hơn. Vì thế, chị em nên kiểm soát tốt các mối lo âu và duy trì tinh thần thoải mái, thư giãn, giải tỏa tâm lý với các bộ môn như yoga, thiền hay các bài tập hít thở sâu …
        <br />
        <br /><b><i>e. Tập luyện nhẹ nhàng</i></b>
        <br />Nhiều chị em nghĩ rằng nên hạn chế vận động trong những ngày hành kinh và ưu tiên dành nhiều thời gian hơn để nghỉ ngơi. Trên thực tế, tập thể dục với cường độ vừa phải có thể xoa dịu cơn đau bụng kinh hiệu quả.
        <br />
        <br />Chị em nên kéo giãn nhẹ nhàng cơ bụng và vùng lưng dưới để giúp máu lưu thông đi khắp cơ thể từ đó hỗ trợ giảm cơn đau. Đặc biệt, khi tập thể dục cơ thể sẽ giải phóng ra endorphin (chất giảm đau tự nhiên) giúp giảm đau, đồng thời xoa dịu cảm giác mệt mỏi, khó chịu cho chị em trong kỳ kinh nguyệt.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742264/t%E1%BA%ADp-luy%E1%BB%87n-nh%E1%BA%B9-nh%C3%A0ng-c%C3%B3-th%E1%BB%83-xoa-d%E1%BB%8Bu-c%C6%A1n-%C4%91au-b%E1%BB%A5ng-kinh-hi%E1%BB%87u-qu%E1%BA%A3_c7abkz.png" />
            <p>Đau bụng kinh có thể ảnh hưởng đến sinh hoạt và công việc hàng ngày của chị em</p>
        </div>
        <br />Nếu đau bụng kinh đi kèm triệu chứng nôn, buồn nôn hay ra lượng máu kinh nguyệt nhiều, chị em chỉ nên tập các bài tập thể dục với cường độ thấp. 
        <br /><b><i>f. Chế độ ăn uống lành mạnh</i></b>
        <br />Chị em phụ nữ nên duy trì chế độ ăn uống lành mạnh để giảm thiểu cảm giác khó chịu do đau bụng kinh, thông qua các biện pháp sau:
        <br />
        <br />- Ưu tiên bổ sung các loại thực phẩm giàu kẽm, magie, axit béo, vitamin E, vitamin B1, B6 … 
        <br />- Hạn chế ăn các thức ăn tẩm ướp nhiều gia vị và chứa nhiều dầu mỡ. 
        <br />- Không dùng chất kích thích caffeine, không hút thuốc lá và không uống rượu bia …
        <br />
        <br />Vào những ngày hành kinh, cơ thể phụ nữ thường trải qua nhiều thay đổi. Vì thế, chị em nên kiêng ăn các thực phẩm gây lạnh. Điều này không chỉ giúp giảm các cơn đau mà còn hỗ trợ điều hòa chu kỳ kinh nguyệt và ngăn ngừa tình trạng ra máu quá nhiều.
        <br />
        <br /><b><i>g. Ngủ sớm, ngủ đủ giấc</i></b>
        <br />Trong kỳ kinh nguyệt, sự thay đổi hormone trong cơ thể cùng với các triệu chứng khác có thể tác động đến sức khỏe của chị em phụ nữ. 
        <br />Vì thế, chị em cần duy trì thói quen đi ngủ sớm và đảm bảo ngủ đủ giấc, chú ý ngủ đúng tư thế giúp giãn cơ bụng, tạo điều kiện cho lưu thông khí huyết tốt hơn, từ đó giảm cơn đau bụng kinh hiệu quả trong những ngày hành kinh.
        <br />
        <br /><b><i>h. Sử dụng thuốc giảm đau</i></b>
        <br />Nếu chị em gặp phải các cơn đau bụng kinh dữ dội và không thể cải thiện được cơn đau sau khi áp dụng các liệu pháp tự nhiên trên, chị em có thể tư vấn ý kiến bác sĩ sử dụng thuốc giảm đau bụng kinh.
        <br />Chị em tuyệt đối không được tự ý sử dụng thuốc giảm đau khi chưa tham khảo ý kiến bác sĩ và không lạm dụng thuốc để hạn chế tình trạng có thể gặp phải các tác dụng phụ không mong muốn.
    `
    )}
    {renderAccessContent(
      4,
      "Khám phụ khoa tại Phòng khám Bệnh viện",
      `
        <br />Tuy các cơn đau bụng kinh là hiện tượng sinh lý bình thường trong thời gian hành kinh nhưng ở một số trường hợp, đây có thể là dấu hiệu cảnh báo một số bệnh lý phụ khoa nguy hiểm.
        <br />Vì thế, nếu cơn đau bụng kinh diễn ra sớm và kéo dài dai dẳng, chị em nên sớm thăm khám phụ khoa để được bác sĩ kiểm tra và chẩn đoán đúng bệnh, từ đó can thiệp kịp thời và hiệu quả.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742286/kh%C3%A1m-ph%E1%BB%A5-khoa-khi-c%C6%A1n-%C4%91au-b%E1%BB%A5ng-kinh-k%C3%A9o-d%C3%A0i-dai-d%E1%BA%B3ng_-kh%C3%B4ng-thuy%C3%AAn-gi%E1%BA%A3m_sryojv.png" />
            <p>Khám phụ khoa khi cơn đau bụng kinh kéo dài dai dẳng, không thuyên giảm</p>
        </div>
        <br />Lựa chọn thăm khám phụ khoa an toàn tại Phòng khám Bệnh viện  bạn sẽ được:
        <br />- Đội ngũ chuyên gia khám bệnh tận tâm, chuyên nghiệp
        <br />- Phòng khám Bệnh viện  đầu tư trang thiết bị y tế cao cấp theo chuẩn quốc tế và tương đương với các bệnh viện lớn, giúp bác sĩ chẩn đoán chính xác và điều trị hiệu quả.
        <br />- Đặt hẹn lịch khám nhanh chóng qua tổng đài 1900 6923.
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

export default EightSimpleWays;
