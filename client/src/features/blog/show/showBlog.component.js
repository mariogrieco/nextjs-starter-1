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

class ShowBlog extends Component {
  render() {
    return (
      <Row>
        <Col m="12" md={{ size: 8, offset: 2 }}>
          <PageTitle>Blog Detail</PageTitle>
          <Card>
            <CardHeader>{this.props.blog.name}</CardHeader>
          </Card>
          <AlignRight>
            <Button onClick={goto("blog")}>Back</Button>
          </AlignRight>
        </Col>
      </Row>
    );
  }
}

export default ShowBlog;
