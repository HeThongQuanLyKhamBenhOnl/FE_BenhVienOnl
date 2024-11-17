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

const Endoscopy = () => {
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
      NỘI SOI HỆ TIÊU HÓA THỰC QUẢN, DẠ DÀY, TÁ TRÀNG, ĐẠI TRÀNG
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
      "Nội soi hệ tiêu hóa ( Nội soi Thực quản, Dạ dày, Tá tràng, Đại tràng) là gì?",
      `
        <div style="display: flex; justify-content: center;"><img style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731745896/noi-soi-he-tieu-hoa-768x768_hxodxi.jpg" /></div>
        <br />- Nội soi tiêu hóa là việc thực hiện thăm khám trực tiếp Thực quản - Dạ Dày - Tá tràng hoặc Đại tràng bằng một ống mềm có Camera gắn ở đầu ống. Điều khiển đa hướng, nhìn thấy, nhận định, phân loại, cảm giác được mật độ tổn thương và có thể trực tiếp can thiệp vào tổn thương đó là Nội soi tiêu hoá.
        <br />- Riêng đối với Nội soi Đại tràng để đưa ống nội soi vào và có thể quan sát kỹ đại tràng các Bác sĩ phải bơm vào một ít hơi vì ruột vốn xẹp.
        <br />- Chính vì vậy có thể cảm thấy căng chướng, tức bụng, mót đại tiện, một số bệnh nhân có thể thấy đau nhẹ chịu đựng được nhưng có một số nhạy cảm quá mức thường cần thêm thủ thuật vô cảm tiền mê hoặc gây mê tĩnh mạch nhẹ nhàng.
    `
    )}
    {renderAccessContent(
      2,
      "Tại sao nội soi là tiêu chuẩn vàng trong chẩn đoán và điều trị các bệnh lý về tiêu hoá?",
      `
        <br />- Ống tiêu hóa là một cơ quan rất khó chẩn đoán bệnh lý. Các phương pháp hiện đại như siêu âm, chụp cắt lớp điện toán (CT) hay chụp cộng hưởng từ dù rất đắt tiền nhưng vẫn không có giá trị trong chẩn đoán bệnh lý ống tiêu hóa ( Do không cung cấp được thông tin xác thực về bệnh trạng).
        <br />- Chụp X quang Dạ dày hoặc Đại tràng bằng thuốc cản quang có thể dùng trong một số trường hợp nhưng vẫn không chính xác bằng Nội soi, thậm chí nếu kết quả bất thường bệnh nhân vẫn cần được nội soi để xác định chẩn đóan và điều trị.

        <br />Do vậy, Nội soi là tiêu chuẩn vàng cho thăm khám, đánh giá, điều trị các bệnh lý tiêu hoá và các nghiên cứu khoa học của y học.
        <br />Qua nội soi, Bác sĩ có thể phát hiện những tổn thương rất nhỏ, chỉ vài milimét, có thể sinh thiết tìm tế bào ung thư, lấy mẫu mô chẩn đoán vi trùng trong dạ dày (Hpylori), hoặc khi soi đại tràng bác sĩ có thể cắt polyp để phòng ngừa ung thư đại tràng.
        <br />Đối với các trường hợp đang xuất huyết, nội soi có thể được thực hiện cấp cứu cầm máu để tránh một cuộc mổ cho người bệnh.
    `
    )}
    {renderAccessContent(
      3,
      "Phương pháp nội soi tiêu hoá không đau tại Phòng khám Bệnh viện",
      `
        <br />- Phương pháp Nội soi không đau là phương pháp nội soi kỹ thuật cao, tân tiến nhất hiện nay, phương pháp này đã khắc phục được những nhược điểm mà nội soi thông thường không thể thực hiện được.
        <br />- Nội soi gây mê giúp làm mất cảm giác đau, cảm giác lo lắng của người bệnh. Hơn nữa trong nội soi gây mê, người bệnh nằm yên tĩnh, không bị kích thích, giúp quá trình soi và làm thủ thuật được thuận lợi, áp dụng được nhiều kỹ thuật cần độ chính xác cao như:
        <br />+ Cắt polyp, cắt hớt niêm mạc, tiêm cầm máu;
        <br />+ Thắt tĩnh mạch thực quản trong bệnh lý xuất huyết tiêu hóa;
        <br />+ Sinh thiết làm giải phẫu bệnh chẩn đoán ung thư tiêu hóa sớm và làm mô bệnh chẩn đoán vi khuẩn Helicobacter Pylori (HP)…
        <br />
        <div style="display: flex; justify-content: center;"><img style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731745901/cat-polyp-trong-qua-trinh-noi-soi_x7btjg.jpg" /></div>
    `
    )}
    {renderAccessContent(
      4,
      "Ưu điểm của phương pháp nội soi không đau",
      `
        <br />- Không có cảm giác đau: Đối với phương pháp nội soi không đau bệnh nhân sẽ không phải chịu cảm giác, buồn nôn, khó chịu trong lúc nội soi so với phương pháp nội soi thông thường.
        <br />- An Toàn: Tùy vào mỗi trường hợp cụ thể Bác sĩ sẽ có những chỉ định riêng về liều lượng thuốc gây mê phù hợp cho hiệu quả gây mê ngắn do vậy sẽ không ảnh hưởng đến sức khỏe. Hạn chế được một số tai biến trong quá trình nội soi như trật khớp, tăng huyết áp.
        <br />- Chính xác: Phương pháp Nội soi không đau cho hình ảnh rõ nét và chính xác hơn do người bệnh nằm yên trong quá trình nội soi.
        <br />- Tiết kiệm thời gian: Đối với phương pháp nội soi không đau sẽ cho kết quả nhanh chóng chỉ trong khoảng thời gian 15 đến 20 phút. Giúp tiết kiệm thời gian thăm khám cho khách hàng
    `
    )}
    {renderAccessContent(
      5,
      "Đối tượng cần phải thực hiện nội soi tiêu hoá",
      `
        <br />Chỉ định của nội soi tiêu hóa rất rộng rãi, hầu như tất cả các bệnh nhân nghi ngờ có vấn đề ở đường tiêu hóa đều có thể được chỉ định soi tiêu hóa.

        <br />a. Nội Soi dạ dày tá tràng thường được chỉ định trong các trường hợp:
        <br />- Đau thượng vị, buồn nôn ói sau khi ăn, gọi chung là hội chứng dạ dày tá tràng.
        <br />- Sụt cân không rõ nguyên nhân.
        <br />- Ói ra máu, đi cầu phân đen hoặc thiếu máu không rõ nguyên nhân.
        <br />- Trào ngược dạ dày thực quản.
        <br />- Tầm soát ưng thư
        <br />- Điều trị các bệnh lý như xuất huyết,giãn tĩnh mạch ,cắt polype,ung thư dạ dầy sớm…


        <br />b. Nội soi đại tràng thường được chỉ định trong trường hợp:
        <br />- Đau bụng, thay đổi thói quen đi tiêu hằng ngày như bị bón, tiêu chảy kéo dài
        <br />- Sụt cân không rõ nguyên nhân
        <br />- Thiếu máu hoặc đi cầu ra máu không rõ nguyên nhân.
        <br />- Tầm soát ung thư đại tràng ở những người có gia đình bị ung thư đại tràng hoặc trên 50 tuổi.
        <br />- Theo dõi bệnh viêm loét đại tràng.
        <br />- Chỉ định điều trị can thiệp và theo dõi sau điều trị
    `
    )}
    {renderAccessContent(
      6,
      "Lời dặn của Bác sĩ đối với bệnh nhận trước khi thực hiện nội  soi tiêu hoá",
      `
        <br />a. Đối với Nội soi Thực quản - Dạ dày - Tá tràng
        <br />- Nội soi Thực quản - Dạ dày - Tá tràng chuẩn bị rất đơn giản, bệnh nhân chỉ cần nhịn ăn trước khi soi ít nhất 6 giờ, có thể uống nước nhưng là nước trắng và lượng ít.

        <br />b. Đối với Nội soi Đại tràng
        <br />- Nội soi đại tràng cần sự chuẩn bị phức tạp hơn để lòng đại tràng sạch hết phân, khi nội soi bác sĩ mới có thể thấy rõ lòng đại tràng.
        <br />- Bệnh nhân nên tránh ăn những thức ăn có nhiều chất xơ và rau trong vài ngày, trước khi nội soi. Bệnh nhân có thể ăn nhẹ vào buổi tối (ít nhất 2 giờ trước khi uống thuốc): ăn cháo, soup.
        <br />- Uống thuốc làm sạch ruột vào khoảng từ 7 đến 9 giờ tối. Tốt nhất là nên để lạnh thuốc trước khi uống.
        <br />- Nếu bạn dùng Fortran: Pha 3 gói FORTRANS với 3l nước, uống mỗi lần một ly khoảng 200ml , cứ mỗi 10 đến 15 phút một lần cho đến khi uống hết 3l nước thuốc đó.
        <br />- Nếu bạn dùng Fleet Phosphat Soda, uống 1 chai 45ml lúc 7h chiều sau đó uống thêm 1 lít nước. Sáng hôm sau lúc 6h sáng, bạn uống tiếp 1 chai 45ml và 1lít nước. Bạn có thể pha loãng chai Fleet với nước trái cây hoặc nước lọc để uống ( 1 chai fleet pha thành 250 ml nước).
        <br />- Không ăn gì sau khi sử dụng thuốc làm sạch ruột. Bạn có thể uống nước trắng khi cần. Uống thuốc điều trị hàng ngày với một lượng nước nhỏ vào buổi sáng ngày làm nội soi. Không uống thuốc tiểu đường.
        <br />- Mỗi bệnh nhân có thể đáp ứng với thuốc rửa ruột một cách khác nhau, thông thường bạn sẽ đi- tiêu phân lỏng 10-15 lần.
        <br />- Nếu phải làm nội soi sau 12 giờ trưa: bạn có thể uống dịch lỏng 6 giờ trước khi nội soi, dịch lỏng gồm: nước soda có đường, nước lọc, nước hầm gà hoặc bò trong, nho trắng hoặc nước táo
    `
    )}
    {renderAccessContent(
      7,
      "Những lưu ý cho bệnh nhân sau khi nội soi",
      `
        <br />a. Nội soi Thực quản - Dạ dày - Tá tràng:
        <br />- Sau khi nội soi Thực quản - Dạ dày - Tá tràng Bệnh nhân hoàn toàn bình thường. Đôi khi có cảm giác đau họng, đầy bụng chút ít thường sau khoảng 30 phút hết hoàn toàn các cảm giác khó chịu.
        <br />- Trong trường hợp có tiền mê hoặc mê cần thêm khoảng 1h để tỉnh táo và phải có người nhà đi cùng.

        <br />b. Đối với Nội soi Đại tràng:
        <br />- Sau khi Nội soi Đại tràng người bệnh cần thực hiện những việc sau:
        <br />+ Nghỉ ngơi tại phòng chờ một thời gian ngắn trước khi ra về.
        <br />+ Ghi nhận một số vấn đề thường gặp sau khi soi trực tràng như: Cảm giác đau bụng ít hay cảm giác mót rặn, bụng có cảm giác chướng hơi nhẹ đây là triệu chứng bình thường và biến mất nhanh.
        <br />Trong trường hợp bệnh nhân thấy đau nhiều hay rất khó chịu, cần báo ngay cho điều dưỡng hay bác sĩ biết để xử lý kịp thời.
        <br />
        <div style="display: flex; justify-content: center;"><img style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731745908/noi-soi-dai-trang-768x768_du4o6g.jpg" /></div>
    `
    )}
    {renderAccessContent(
      8,
      "Tại sao nên thực hiện nội soi thực quản, dạ dày, tá tràng, Đại tràng tại Phòng  khám Bệnh viện",
      `
        <br />- Đội ngũ Bác sĩ đầu ngành từ Bệnh viện Đại học Y Dược TPHCM và Trường Đại học Y Dược TP.HCM;
        <br />- Phòng nội soi được trang bị hệ thống máy Olympus hiện đại;
        <br />- Dịch vụ chuyên nghiệp, tận tình, chu đáo;
        <br />- Đặt hẹn tiện lợi qua tổng đài 1900 6923,
        <br />- Thời gian nhanh chóng, thuận tiện cho khách hàng.
    `
    )}
    {renderAccessContent(
      9,
      "Các dịch vụ nội soi của Phòng khám Bệnh viện",
      `
        <br />- Nội soi thực quản - Dạ dày - Tá tràng không sinh thiết (Nội soi theo phương pháp thường)
        <br />- Nội soi Đại trực tràng toàn bộ ống mềm không sinh thiết- Nội soi Đại trực tràng toàn bộ ống mềm có sinh thiết
        <br />- Nội soi Thực quản - Dạ dày - Tá tràng có sinh thiết (gửi GPB)
        <br />- Nội soi trực tràng ống mềm không sinh thiết (có thuốc)
        <br />- Nội soi Thực quản - Dạ dày - Tá tràng ống mềm không sinh thiết (gây mê có thuốc)
        <br />- Nội soi Đại trực tràng ống mềm không sinh thiết (gây mê có thuốc)
        <br />- Nội soi Thực quản - Dạ dày - Tá tràng + Đại trực tràng ống mềm không sinh (gây mê có thuốc)
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

export default Endoscopy;
