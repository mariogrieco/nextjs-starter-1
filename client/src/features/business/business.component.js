import React, { Component } from "react";
import { Table, Button, Pagination } from "antd";

import AlignRight from "../../styled/alignRight";

import { goto } from "../../routes";

class Businesses extends Component {
  handleDelete = _id => () => this.props.deleteBusiness({ _id });
  handleChangePage = page => goto(`/business?page=${page}`)();

  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description"
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <Button onClick={goto("business/show", { _id: record.key })}>
              Detail
            </Button>{" "}
            <Button onClick={goto("business/update", { _id: record.key })}>
              Edit
            </Button>{" "}
            <Button onClick={this.handleDelete(record.key)}>Delete</Button>
          </span>
        )
      }
    ];

    const dataSource = this.props.businesses.map(business => ({
      key: business._id,
      name: business.name,
      description: business.description
    }));

    return (
      <div>
        <AlignRight>
          <Button color="primary" onClick={goto("business/create")}>
            Create
          </Button>{" "}
        </AlignRight>
        <Table columns={columns} dataSource={dataSource} pagination={false} />
        <AlignRight>
          <Pagination
            current={Number(this.props.page) || 1}
            total={this.props.total}
            pageSize={5}
            onChange={this.handleChangePage}
          />
        </AlignRight>
      </div>
    );
  }
}

export default Businesses;
