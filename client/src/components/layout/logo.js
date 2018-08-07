import React from "react";
import styled from "styled-components";

import { Link } from "../../routes";

const Root = styled.div`
  height: 64px;
  position: relative;
  line-height: 64px;
  padding-left: 24px;
  transition: all 0.3s;
  background: #002140;
  overflow: hidden;
`;

const H1 = styled.h1`
  color: #fff;
  font-size: 20px;
  margin: 0 0 0 12px;
  font-weight: 600;
  display: inline-block;
  vertical-align: middle;
`;

const Img = styled.img`
  height: 32px;
`;

const Logo = () => (
  <Root key="logo">
    <Link to="/">
      <a>
        <Img src="/static/img/logo.svg" alt="logo" />
        <H1>Next.js Starter Kit</H1>
      </a>
    </Link>
  </Root>
);

export default Logo;
