import React, { Component } from "react";
import { Table, Button } from "reactstrap";

import AlignRight from "../../styled/alignRight";

import { Router, Link } from "../../routes";

class Businesses extends Component {
  handleCrete = () => Router.pushRoute("business/create");
  handleDetail = _id => () => Router.pushRoute("business/detail", { _id });
  handleEdit = _id => () => Router.pushRoute("business/update", { _id });
  handleDelete = _id => () => this.props.deleteBusiness({ _id });

  render() {
    return (
      <div>
        <AlignRight>
          <Button color="primary" onClick={this.handleCrete}>
            Create
          </Button>{" "}
        </AlignRight>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.businesses.map((business, index) => (
              <tr key={business._id}>
                <th scope="row">{index + 1}</th>
                <td>{business.name}</td>
                <td>{business.description}</td>
                <td>
                  <Button
                    color="primary"
                    size="sm"
                    onClick={this.handleDetail(business._id)}
                  >
                    Detail
                  </Button>{" "}
                  <Button
                    color="secondary"
                    size="sm"
                    onClick={this.handleEdit(business._id)}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    color="danger"
                    size="sm"
                    onClick={this.handleDelete(business._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Businesses;
