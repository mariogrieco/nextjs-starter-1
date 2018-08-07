import React, { Fragment } from "react";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const BasicLayout = ({ children }) => (
  <Fragment>
    <Layout>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  </Fragment>
);

export default BasicLayout;
