import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import Center from "../../styled/center.js";

class Signup extends Component {
  state = {
    email: undefined,
    password: undefined
  };

  handleEmailChange = e => this.setState({ email: e.target.value });
  handlePasswordChange = e => this.setState({ password: e.target.value });
  handleSignup = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.signup(email, password);
  };

  render() {
    return (
      <Center>
        <Col md={{ size: "6", offset: 3 }}>
          <Card>
            <CardBody>
              <CardTitle>Sign Up</CardTitle>
              <Form>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    placeholder="Email"
                    onChange={this.handleEmailChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    placeholder="Password"
                    onChange={this.handlePasswordChange}
                  />
                </FormGroup>
                <Button onClick={this.handleSignup}>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Center>
    );
  }
}

export default Signup;
