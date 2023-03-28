import {
  SettingFilled,
  StarFilled
} from '@ant-design/icons';

export const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a className='list-link'>{text}</a>,
  
    },
    {
      title: 'Version',
      dataIndex: 'version',
      key: 'version',
    },
    {
      title: 'Context',
      dataIndex: 'context',
      key: 'context',
    },
    {
      title: 'Provider/Business Owner',
      dataIndex: 'provider',
      key: 'provider',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },
  ];

 export const data = [
    {
      key: '1',
      name: <div><SettingFilled style={{marginRight:"20px", color:"rgb(12, 53, 92)"}}/>AWSS3Control</div>,
      version: "2018-8-20",
      context: '/awss3control',
      provider: "admin((Provider)",
      type:"HTTP",
      rating: <div>
        <div>
        <StarFilled style={{color:"#d1d1d1"}} />
        <StarFilled style={{color:"#d1d1d1"}} />
        <StarFilled style={{color:"#d1d1d1"}} />
        <StarFilled style={{color:"#d1d1d1"}} />
        <StarFilled style={{color:"#d1d1d1"}} />
      </div>
      <span className='rating-text'>0/5.0(0users)</span>
      </div>,
    },
    {
      key: '2',
      name: <div><SettingFilled style={{marginRight:"20px", color:"rgb(12, 53, 92)"}}/>HealthCare-API</div>,
      version: "1",
      context: '/HC',
      provider: "admin((Provider)",
      type:"HTTP",
      rating: <div>
      <div>
      <StarFilled style={{color:"#d1d1d1"}} />
      <StarFilled style={{color:"#d1d1d1"}} />
      <StarFilled style={{color:"#d1d1d1"}} />
      <StarFilled style={{color:"#d1d1d1"}} />
      <StarFilled style={{color:"#d1d1d1"}} />
    </div>
    <span className='rating-text'>0/5.0(0users)</span>
    </div>,
    },
    {
      key: '3',
      name: <div><SettingFilled style={{marginRight:"20px", color:"rgb(12, 53, 92)"}}/>PizzaShackAPI</div>,
      version: "1.0.0",
      context: '/pizzashack',
      provider: "admin((Provider)",
      type:"HTTP",
      rating: <div>
      <div>
      <StarFilled style={{color:"#d1d1d1"}} />
      <StarFilled style={{color:"#d1d1d1"}} />
      <StarFilled style={{color:"#d1d1d1"}} />
      <StarFilled style={{color:"#d1d1d1"}} />
      <StarFilled style={{color:"#d1d1d1"}} />
    </div>
    <span className='rating-text'>0/5.0(0users)</span>
    </div>,    
    },
  ];