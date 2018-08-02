import React, { Component } from "react";
import { Table, Button } from "reactstrap";

import AlignRight from "../styled/alignRight";

import { Router } from "../routes";

class Businesses extends Component {
  handleClick() {
    Router.pushRoute("businessCreate");
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
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Businesses;
