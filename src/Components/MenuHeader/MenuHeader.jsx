import React, {useState} from 'react';
import {SlackOutlined, CaretDownOutlined} from '@ant-design/icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode, faFileArrowDown, faPrint, faFileLines, faList} from '@fortawesome/free-solid-svg-icons';
import './MenuHeader.css';
import {Button, Modal} from 'antd';

const MenuHeader = ({handleView, view}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="Menu-Header-Container">
            <div className="Menu-Header-Inner">
                <div className="total-api">
                    <h3 className="h3-medium">APIs</h3>
                    <span className="totalapi-span">Total APIs:32</span>
                </div>

            </div>

            <div className="Menu-Header-Inner">
                <Button style={{backgroundColor:'#16375A',color:"white"}} onClick={() => setOpen(true)}>
                    Create APIs
                    <CaretDownOutlined />
                </Button>
                <FontAwesomeIcon

                    icon={faList}
                    className={
                        view === 'ListView'
                            ? 'ViewChangeIcon viewChangeactive'
                            : 'ViewChangeIcon'
                    }
                    onClick={(e) => {
                        e.preventDefault();
                        handleView('ListView');
                    }}
                />
                <SlackOutlined
                    className={
                        view === 'GridView'
                            ? 'ViewChangeIcon viewChangeactive'
                            : 'ViewChangeIcon'
                    }
                    onClick={(e) => {
                        e.preventDefault();
                        handleView('GridView');
                    }}
                />

                <Modal
                    title="Create APIs"
                    centered
                    visible={open}
                    onCancel={() => setOpen(false)}
                    footer={null}
                >
                    <p>Modal content goes here.</p>
                </Modal>
            </div>
        </div>
    );
};

export default MenuHeader;
