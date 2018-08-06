const { capitalizeFirstLetter } = require("../../utils");

module.exports = featureName => {
  const Model = capitalizeFirstLetter(featureName);

  return `import React, { Component } from "react";
import { Table, Button } from "reactstrap";

import AlignRight from "../../styled/alignRight";

import { goto } from "../../routes";

class ${Model}s extends Component {
  handleDelete = _id => () => this.props.delete${Model}({ _id });

  render() {
    return (
      <div>
        <AlignRight>
          <Button color="primary" onClick={goto("${featureName}/create")}>
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
            {this.props.${featureName}s.map((${featureName}, index) => (
              <tr key={${featureName}._id}>
                <th scope="row">{index + 1}</th>
                <td>{${featureName}.name}</td>
                <td>{${featureName}.description}</td>
                <td>
                  <Button
                    color="primary"
                    size="sm"
                    onClick={goto("${featureName}/detail", { _id: ${featureName}._id })}
                  >
                    Detail
                  </Button>{" "}
                  <Button
                    color="secondary"
                    size="sm"
                    onClick={goto("${featureName}/update", { _id: ${featureName}._id })}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    color="danger"
                    size="sm"
                    onClick={this.handleDelete(${featureName}._id)}
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

export default ${Model}s;  
`;
};
