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
  handleCancel() {
    Router.pushRoute("businesses");
  }

  render() {
    return (
      <div>
        <PageTitle>Create A Business</PageTitle>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Name</Label>
            <Input placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Description</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <AlignRight>
            <Button onClick={this.handleCancel}>Cancel</Button>
            <EmptySpace />
            <Button color="success">Submit</Button>
          </AlignRight>
        </Form>
      </div>
    );
  }
}

export default BusinessCreate;
