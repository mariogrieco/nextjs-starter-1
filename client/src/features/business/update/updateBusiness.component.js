import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";

import { goto } from "../../../routes";

import AlignRight from "../../../styled/alignRight";
import PageTitle from "../../../styled/pageTitle";

const EmptySpace = styled.div`
  margin: 0px 10px;
`;

class UpdateBusiness extends Component {
  state = {
    _id: this.props.business._id,
    name: this.props.business.name,
    description: this.props.business.description
  };

  static getDerivedStateFromProps(props, state) {
    if (props.business._id !== state._id) {
      return {
        _id: props.business._id,
        name: props.business.name,
        description: props.business.description
      };
    }
    return null;
  }

  handleNameChange = e => this.setState({ name: e.target.value });
  handleDescriptionChange = e => this.setState({ description: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    this.props.updateBusiness(this.state);
  };

  render() {
    return (
      <div>
        <PageTitle>Update Business</PageTitle>
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input
              placeholder="Name"
              value={this.state.name || ""}
              onChange={this.handleNameChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <Input
              type="textarea"
              value={this.state.description || ""}
              onChange={this.handleDescriptionChange}
            />
          </FormGroup>
          <AlignRight>
            <Button onClick={goto("/")}>Cancel</Button>
            <EmptySpace />
            <Button color="success" onClick={this.handleSubmit}>
              Update
            </Button>
          </AlignRight>
        </Form>
      </div>
    );
  }
}

export default UpdateBusiness;
