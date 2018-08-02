import React, { Fragment } from "react";
import { Container } from "reactstrap";

import Navbar from "./navbar";

const Layout = ({ children }) => (
  <Fragment>
    <Navbar />
    <Container>{children}</Container>
  </Fragment>
);

export default Layout;
