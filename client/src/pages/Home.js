import React, { useEffect } from "react";
import { Layout } from "antd";
import HeaderComponent from "../components/Header/Header";
import SectionComponent from "../components/Section/Section";
import FooterComponent from "../components/component/Footer";
import { useNavigate, Link } from "react-router-dom";

const { Content } = Layout;

const Home = () => {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   // Cleanup script when component unmounts
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <div>
      <Layout className="layout">
        <HeaderComponent />
        <Content style={{ padding: "0 50px" }}>
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
