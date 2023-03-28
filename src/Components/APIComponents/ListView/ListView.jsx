import React from 'react'
import { Table} from 'antd';
import {columns, data} from './TableData';
import './ListView.css'
const ListView = () => {
  return (
    <div className="Table">
    <Table columns={columns} dataSource={data} className="listview-table" pagination={false}/>
    </div>
  )
}

export default ListView
