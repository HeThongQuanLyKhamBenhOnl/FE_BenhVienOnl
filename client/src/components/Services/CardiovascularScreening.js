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

const CardiovascularScreening = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const checkupCardsData = [
        {
            imgSrc:
                "https://umcclinic.com.vn/Data/Sites/1/News/219/goi-tam-soat-dai-thao-duong-roi-loan-mo-mau-va-gut-3.jpg",
            title: "GÓI TẦM SOÁT ĐÁI THÁO ĐƯỜNG, RỐI LOẠN MỠ MÁU VÀ GÚT",
            description:
                "Tăng cholesterol, triglycerid, đường trong máu là các yếu tố nguy cơ gây ra các bệnh lý tim mạch, đái tháo đường và một số biến chứng nguy hiểm như đột quỵ, nhồi máu cơ tim…Tăng acid uric máu dễ dẫn đến bệnh gút, lâu dài có thể ảnh hưởng đến thận và các cơ quan khác.",
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
                    TẦM SOÁT TIM MẠCH
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
                        src="https://umcclinic.com.vn/Data/Sites/1/News/220/tam-soat-nguy-co-dot-quy.jpg"
                        alt="img"
                        style={{ width: "90%" }}
                    />
                </Col>

                <Col span={24} xs={24} sm={12} md={8}>
                    <h4>GÓI TẦM SOÁT NGUY CƠ ĐỘT QUỴ</h4>
                    <br />
                    <p style={{ textAlign: "justify" }}>
                        Đột quỵ có thể tấn công sức khỏe của bạn một cách ngẫu nhiên và đôi khi không có dấu hiệu báo trước nào. Có một số đối tượng đã được nghiên cứu chứng minh là sẽ có nguy cơ cao hơn người hình thường như: người bị cao huyết áp, đái tháo đường, Cholesterol cao, người có bệnh lý về tim mạch, hút thuốc lá, tiền sử gia đình có nguy cơ đột quỵ…
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

export default CardiovascularScreening;
