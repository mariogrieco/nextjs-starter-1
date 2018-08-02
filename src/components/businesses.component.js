import React, { Component } from "react";
import { Table, Button } from "reactstrap";

import AlignRight from "../styled/alignRight";

import { Router } from "../routes";

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
            </tr>
          </thead>
          <tbody>
            {this.props.businesses.map((business, index) => (
              <tr key={business._id}>
                <th scope="row">{index + 1}</th>
                <td>{business.name}</td>
                <td>{business.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Businesses;
