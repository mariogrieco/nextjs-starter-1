import React from "react";
import { Icon, Button, Layout, Dropdown, Menu, Avatar } from "antd";

const { Header } = Layout;

import { goto } from "../../routes";

import "./style.scss";

const GlobalHeader = props => {
  const menu = (
    <Menu>
      <Menu.Item key="logout" onClick={props.signout}>
        <Icon type="logout" />
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ background: "#fff", padding: "0 12px 0 0" }}>
      <div>
        <Icon
          className="trigger"
          type={props.collapsed ? "menu-unfold" : "menu-fold"}
          onClick={props.toggle}
        />
        <div className="right">
          {props.isLoggedIn ? (
            <Dropdown overlay={menu}>
              <span>
                <Avatar
                  size="small"
                  src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                />
                <span>Hello</span>
              </span>
            </Dropdown>
          ) : (
            <div>
              <Button style={{ marginRight: "10px" }} onClick={goto("/signup")}>
                Sign Up
              </Button>
              <Button type="primary" onClick={goto("/login")}>
                Log in
              </Button>
            </div>
          )}
        </div>
      </div>
    </Header>
  );
};

export default GlobalHeader;
