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

const BreastCancer = () => {
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
        UNG THƯ VÚ: NGUYÊN NHÂN, TRIỆU CHỨNG, CHẨN ĐOÁN VÀ ĐIỀU TRỊ
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
      "UNG THƯ VÚ: NGUYÊN NHÂN, TRIỆU CHỨNG, CHẨN ĐOÁN VÀ ĐIỀU TRỊ",
      `
        Ung thư vú xảy ra khi các tế bào ác tính hình thành từ trong mô tuyến vú. Đây là căn bệnh có tỷ lệ tử vong hàng đầu trong số các loại ung thư ở phụ nữ.
    `
    )}
    {renderAccessContent(
      2,
      "Nguyên nhân gây bệnh ung thư vú",
      `
      <br />Bất kỳ ai cũng có nguy cơ tiềm tàng mắc bệnh ung thư vú trong suốt cuộc đời. Theo độ tuổi càng lớn, nguy cơ này càng tăng. Bên cạnh đó, có nhiều yếu tố nguy cơ khác cũng làm tăng hoặc thúc đẩy căn bệnh ung thư vú phát triển.
      <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742075/b%E1%BA%A5t-k%E1%BB%B3-ai-c%C5%A9ng-c%C3%B3-nguy-c%C6%A1-ti%E1%BB%81m-t%C3%A0ng-m%E1%BA%AFc-b%E1%BB%87nh-ung-th%C6%B0-v%C3%BA_j1908l.png" />
            <p style="font-size: 13px">Bất kỳ ai cũng có nguy cơ tiềm tàng mắc bệnh ung thư vú</p>
        </div>
      <br />
      <br />Một số yếu tố quan trọng có thể làm tăng nguy cơ mắc bệnh ung thư vú như:
      <br />- Người có các bệnh lành tính hoặc ác tính ở vú.
      <br />- Người lớn tuổi.
      <br />- Người ít hoạt động thể chất, thừa cân, béo phì.
      <br />- Người có chế độ ăn uống không khoa học, hút nhiều thuốc lá, lạm dụng rượu bia.
      <br />- Phụ nữ dậy thì sớm hay mãn kinh muộn.
      <br />- Phụ nữ bị đột biến về gen như BRCA 1 hoặc BRCA 2. Theo thống kê có khoảng 10% số ca ung thư vú ở phụ nữ nguyên nhân do có yếu tố gen đột biến bất thường.
      <br />- Phụ nữ không sinh con hoặc lớn tuổi mới có con đầu lòng hoặc không nuôi con bằng sữa mẹ.
      <br />- Phụ nữ có tiền sử gia đình mắc bệnh ung thư vú, đặc biệt ở quan hệ thế hệ 1 (chị em gái, mẹ, con gái).
      <br />- Phụ nữ có sử dụng liệu phát nội tiết tố thay thế.
      <br />- Phụ nữ từng tiến hành xạ trị vào vùng ngực hoặc vùng vú.
    `
    )}
    {renderAccessContent(
      3,
      "Triệu chứng và dấu hiệu cảnh báo bệnh ung thư vú",
      `
        <br />Dưới đây là một số triệu chứng và dấu hiệu cảnh báo thường gặp ở người bệnh ung thư vú như:
        <br />- Vú xuất hiện khối u, vị trí dưới nách hoặc gần xung quanh vú.
        <br />- Vú tiết ra dịch đặc biệt có máu.
        <br />- Da vú dày hoặc xuất hiện vết lõm bất thường sần giống như da quả cam.
        <br />- Biểu hiện tụt núm vú.
        <br />- Kích thước và hình dáng của vú có sự thay đổi bất thường.
        <br />- Da ở vùng vú, núm vú hoặc quầng vú có vảy, sưng hoặc đỏ.  
    `
    )}
    {renderAccessContent(
      4,
      "Chẩn đoán bệnh ung thư vú bằng cách nào?",
      `
      <br />Dưới đây là một số phương pháp chẩn đoán bệnh ung thư vú có thể được bác sĩ chỉ định thực hiện như:
      <br />
      <br />a. Khám vú
      <br />Bác sĩ sẽ thăm khám ở cả 2 bên vú cùng phần nách, thượng đòn để kiểm tra kỹ hơn hạch ở các vùng lân cận, đồng thời kết hợp thăm khám các cơ quan bộ phận khác nếu cần thiết. 
      <br />
      <br />b. Siêu âm vú
      <br />Tùy theo tình trạng bệnh, bác sĩ sẽ chỉ định người bệnh siêu âm 3D, siêu âm vú thông thường, siêu âm đàn hồi hoặc siêu âm quét thể tích vú tự động, hỗ trợ chẩn đoán.
      <br />
      <br />c. Chụp nhũ ảnh
      <br />Chụp nhũ ảnh (chụp X-quang tuyến vú) là kỹ thuật chẩn đoán dùng tia X để ghi hình ảnh tuyến vú giúp phát hiện sớm các bất thường ở vú và căn bệnh ung thư vú nguy hiểm.
      <br />Chụp nhũ ảnh thường được bác sĩ chỉ định thực hiện ở phụ nữ trên 40 tuổi cần chẩn đoán bệnh chính xác khi họ gặp phải các triệu chứng bất thường ở vú như sờ thấy khối u, vú xuất hiện dịch tiết hoặc núm vú bị thụt vào bất thường, da vú lõm vào hoặc dày lên, đôi khi xuất hiện các vết loét ăn mòn núm vú, gây đau đớn cho người bệnh.
      <br />Cho đến thời điểm hiện tại, chụp X-quang tuyến vú (chụp nhũ ảnh) được xem là kỹ thuật tầm soát ung thư vú đơn giản và hiệu quả nhất. Ở các tình huống cụ thể, bác sĩ có thể chỉ định người bệnh thực hiện thêm một số kỹ thuật khác như chụp cộng hưởng từ tuyến vú (MRI) và siêu âm tuyến vú để hỗ trợ chẩn đoán hiệu quả hơn.
      <br />
      <br />d. Chụp cộng hưởng từ vú (MRI vú)
      <br />Ở một số trường hợp, sau khi chụp nhũ ảnh vẫn chưa thể xác định chính xác bản chất của tổn thương, bác sĩ có thể chỉ định người bệnh tiến thành thêm chụp cộng hưởng từ tuyến vú (MRI vú) … hỗ trợ cho ra kết quả tình trạng bệnh rõ ràng hơn.
      <br />
      <br />e. Xét nghiệm dịch tiết ra từ núm vú
      <br />Một trong những dấu hiệu của căn bệnh ung thư vú là dịch tiết bất thường từ núm vú. Việc xét nghiệm tế bào học dịch tiết ở núm vú có thể được bác sĩ chỉ định thực hiện để truy tìm các tế bào ung thư bong ra, giúp ích cho việc chẩn đoán.
      <br />
      <br />f. Sinh thiết vú
      <br />Sinh thiết vú là kỹ thuật lấy hoàn toàn khối u vú hoặc chỉ lấy 1 phần của khối u qua sự phân tích của các chuyên gia giải phẫu bệnh dưới kính hiển vi về các chỉ số cấu trúc mô vú và chỉ số hình thái tế bào.
    `
    )}
    {renderAccessContent(
      5,
      "Bệnh ung thư vú có điều trị được không? ",
      `
      <br />Sau khi được bác sĩ thăm khám và chẩn đoán căn bệnh ung thư vú, người bệnh sẽ được bác sĩ tư vấn phác đồ điều trị phù hợp, hạn chế bệnh diễn tiến nguy hiểm. Dưới đây là một số cách điều trị bệnh ung thư vú có thể được bác sĩ chỉ định như:
      <br />- Phẫu thuật: Để cắt bỏ khối u tuyến vú, phần lớn người bệnh ung thư vú sẽ được bác sĩ thực hiện phẫu thuật, bao gồm phẫu thuật cắt vú bảo tồn, phẫu thuật cắt toàn bộ vú và phẫu thuật cắt vú triệt để cải biên.
      <br />- Hóa trị: Để tiêu diệt tế bào ung thư hay làm chậm sự tiến triển của chúng, bác sĩ có thể sử dụng thuốc hóa chất để thực hiện hóa trị. Bác sĩ có thể hóa trị bằng đường tiêm truyền hoặc đường uống. Lúc này, thuốc sẽ theo đường máu tìm diệt tế bào ung thư có trong cơ thể. Hóa trị có thể được bác sĩ thực hiện sau mổ, trước mổ hoặc lúc tế bào ung thư đã di căn xa.
      <br />- Xạ trị: Xạ trị là kỹ thuật dùng chùm tia năng lượng cao để ngăn chặn sự phát triển của các tế bào ung thư hoặc tiêu diệt chúng. Cách thức xạ trị sẽ được bác sĩ chỉ định thực hiện tùy theo loại ung thư và tình trạng người bệnh đang ở giai đoạn nào.
      <br />- Liệu pháp nhắm trúng đích: Đây là liệu pháp sử dụng chế phẩm hay loại thuốc có tác động “chọn lọc” lên một hay nhiều đặc tính riêng biệt của loại tế bào ung thư. Liệu pháp nhắm trúng đích so với xạ trị hoặc hóa trị thường ít gây tác dụng phụ lên các tế bào lành tính.
      <br />- Liệu pháp nội tiết tố: Đây là phương pháp điều trị ung thư vú để ức chế hoạt động của nội tiết tố hoặc loại bỏ chúng giúp ngăn chặn sự phát triển của các tế bào ung thư.
      <br />- Liệu pháp miễn dịch: Đây biện pháp điều trị ung thư vú sử dụng hệ thống miễn dịch của bệnh nhân để chống lại bệnh ung thư.
      <br />
      <br />Ung thư vú được điều trị ở giai đoạn sớm thường có tiên lượng tốt. Vì thế, ngay khi xuất hiện các triệu chứng hoặc nghi ngờ mắc bệnh ung thư vú, chị em phụ nữ nên sớm thăm khám cùng bác sĩ chuyên khoa để được chẩn đoán và điều trị kịp thời.
      <br />Đồng thời, việc chủ động thăm khám sức khỏe định kỳ mỗi 6 tháng 1 lần cũng là cách tầm soát các yếu tố nguy cơ gây bệnh ung thư vú hiệu quả, ngăn chặn biến chứng nguy hiểm.
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

export default BreastCancer;
