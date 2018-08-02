import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";

import { Router } from "../../routes";

import AlignRight from "../../styled/alignRight";
import PageTitle from "../../styled/pageTitle";

const EmptySpace = styled.div`
  margin: 0px 10px;
`;

class BusinessCreate extends Component {
  state = {
    name: undefined,
    description: undefined
  };

  handleNameChange = e => this.setState({ name: e.target.value });
  handleDescriptionChange = e => this.setState({ description: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    this.props.createBusiness(this.state);
  };

  handleCancel() {
    Router.pushRoute("businesses");
  }

  render() {
    return (
      <div>
        <PageTitle>Create A Business</PageTitle>
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input placeholder="Name" onChange={this.handleNameChange} />
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <Input type="textarea" onChange={this.handleDescriptionChange} />
          </FormGroup>
          <AlignRight>
            <Button onClick={this.handleCancel}>Cancel</Button>
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

export default BusinessCreate;
