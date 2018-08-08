import React from "react";
import { Layout, Menu, Icon } from "antd";

import "./style.css";

import Footer from "./footer";
import Logo from "./logo";
import Header from "../../features/header/header.container";

import { goto } from "../../routes";

const { Sider, Content } = Layout;

class BasicLayout extends React.PureComponent {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout
        style={{
          minHeight: "100vh",
          overflowX: "hidden"
        }}
      >
        <Sider
          style={{ minHeight: "100vh" }}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          breakpoint="lg"
          width={256}
        >
          <Logo />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" onClick={goto("/business")}>
              <Icon type="user" />
              <span>Business</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header toggle={this.toggle} collapsed={this.state.collapsed} />
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {this.props.children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
