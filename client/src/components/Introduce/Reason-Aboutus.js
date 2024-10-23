import React from "react";
import { Row, Col } from "antd";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";

import "bootstrap/dist/css/bootstrap.css";
const Introduce1 = () => {
  return (
    <div>
      <HeaderComponent />

      <div className="container mx-auto py-8">
        <h2 style={{padding: "3em"}}>
          <span className="text-3xl font-bold text-blue-900">
            TẠI SAO CHỌN CHÚNG TÔI
          </span>
          <hr />
        </h2>

        <Row
          gutter={[32, 32]}
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col xs={24} md={12}>
            <img
              src="	https://umcclinic.com.vn/Data/Sites/1/News/118/layer-511-(2).jpg"
              alt="reason-sc-1"
            />
          </Col>
          <Col xs={24} md={12}>
            <div className="reason-sc-1">
              <h3 className="text-2xl font-bold text-blue-900">
                Trang thiết bị hiện đại
              </h3>
              <br />
              <p>
                Với quy mô gồm 30 phòng khám và các phòng chức năng được đầu tư
                thiết bị máy móc hiện đại của các thương hiệu hàng đầu thế giới
                như GE, Fuji, Olympus, Kart Stoz, Phillip, Sysmex...
              </p>
              <br />
              <button className="btn btn-outline-primary">Xem chi tiết</button>
            </div>
          </Col>
        </Row>

        <br/>

        <Row style={{display: "flex", justifyContent: "space-between"}}>
          <Col xs={24} md={12} style={{maxWidth: "600px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <img
              src="https://umcclinic.com.vn/Data/Sites/1/News/119/layer-5111-(2).jpg"
              alt="img-5111"
              style={{width: "70%",}}
            />
            <br />
            <h3 className="text-2xl font-bold text-blue-900">
              Bác sĩ chuyên môn cao
            </h3>
            <br />
            <p>
              Phòng khám Bệnh viện Đại học Y Dược 1 quy tụ đội ngũ chuyên gia,
              bác sĩ, dược sĩ và điều dưỡng có trình độ chuyên môn cao, tay nghề
              giỏi, luôn tận tâm và chu đáo với người bệnh...
            </p>
          </Col>
          <Col xs={24} md={12} style={{maxWidth: "600px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <img
              src="https://umcclinic.com.vn/Data/Sites/1/News/117/layer-6041.jpg"
              alt="img-117"
              style={{width: "70%",}}
            />
            <br />
            <h3 className="text-2xl font-bold text-blue-900">
              Dịch vụ chuẩn quốc tế
            </h3>
            <br />
            <p>
              Phòng khám Bệnh viện Đại học Y Dược 1 được quản lý và vận hành
              theo tiêu chuẩn quốc tế, cơ sở vật chất hiện đại, tiện nghi, không
              gian khám chữa bệnh rộng rãi, sạch sẽ...
            </p>
          </Col>
        </Row>
      </div>

      <FooterComponent />
    </div>
  );
};

export default Introduce1;
