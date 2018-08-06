const { capitalizeFirstLetter } = require("../../../utils");

module.exports = featureName => {
  const Model = capitalizeFirstLetter(featureName);

  return `import React, { Component } from "react";
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

class Show${Model} extends Component {
  render() {
    return (
      <Row>
        <Col m="12" md={{ size: 8, offset: 2 }}>
          <PageTitle>${Model} Detail</PageTitle>
          <Card>
            <CardHeader>{this.props.${featureName}.name}</CardHeader>
            <CardBody>
              <CardText>{this.props.${featureName}.description}</CardText>
            </CardBody>
          </Card>
          <AlignRight>
            <Button onClick={goto("${featureName}")}>Back</Button>
          </AlignRight>
        </Col>
      </Row>
    );
  }
}

export default Show${Model};  
`;
};
