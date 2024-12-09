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

const FattyLiverSymptom = () => {
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
        TRIỆU CHỨNG CỦA GAN NHIỄM MỠ LÀ GÌ?
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
      "TRIỆU CHỨNG CỦA GAN NHIỄM MỠ LÀ GÌ?",
      `
        Người bị gan nhiễm mỡ khi có dấu hiệu rối loạn chức năng gan hay không có triệu chứng cũng nên chủ động thăm khám, xét nghiệm chức năng gan để kiểm tra và điều trị kịp thời, hạn chế biến chứng.
    `
    )}
    {renderAccessContent(
      2,
      "Chẩn đoán gan nhiễm mỡ bằng cách nào?",
      `
      <br />Gan nhiễm mỡ thường có thể được chẩn đoán thông qua các kỹ thuật xét nghiệm thực hiện bởi bác sĩ chuyên khoa tại các phòng khám, cơ sở y tế uy tín. Dưới đây là một số phương pháp chẩn đoán gan nhiễm mỡ thường được bác sĩ áp dụng như:
      <br />- Xét nghiệm máu: triglycerid, cholesterol, thấy tăng phosphatase kiềm, men gan AST, ALT. Người bệnh nghi ngờ mắc bệnh xơ gan có thể được bác sĩ chỉ định xét nghiệm thêm đông máu cơ bản, protein máu, Bilirubin, Albumin.
      <br />- Xét nghiệm thêm virus viêm gan: Xét nghiệm virus viêm gan B, virus viêm gan C để loại trừ viêm gan do virus.
      <br />- Siêu âm ổ bụng: Để chẩn đoán gan nhiễm mỡ, siêu âm ổ bụng là phương pháp đơn giản có thể thấy được hình ảnh âm gan tăng (mật độ mô gan dày đặc hơn bình thường) trên siêu âm (có thể là dấu hiệu cảnh báo gan bị tổn thương hay xuất hiện khối u).
      <br />- Đo độ đàn hồi gan: Nếu nghi ngờ người bệnh bị xơ gan, bác sĩ có thể chỉ định người bệnh thực hiện thêm phương pháp đo độ đàn hồi gan để kiểm tra.
    `
    )}
    {renderAccessContent(
      3,
      "Triệu chứng của gan nhiễm mỡ là gì?",
      `
        <br />Tùy vào cơ chế bệnh sinh, bệnh gan nhiễm mỡ được chia thành 4 loại khác nhau như:
        <br /><b><i>a. Gan nhiễm mỡ do rượu</i></b>
        <br />Rượu là nguyên nhân gây ra nhiều bệnh lý, ảnh hưởng sức khỏe người bệnh. Trong đó, rượu gây tổn thương nhiều nhất tại gan dẫn đến tình trạng gan nhiễm mỡ là dấu hiệu đáng báo động của bệnh viêm gan do rượu.
        <br />Khi nồng độ rượu quá cao và duy trì liên tục ở mức độ cao trong máu sẽ gây cản trở quá trình mỡ chuyển hóa. Ngoài ra, hệ enzyme của gan cũng bị ảnh hưởng nên lipid cũng không thể chuyển hóa hoàn toàn.
        <br />Khi đó, lượng mỡ dư thừa không thể chuyển hóa sẽ bị tích tụ lại trong gan. Vì thế, nhiều nghiên cứu đã cho thấy rằng khi phát hiện tình trạng gan nhiễm mỡ do rượu ở giai đoạn sớm, bệnh chưa diễn tiến thành viêm gan và xơ hóa gan, người bệnh nên kiêng rượu để giảm tình trạng bệnh. Có thể chỉ cần 6 tuần, lá gan có thể phục hồi và cải thiện tình trạng đáng kể.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742588/r%C6%B0%E1%BB%A3u-g%C3%A2y-t%E1%BB%95n-th%C6%B0%C6%A1ng-nhi%E1%BB%81u-nh%E1%BA%A5t-t%E1%BA%A1i-gan-%C4%91%E1%BA%B7c-bi%E1%BB%87t-l%C3%A0-gan-nhi%E1%BB%85m-m%E1%BB%A1_j4yden.png" />
            <p style="font-size: 13px">Rượu gây tổn thương nhiều nhất tại gan đặc biệt là gan nhiễm mỡ</p>
        </div>
        <br />
        <br /><b><i>b. Gan nhiễm mỡ không do rượu</i></b>
        <br />Nếu người bệnh không uống rượu hoặc uống ít, lượng rượu không đủ để gây bệnh thì bác sĩ có thể nghi ngờ bệnh gan nhiễm mỡ không do rượu và tìm kiếm nguyên nhân gây bệnh để loại bỏ.
        <br />Một số yếu tố khác có thể gây bệnh gan nhiễm mỡ không do rượu như rối loạn lipid máu, tiểu đường, béo phì hay người bệnh đang sử dụng một số loại thuốc không theo chỉ định của bác sĩ cũng có thể khiến quá trình chuyển hóa lipid tại gan bị rối loạn.
        <br />Lúc này, việc chẩn đoán bệnh và điều trị sẽ trở nên phức tạp hơn so với tình trạng gan nhiễm mỡ do rượu.
        <br />
        <br /><b><i>c. Viêm gan nhiễm mỡ không do rượu</i></b>
        <br />Khi mỡ tích tụ trong gan quá mức cho phép sẽ kích thích xảy ra các phản ứng viêm trong tế bào gan. Dưới tác động của các chất trung gian gây viêm sẽ khiến các tế bào gan bị tổn thương, sưng phồng cấu trúc gan dẫn đến gan trở nên to hơn bất thường, đôi khi đi kèm triệu chứng đau vùng gan ở hạ sườn phải khi chạm vào.
        <br />Ngoài ra, khi hệ men gan không hoàn chỉnh sẽ gây cản trở quá trình tiêu hóa dinh dưỡng dẫn đến người bệnh buồn nôn, chán ăn, vàng da hoặc nôn ói. Vì thếm nếu bệnh viêm gan kéo dài không được điều trị sớm sẽ khiến gan bị tổn thương, khó hồi phục và mô sợi tăng sinh dày đặc trong tế bào gan dẫn đến tình trạng xơ gan.
        <br />
        <br /><b><i>d. Gan nhiễm mỡ cấp tính trong thai kỳ</i></b>
        <br />Mang thai là quá trình thay đổi rất nhiều các cơ quan, cấu trúc bên trong cơ thể cũng như ảnh hưởng đến các quá trình sinh lý, sinh hóa. Vì thế, gan nhiễm mỡ cũng có thể là biến chứng khi mang thai.
        <br />Dù tỷ lệ mẹ bầu mang thai bị gan nhiễm mỡ khá thấp, hầu như hiếm gặp nhưng nếu tình trạng viêm không thể kiểm soát khiến hàng loạt tế bào gan bị hoại tử, suy giảm chức năng gan đôi khi có thể ảnh hưởng đến sức khỏe của mẹ và bé.
        <br />Các dấu hiệu của bệnh gan nhiễm mỡ thường xuất hiện trong 3 tháng cuối của thai kỳ. Lúc này, thai phụ có thể ăn kém, đột nhiên buồn nôn, nôn liên tục như lúc thai nghén, vàng da và đau vùng hạ sườn phải.
        <br />Tuy nhiên, nếu tình trạng gan nhiễm mỡ được phát hiện sớm trong thai kỳ và điều trị đúng cách, hiệu quả, đa số trường hợp sẽ ổn định sau khi sinh nở và không để lại di chứng nguy hiểm gì về sau.
    `
    )}
    {renderAccessContent(
      4,
      "Gan nhiễm mỡ có điều trị được không? ",
      `
      <br />Hiện tại, chưa có thuốc hay phương pháp điều trị có thể khiến tình trạng gan nhiễm mỡ hết ngay hoàn toàn. Nhưng nếu người bệnh kịp thời thay đổi lối sống khoa học kết hợp điều trị bệnh lý đi kèm có thể dần cải thiện tình trạng bệnh, cụ thể như:
      <br />
      <br /><b><i>a. Giảm cân:</i></b>
      <br />Để làm giảm sự tổn thương ở gan và cải thiện sức đề kháng của insulin, giảm cân là việc cần thiết. Tuy nhiên, người bệnh không nên áp dụng chế độ ăn kiêng giảm cân quá khắt khe ảnh hưởng đến sức khỏe cơ thể. 
      <br />Thay vào đó nên tập thể dục rèn luyện điều độ kết hợp ăn uống khoa học giúp giảm cân an toàn. Chỉ cần cân nặng cơ thể hiện tại giảm bớt 10% sẽ giúp điều trị hiệu quả gan nhiễm mỡ cũng như giảm bớt nguy cơ xơ gan và viêm gan. 
      <br />Người bệnh có thể tư vấn ý kiến bác sĩ về phương pháp giảm cân phù hợp, an toàn.
      <br />
      <br /><b><i>b. Sử dụng vitamin E:</i></b>
      <br />Vitamin E được nhiều chuyên gia y tế khuyến cáo có thể hỗ trợ cải thiện tình trạng viêm gan nhiễm mỡ nhưng không cùng mắc bệnh lý tiểu đường. Trong các đối tượng nghiên cứu không bao gồm người bị tiểu đường và xơ gan mất bù nên chưa thể chứng minh được lợi ích của vitamin E đối với những nhóm đối tượng này. 
      <br />Ngoài ra, bệnh nhân nam có tiền sử hoặc người thân trong gia đình mắc ung thư tuyến tiền liệt không nên sử dụng vitamin E. Nguyên nhân do vitamin E quá liều có thể làm tăng nguy cơ ung thư tuyến tiền liệt ở nam giới.
      <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742593/vitamin-e-c%C3%B3-th%E1%BB%83-c%E1%BA%A3i-thi%E1%BB%87n-vi%C3%AAm-gan-nhi%E1%BB%85m-m%E1%BB%A1-%E1%BB%9F-ng%C6%B0%E1%BB%9Di-kh%C3%B4ng-b%E1%BB%8B-b%E1%BB%87nh-ti%E1%BB%83u-%C4%91%C6%B0%E1%BB%9Dng_otry89.png" />
            <p style="font-size: 13px">Vitamin E có thể cải thiện viêm gan nhiễm mỡ ở người không bị bệnh tiểu đường</p>
        </div>
      <br />
      <br />Đồng thời, chúng ta không nên sử dụng vitamin E liều cao quá mức 800UI/ ngày. Người bệnh nên tham khảo ý kiến bác sĩ để được tư vấn liều lượng vitamin E sử dụng phù hợp và an toàn.
      <br />
      <br /><b><i>c. Ăn kiêng đúng cách</i></b>
      <br />Người bị gan nhiễm mỡ cần lưu ý hơn trong ăn uống, giảm tinh bộ và đường, hạn chế tiêu thụ đồ ăn nhiều chất béo, dầu mỡ, thức ăn nhanh, đồ chiên rán …
      <br />
      <br />Thay vào đó, người bệnh nên ăn các thực phẩm lành mạnh có nguồn gốc từ thực vật, tăng cường chất xơ và protein tốt.
      <br />
      <br /><b><i>d. Kiểm soát đường huyết</i></b>
      <br />Người bị tiểu đường nên thường xuyên kiểm tra đường huyết để quản lý tốt bệnh lý cũng như cải thiện tình trạng gan nhiễm mỡ. Đối với người khỏe mạnh cũng nên hạn chế lượng đường trong khẩu phần ăn uống hàng ngày và chú ý theo dõi đường huyết để ngăn ngừa các yếu tố nguy cơ gây bệnh.
      <br />
      <br />Một số loại thực phẩm người bị tiểu đường nên tránh xa như nước ngọt, bánh mì trắng, khoai tây chiên, nước trái cây, bánh quy, trái cây sấy khô …
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
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742597/ti%C3%AAm-ng%E1%BB%ABa-vaccine-ph%C3%B2ng-b%E1%BB%87nh-vi%C3%AAm-gan-%C4%91%E1%BB%83-h%E1%BA%A1n-ch%E1%BA%BF-nguy-c%C6%A1-m%E1%BA%AFc-b%E1%BB%87nh-x%C6%A1-gan_fqgs1z.png" />
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

export default FattyLiverSymptom;
