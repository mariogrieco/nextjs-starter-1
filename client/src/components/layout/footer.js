import React from "react";
import styled from "styled-components";
import { Icon } from "antd";

const GlobalFooter = styled.div`
  padding: 0 16px;
  margin: 48px 0 24px;
  text-align: center;
  background: #f0f2f5;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
`;

const Copyright = styled.div`
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
`;

const Links = styled.div`
  margin-bottom: 8px;
`;

const Link = styled.a`
  color: rgba(0, 0, 0, 0.45);
  transition: all 0.3s;
`;

const Footer = () => (
  <GlobalFooter>
    <Links>
      <Link target="_blank" href="https://github.com/LIYINGZHEN/nextjs-starter">
        <Icon type="github" />
      </Link>
    </Links>
    <Copyright>
      Copyright <Icon type="copyright" /> 2018 Max Li
    </Copyright>
  </GlobalFooter>
);

export default Footer;
