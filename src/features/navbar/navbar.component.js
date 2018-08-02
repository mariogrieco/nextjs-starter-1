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

import { Link } from "../../routes";

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
          <NavbarBrand href="/">Business Listing</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.props.isLoggedIn ? (
              <Nav className="ml-auto" navbar>
                <NavLink onClick={this.props.signout}>Sign out</NavLink>
              </Nav>
            ) : (
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link route="login">
                    <NavLink>Log In</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link route="signup">
                    <NavLink>Sign Up</NavLink>
                  </Link>
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
