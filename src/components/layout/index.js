import React, { Fragment } from "react";
import { Container } from "reactstrap";

import Navbar from "../../containers/navbar.container";

const Layout = ({ children }) => (
  <Fragment>
    <Navbar />
    <Container>{children}</Container>
  </Fragment>
);

export default Layout;
