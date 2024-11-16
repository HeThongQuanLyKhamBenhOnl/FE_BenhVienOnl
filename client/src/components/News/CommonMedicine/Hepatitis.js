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

const Hepatitis = () => {
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
      VIÊM GAN A: NGUYÊN NHÂN, TRIỆU CHỨNG VÀ ĐIỀU TRỊ
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
      "VIÊM GAN A: NGUYÊN NHÂN, TRIỆU CHỨNG VÀ ĐIỀU TRỊ",
      `
        Viêm gan siêu vi A là nguyên nhân gây bệnh viêm gan A, ảnh hưởng đến hoạt động ổn định của gan và gây biến chứng nghiêm trọng đến sức khỏe của người bệnh.
    `
    )}
    {renderAccessContent(
      2,
      "Bệnh viêm gan A là gì? ",
      `
      <br />Bệnh viêm gan A (bệnh viêm gan siêu vi A) là bệnh nhiễm trùng gan cấp tính do virus viêm gan A (HAV) gây ra. Lúc này, virus làm tổn thương tế bào biểu mô gan và suy giảm chức năng gan. Bệnh khiến các tế bào biểu mô gan bị tổn thương, làm ảnh hưởng đến hoạt động và chức năng gan. Theo Tổ chức Y tế Thế giới (WHO), mỗi năm trên thế giới có khoảng 1,4 triệu người mắc bệnh viêm gan A. 
      <br />Bệnh viêm gan A rất dễ lây lan qua thực phẩm nhiễm virus chưa được nấu kỹ hoặc nguồn nước bị ô nhiễm. Người mắc bệnh viêm gan A có thể hoàn toàn hồi phục sau 2-4 tuần và không để lại bất cứ vấn đề sức khỏe nghiêm trọng nào. 
      <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731743020/b%E1%BB%87nh-vi%C3%AAm-gan-a-l%C3%A0-g%C3%AC_l684aq.png" />
            <p style="font-size: 13px">Bệnh viêm gan A là gì?</p>
        </div>
        <br />
        <br />Không giống virus viêm gan B, virus viêm gan A không gây ra bệnh viêm gan mạn tính. Có thể nói tình trạng bệnh viêm gan A không kéo dài quá 6 tháng và rất hiếm khi gây chết người. Tỷ lệ tử vong gây ra bởi bệnh viêm gan A khá nhỏ thường do ảnh hưởng biến chứng của bệnh suy gan cấp tính.
        <br />Hiện nay đã có vaccine phòng bệnh viêm gan A hiệu quả và an toàn, giảm tỷ lệ mắc bệnh.
    `
    )}
    {renderAccessContent(
      3,
      "Triệu chứng của bệnh viêm gan A gây ra cho người bệnh",
      `
        <br />Theo các chuyên gia y tế, khoảng 70% trẻ em dưới 6 tuổi khi bị nhiễm bệnh viêm gan A không biểu hiện bất kỳ triệu chứng nào. Thậm chí, ở những trường hợp có triệu chứng, việc xuất hiện bệnh vàng da rất hiếm gặp
        <br />Tuy nhiên, hầu hết trẻ lớn hơn và người trưởng thành thường có các triệu chứng điển hình của virus viêm gan A như chán ăn, khó chịu, sốt, buồn nôn và nôn mửa. Ở độ tuổi này, bệnh vàng da xuất hiện ở hơn 70% trường hợp.
        <br />Triệu chứng và dấu hiệu của bệnh viêm gan A thường xuất hiện đột ngột, từ 2 đến 4 tuần sau khi bị nhiễm virus. Chúng có thể bao gồm:
        <br />
        <br />- Cảm thấy mệt mỏi: Khi gan không hoạt động hiệu quả, các độc tố tích tụ trong cơ thể người bệnh, gây ra cảm giác uể oải và mệt mỏi.
        <br />- Rối loạn tiêu hóa: Bệnh viêm gan ảnh hưởng đến hệ tiêu hóa, dẫn đến buồn nôn, nôn mửa, chán ăn, tiêu chảy và đau bụng ở vùng bên phải.
        <br />- Sốt nhẹ: Nếu tình trạng sốt nhẹ kéo dài có thể là dấu hiệu người bệnh bị nhiễm virus HAV.
        <br />- Biểu hiện ngoài da: Da và mắt vàng là biểu hiện phổ biến của viêm gan siêu vi. Tỷ lệ vàng da phụ thuộc vào mức độ tổn thương gan.
        <br />- Màu nước tiểu và phân: Nước tiểu sẽ đậm màu và phân sẽ nhạt màu hoặc xám xỉn do sự thay đổi nồng độ bilirubin máu.
        <br />- Đau cơ, khớp: Một số bệnh nhân có thể gặp đau cơ và khớp. Đây có thể là dấu hiệu của biến chứng bệnh nghiêm trọng.
        <br />- Vàng da: Bệnh viêm gan A có thể gây vàng da và mắt hay nước tiểu sẫm màu.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="Tình trạng sốt nhẹ kéo dài có thể là dấu hiệu của bệnh viêm gan A" />
            <p style="font-size: 13px">Bệnh viêm gan A là gì?</p>
        </div>
        <br />
        <br />Các triệu chứng thường giảm sau khoảng 2 tháng, nhưng một số bệnh nhân có thể tiếp tục hoặc bị tái phát trong vòng 6 tháng. Bệnh viêm gan A có thể biến chứng thành bệnh viêm gan ứ mật gây ra các triệu chứng vàng da rõ ràng kèm theo ngứa, sốt liên tục, sút cân, tiêu chảy và khó chịu ở người bệnh. Tuy nhiên, có trường hợp nghiêm trọng hơn kéo dài đến vài tháng hoặc dẫn đến biến chứng nguy hiểm.
        <br />Khi gặp phải các triệu chứng trên không nhất định bạn đã bị nhiễm bệnh viêm gan A. Tuy nhiên, nếu xuất hiện các triệu chứng bất thường này, hãy nhanh chóng đi khám để được chẩn đoán bệnh kịp thời.
    `
    )}
    {renderAccessContent(
      4,
      "Nguyên nhân gây bệnh viêm gan A",
      `
      <br />Bệnh viêm gan A xảy ra khi virus viêm gan A xâm nhập vào tế bào gan gây tình trạng viêm gan ở người. Bệnh viêm gan A liên quan chặt chẽ đến các vấn đề vệ sinh cá nhân, vệ sinh thực phẩm và môi trường. Virus viêm gan A có thể tồn tại trong môi trường ô nhiễm vài tháng. Do đó, các khu vực với điều kiện vệ sinh và thói quen vệ sinh kém thường có tỷ lệ người bị nhiễm virus viêm gan A cao.
      <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731743024/s%E1%BB%AD-d%E1%BB%A5ng-ngu%E1%BB%93n-n%C6%B0%E1%BB%9Bc-nhi%E1%BB%85m-virus-vi%C3%AAm-gan-a-c%C3%B3-th%E1%BB%83-g%C3%A2y-b%E1%BB%87nh-%E1%BB%9F-ng%C6%B0%E1%BB%9Di_gimjzb.png" />
            <p style="font-size: 13px">Sử dụng nguồn nước nhiễm virus viêm gan A có thể gây bệnh ở người</p>
        </div>
      <br />
      <br />Dưới đây là một số nguyên nhân có thể dẫn đến việc lây nhiễm virus như:
      <br />- Ăn thức ăn không hợp vệ sinh, người nấu bị nhiễm virus viêm gan A hoặc không tuân thủ quy trình rửa tay sạch sẽ trước khi tiếp xúc với thức ăn. 
      <br />- Tiêu thụ các loại hải sản sống (như tôm, cua, sò, ốc…) từ nguồn nước ô nhiễm cũng có thể bị nhiễm virus viêm gan A.
      <br />- Sử dụng nguồn nước bị nhiễm virus viêm gan A.
      <br />- Chia sẻ đồ dùng cá nhân (như đồ ăn uống, khăn, bàn chải đánh răng…) với người mắc bệnh viêm gan A.
      <br />- Tiếp xúc gần gũi (như quan hệ tình dục bằng đường miệng, đường hậu môn) với người bị nhiễm bệnh viêm gan A.
      <br />
      <br />Ngoài ra, virus viêm gan A cũng có thể lây truyền qua đường máu. Tuy nhiên khả năng lây lan theo cách này thường rất thấp vì có ít virus viêm gan A trong máu người bệnh
    `
    )}
    {renderAccessContent(
      5,
      "Biến chứng nguy hiểm của bệnh viêm gan A",
      `
      <br />Khác với các loại viêm gan siêu vi khác, bệnh viêm gan A không gây tổn thương gan kéo dài và không biến chứng thành bệnh viêm gan mãn tính. Thông thường, người bệnh có thể hoàn toàn phục hồi sau 1 - 2 tháng điều trị. 
      <br />Virus gây bệnh cũng không duy trì trong cơ thể người bệnh sau khi người bệnh đã hoàn toàn hồi phục. Tuy nhiên, ở những người cao tuổi hoặc có các vấn đề sức khỏe khác như tiểu đường, thiếu máu, suy tim, bệnh viêm gan A có thể biến chứng nặng hơn và kéo dài thời gian điều trị.
      <br />Ở một số ít trường hợp, bệnh viêm gan A có thể biến chứng suy gan cấp tính, đặc biệt ở người già và những người đã mắc bệnh gan mãn tính trước đó. Đối với bệnh nhân bị suy gan cấp cần nhập viện ngay để được theo dõi và điều trị kịp thời bởi các chuyên gia y tế. Một số trường hợp suy gan cấp tính nguy hiểm, người bệnh có thể cần được ghép gan.
      <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731743030/b%E1%BB%87nh-vi%C3%AAm-gan-a-c%C3%B3-th%E1%BB%83-bi%E1%BA%BFn-ch%E1%BB%A9ng-suy-gan-c%E1%BA%A5p-t%C3%ADnh_qirrem.png" />
            <p style="font-size: 13px">Bệnh viêm gan A có thể biến chứng suy gan cấp tính</p>
        </div>
      <br />
      <br />Để chẩn đoán bệnh viêm gan A, bác sĩ sẽ thăm khám về các triệu chứng và tiền sử bệnh của người bệnh. Người bệnh có thể được yêu cầu xét nghiệm máu để phát hiện các kháng thể đặc hiệu của virus HAV trong máu.
      <br />
      <br />a. Kháng thể IgM (Anti HAV-IgM):
      <br />Nếu kết quả xét nghiệm cho thấy có kháng thể IgM trong máu. Điều này có thể là dấu hiệu người bệnh bị nhiễm virus viêm gan A gần đây. Kháng thể IgM thường xuất hiện sớm sau khi có các triệu chứng lâm sàng và biến mất sau 3 - 12 tháng.
      <br />
      <br />b. Kháng thể IgG (Anti HAV-IgG):
      <br />Nếu có kháng thể IgG trong máu, người bệnh có thể bị nhiễm virus viêm gan A gần đây hoặc trước đó. Kháng thể IgG sẽ tồn tại lâu dài để bảo vệ cơ thể chống lại virus HAV.
      <br />
      <br />Kết quả của các xét nghiệm này có thể cho biết liệu người được xét nghiệm đã được tiêm vaccine phòng bệnh viêm gan A hay không. Từ đó, bác sĩ có thể đánh giá hiệu quả của vaccine. Người bệnh cũng có thể được bác sĩ yêu cầu kiểm tra nồng độ bilirubin máu và các nồng độ men gan khác để đánh giá mức độ tổn thương gan và quyết định phương pháp điều trị phù hợp.
    `
    )}
    {renderAccessContent(
      6,
      "Phương pháp điều trị bệnh viêm gan A",
      `
      <br />Hiện nay, vẫn chưa có phương pháp điều trị làm giảm viêm gan virus cấp tính, bao gồm cả bệnh viêm gan A. Điều trị bệnh viêm gan A tập trung vào giảm các triệu chứng không thoải mái ở người bệnh do virus HAV gây ra. Cơ thể tự loại bỏ virus, và đa số người bệnh sẽ phục hồi hoàn toàn trong vòng 6 tháng sau khi nhiễm bệnh.
      <br />Nếu bạn nghĩ rằng mình đã tiếp xúc hoặc bị nhiễm virus viêm gan A, hãy đến gặp bác sĩ ngay để cân nhắc tiêm vaccine hoặc globulin miễn dịch viêm gan A. Điều này giúp ngăn ngừa sự phát triển của bệnh, hạn chế biến chứng nguy hiểm, ảnh hưởng sức khỏe người bị lây nhiễm. Lưu ý rằng, tiêm vaccine chỉ hiệu quả trong vòng 2 tuần sau khi người bệnh tiếp xúc với virus HAV.
      <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731743080/r%E1%BB%ADa-tay-s%E1%BA%A1ch-s%E1%BA%BD-ng%C4%83n-ng%E1%BB%ABa-l%C3%A2y-nhi%E1%BB%85m-virus-vi%C3%AAm-gan-a_od6kvm.png" />
            <p style="font-size: 13px">Tránh sử dụng rượu bia hỗ trợ cải thiện tình trạng bệnh viêm gan A</p>
        </div>
      <br />
      <br />Dưới đây là một số lời khuyên có thể hỗ trợ cải thiện tình trạng sức khỏe cho người bị bệnh viêm gan A:
      <br />- Chăm sóc da: Da bị ngứa bất thường, kéo dài là triệu chứng có thể xuất hiện ở người bị nhiễm bệnh viêm gan A. Để giảm thiểu tình trạng này, hãy giữ nhà cửa thoáng đãng, mặc quần áo rộng rãi và hạn chế tắm nước nóng.
      <br />- Cung cấp đủ calo: Có thể bạn cảm thấy chán ăn. Hãy chọn thực phẩm giàu calo để đảm bảo cung cấp đủ dinh dưỡng. Uống nhiều nước ép trái cây hoặc sữa cũng là một cách tốt để duy trì lượng nước cần thiết cho cơ thể.
      <br />- Ăn nhỏ và thường xuyên: Chia nhỏ khẩu phần ăn thành nhiều bữa nhỏ có thể giúp tiêu hóa dễ dàng hơn và giảm cảm giác buồn nôn.
      <br />- Tránh rượu và thuốc: Gan của bạn có thể gặp khó khăn thậm chí bị tổn thương trong quá trình xử lý rượu và thuốc. Vì vậy, hãy tránh uống rượu và thông báo cho bác sĩ về bất kỳ loại thuốc nào bạn đang sử dụng.
      <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731743080/r%E1%BB%ADa-tay-s%E1%BA%A1ch-s%E1%BA%BD-ng%C4%83n-ng%E1%BB%ABa-l%C3%A2y-nhi%E1%BB%85m-virus-vi%C3%AAm-gan-a_od6kvm.png" />
            <p style="font-size: 13px">Rửa tay sạch sẽ ngăn ngừa lây nhiễm virus viêm gan A</p>
        </div>
      <br />
      <br />Ngoài ra, trong sinh hoạt hàng ngày, bạn cũng có thể thực hiện các biện pháp để giảm nguy cơ lây truyền virus viêm gan A cho người khác như:
      <br />- Tránh quan hệ tình dục: Hạn chế các hoạt động tình dục để giảm nguy cơ lây nhiễm virus viêm gan A cho người bạn tình. Sử dụng bao cao su không đảm bảo an toàn tuyệt đối 100% nhưng giúp giảm nguy cơ lây nhiễm.
      <br />- Vệ sinh tay sạch sẽ: Rửa tay đúng cách sau khi đi vệ sinh và trước khi ăn uống không chỉ giúp ngăn ngừa lây nhiễm virus viêm gan A mà còn bảo vệ bạn khỏi nhiều căn bệnh tiềm ẩn khác.
      <br />- Không chuẩn bị thức ăn cho người khác: Virus viêm gan A có thể lây truyền trong quá trình người bị nhiễm chuẩn bị thức ăn cho người khác. Hãy đảm bảo rằng tình trạng viêm nhiễm của bạn đã được chữa khỏi hoàn toàn trước khi thực hiện hành động này.
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

export default Hepatitis;
