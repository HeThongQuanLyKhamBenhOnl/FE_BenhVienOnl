import React, { useEffect } from "react";
import { Layout } from "antd";
import HeaderComponent from "../components/Header/Header";
import SectionComponent from "../components/Section/Section";
import FooterComponent from "../components/component/Footer";
import { useNavigate, Link } from "react-router-dom";
const { Content } = Layout;

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Layout className="layout">
        <HeaderComponent />
        <Content style={{ margin: "20px 0px" }}>
          <div className="site-layout-content" style={{ padding: "50px 0" }}>
            <SectionComponent />
          </div>
        </Content>
        <FooterComponent />
      </Layout>
    </div>
  );
};

export default Home;