import React from 'react'
import HeaderTitle from './HeaderTitle'
import { Select, Table } from 'antd';
import {
  StarFilled
} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown,faKey,faBarsProgress } from '@fortawesome/free-solid-svg-icons'
const columns = [
  {
    title: 'Application Name',
    dataIndex: 'applicationname',
    key: 'applicationname',
  },
  {
    title: 'Throtting Teir',
    dataIndex: 'tier',
    key: 'tier',
  },
  {
    title: 'Application Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
  },
];
const data = [
  {
    key: '1',
    applicationname:"Default Application",
    tier: "Bronze",
    status: 'UNBLOCKED',
    actions: <div style={{display:"flex", gap:"1rem"}}>
      <span>
      <FontAwesomeIcon icon={faKey} className="sub-table-icon"/>  SANDBOX KEYS
      </span>
      <span>
      <FontAwesomeIcon icon={faKey} className="sub-table-icon"/> PROD KEYS
      </span>
      <span>
      <FontAwesomeIcon icon={faBarsProgress} className="sub-table-icon"/>
        UNSUBSCRIBE</span>
      <span>
      <FontAwesomeIcon icon={faBarsProgress} className="sub-table-icon"/>
        MANAGE APP</span>
    </div>,
  },
  {
    key: '2',
    applicationname:"Test Application",
    tier: "Bronze",
    status: 'UNBLOCKED',
    actions: <div style={{display:"flex",gap:"1rem"}}>
    <span>
    <FontAwesomeIcon icon={faKey} className="sub-table-icon"/> SANDBOX KEYS
    </span>
    <span>
    <FontAwesomeIcon icon={faKey} className="sub-table-icon"/> PROD KEYS
    </span>
    <span>
    <FontAwesomeIcon icon={faBarsProgress} className="sub-table-icon"/>
      UNSUBSCRIBE</span>
    <span>
    <FontAwesomeIcon icon={faBarsProgress} className="sub-table-icon"/>
      MANAGE APP</span>
  </div>,
  },
];
const Subscriptions = () => {
  return (
    <div>
      <HeaderTitle title={"Subscriptions"} api={"AWSS3Control"} />
      <div style={{marginTop:"2rem"}}>
        <p className='subscription-title'>Subscription & Key Generation Wizard</p>
      </div>
      <p className='subscription-info'>An application is primarily used to decouple the consumer from the APIs. it allow you to generate and use a single Key for multiple APIs and subscribe multiple times to a single API with different SLA levels.</p>
      <h3 className='main-title'>Subscribe</h3>
      <div className='subscription-select'>
        <p className='subscription-smalltext'>Application</p>

        <div className='select-main'>
          {/* <p>Bussiness Plan</p> */}
          <label htmlFor="select-menu" className='subscription-smalltext'>Bussiness Plan</label>
          <Select
          suffixIcon={<FontAwesomeIcon icon={faChevronDown} className="ant-select-suffix downarrow-select"/>}
            defaultValue="Bronze"
            name='select-menu'
            style={{
              width: "15rem"
            }}
            options={[
              {
                value: 'Bronze',
                label: 'Bronze',
              },
              {
                value: 'Label2',
                label: 'Label2',
              },
              {
                value: 'Label3',
                label: 'Label3',
              },
              {
                value: 'Label4',
                label: 'Label4',
              },
            ]}
          />
        </div>
      </div>
      {/* <button className='subscribe-btn'>Subscribe</button> */}
      <button className='button-primary mb-bottom-3'>Subscribe</button>
      <h2 style={{ color: "#253d55" }}>Subscriptions</h2>
    <Table columns={columns} dataSource={data} pagination={false} className="subscription-table mb-bottom-3"/>
    </div>
  )
}

export default Subscriptions
