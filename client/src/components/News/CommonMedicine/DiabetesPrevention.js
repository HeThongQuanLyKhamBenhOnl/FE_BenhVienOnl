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

const DiabetesPrevention = () => {
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
      BIẾN CHỨNG CỦA BỆNH TIỂU ĐƯỜNG VÀ CÁCH PHÒNG NGỪA
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
      "BIẾN CHỨNG CỦA BỆNH TIỂU ĐƯỜNG VÀ CÁCH PHÒNG NGỪA",
      `
        Người bệnh tiểu đường (hay còn gọi là đái tháo đường) nếu không thể kiểm soát tốt mức đường huyết có thể xảy ra nhiều biến chứng nguy hiểm như tổn thương võng mạc, suy tim, suy thận, cắt bỏ bàn chân, nhiễm toan ceton …
    `
    )}
    {renderAccessContent(
      2,
      "Các biến chứng nguy hiểm của bệnh đái tháo đường",
      `
      <br />Khi mức đường huyết tăng cao trong thời gian dài không được quản lý và kiểm soát tốt sẽ dẫn đến biến chứng tiểu đường nguy hiểm, gây tổn thương các mạch máu. Khi hệ thống mạch máu nhỏ và mạch máu lớn bị tổn thương sẽ ảnh hưởng chức năng của mắt, thận, thần kinh, tim … 
      <br />Biến chứng của bệnh tiểu đường được chia thành hai nhóm bao gồm biến chứng mạch máu lớn và biến chứng mạch máu nhỏ.
      <br />Dưới đây là một số biến chứng mạch máu nhỏ có thể xảy ra ở người bệnh tiểu đường như:
      <br />
      <br /><b><i>a. Bệnh võng mạc tiểu đường</i></b>
      <br />Bệnh võng mạc tiểu đường là nguyên nhân thường gặp gây mù lòa ở người mắc bệnh tiểu đường. Bệnh xảy ra khi mạch máu nhỏ bị tổn thương, phình mao mạch võng mạc dẫn đến tình trạng tăng sinh mạch máu và phù hoàng điểm.
      <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742114/bi%E1%BA%BFn-ch%E1%BB%A9ng-c%E1%BB%A7a-b%E1%BB%87nh-ti%E1%BB%83u-%C4%91%C6%B0%E1%BB%9Dng-c%C3%B3-th%E1%BB%83-%E1%BA%A3nh-h%C6%B0%E1%BB%9Fng-%C4%91%E1%BA%BFn-th%E1%BB%8B-l%E1%BB%B1c-c%E1%BB%A7a-ng%C6%B0%E1%BB%9Di-b%E1%BB%87nh_bmnng5.png" />
            <p style="font-size: 13px">Biến chứng của bệnh tiểu đường có thể ảnh hưởng đến thị lực của người bệnh</p>
        </div>
      <br />
      <br />Bệnh võng mạc tiểu đường thường không biểu hiện các triệu chứng ở giai đoạn sớm. Đến khi bệnh tiến triển nặng có thể các triệu chứng rõ ràng như:
      <br />- Nhìn mờ, mất thị lực toàn bộ hoặc một phần.
      <br />- Bong thủy tinh thể (hay đục thủy tinh thể), bong võng mạc.
      <br />Để phòng ngừa xảy ra biến chứng bệnh võng mạc tiểu đường, người bệnh tiểu đường nên thường xuyên kiểm tra võng mạc hàng năm để phát hiện sớm và tiên lượng điều trị tốt, phòng tránh nguy cơ mất thị lực.
      <br />
      <br /><b><i>b. Bệnh thận tiểu đường</i></b>
      <br />Bệnh thận tiểu đường là nguyên nhân chính dẫn đến suy thận mạn tính ở người bệnh tiểu đường. Bệnh xảy ra khi màng đáy của cầu thận dày lên khiến cầu thận xơ cứng và tăng sinh gian mạch. 
      <br />Các thay đổi này gây suy giảm mức lọc cầu thận và tăng áp lực ở cầu thận. Đặc biệt, bệnh thận khi đi kèm tình trạng tăng huyết áp có thể đẩy nhanh diễn tiến bệnh. Vì thế, bệnh thường không có triệu chứng cho đến khi suy thận mạn tính hoặc hội chứng thận hư xảy ra.
      <br />
      <br /><b><i>c. Bệnh thần kinh tiểu đường </i></b>
      <br />Bệnh thần kinh tiểu đường là hậu quả của tình trạng thiếu máu thần kinh do ảnh hưởng của <br />bệnh vi mạch, sự tác động trực tiếp của đường huyết lên tế bào thần kinh và những thay đổi trong quá trình trao đổi chất nội bào làm giảm chức năng thần kinh.
      <br />Bệnh thần kinh tiểu đường được chia ra nhiều dạng bệnh như:
      <br />- Bệnh thần kinh ngoại biên: Đây là căn bệnh thần kinh phổ biến ở người bệnh tiểu đường, ảnh hưởng dây thần kinh cẳng chân và bàn chân gây ra các triệu chứng như mất cảm giác, tê, ngứa bàn chân ... Một số trường hợp người bệnh có thể bị ảnh hưởng ở cẳng tay và bàn tay.
      <br />- Bệnh đơn dây thần kinh: Đây là tình trạng tổn thương ở các dây thần kinh đơn lẻ thường gặp ở thân mình, chân, tay, đầu. Các tổn thương này có thể chèn ép lên dây thần kinh gây ra hội chứng ống cổ tay khiến người bệnh bị tê, đau và teo cơ bàn tay …
      <br />- Bệnh đám rối - rễ thần kinh: Đây là tình trạng dây thần kinh bị tổn thương dẫn đến tình trạng teo cơ. Bệnh đa dây thần kinh có thể gây ra các triệu chứng sụt cân, đau một bên đùi và yếu vận động.
      <br />
      <br /><b><i>d. Biến chứng mạch máu lớn</i></b>
      <br />Khi biến chứng mạch máu lớn có liên quan đến tình trạng xơ vữa động mạch của các mạch lớn có thể gây ra các tình trạng:
      <br />- Nhũn não, đột quỵ do xuất huyết não, đôi khi có thể xảy ra tình trạng thiếu máu não thoáng qua.
      <br />- Bệnh cơ tim thiếu máu cục bộ, nhồi máu cơ tim, cơn đau thắt ngực.
      <br />- Hoại tử chi, tắc mạch chi đặc biệt xảy ra ở người bệnh có thói quen hút nhiều thuốc lá. Hoại tử chi là tình trạng thường gặp ở các ngón chân, ngón chân người bệnh có thể bị thâm đen nếu không được điều trị kịp thời, người bệnh có thể bị mất ngón chân. 
      <br />- Loét chân, rối loạn cương. 
      <br />- Một số biến chứng khác có thể xảy ra nhưng với tần suất cực kỳ hiếm gặp như tắc mạch mạc treo và phình động mạch chủ bụng.
      <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742139/bi%E1%BA%BFn-ch%E1%BB%A9ng-ti%E1%BB%83u-%C4%91%C6%B0%E1%BB%9Dng-c%C3%B3-th%E1%BB%83-g%C3%A2y-b%E1%BB%87nh-c%C6%A1-tim-thi%E1%BA%BFu-m%C3%A1u-c%E1%BB%A5c-b%E1%BB%99-nguy-hi%E1%BB%83m_i0a49n.png" />
            <p style="font-size: 13px">Biến chứng tiểu đường có thể gây bệnh cơ tim thiếu máu cục bộ nguy hiểm</p>
        </div>
      <br />
      <br /><b><i>e. Các biến chứng tiểu đường khác</i></b>
      <br />- Nhiễm toan ceton.
      <br />- Biến chứng bàn chân tiểu đường (nhiễm trùng, hoại tử, loét ở vùng bàn chân)
      <br />- Các bệnh lý nhãn khoa không do ảnh hưởng của bệnh võng mạc tiểu đường (trầy xước giác mạc, đục thủy tinh thể, bệnh thần kinh thị giác và tăng nhãn áp).
      <br />- Bệnh gan mật (sỏi mật, bệnh gan nhiễm mỡ không do rượu, xơ gan).
      <br />- Bệnh da liễu (loét chi dưới, nhiễm trùng nấm da, u hạt hoại tử, bệnh da do tiểu đường, bệnh bạch biến …).
      <br />- Sa sút trí tuệ, trầm cảm.
    `
    )}
    {renderAccessContent(
      3,
      "Cách phòng ngừa biến chứng nguy hiểm của bệnh đái tháo đường",
      `
        <br />Việc kiểm soát mức đường huyết đóng vai trò rất quan trọng trong việc ngăn ngừa các biến chứng nguy hiểm có thể xảy ra do căn bệnh tiểu đường. Dưới đây là một số cách đơn giản có thể giúp bạn kiểm soát tốt đường huyết như: 
        <br />- Chủ động tìm hiểu, nắm rõ kiến thức về căn bệnh tiểu đường cũng như cách kiểm soát bệnh tốt. Người bệnh nên đến thăm khám tại các phòng khám, bệnh viện để tham khảo kiến thức y khoa từ nguồn thông tin đáng tin cậy về bệnh tiểu đường.
        <br />- Mỗi ngày bạn nên duy trì vận động thể chất và thói quen ăn uống lành mạnh, khoa học,
        <br />- Người bệnh tiểu đường nên chủ động theo dõi và thường xuyên kiểm soát mức đường huyết ổn định, tuân thủ hướng dẫn dùng thuốc của bác sĩ cũng như lịch hẹn tái khám định kỳ.
        <br />- Tùy theo tình trạng bệnh, bác sĩ có thể tư vấn người bệnh thực hiện các bài kiểm tra chức năng thận, kiểm tra mắt, tổn thương thần kinh, kiểm tra bàn chân, bệnh tim để tầm soát và điều trị sớm biến chứng nguy hiểm (nếu có).
        <br />- Người bệnh tiểu đường không nên hút thuốc lá, không uống rượu, hạn chế tăng nguy cơ mắc nhiều biến chứng nguy hiểm. 
        <br />- Người bệnh tiểu đường nên hạn chế ăn chất béo chuyển hóa, chất béo bão hòa từ động vật (da gà, bơ sữa, mỡ heo, da heo …), đồ ăn mặn để tránh làm tăng lượng cholesterol trong máu gây biến chứng nguy hiểm về đột quỵ, tim mạch …
        <br />- Người bệnh cần đặc biệt lưu ý rửa chân hàng ngày trong nước ấm, dưỡng ẩm cho bàn chân và mắt cá chân, không ngâm chân quá lâu, mang tất chân mềm thoải mái, đi giày mềm, không đi chân đất, cắt móng chân và mài nhẵn để ngăn ngừa các vấn đề về chân.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742179/th%C6%B0%E1%BB%9Dng-xuy%C3%AAn-theo-d%C3%B5i-m%E1%BB%A9c-%C4%91%C6%B0%E1%BB%9Dng-huy%E1%BA%BFt-%C4%91%E1%BB%83-h%E1%BA%A1n-ch%E1%BA%BF-bi%E1%BA%BFn-ch%E1%BB%A9ng-c%E1%BB%A7a-b%E1%BB%87nh-ti%E1%BB%83u-%C4%91%C6%B0%E1%BB%9Dng_f8qb4q.png" />
            <p style="font-size: 13px">Thường xuyên theo dõi mức đường huyết để hạn chế biến chứng của bệnh tiểu đường</p>
        </div>
        <br />
        <br />Phần lớn các trường hợp xảy ra biến chứng tiểu đường do mức đường trong máu tăng cao không được kiểm soát tốt. Vì thế, người bệnh nên tìm hiểu rõ về bệnh, chế độ dinh dưỡng phù hợp, cách kiểm soát bệnh và tuân thủ dùng thuốc theo chỉ định của bác sĩ.
        <br />Đồng thời, người bệnh nên giữ tinh thần lạc quan, tránh tình trạng lo lắng quá mức, chán nản không tiếp tục điều trị bệnh, có thể gây ra nhiều biến chứng nghiêm trọng của bệnh tiểu đường.
    `
    )}
    {renderAccessContent(
      4,
      "Triệu chứng thường gặp của bệnh xơ gan",
      `
      <br />Tùy theo giai đoạn bệnh, triệu chứng của bệnh xơ gan có thể khác nhau. Ở giai đoạn đầu của bệnh xơ gan, người bệnh có thể không biểu hiện triệu chứng nào hoặc nếu có thì các triệu chứng rất mơ hồ, dễ nhầm lẫn với bệnh lý khác.
      <br />
      <br />Một số dấu hiệu ban đầu của bệnh xơ gan như:
      <br />- Cơ thể thiếu năng lượng, mệt mỏi, có thể sốt nhẹ.
      <br />- Người bệnh ăn không ngon, chán ăn, buồn nôn, giảm cân không chủ ý.
      <br />
      <br />Khi bệnh diễn tiến sẽ dẫn đến các triệu chứng nghiêm trọng hơn như:
      <br />
      <br />- Vàng mắt, vàng da, sạm da và ngứa da.
      <br />- Người bệnh dễ bị bầm tím và chảy máu, lòng bàn tay đỏ rực lên.
      <br />- Phân có thể có màu nhạt, nước tiểu sẫm màu, đi ngoài ra máu hoặc ói ra máu.
      <br />- Trên da người bệnh xuất hiện nhiều nốt giãn mạch màu đỏ (hay còn gọi là nốt mao mạch).
      <br />- Người bệnh bị sưng (phù) ở bàn chân, cẳng chân và mắt cá chân.
      <br />- Người bệnh bị cổ trướng (báng bụng) là tình trạng dịch tích tụ trong ổ bụng.
      <br />- Người bệnh bị giảm trí nhớ, lú lẫn và có thể thay đổi tính cách.
      <br />- Người bệnh giảm ham muốn tình dục thông qua các biểu hiện mãn kinh sớm ở phụ nữ và tinh hoàn teo lại, tuyến vú phát triển ở nam giới bất thường.
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
            <img alt="img" style="width: 500px" src="https://res.cloudinary.com/db4ji9y1x/image/upload/v1731742200/ti%C3%AAm-ng%E1%BB%ABa-vaccine-ph%C3%B2ng-b%E1%BB%87nh-vi%C3%AAm-gan-%C4%91%E1%BB%83-h%E1%BA%A1n-ch%E1%BA%BF-nguy-c%C6%A1-m%E1%BA%AFc-b%E1%BB%87nh-x%C6%A1-gan_uy6x1x.png" />
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

export default DiabetesPrevention;
