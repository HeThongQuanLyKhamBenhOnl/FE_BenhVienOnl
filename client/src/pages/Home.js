import React, { useEffect } from "react";
import { Layout } from "antd";
import HeaderComponent from "../components/Header/Header";
import SectionComponent from "../components/Section/Section";
import FooterComponent from "../components/component/Footer";

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
    <Layout className="layout">
      <HeaderComponent />
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content" style={{ padding: "50px 0" }}>
          <SectionComponent />
        </div>
      </Content>
      <FooterComponent />
      Thêm thẻ df-messenger ở dưới cùng để Dialogflow xuất hiện
      <df-messenger
        intent="WELCOME"
        chat-title="Chat-Hospital123"
        agent-id="fc9b1715-8b10-4943-99db-b7d6d0f87717"
        language-code="vi"
      ></df-messenger>
    </Layout>
  );
};

export default Home;
