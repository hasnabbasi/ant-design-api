import React from 'react'
import {
  SlackOutlined,
  CaretDownOutlined
} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode,faFileArrowDown,faPrint,faFileLines,faList } from '@fortawesome/free-solid-svg-icons'
import { Select } from 'antd';
import './MenuHeader.css'
const MenuHeader = ({ handleView, view }) => {
  return (
    <div className="Menu-Header-Container">
      <div className="Menu-Header-Inner">
        <FontAwesomeIcon icon={faCode} className="API-icon"/>
        <div className='total-api'>
          <h3 className='h3-medium'>APIs</h3>
          <span className='totalapi-span'>Total:32</span>
        </div>
      </div>

      <div className="Menu-Header-Inner">
        {view === "ListView" && <>
          <FontAwesomeIcon icon={faFileArrowDown} className="ListViewIcons"/>
          <FontAwesomeIcon icon={faPrint} className="ListViewIcons"/>
          <FontAwesomeIcon icon={faFileLines} className="ListViewIcons"/>
        <div>
          <Select
          suffixIcon={<CaretDownOutlined className="ant-select-suffix downarrow-select"/>}
            defaultValue="All"
            style={{
              width: 134,
            }}
            className="main-header"
            options={[
              {
                value: 'All',
                label: 'All',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
              {
                value: 'Yiminghe',
                label: 'yiminghe',
              },
            ]}
          />
        </div>
        </>
        }
        {/* <UnorderedListOutlined className={view !== "ListView" ? "ViewChangeIcon viewChangeInactive" : "ViewChangeIcon"} onClick={(e) => { e.preventDefault(); handleView("ListView") }} /> */}
        <FontAwesomeIcon icon={faList} className={view === "ListView" ? "ViewChangeIcon viewChangeactive" : "ViewChangeIcon"} onClick={(e) => { e.preventDefault(); handleView("ListView") }}/>
        <SlackOutlined className={view === "GridView" ? "ViewChangeIcon viewChangeactive" : "ViewChangeIcon"} onClick={(e) => { e.preventDefault(); handleView("GridView") }} />
      </div>
    </div>
  )
}

export default MenuHeader
