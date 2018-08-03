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

const Poiner = styled.a`
  cursor: pointer;
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
          <Link route="/">
            <NavbarBrand>
              <Poiner>Business Listing</Poiner>
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.props.isLoggedIn ? (
              <Nav className="ml-auto" navbar>
                <NavLink onClick={this.props.signout}>Sign out</NavLink>
              </Nav>
            ) : (
              <Nav className="ml-auto" navbar>
                <Poiner>
                  <Link route="login">
                    <NavItem>
                      <NavLink>Log In</NavLink>
                    </NavItem>
                  </Link>
                </Poiner>
                <Poiner>
                  <Link route="signup">
                    <NavItem>
                      <NavLink>Sign Up</NavLink>
                    </NavItem>
                  </Link>
                </Poiner>
              </Nav>
            )}
          </Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default NavigationBar;
