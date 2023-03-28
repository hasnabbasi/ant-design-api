import React from 'react'
import {RightOutlined} from '@ant-design/icons';
const HeaderTitle = ({title,api}) => {
  return (
    <div>
      <div className='header-title'>
        <h3 className='main-title'>{title}</h3>
        <hr style={{ margin:"auto 1rem",height:"1rem", width:"1px"}}/>
        <h3 className='title-item-api'>{api}</h3>
        <RightOutlined style={{margin:"auto 1rem",color:"#253D55"}} size="2rem"/>
        <h3 className='title-item'>{title}</h3>
      </div>
        <hr />
    </div>
  )
}

export default HeaderTitle
