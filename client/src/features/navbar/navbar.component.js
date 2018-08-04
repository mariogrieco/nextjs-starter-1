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

import { goto } from "../../routes";

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
          <NavbarBrand onClick={goto("/")}>Business Listing</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.props.isLoggedIn ? (
              <Nav className="ml-auto" navbar>
                <NavLink onClick={this.props.signout}>Sign out</NavLink>
              </Nav>
            ) : (
              <Nav className="ml-auto" navbar>
                <NavItem onClick={goto("login")}>
                  <NavLink>Log In</NavLink>
                </NavItem>
                <NavItem onClick={goto("signup")}>
                  <NavLink>Sign Up</NavLink>
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
