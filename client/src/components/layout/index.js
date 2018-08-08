import React from "react";
import { Layout, Menu, Icon } from "antd";

import Footer from "./footer";
import Logo from "./logo";

const { Header, Sider, Content } = Layout;

import "./style.css";

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
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Business</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
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
