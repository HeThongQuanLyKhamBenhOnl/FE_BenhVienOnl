import React from "react";
import { Row, Col } from "antd";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";

import "bootstrap/dist/css/bootstrap.css";

const Train = () => {
    return (
        <div>
            <HeaderComponent />
            <FooterComponent />
        </div>
    );
}

export default Train;