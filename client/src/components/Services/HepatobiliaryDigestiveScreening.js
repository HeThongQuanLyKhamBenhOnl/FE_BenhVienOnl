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

const HepatobiliaryDigestiveScreening = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const checkupCardsData = [
        {
            imgSrc:
                "https://umcclinic.com.vn/Data/Sites/1/News/829/goi-kham-tam-soat-ung-thu-dai-truc-trang-(1).jpg",
            title: "GÓI TẦM SOÁT UNG THƯ ĐẠI TRỰC TRÀNG",
            description:
                "Tầm soát ung thư đại trực tràng là phương pháp phát hiện tế bào ung thư hoặc các tế bào bất thường có thể phát triển thành ung thư. Tầm soát ung thư đại trực tràng để phát hiện bệnh sớm có ý nghĩa rất quan trọng trong việc nâng cao hiệu quả điều trị, giảm đau đớn và tăng tuổi thọ cho người bệnh.",
        },
        {
            imgSrc:
                "https://umcclinic.com.vn/Data/Sites/1/News/218/noi-soi-tieu-hoa.jpg",
            title: "NỘI SOI HỆ TIÊU HÓA THỰC QUẢN, DẠ DÀY, TÁ TRÀNG, ĐẠI TRÀNG",
            description:
                "Nội soi tiêu hóa là việc thực hiện thăm khám trực tiếp Thực quản – Dạ Dày – Tá tràng hoặc Đại tràng bằng một ống mềm có Camera gắn ở đầu ống. Điều khiển đa hướng, nhìn thấy, nhận định, phân loại, cảm giác được mật độ tổn thương và có thể trực tiếp can thiệp vào tổn thương đó là Nội soi tiêu hoá.",
        },
        {
            imgSrc:
                "https://umcclinic.com.vn/Data/Sites/1/News/217/tam-soat-ung-thu-he-tieu-hoa-2.jpg",
            title: "GÓI TẦM SOÁT UNG THƯ HỆ TIÊU HÓA",
            description:
                "Tầm soát ung thư hệ tiêu hóa là một tầm soát rất quan trọng.Việc tầm soát ung thư hệ tiêu nên được thực hiện định kỳ hàng năm nhằm phát hiện sớm những dấu hiệu bất thường của hệ tiêu hóa.",
        },
        {
            imgSrc:
                "https://umcclinic.com.vn/Data/Sites/1/News/216/goi-tam-soat-viem-gan-1.jpg",
            title: "GÓI TẦM SOÁT UNG THƯ GAN",
            description:
                "Hiện Việt Nam là nước có tỷ lệ nhiễm virus viêm gan B và C cao nhất trong khu vực. Theo báo cáo của Cục Y tế Dự phòng (BYT), Việt Nam có 10 triệu trường hợp nhiễm viêm gan B và gần 1 triệu người nhiễm virus viêm gan C. Điều cần quan tâm là bệnh viêm gan B, C có thể dẫn đến xơ gan, ung thư gan. Do vậy, bạn nên thực hiện tầm soát viêm gan để có thể phát hiện sớm các yếu tố nguy cơ giúp điều trị hiệu quả các bệnh lý về gan.",
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
                    TẦM SOÁT TIÊU HÓA GAN MẬT
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
                        src="https://umcclinic.com.vn/Data/Sites/1/News/830/goi-kham-tam-soat-ung-thu-thuc-quan-da-day.jpg"
                        alt="img"
                        style={{ width: "90%" }}
                    />
                </Col>

                <Col span={24} xs={24} sm={12} md={8}>
                    <h4>GÓI TẦM SOÁT UNG THƯ DẠ DÀY</h4>
                    <br />
                    <p style={{ textAlign: "justify" }}>
                        Ung thư dạ dày và thực quản là ung thư về đường tiêu hóa rất phổ biến. Ung thư thực quản dạ dày hoàn toàn có thể chữa khỏi nếu người bệnh được tầm soát ung thư sớm.
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

export default HepatobiliaryDigestiveScreening;
