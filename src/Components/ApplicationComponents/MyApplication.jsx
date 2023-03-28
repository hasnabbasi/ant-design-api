import React, { useState } from "react";
import { Table } from "antd";
import { Input } from "antd";

import {
    EditFilled,
    DeleteFilled,
  SearchOutlined,
} from "@ant-design/icons";

const MyApplication = ({handleEditSection,handleDeleteModal}) => {
  const [searchedText, setSearchedText] = useState("");

//  Column Data
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return (
          String(record.name).toLowerCase().includes(value.toLowerCase()) ||
          String(record.policy).toLowerCase().includes(value.toLowerCase()) ||
          String(record.worklog).toLowerCase().includes(value.toLowerCase()) ||
          String(record.subscription)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.owner).toLowerCase().includes(value.toLowerCase())
        );
      },
    },
    {
      title: "Owner",
      dataIndex: "owner",
    },
    {
      title: "Policy",
      dataIndex: "policy",
    },
    {
      title: "Worklog",
      dataIndex: "worklog",
    },
    {
      title: "Subscription",
      dataIndex: "subscription",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];


//   Row Data
  const data = [
    {
      key: "1",
      name: "Test Application",
      owner: "Admin",
      policy: "20 Per Min",
      worklog: "Active",
      subscription: "0",
      action: (
          <div className="edit-delete-application">
            <EditFilled className="myapplication-edit-icon" onClick={()=>handleEditSection(true)}/>
            <DeleteFilled className="myapplication-delete-icon" onClick={()=>{handleDeleteModal(true)}}/>
          </div>
      ),
    },
    {
      key: "2",
      name: "Test User",
      owner: "Admin",
      policy: "20 Per Min",
      worklog: "Active",
      subscription: "0",
      action: (
          <div className="edit-delete-application">
            <EditFilled  className="myapplication-edit-icon" onClick={()=>handleEditSection(true)}/>
            <DeleteFilled className="myapplication-delete-icon" onClick={()=>{handleDeleteModal(true)}}/>
          </div>
      ),
    },
  ];



  return (
    <div>
      <div className="myApplication-header">
        <h3>My Application</h3>
        <p>
          An application is a logical Collection of APIs. Application is allow
          you to use a single token to invoke a collection of APIs and to
          subscribe to one API Multiple times and allows unlimited access by
          defaults
        </p>
        <hr />
      </div>
      <div>
        <div className="myapplication-searcheader">
          <Input
            size="large"
            placeholder="Search"
            onChange={(e) => {
              setSearchedText(e.target.value);
            }}
            prefix={<SearchOutlined style={{ opacity: "0.2" }} />}
            id="searchInput"
            allowClear={true}
            style={{ backgroundColor: "#D9E7EF", maxWidth:"25vw" }}
          />
          <button>Search</button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          className="myapplication-table"
          pagination={false}
        //   scroll={{
        //     x: '100vw',
        //   }}
        />
      </div>
    </div>
  );
};

export default MyApplication;
