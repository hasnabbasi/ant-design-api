import React from 'react'
import HeaderTitle from './HeaderTitle'
import {PlusCircleFilled,InfoCircleFilled } from '@ant-design/icons';

const Comments = () => {
  return (
    <div>
<HeaderTitle title={"Comment"} api={"AWSS3Control"} />
      <p style={{fontWeight:'700',color:"#16375a"}}>0 Comments</p>
      <div className='add-main'><PlusCircleFilled className='add-icon'/><span>Write a comment</span></div>
      <div className='noComment-main'>
        <div><InfoCircleFilled style={{color:"#34adf4"}}/><span>No Comment Yet</span></div>
        <span>No Comment available for this API yet</span>
      </div>
    </div>
  )
}

export default Comments
