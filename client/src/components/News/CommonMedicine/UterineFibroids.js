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

const UterineFibroids = () => {
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
      U XƠ TỬ CUNG CÓ BIẾN CHỨNG THÀNH UNG THƯ KHÔNG?
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
      "U XƠ TỬ CUNG CÓ BIẾN CHỨNG THÀNH UNG THƯ KHÔNG?",
      `
        U xơ tử cung thường gặp ở nữ giới trong độ tuổi sinh sản, ít phát triển thành ung thư nhưng có thể gây biến chứng nguy hiểm nếu không điều trị kịp thời.
    `
    )}
    {renderAccessContent(
      2,
      "U xơ tử cung là gì?",
      `
      <br />U xơ tử cung (hay nhân xơ tử cung) là bệnh lý phụ khoa lành tính ở tử cung. Được cấu tạo từ mô liên kết dạng sợi và tế bào cơ trơn, các khối u phát triển trong tử cung, được gọi là u xơ. 
      <br />Theo các chuyên gia y tế, khoảng 70-80% phụ nữ có thể phát triển các khối u xơ tử cung ở khoảng thời gian nào đó trong đời. Tuy nhiên, bệnh u xơ tử cung không phải lúc nào cũng gây ra các triệu chứng và cần phải điều trị. 
      <br />Sau khi chẩn đoán bệnh u xơ tử cung, bác sĩ thường quan tâm kích thước, vị trí, số lượng khối u có trên tử cung, đồng thời theo dõi các triệu chứng của bệnh. Tùy vào từng tình trạng của bệnh u xơ tử cung gây ra, người bệnh có thể có các triệu chứng khác nhau. 
      <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://umcclinic.com.vn/Data/Sites/1/media/y-hoc-thuong-thuc/khoa-s%E1%BA%A3n-ph%E1%BB%A5-khoa/u-x%C6%A1-t%E1%BB%AD-cung/u-x%C6%A1-t%E1%BB%AD-cung-c%C3%B3-bi%E1%BA%BFn-ch%E1%BB%A9ng-th%C3%A0nh-ung-th%C6%B0-kh%C3%B4ng/u-x%C6%A1-t%E1%BB%AD-cung-l%C3%A0-b%E1%BB%87nh-g%C3%AC.png" />
            <p style="font-size: 13px">U xơ tử cung là bệnh gì?</p>
        </div>
      <br />
      <br />- Kích thước khối u có thể tăng lên theo thời gian nhưng với tốc độ rất chậm. Đặc biệt, khi người phụ nữ bước vào thời kỳ mãn kinh, khối u có thể theo xu hướng nhỏ dần đi. Tuy nhiên, nếu phát hiện khối u to lên nhanh chóng, một cách bất thường. Đây có thể là dấu hiệu của bệnh lý ác tính.
    `
    )}
    {renderAccessContent(
      3,
      "U xơ tử cung có gây nguy hiểm cho chị em phụ nữ không?",
      `
        <br />- Tuy u xơ tử cung là bệnh lý phụ khoa lành tính nhưng bệnh cũng có thể gây ảnh hưởng nghiêm trọng đến sức khỏe của chị em phụ nữ. Chị em có thể bị thiếu máu nếu tình trạng chảy máu ở cổ tử cung kéo dài, rất nguy hiểm. 
        <br />- Một biến chứng nguy hiểm khác nhưng hiếm xảy ra hơn là bàng quang và niệu quản có thể bị đè lên bởi các khối u xơ lớn. Áp lực này có thể gây tổn thương thận. Ngoài ra, các biến chứng khác cũng có thể xảy ra như sảy thai nhiều lần hay thậm chí vô sinh.
    `
    )}
    {renderAccessContent(
      4,
      "U xơ tử cung có biến chứng thành ung thư hay không? ",
      `
        <br />Ở tất cả trường hợp mắc bệnh u xơ tử cung, người bệnh nên thực hiện tầm soát siêu âm bởi bác sĩ để theo dõi sự tiến triển của khối u. Các khối u xơ tử cung vẫn có thể phát triển, tăng số lượng và kích thước. Nếu các khối u to ra sẽ gây ảnh hưởng nghiêm trọng và đe dọa trực tiếp tính mạng người bệnh. 
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://umcclinic.com.vn/Data/Sites/1/media/y-hoc-thuong-thuc/khoa-s%E1%BA%A3n-ph%E1%BB%A5-khoa/u-x%C6%A1-t%E1%BB%AD-cung/u-x%C6%A1-t%E1%BB%AD-cung-c%C3%B3-bi%E1%BA%BFn-ch%E1%BB%A9ng-th%C3%A0nh-ung-th%C6%B0-kh%C3%B4ng/u-x%C6%A1-t%E1%BB%AD-cung-c%C3%B3-bi%E1%BA%BFn-ch%E1%BB%A9ng-th%C3%A0nh-ung-th%C6%B0-kh%C3%B4ng.png" />
            <p style="font-size: 13px">U xơ tử cung có biến chứng thành ung thư không?</p>
        </div>
    `
    )}
    {renderAccessContent(
      5,
      "Khi nào chị em phụ nữ nên điều trị u xơ tử cung bằng phẫu thuật? ",
      `
        <br />Khi mắc bệnh u xơ tử cung, người bệnh không nên tự ý điều trị, mua thuốc sử dụng khi chưa có chẩn đoán và chỉ định điều trị của bác sĩ chuyên khoa. Dựa trên từng tình trạng phát triển của các khối u, bác sĩ sẽ áp dụng phác đồ điều trị phù hợp cho từng bệnh nhân. 
        <br />Nếu khối u nhỏ, tình trạng bệnh nhẹ và được phát hiện sớm, người bệnh có thể được bác sĩ kê thuốc uống để khống chế khối u, giúp thu nhỏ chúng, tránh biến chứng nguy hiểm.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px" src="https://umcclinic.com.vn/Data/Sites/1/media/y-hoc-thuong-thuc/khoa-s%E1%BA%A3n-ph%E1%BB%A5-khoa/u-x%C6%A1-t%E1%BB%AD-cung/u-x%C6%A1-t%E1%BB%AD-cung-c%C3%B3-bi%E1%BA%BFn-ch%E1%BB%A9ng-th%C3%A0nh-ung-th%C6%B0-kh%C3%B4ng/u-x%C6%A1-t%E1%BB%AD-cung-c%C3%B3-th%E1%BB%83-khi%E1%BA%BFn-ph%E1%BB%A5-n%E1%BB%AF-kh%C3%B3-mang-thai.png" />
            <p style="font-size: 13px">U xơ tử cung có thể khiến phụ nữ khó mang thai</p>
        </div>
        <br />Tuy nhiên, ở một số trường hợp, các khối u xơ lớn sẽ được bác sĩ chỉ định phải phẫu thuật để cắt bỏ do các nguyên nhân sau:
        <br />- Các khối u xơ tử cung có thể khiến phụ nữ khó mang thai, dễ bị sảy thai do sự chèn ép. Đồng thời, các khối u có thể chèn ép khiến thai nhi có nguy cơ bị dị dạng khuyết tật.
        <br />- Các khối u xơ có thể ảnh hưởng niêm mạc dễ bị tổn thương. Thậm chí gây triệu chứng băng huyết, rong kinh và đau bụng nhiều. Nguyên nhân do các khối u xơ tử cung bị xoắn lại.
        <br />- Khi các khối u xơ tử cung lớn dần có thể gây tác động hay chèn ép đến đại tràng, bàng quang …
    `
    )}
    {renderAccessContent(
      6,
      "Điều trị u xơ tử cung như thế nào?",
      `
        <br />Tùy thuộc vào vị trí, số lượng và kích thước của các khối u xơ tử cung, phương pháp điều trị bệnh cũng có thể khác nhau. Đồng thời, các triệu chứng của bệnh u xơ cổ tử cung cũng có thể khác nhau ở mỗi người. Khi không gặp bất kỳ triệu chứng nào, người bệnh chỉ cần theo dõi khối u mà có thể không cần điều trị. 
        <br />Ở người mắc bệnh u xơ tử cung khi bước vào thời kỳ mãn kinh, thông thường, khối u có thể không gây triệu chứng do sau khi mãn kinh, khối u sẽ nhỏ dần đi. Từ đó, người bệnh có thể không cần điều trị.
        <br />Sự phát triển của khối u cần được theo dõi chặt chẽ theo thời gian trong khi tiến hành điều trị bệnh. Đồng thời, siêu âm định kỳ và khám phụ khoa có thể được bác sĩ đề nghị tùy thuộc vào triệu chứng và kích thước của các khối u xơ. 
        <br />
        <br />Một số yếu tố có thể tác động đến kế hoạch điều trị của bạn như:
        <br />- Số lượng khối u ở cổ tử cung của bạn
        <br />- Kích thước của nhân xơ trong tử cung
        <br />- Vị trí của các khối u xơ trong tử cung
        <br />- Triệu chứng liên quan đến khối u xơ tử cung
        <br />- Mong muốn về kế hoạch mang thai trong tương lai của bạn
        <br />- Mong muốn bảo tồn tử cung của bạn
        <br />
        <br />Các chỉ định điều trị của bác sĩ sẽ phụ thuộc vào nhiều yếu tố khác nhau, tuy nhiên, các phương pháp điều trị bệnh u xơ tử cung phổ biến hiện nay như điều trị nội khoa, điều trị bằng phẫu thuật, điều trị bằng phương pháp dùng hormone, ít xâm lấn.
        <br />
        <div style="display: flex;
                    justify-content: center;
                    width: 100%;
                    align-items: center;
                    flex-direction: column;">
            <img alt="img" style="width: 500px"src="https://umcclinic.com.vn/Data/Sites/1/media/y-hoc-thuong-thuc/khoa-s%E1%BA%A3n-ph%E1%BB%A5-khoa/u-x%C6%A1-t%E1%BB%AD-cung/u-x%C6%A1-t%E1%BB%AD-cung-c%C3%B3-bi%E1%BA%BFn-ch%E1%BB%A9ng-th%C3%A0nh-ung-th%C6%B0-kh%C3%B4ng/u-x%C6%A1-t%E1%BB%AD-cung-c%C3%B3-th%E1%BB%83-khi%E1%BA%BFn-ph%E1%BB%A5-n%E1%BB%AF-kh%C3%B3-mang-thai.png" />
            <p style="font-size: 13px">Phương pháp điều trị u xơ tử cung</p>
        </div>
        <br />- Đối với người mắc khối u cơ trơn ở tử cung, khi người bệnh có các triệu chứng, bác sĩ có thể chỉ định điều trị bằng phẫu thuật bóc tách khối u hoặc điều trị bằng thuốc, cắt bán tử cung hay cắt tử cung. 
        <br />- Ở phương pháp điều trị bằng thuốc được xem là tạm thời, bệnh nhân phải sử dụng thuốc thường xuyên theo chỉ định của bác sĩ trong một thời gian (hay thường xuyên dùng hormone).
        <br />- Ở phương pháp điều trị bằng phẫu thuật, đây được xem là phương pháp điều trị triệt để khối u. Tuy nhiên, bệnh nhân có thể phải gây mê và mất tử cung sau khi trải qua phẫu thuật (trong trường hợp bác sĩ chỉ định phải cắt tử cung). 
        <br />- Nguy cơ tái phát bệnh vẫn còn ở bệnh nhân thực hiện bóc tách u do vẫn còn cơ tử cung. Sau khi phẫu thuật u xơ tử cung, cơ hội phụ nữ tiếp tục mang thai là rất thấp, trừ các trường hợp bóc tách khối u nhưng vẫn giữ được tử cung.
        <br />- Cơ hội phụ nữ mang thai cũng có thể giảm nếu khi mổ buồng tử cung bị biến dạng, hay trong trường hợp, toàn bộ tử cung đã bị cắt thì chất lượng cuộc sống của người phụ nữ có thể bị ảnh hưởng ít nhiều.
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

export default UterineFibroids;
