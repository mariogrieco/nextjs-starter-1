const { capitalizeFirstLetter } = require("../../../utils");

module.exports = featureName => {
  const Model = capitalizeFirstLetter(featureName);

  return `import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";
  
import { goto } from "../../../routes";

import AlignRight from "../../../styled/alignRight";
import PageTitle from "../../../styled/pageTitle";

const EmptySpace = styled.div\`
  margin: 0px 10px;
\`;

class Create${Model} extends Component {
  state = {
    name: "",
    description: ""
  };

  handleNameChange = e => this.setState({ name: e.target.value });
  handleDescriptionChange = e => this.setState({ description: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    this.props.create${Model}(this.state);
  };

  render() {
    return (
      <div>
        <PageTitle>Create A ${Model}</PageTitle>
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <Input
              type="textarea"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
          </FormGroup>
          <AlignRight>
            <Button onClick={goto("${featureName}")}>Cancel</Button>
            <EmptySpace />
            <Button color="success" onClick={this.handleSubmit}>
              Submit
            </Button>
          </AlignRight>
        </Form>
      </div>
    );
  }
}

export default Create${Model};
`;
};
