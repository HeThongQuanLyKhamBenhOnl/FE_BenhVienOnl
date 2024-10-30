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

const MRI = () => {
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
      KHI NÀO CẦN CHỤP CỘNG HƯỞNG TỪ (MRI) MẠCH MÁU NÃO?
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
      "KHI NÀO CẦN CHỤP CỘNG HƯỞNG TỪ (MRI) MẠCH MÁU NÃO?",
      `
        Chụp cộng hưởng từ (MRI) mạch máu não giúp tạo ra hình ảnh 3 chiều của mạch máu não với độ phóng đại lớn giúp bác sĩ xác định tình trạng bất thường bên trong mạch máu não.
    `
    )}
    {renderAccessContent(
      2,
      "Chụp cộng hưởng từ (MRI) mạch máu não có nguy hiểm không?",
      `
      <br />Chụp cộng hưởng từ mạch máu não (chụp MRA - Magnetic Resonance Angiography) là dạng chụp đặc biệt của kỹ thuật chẩn đoán hình ảnh chụp cộng hưởng từ (MRI). 
      <br />Chụp cộng hưởng từ (MRI) mạch máu não sử dụng hệ thống máy vi tính và từ trường để tạo ra hình ảnh 3 chiều của mạch máu não ở mức độ phóng đại lớn. Thông qua hình ảnh chụp được, bác sĩ có thể quan sát rõ hình ảnh cấu trúc của mạch máu não để đánh giá tình trạng mạch máu não.
      <br />Đồng thời, bác sĩ có thể phát hiện được các vấn đề bất thường về sự lưu thông máu trong mạch máu não và những tổn thương bên trong thông qua hình ảnh chụp MRI mạch máu não mà các kỹ thuật chẩn đoán hình ảnh khác không thể đem lại hình ảnh chi tiết.
      <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://umcclinic.com.vn/Data/Sites/1/media/y-hoc-thuong-thuc/d%E1%BB%8Bch-v%E1%BB%A5-c%E1%BA%ADn-l%C3%A2m-s%C3%A0ng/ch%E1%BB%A5p-mri/mri-n%C3%A3o/-khi-n%C3%A0o-c%E1%BA%A7n-ch%E1%BB%A5p-c%E1%BB%99ng-h%C6%B0%E1%BB%9Fng-t%E1%BB%AB-(mri)-m%E1%BA%A1ch-n%C3%A1u-n%C3%A3o/ch%E1%BB%A5p-c%E1%BB%99ng-h%C6%B0%E1%BB%9Fng-t%E1%BB%AB-(mri)-m%E1%BA%A1ch-m%C3%A1u-n%C3%A3o-c%C3%B3-%C4%91%E1%BB%99-an-to%C3%A0n-cao-v%C3%A0-kh%C3%B4ng-x%C3%A2m-l%E1%BA%A5n.png" />
            <p style="font-size: 13px">Chụp cộng hưởng từ (MRI) mạch máu não có độ an toàn cao và không xâm lấn</p>
        </div>
      <br />
      <br />Chụp cộng hưởng từ (MRI) mạch máu não là kỹ thuật chẩn đoán hình ảnh có độ an toàn cao, không gây đau, không xâm lấn. Đây là phương pháp chẩn đoán hiệu quả hàng đầu giúp tầm soát các bệnh lý về mạch máu não, thần kinh sọ não.
    `
    )}
    {renderAccessContent(
      3,
      "Khi nào cần chụp cộng hưởng từ (MRI) mạch máu não?",
      `
        <br />Bên cạnh ứng dụng rộng rãi trong thăm khám, chẩn đoán và điều trị bệnh lý về thần kinh sọ não, mạch máu não, chụp MRI mạch máu não còn được sử dụng phổ biến để theo dõi và điều trị bệnh như bệnh cảnh đột quỵ, hẹp động mạch cảnh 
        <br />
        <br />Dưới đây là một số trường hợp chỉ định và chống chỉ định chụp cộng hưởng từ (MRI) mạch máu não:
        <br />
        <br />a. Các trường hợp chỉ định chụp MRI mạch máu não
        <br />Bác sĩ có thể chỉ định chụp MRI mạch máu não với người thường xuyên đau đầu, đặc biệt khi người bệnh bị đau đầu với chu kỳ lặp lại và cường độ gia tăng hay đi kèm các triệu chứng như chóng mặt, hoa mắt, buồn nôn, nôn, tê yếu các chi …
        <br />
        <br />Thông qua hình ảnh chụp MRI mạch máu não, bác sĩ có thể phát hiện vấn đề bất thường ở mạch máu não cũng như có thể đánh giá quá trình tuần hoàn máu não. 
        <br />
        <br />Từ đó, bác sĩ có thể đưa ra chẩn đoán chính xác về các bệnh lý thiếu máu não, đột quỵ, u não, dị dạng mạch máu não … và chỉ định điều trị phù hợp cho người bệnh.
        <br />
        <br />b. Các trường hợp chống chỉ định chụp MRI mạch máu não
        <br />Tuy kỹ thuật chụp cộng hưởng từ mạch máu não khá an toàn và có thể áp dụng cho nhiều nhóm đối tượng nhưng vẫn có một số trường hợp chống chỉ định chụp MRI mạch máu não do nhiễu ảnh của kim loại như:
        <br />- Người bệnh có dị vật bằng kim loại ở vị trí bản xương sọ, mô mềm, nhu mô não.
        <br />- Người bệnh đặt máy tạo nhịp tim cần thăm khám bác sĩ chuyên khoa Nhịp tim học trước khi thực hiện chụp cộng hưởng từ (MRI) mạch máu não.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://umcclinic.com.vn/Data/Sites/1/media/y-hoc-thuong-thuc/d%E1%BB%8Bch-v%E1%BB%A5-c%E1%BA%ADn-l%C3%A2m-s%C3%A0ng/ch%E1%BB%A5p-mri/mri-n%C3%A3o/-khi-n%C3%A0o-c%E1%BA%A7n-ch%E1%BB%A5p-c%E1%BB%99ng-h%C6%B0%E1%BB%9Fng-t%E1%BB%AB-(mri)-m%E1%BA%A1ch-n%C3%A1u-n%C3%A3o/ng%C6%B0%E1%BB%9Di-b%E1%BB%87nh-c%E1%BA%A7n-th%C3%B4ng-tin-%C4%91%E1%BA%A7y-%C4%91%E1%BB%A7-%C4%91%E1%BA%BFn-b%C3%A1c-s%C4%A9-tr%C6%B0%E1%BB%9Bc-khi-ch%E1%BB%A5p-mri-m%E1%BA%A1ch-m%C3%A1u-n%C3%A3o.png" />
            <p style="font-size: 13px">Người bệnh cần thông tin đầy đủ đến bác sĩ trước khi chụp MRI mạch máu não</p>
        </div>
        <br />
        <br />Đặc biệt, nếu bạn thuộc một trong các trường hợp dưới đây cần thông báo đến bác sĩ đầy đủ, kịp thời để được chỉ định phù hợp như:
        <br />- Người có tiền sử vừa thực hiện phẫu thuật.
        <br />- Người đang mắc bệnh.
        <br />- Người bị dị ứng/ sốc phản vệ với bất kỳ loại thuốc hay thực phẩm nào.
        <br />- Người có hội chứng sợ không gian kín. 
        <br />- Phụ nữ mang thai trong 3 tháng đầu của thai kỳ …
    `
    )}
    {renderAccessContent(
      4,
      "Quy trình chụp cộng hưởng từ (MRI) mạch máu não",
      `
      <br />Chụp MRI mạch máu não cần được thực hiện nghiêm ngặt, đầy đủ và an toàn bởi bác sĩ chuyên môn tại các cơ sở y tế uy tín. Đây là điều vô cùng quan trọng giúp bảo vệ người bệnh an toàn, không xảy ra sự cố ngoài ý muốn và đảm bảo chất lượng hình ảnh chụp MRI tối ưu.
      <br />
      <br />Dưới đây là quy trình chụp cộng hưởng từ (MRI) mạch máu não có thể được bác sĩ áp dụng tiến hành cho người bệnh như:
      <br />
      <br />a. Trước khi tiến hành chụp MRI mạch máu não
      <br />Người bệnh cần thông tin cho bác sĩ biết đầy đủ về tiền sử bệnh lý, tình trạng sức khỏe, đặc biệt ở các trường hợp chống chỉ định chụp MRI mạch máu não. Đồng thời, người bệnh trước khi chụp cộng hưởng từ mạch máu não cần kiểm tra kỹ và tạm thời tháo khỏi cơ thể món phụ kiện, trang sức, thiết bị điện tử, dụng cụ lưu trữ … 
      <br />
      <br />Ngoài ra, người bệnh có thể được bác sĩ yêu cầu thay áo hoặc trang phục chuyên dụng khi chụp MRI theo yêu cầu của cơ sở y tế.
      <br />
      <br />b. Tiến hành chụp MRI mạch máu não
      <br />Phần lớn người bệnh có thể không cần tiêm thuốc tương phản nhưng ở một số người bệnh cần tiêm thuốc tùy theo bệnh cảnh lâm sàng. Sau đó, kỹ thuật viên sẽ hướng dẫn người bệnh tư thế nằm và có thể đặt nút bịt tai, dùng tai nghe hay thắt dây đai cố định …
      <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://umcclinic.com.vn/Data/Sites/1/media/y-hoc-thuong-thuc/d%E1%BB%8Bch-v%E1%BB%A5-c%E1%BA%ADn-l%C3%A2m-s%C3%A0ng/ch%E1%BB%A5p-mri/mri-n%C3%A3o/-khi-n%C3%A0o-c%E1%BA%A7n-ch%E1%BB%A5p-c%E1%BB%99ng-h%C6%B0%E1%BB%9Fng-t%E1%BB%AB-(mri)-m%E1%BA%A1ch-n%C3%A1u-n%C3%A3o/ng%C6%B0%E1%BB%9Di-b%E1%BB%87nh-c%C3%B3-th%E1%BB%83-%C4%91eo-tai-nghe-chuy%C3%AAn-d%E1%BB%A5ng-khi-ch%E1%BB%A5p-mri-m%E1%BA%A1ch-m%C3%A1u-n%C3%A3o.png" />
            <p style="font-size: 13px">Người bệnh có thể đeo tai nghe chuyên dụng khi chụp MRI mạch máu não</p>
        </div>
      <br />
      <br />Điều này giúp đảm bảo cho máy chụp cộng hưởng từ chụp được hình ảnh hỗ trợ chẩn đoán theo đúng chỉ định của bác sĩ và giúp người bệnh có tư thế thoải mái hơn.
      <br />c. Sau khi chụp MRI mạch máu não
      <br />Phần lớn người bệnh sau khi chụp MRI mạch máu não đều không bị ảnh hưởng hay gặp phải phản ứng phụ nào. Vì thế, người bệnh có thể không cần kiêng cử trong sinh hoạt, ăn uống hay phải tạm dừng vận động thể chất
      <br />Sau khi chụp cộng hưởng từ (MRI) mạch máu não, bác sĩ cần thời gian để phân tích hình ảnh kết quả chụp được từ bản quét MRI. Sau đó, kết quả sẽ được gửi đến bác sĩ điều trị trực tiếp để hỗ trợ chẩn đoán và chỉ định phác đồ điều trị tối ưu và hiệu quả.
      <br />Phòng khám Bệnh viện được trang bị thiết bị máy móc hiện đại đến từ các thương hiệu hàng đầu thế giới, đặc biệt với Máy chụp cộng hưởng từ MRI 1.5 (GE) giúp quy trình chụp MRI an toàn, nhanh chóng và cho ra kết quả chính xác. Đồng thời, Phòng khám Bệnh viện cung cấp dịch vụ thăm khám và điều trị chuyên nghiệp đáp ứng nhu cầu khám chữa bệnh đa dạng với mức chi phí hợp lý.
      <br />Liên hệ với tổng đài 1900 6923 để được hỗ trợ đặt lịch khám nhanh chóng, tiết kiệm thời gian chờ.
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

export default MRI;
