import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;

const items = [
  {
    key: "1",
    label: "Home",
  },
];
const MainLayout = (props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: "18px 18px 0px 18px",
        }}
      >
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {props?.children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        React Test ©{new Date().getFullYear()} Created by Hoor ul ain Azeem
      </Footer>
    </Layout>
  );
};
export default MainLayout;
