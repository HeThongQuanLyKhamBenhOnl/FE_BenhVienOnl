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

const GastricBleeding = () => {
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
        XUẤT HUYẾT DẠ DÀY CÓ NGUY HIỂM KHÔNG?
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
      "XUẤT HUYẾT DẠ DÀY CÓ NGUY HIỂM KHÔNG?",
      `
        Xuất huyết dạ dày là triệu chứng rối loạn đường tiêu hóa, có nguy cơ gây biến chứng nguy hiểm nếu không được điều trị kịp thời và đúng cách. 
    `
    )}
    {renderAccessContent(
      2,
      "Bệnh xuất huyết dạ dày có nguy hiểm không?",
      `
      <br />Bệnh xuất huyết dạ dày là triệu chứng rối loạn đường tiêu hóa thường gặp. Các dấu hiệu dễ nhận biết xuất huyết dạ dày như máu xuất hiện trong phân hay trong chất nôn. Vì thế, bệnh xuất huyết dạ dày có thể khiến phân chuyển màu hắc ín hoặc màu đen.
      <br />Tuy nhiên không phải lúc nào chúng ta cũng có thể nhận thấy bằng mắt thường. Mức độ xuất huyết dạ dày nặng hoặc nhẹ sẽ phụ thuộc vào tình trạng bệnh, nguy hiểm hơn có thể đe dọa đến tính mạng người bệnh. 
      <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742904/b%E1%BB%87nh-xu%E1%BA%A5t-huy%E1%BA%BFt-d%E1%BA%A1-d%C3%A0y-l%C3%A0-tri%E1%BB%87u-ch%E1%BB%A9ng-r%E1%BB%91i-lo%E1%BA%A1n-%C4%91%C6%B0%E1%BB%9Dng-ti%C3%AAu-h%C3%B3a-th%C6%B0%E1%BB%9Dng-g%E1%BA%B7p_eaw1dk.png" />
            <p style="font-size: 13px">Bệnh xuất huyết dạ dày là triệu chứng rối loạn đường tiêu hóa thường gặp</p>
        </div>
      <br />
      <br />Bệnh xuất huyết dạ dày là bệnh lý về đường tiêu hóa nguy hiểm. Trong giai đoạn đầu, bệnh có thể không gây ra nhiều biến đổi trong cơ thể. Lượng máu lúc này có thể rất nhỏ, chỉ có thể phát hiện khi thăm khám sức khỏe tổng quát định kỳ.
      <br />Lúc này, người bệnh có thể thực hiện các xét nghiệm y khoa mới có thể phát hiện bệnh. Nguyên nhân do bệnh xuất huyết dạ dày ở giai đoạn đầu có thể chỉ khiến cơ thể mệt mỏi, xuất hiện phân sẫm màu hay máu trên giấy vệ sinh … 
      <br />Về lâu dài, lượng máu chảy ra liên tục và nhiều hơn khi tình trạng xuất huyết dạ dày trở nên trầm trọng. Lúc này, người bệnh có thể thường xuyên bị chóng mặt, mạch đập yếu, hoa mắt, tay chân lạnh bất thường …. 
      <br />Thậm chí tình trạng xuất huyết ồ ạt ở đường tiêu hóa có thể gây thiếu máu nghiêm trọng hoặc khiến công thức máu thấp, gây nguy hiểm đến tính mạng của người bệnh. Vì thế, việc chẩn đoán và điều trị bệnh sớm là vô cùng quan trọng, ngăn ngừa biến chứng nguy hiểm.
    `
    )}
    {renderAccessContent(
      3,
      "Nguyên nhân gây bệnh xuất huyết dạ dày",
      `
        <br />Xuất huyết dạ dày có thể do nhiều nhóm nguyên nhân khác nhau gây ra, cụ thể như:
        <br />
        <br /><b><i>a. Người mắc các bệnh lý về dạ dày</i></b>
        <br />Viêm loét dạ dày tá tràng là nguyên nhân thường gặp gây xuất huyết dạ dày, chiếm hơn khoảng 40% các trường hợp mắc bệnh. Cụ thể, các vết loét dạ dày thường phát triển ở phần trên ruột non và trên niêm mạc dạ dày, sau đó axit tiếp tục gây tổn thương khiến tình trạng xuất huyết dạ dày trở nên nghiêm trọng.
        <br />
        <br /><b><i>b. Người uống quá nhiều bia rượu</i></b>
        <br />Khi dung nạp vào cơ thể nhiều đồ uống có cồn khiến lớp niêm mạc dạ dày tăng thẩm thấu dẫn đến tình trạng chảy máu nguy hiểm. Vì thế, uống rượu bia gây ảnh hưởng trực tiếp đến dạ dày và là một trong những nguyên nhân chính gây bệnh xuất huyết dạ dày. 
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742910/%C4%91au-v%C3%B9ng-th%C6%B0%E1%BB%A3ng-v%E1%BB%8B-c%C3%B3-th%E1%BB%83-l%C3%A0-tri%E1%BB%87u-ch%E1%BB%A9ng-c%E1%BB%A7a-xu%E1%BA%A5t-huy%E1%BA%BFt-d%E1%BA%A1-d%C3%A0y_vrrkvu.png" />
            <p style="font-size: 13px">Uống quá nhiều bia rượu có thể gây xuất huyết dạ dày</p>
        </div>
        <br />
        <br /><b><i>c. Người thường xuyên sử dụng thuốc giảm đau chống viêm</i></b>
        <br />Việc người bệnh dùng thuốc giảm đau chống viêm Aspirin để ngăn ngừa tập kết tiểu cầu hay thuốc Nonsteroid khi điều trị bệnh lý xương khớp có thể gây viêm loét niêm mạc dạ dày dẫn đến tình trạng xuất huyết.
        <br />
        <br /><b><i>d. Người bị vỡ giãn tĩnh mạch thực quản, tá tràng hoặc dạ dày</i></b>
        <br />Vỡ giãn tĩnh mạch dạ dày, thực quản hay tá tràng khi lưu lượng máu bình thường ở gan bị chặn bởi cục máu đông ở tĩnh mạch cửa hoặc xơ gan. Lúc này, để máu lưu thông buộc phải chảy vào các mạch nhỏ hơn.
        <br />
        <br />Khi đó, mạch máu có thể bị giãn hoặc rò rỉ, vỡ gây tình trạng xuất huyết dạ dày, nguy hiểm đến tính mạng người bệnh. 
        <br />
        <br /><b><i>e. Người mắc hội chứng Mallory Weiss</i></b>
        <br />Hội chứng Mallory Weiss là thuật ngữ để chỉ các vết rách tại nơi giao giữa dạ dày và thực quản. Hội chứng Mallory Weiss khiến lớp niêm mạc dạ dày bị tổn thương nghiêm trọng, gây tình trạng xuất huyết đi kèm triệu chứng nôn ói.
        <br />
        <br />Hội chứng Mallory Weiss không lây truyền và người bệnh có thể tự hồi phục trong khoảng 10 ngày mà không cần điều trị đặc biệt. Đây là hội chứng có nguy cơ cao xảy ra ở người bị nôn ọe nhiều do thai nghén hay sau khi uống rượu bia.
        <br />
        <br /><b><i>f. Các nhóm nguyên nhân khác</i></b>
        <br />Ung thư, ung thư thực quản, dị dạng mạch máu nguyên nhân do phình mạch trong dạ dày cũng có thể là nguyên nhân gây xuất huyết dạ dày bên cạnh tác động của các bệnh lý đường tiêu hóa.
    `
    )}
    {renderAccessContent(
      4,
      "Triệu chứng thường gặp của bệnh xuất huyết dạ dày",
      `
      <br />Xuất huyết dạ dày có thể biểu hiện các triệu chứng rõ ràng hoặc không rõ ràng. Tùy thuộc vào vị trí và tốc độ chảy máu trên đường tiêu hóa sẽ có các dấu hiệu cụ thể khác nhau như:
      <br />- Đau bụng vùng thượng vị có thể lan ra vùng sau lưng.
      <br />- Suy nhược, thay đổi sắc tố da, mệt mỏi, thiếu sức sống, da tái nhợt.
      <br />- Đầy bụng, chướng bụng, nôn ra thức ăn có lẫn máu tươi hoặc máu đen.
      <br />- Đi ngoài ra máu có màu đen kèm mùi khó chịu. 
      <br />- Thiếu máu nghiêm trọng như chóng mặt, hoa mắt, tụt huyết áp, choáng váng, vã mồ hôi, mệt mỏi …
      <br />- Chán ăn, ăn không ngon.
      <br />- Thở dốc, khó thở, mệt mỏi, nghiêm trọng hơn có thể bị ngất.
      <br />
      <br />Tuy nhiên không phải ai có các triệu chứng trên cũng mắc bệnh xuất huyết dạ dày. Nhưng khi xuất hiện các triệu chứng bất thường, bạn nên thăm khám chuyên khoa Nội tiêu hóa cùng bác sĩ để được chẩn đoán và điều trị kịp thời các triệu chứng.
      <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742916/u%E1%BB%91ng-qu%C3%A1-nhi%E1%BB%81u-bia-r%C6%B0%E1%BB%A3u-c%C3%B3-th%E1%BB%83-g%C3%A2y-xu%E1%BA%A5t-huy%E1%BA%BFt-d%E1%BA%A1-d%C3%A0y_rzktwp.png" />
            <p style="font-size: 13px">Đau vùng thượng vị có thể là triệu chứng của xuất huyết dạ dày</p>
        </div>
      `
    )}
    {renderAccessContent(
      5,
      "Điều trị bệnh xuất huyết dạ dày",
      `
        <br />Ở các trường hợp xuất huyết bao tử ở mức độ nhẹ có thể tự ngừng mà không cần điều trị y tế. Tuy nhiên, nếu tình trạng xuất huyết bao tử nghiêm trọng, diễn ra liên tục và thường xuyên, chảy máu nhiều, người bệnh cần phải thăm khám cùng bác sĩ để được kiểm tra và tiến hành xét nghiệm. Lúc này, người bệnh có thể được bác sĩ chỉ định uống thuốc hoặc thực hiện các thủ thuật y khoa.
    `
    )}
    {renderAccessContent(
      6,
      "Phòng ngừa bệnh xuất huyết dạ dày như thế nào?",
      `
        <br />Phòng ngừa bệnh xuất huyết dạ dày ngay từ đầu là vô cùng cần thiết, hạn chế ảnh hưởng nghiêm trọng đến sức khỏe và tâm lý người bệnh. Dưới đây là một số cách bảo vệ hệ tiêu hóa của bạn luôn khỏe mạnh như:
        <br />- Không hút thuốc lá, không uống rượu bia nhiều.
        <br />- Thường xuyên tập thể dục để nâng cao hệ miễn dịch và tăng sức đề kháng.
        <br />- Cân bằng thời gian làm việc và nghỉ ngơi hợp lý, ăn uống sinh hoạt điều độ để cơ thể luôn khỏe mạnh.
        <br />- Không nên tự ý dùng thuốc khi không có chỉ định của bác sĩ.
        <br />- Giữ tinh thần vui vẻ, lạc quan, tránh căng thẳng.
        <br />- Hạn chế thức khuya, tập thói quen ăn đúng bữa, ngủ đúng giấc và thức dậy đúng giờ một cách khoa học. 
        <br />- Chủ động thăm khám sức khỏe tổng quát định kỳ để tầm soát các yếu tố nguy cơ gây bệnh sớm nhất có thể. 
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

export default GastricBleeding;
