import React, { PureComponent } from "react";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

import { goto } from "../../../routes";

import PageTitle from "../../../styled/pageTitle";

class UpdateBusiness extends PureComponent {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.updateBusiness({
          _id: this.props.business._id,
          ...values
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <PageTitle>Update A Business</PageTitle>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator("name", {
              initialValue: this.props.business.name,
              rules: [
                { required: true, message: "Business name cannot be blank!" }
              ]
            })(<Input placeholder="Name" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("description", {
              initialValue: this.props.business.description,
              rules: [
                { required: true, message: "Description cannot be blank!" }
              ]
            })(<Input placeholder="Description" />)}
          </FormItem>
          <FormItem>
            <Button onClick={goto("/business")}>Back</Button>{" "}
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(UpdateBusiness);
