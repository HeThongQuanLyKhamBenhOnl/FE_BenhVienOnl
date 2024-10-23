import React, { useState } from "react";
import { Row, Col, Pagination } from "antd";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";

import "bootstrap/dist/css/bootstrap.css";

const CheckupCooperate = () => {
  return (
    <div className="container mx-auto py-8">
      <HeaderComponent />

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
          KHÁM SỨC KHỎE TỔNG QUÁT DOANH NGHIỆP
          <hr />
        </h2>
      </Row>

      <Row
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
          gap: "10px",
          padding: "50px 20px",
        }}
      >
        <Col span={24} xs={24} sm={12} md={10}>
          <img
            src="https://umcclinic.com.vn/Data/Sites/1/News/213/goi-kham-suc-khoe-tong-quat-doanh-nghiep.jpg"
            alt="img"
          />
        </Col>

        <Col span={24} xs={24} sm={12} md={8}>
          <h4>GÓI KHÁM SỨC KHỎE TỔNG QUÁT DOANH NGHIỆP</h4>
          <br />
          <p style={{ textAlign: "justify" }}>
            Nguồn nhân lực được xem là nguồn tài sản vô giá đối với mỗi Doanh nghiệp, một doanh nghiệp có nguồn nhân lực chất lượng, và được vận hành hiệu quả sẽ tác động rất nhiều đến sự thành bại của Doanh nghiệp đó.
          </p>
          <br />
          <button className="btn btn-outline-primary">Xem chi tiết</button>
        </Col>
      </Row>

      <FooterComponent />
    </div>
  );
};

export default CheckupCooperate;
