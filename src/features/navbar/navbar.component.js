import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import styled from "styled-components";

import { Link } from "../../routes";

const Title = styled.a`
  color: black;
  cursor: pointer;
`;

const MenuLink = styled.a`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  :hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Fragment>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <Link route="/">
              <Title>Business Listing</Title>
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.props.isLoggedIn ? (
              <Nav className="ml-auto" navbar>
                <NavLink onClick={this.props.signout}>Sign out</NavLink>
              </Nav>
            ) : (
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink>
                    <Link route="login">
                      <MenuLink>Log In</MenuLink>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link route="signup">
                      <MenuLink>Sign Up</MenuLink>
                    </Link>
                  </NavLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default NavigationBar;
