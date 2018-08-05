import React, { Component } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardHeader,
  Row,
  Col,
  Button
} from "reactstrap";

import { goto } from "../../../routes";

import AlignRight from "../../../styled/alignRight";
import PageTitle from "../../../styled/pageTitle";

class businessDetail extends Component {
  render() {
    return (
      <Row>
        <Col m="12" md={{ size: 8, offset: 2 }}>
          <PageTitle>Business Detail</PageTitle>
          <Card>
            <CardHeader>{this.props.business.name}</CardHeader>
            <CardBody>
              <CardText>{this.props.business.description}</CardText>
            </CardBody>
          </Card>
          <AlignRight>
            <Button onClick={goto("business")}>Back</Button>
          </AlignRight>
        </Col>
      </Row>
    );
  }
}

export default businessDetail;
