import React from 'react'
import HeaderTitle from "./HeaderTitle";
import { Table } from "antd";
import { InfoCircleFilled } from '@ant-design/icons';
import SubscribeApis from './SubscribeApis';
import {
  EditFilled,
  DeleteFilled,
} from "@ant-design/icons";
const Subscription = ({ handleSubscribeApi,openSubscribeModal,handleDeleteModal,handleUpdateSubscriptionModal }) => {
  const columns = [
    {
      title: "API",
      dataIndex: "api",
    },
    {
      title: "Lifecycle state",
      dataIndex: "lifecycleState",
    },
    {
      title: "business plan",
      dataIndex: "businessplan",
    },
    {
      title: "Subscription status",
      dataIndex: "subscriptionstatus",
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
      api: "Test Application",
      lifecycleState: "Admin",
      businessplan: "20 Per Min",
      subscriptionstatus: "Active",
      action: (
          <div className="edit-delete-application">
            <EditFilled className="myapplication-edit-icon" onClick={()=>{handleUpdateSubscriptionModal(true)}}/>
            <DeleteFilled className="myapplication-delete-icon" onClick={()=>{handleDeleteModal(true)}}/>
          </div>
      ),
    },
    {
      key: "2",
      api: "Test User",
      lifecycleState: "Admin",
      businessplan: "20 Per Min",
      subscriptionstatus: "Active",
      action: (
          <div className="edit-delete-application">
            <EditFilled  className="myapplication-edit-icon" onClick={()=>{handleUpdateSubscriptionModal(true)}}/>
            <DeleteFilled className="myapplication-delete-icon" onClick={()=>{handleDeleteModal(true)}}/>
          </div>
      ),
    },
  ];

  return (
    <div>
      <SubscribeApis openSubscribeModal={openSubscribeModal} handleSubscribeApi={handleSubscribeApi}/>
      <HeaderTitle />
      <div className="productionkey-title">
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <h3>Subscription Management</h3>
          <span onClick={() => handleSubscribeApi(true)} className="link-subscribe">
            Subscribe APIs
          </span>
        </div>
      </div>
      <div className="noComment-main">
        <div>
          <InfoCircleFilled style={{ color: "#34adf4" }} />
          <span>No Key Manager</span>
        </div>
        <span>No Key Manager active to generate keys</span>
      </div>
      <div className='tset-data'>
      <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          className="subscriptionapi-table"
        //   scroll={{
        //     x: '100vw',
        //   }}
        />
      </div>
    </div>
  )
}

export default Subscription
