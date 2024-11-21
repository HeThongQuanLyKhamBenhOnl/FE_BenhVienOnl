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

const FattyLiver = () => {
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
      NGUYÊN NHÂN GÂY BỆNH GAN NHIỄM MỠ
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
      "NGUYÊN NHÂN GÂY BỆNH GAN NHIỄM MỠ",
      `
        Gan nhiễm mỡ là tình trạng dư thừa mỡ trong gan quá nhiều, nếu không được điều trị kịp thời, bệnh có thể gây xơ gan và ung thư gan nguy hiểm. 
    `
    )}
    {renderAccessContent(
      2,
      "Triệu chứng thường gặp của bệnh gan nhiễm mỡ",
      `
      <br />Gan nhiễm mỡ xảy ra khi tình trạng dư thừa lượng mỡ trong gan quá nhiều, ảnh hưởng chức năng hoạt động của gan. Khi đó, gan có thể to hơn kích thước bình thường do lượng mỡ tích tụ ở gan có thể lớn hơn 5% trọng lượng gan. 
      <br />Giai đoạn đầu của tình trạng gan nhiễm mỡ có thể xem là bệnh lý lành tính. Tuy nhiên, nếu bệnh gan nhiễm mỡ không được điều trị kịp thời và hiệu quả, bệnh có thể diễn tiến thành xơ gan và ung thư gan gây nguy hiểm đến tính mạng người bệnh.
      <br />Hầu như người bệnh gan nhiễm mỡ không thể phát hiện ra mình bị bệnh do không có các triệu chứng bệnh điển hình nên dễ nhầm lẫn với các bệnh có cùng triệu chứng khác.
      <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742335/gan-nhi%E1%BB%85m-m%E1%BB%A1-c%C3%B3-th%E1%BB%83-ph%C3%A1t-hi%E1%BB%87n-khi-ng%C6%B0%E1%BB%9Di-b%E1%BB%87nh-kh%C3%A1m-s%E1%BB%A9c-kh%E1%BB%8Fe-t%E1%BB%95ng-qu%C3%A1t-%C4%91%E1%BB%8Bnh-k%E1%BB%B3_f0x8b4.png" />
            <p style="font-size: 13px">Gan nhiễm mỡ có thể phát hiện khi người bệnh khám sức khỏe tổng quát định kỳ</p>
        </div>
      <br />
      <br />- Bệnh gan nhiễm mỡ có thể phát hiện khi người bệnh xét nghiệm máu hay khám sức khỏe tổng quát định kỳ. Dưới đây là một số triệu chứng có thể xảy ra ở người bị gan nhiễm mỡ, bạn cần đặc biệt lưu ý như:
      <br />- Nước tiểu sẫm màu hay có màu vàng, phân trắng.
      <br />- Gan to, bụng to, thường xuyên đau bụng bất thường.
      <br />- Buồn nôn, nôn, chán ăn, đầy bụng, khó tiêu, thường xuyên cảm thấy mệt mỏi.
      <br />- Vàng da, vàng mắt.
      <br />- Mẩn ngứa mày đay, ngứa ngáy, mệt mỏi, dị ứng.
    `
    )}
    {renderAccessContent(
      3,
      "Nguyên nhân gây bệnh gan nhiễm mỡ là gì?",
      `
        <br />- Bệnh gan nhiễm mỡ gây ra chủ yếu bởi người bệnh có thói quen uống nhiều thức uống có cồn như rượu bia trong thời gian dài. Ngoài ra, một số tình trạng sức khỏe dưới đây có thể khiến người bệnh có nguy cơ bị gan nhiễm mỡ cao hơn như:
        <br />
        <br /><b><i>a. Người bị béo phì, tăng cân không kiểm soát</i></b>
        <br />Béo phì thừa cân là một trong các yếu tố nguy cơ gây tình trạng gan nhiễm mỡ. Khi người bệnh thường xuyên hấp thụ lượng chất béo triglyceride vượt ngưỡng có thể hấp thu của cơ thể thì chúng sẽ có hiện tượng tích tụ dẫn đến tình trạng không thể chuyển hóa hết, tăng nguy cơ khiến gan bị nhiễm mỡ. 
        <br />
        <br />Ngoài ra, cơ thể không thể chuyển hóa hết thành năng lượng để sử dụng khi lượng calo nạp vào quá cao và chúng sẽ được tích trữ dưới dạng triglyceride.
        <br />
        <br /><b><i>b. Người nghiện rượu, thường xuyên nhiều rượu bia</i></b>
        <br />Ethanol có trong rượu gây tăng NADH tại tế bào gan. Từ đó kích thích gan tổng hợp chất béo dẫn đến tăng tổng hợp và tích trữ triglyceride tại gan. Vì thế, nghiện rượu là một trong những nguyên nhân chính gây tình trạng gan nhiễm mỡ.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742345/nghi%E1%BB%87n-r%C6%B0%E1%BB%A3u-l%C3%A0-m%E1%BB%99t-trong-nh%E1%BB%AFng-nguy%C3%AAn-nh%C3%A2n-ch%C3%ADnh-khi%E1%BA%BFn-gan-nhi%E1%BB%85m-m%E1%BB%A1_frapjg.png" />
            <p style="font-size: 13px">Nghiện rượu là một trong những nguyên nhân chính khiến gan nhiễm mỡ</p>
        </div>
        <br />
        <br /><b><i>c. Người bị tiểu đường</i></b>
        <br />Trong máu của người mắc bệnh tiểu đường có chứa acid béo tự do sẽ tăng điều động khi người bệnh bị hạ đường huyết. Khi đó, tăng sử dụng acid béo tự do từ mô mỡ vào máu dẫn đến gan chuyển hóa acid béo tự do thành triglyceride dự trữ gây tình trạng gan nhiễm mỡ.
        <br />
        <br /><b><i>d. Người ăn nhiều thực phẩm giàu cholesterol</i></b>
        <br />Ăn nhiều thực phẩm giàu cholesterol khiến người bệnh có nguy cơ cao mắc bệnh tim mạch và bị nhiễm mỡ máu cao.
    `
    )}
    {renderAccessContent(
      4,
      "Điều trị và phòng ngừa gan nhiễm mỡ",
      `
        <br />a. Gan nhiễm mỡ có thể điều trị được không?
        <br />Hiện nay vẫn chưa có thuốc đặc trị tình trạng gan nhiễm mỡ. Để điều trị gan nhiễm mỡ, các phương pháp sẽ tập trung vào việc giảm ảnh hưởng của triệu chứng bệnh đến chất lượng cuộc sống cũng như không để bệnh diễn tiến nặng gây biến chứng nguy hiểm.
        <br />
        <br />Một lối sống khoa học, lành mạnh, bỏ việc uống rượu bia hay các đồ uống có cồn và kiểm soát tốt các bệnh lý nền (nếu có) là phương pháp điều trị gan nhiễm mỡ tối ưu. Đặc biệt ở người béo phì, thừa cân nên cố gắng giảm cân để điều trị gan nhiễm mỡ.
        <br />
        <br />b. Phòng ngừa tình trạng gan nhiễm mỡ bằng cách nào?
        <br />Khi đã xác định được nguyên nhân gây bệnh gan nhiễm mỡ, bạn có thể phòng ngừa bằng cách loại bỏ nguyên nhân gây bệnh và hạn chế các yếu tố nguy cơ. Điều quan trọng đầu tiên để phòng ngừa tình trạng gan nhiễm mỡ là kiểm soát hoặc hạn chế uống đồ uống có cồn như bia rượu. 
        <br />
        <br />Uống nhiều bia rượu và lạm dụng chúng là nguyên nhân hàng đầu dẫn tới tình trạng gan nhiễm mỡ và các bệnh lý nguy hiểm ở gan. Ngoài ra, bạn có thể phòng ngừa bệnh gan nhiễm mỡ bằng một số cách đơn giản và hiệu quả như:
        <br />
        <br />- Giảm cân: Nếu bạn đang trong tình trạng thừa cân, béo phì, hãy xây dựng kế hoạch giảm cân khoa học để bảo vệ lá gan khỏi tổn thương và ngăn ngừa tình trạng gan nhiễm mỡ. Tuy nhiên, bạn không nên ăn kiêng hoàn toàn để giảm cân vì giảm cân nhanh có thể diễn tiến tình trạng gan nhiễm mỡ.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742354/ng%C6%B0%E1%BB%9Di-b%E1%BB%8B-th%E1%BB%ABa-c%C3%A2n_-b%C3%A9o-ph%C3%AC-n%C3%AAn-gi%E1%BA%A3m-c%C3%A2n-%C4%91%E1%BB%83-ng%C4%83n-ng%E1%BB%ABa-t%C3%ACnh-tr%E1%BA%A1ng-gan-nhi%E1%BB%85m-m%E1%BB%A1_jvqyqe.png" />
            <p style="font-size: 13px">Người bị thừa cân, béo phì nên giảm cân để ngăn ngừa tình trạng gan nhiễm mỡ</p>
        </div>
        <br />
        <br />- Thường xuyên tập thể dục: Không chỉ đốt cháy mỡ thừa, tập thể dục còn giúp tăng chuyển hóa cơ thể, phòng ngừa và điều trị gan nhiễm mỡ hiệu quả. Hãy dành ra thời gian tập thể dục mỗi ngày ít nhất 30 phút để rèn luyện sức khỏe tốt hơn.
        <br />- Xây dựng chế độ ăn uống khoa học: Mỗi người nên xây dựng khẩu phần ăn hàng ngày cân bằng đầy đủ các chất dinh dưỡng cần thiết cho cơ thể. Ngoài ra, chúng ta nên tăng cường bổ sung acid béo omega-3 để giảm lượng chất béo trung tính có trong máu. Từ đó, ngăn ngừa tình trạng tích tụ mỡ thừa ở gan, giảm nguy cơ đối mặt với biến chứng tim mạch nguy hiểm. Đặc biệt, vitamin E được các chuyên gia y tế chứng minh giúp cải thiện hiệu quả tình trạng chất béo tích tụ trong gan, ngăn ngừa tình trạng gan nhiễm mỡ.
        <br />- Kiểm soát tốt bệnh tiểu đường: Tiểu đường có thể gây tình trạng gan nhiễm mỡ và nhiều bệnh lý khác. Người bị tiểu đường nên cố gắng theo dõi sát sao mức đường huyết của mình, tuân thủ sử dụng thuốc theo đúng chỉ định của bác sĩ. Đồng thời, người bệnh cần hạn chế ăn tinh bột, đường và tăng cường tập thể dục cũng như các hoạt động vận động thể chất … để kiểm soát tình trạng bệnh ổn định.
        <br />- Thăm khám sức khỏe định kỳ: Thường xuyên khám sức khỏe tổng quát cùng bác sĩ có thể giúp tầm soát sớm các yếu tố nguy cơ gây bệnh hiệu quả để được điều trị và ngăn ngừa biến chứng nguy hiểm có thể xảy ra trong tương lai.
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

export default FattyLiver;
