import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";

import { goto } from "../../../routes";

import AlignRight from "../../../styled/alignRight";
import PageTitle from "../../../styled/pageTitle";

const EmptySpace = styled.div`
  margin: 0px 10px;
`;

class UpdateBlog extends Component {
  state = {
    _id: this.props.blog._id,
    name: this.props.blog.name
  };

  static getDerivedStateFromProps(props, state) {
    if (props.blog._id !== state._id) {
      return {
        _id: props.blog._id,
        name: props.blog.name
      };
    }
    return null;
  }

  handleNameChange = e => this.setState({ name: e.target.value });
  handleSubmit = e => {
    e.preventDefault();
    this.props.updateBlog(this.state);
  };

  render() {
    return (
      <div>
        <PageTitle>Update Blog</PageTitle>
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input
              placeholder="Name"
              value={this.state.name || ""}
              onChange={this.handleNameChange}
            />
          </FormGroup>
          <AlignRight>
            <Button onClick={goto("blog")}>Cancel</Button>
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

export default UpdateBlog;
