import React, { Component } from "react";
import { Table, Button } from "reactstrap";

import AlignRight from "../../styled/alignRight";

import { goto } from "../../routes";

class Blogs extends Component {
  handleDelete = _id => () => this.props.deleteBlog({ _id });

  render() {
    return (
      <div>
        <AlignRight>
          <Button color="primary" onClick={goto("blog/create")}>
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
            {this.props.blogs.map((blog, index) => (
              <tr key={blog._id}>
                <th scope="row">{index + 1}</th>
                <td>{blog.name}</td>
                <td>{blog.description}</td>
                <td>
                  <Button
                    color="primary"
                    size="sm"
                    onClick={goto("blog/show", { _id: blog._id })}
                  >
                    Detail
                  </Button>{" "}
                  <Button
                    color="secondary"
                    size="sm"
                    onClick={goto("blog/update", { _id: blog._id })}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    color="danger"
                    size="sm"
                    onClick={this.handleDelete(blog._id)}
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

export default Blogs;
