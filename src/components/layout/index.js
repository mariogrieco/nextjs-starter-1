import React, { Fragment } from "react";
import { Container } from "reactstrap";

import Navbar from "../../features/navbar/navbar.container";

const Layout = ({ children }) => (
  <Fragment>
    <Navbar />
    <Container>{children}</Container>
  </Fragment>
);

export default Layout;
