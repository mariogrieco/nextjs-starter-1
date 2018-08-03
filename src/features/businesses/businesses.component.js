import React, { Component } from "react";
import { Table, Button } from "reactstrap";

import AlignRight from "../../styled/alignRight";

import { Router, Link } from "../../routes";

class Businesses extends Component {
  handleClick() {
    Router.pushRoute("business/create");
  }

  render() {
    return (
      <div>
        <AlignRight>
          <Button color="primary" onClick={this.handleClick}>
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
                <td>
                  <Link route="business/detail" params={{ _id: business._id }}>
                    <a>{business.name}</a>
                  </Link>
                </td>
                <td>{business.description}</td>
                <td>
                  <Link route="business/update" params={{ _id: business._id }}>
                    <a>Edit</a>
                  </Link>
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
