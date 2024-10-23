import React, { useState } from "react";
import { Row, Col, Pagination } from "antd";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";

import "bootstrap/dist/css/bootstrap.css";

const CheckupCard = ({ imgSrc, title, description }) => (
    <Col
        style={{
            flexBasis: "30%",
            flexGrow: 1,
            backgroundColor: "#cecece26",
            padding: "10px",
            margin: "10px",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        }}
        xs={24}
        sm={12}
        md={8}
        lg={7}
        xl={6}
    >
        <img
            src={imgSrc}
            alt="img"
            style={{ width: "100%", borderRadius: "10px" }}
        />
        <h4
            className="text-lg font-bold text-blue-900"
            style={{ padding: "25px 0px" }}
        >
            {title}
        </h4>
        <p style={{ textAlign: "justify" }}>{description}</p>
    </Col>
);

const RespiratoryFunctionScreening = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const checkupCardsData = [
        {
            imgSrc:
                "https://umcclinic.com.vn/Data/Sites/1/News/215/do-da-ky-giac-ngu.jpg",
            title: "ĐO ĐA KÝ GIẤC NGỦ (Polysomnography - PSG)",
            description:
                "Đo đa ký giấc ngủ là một thuật ngữ y khoa chỉ một phương pháp đo đạc các hoạt động của cơ thể khi ngủ. Các hoạt động này được ghi nhận bằng các điện cực và tín hiệu sẽ truyền đến máy tính, sau đó, bác sĩ sẽ đọc đa ký giấc ngủ và thông báo cho bạn biết kết quả.",
        },
    ];

    // Calculate the start and end indices for slicing the array
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice the data array to display only the current page items
    const currentData = checkupCardsData.slice(startIndex, endIndex);

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
                    TẦM SOÁT CHỨC NĂNG HÔ HẤP
                    <hr />
                </h2>
            </Row>

            <Row
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: "10px",
                    padding: "20px",
                }}
            >
                <Col span={24} xs={24} sm={12} md={8}>
                    <img
                        src="https://umcclinic.com.vn/Data/Sites/1/News/214/do-gang-suc-tim-mach-ho-hap.jpg"
                        alt="img"
                        style={{ width: "90%" }}
                    />
                </Col>

                <Col span={24} xs={24} sm={12} md={8}>
                    <h4>ĐO GẮNG SỨC TIM MẠCH - HÔ HẤP (CPET)</h4>
                    <br />
                    <p style={{ textAlign: "justify" }}>
                        Đo gắng sức tim mạch hô hấp (CPET: Cardiopulmonary Exercise Testing) là một xét nghiệm đánh giá đồng thời hệ thống tim mạch và hô hấp trong suốt thời gian bạn vận động gắng sức.
                    </p>
                    <br />
                    <button className="btn btn-outline-primary">Xem chi tiết</button>
                </Col>
            </Row>

            <Row
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                }}
            >
                {currentData.map((card, index) => (
                    <CheckupCard
                        key={index}
                        imgSrc={card.imgSrc}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </Row>

            {/* Pagination Component */}
            <Row justify="center" style={{ marginTop: "20px" }}>
                <Pagination
                    current={currentPage}
                    total={checkupCardsData.length}
                    pageSize={itemsPerPage}
                    onChange={(page) => setCurrentPage(page)}
                />
            </Row>

            <FooterComponent />
        </div>
    );
};

export default RespiratoryFunctionScreening;
