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

class Login extends Component {
  state = {
    email: undefined,
    password: undefined
  };

  handleEmailChange = e => this.setState({ email: e.target.value });
  handlePasswordChange = e => this.setState({ password: e.target.value });

  render() {
    return (
      <Row>
        <Col sm={{ size: "4", offset: 4 }}>
          <Card>
            <CardBody>
              <CardTitle>Log In</CardTitle>
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
                <Button>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Login;
