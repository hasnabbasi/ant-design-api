import React from 'react'
import HeaderTitle from './HeaderTitle'
import {InfoCircleFilled } from '@ant-design/icons';
const Documentation = () => {
  return (
    <div>
<HeaderTitle title={"Documents"} api={"AWSS3Control"} />
<p style={{fontWeight:'700',color:"#16375a",marginTop:"2rem"}}>API Documentation</p>
<div className='noComment-main'>
        <div><InfoCircleFilled style={{color:"#34adf4"}}/><span>No Documentation Available</span></div>
        <span>No Documentation available for this API yet</span>
      </div>
    </div>
  )
}

export default Documentation
