import React, {useState} from 'react';
import {SlackOutlined, CaretDownOutlined} from '@ant-design/icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './MenuHeader.css';
// import {Button, Modal, Divider} from 'antd';
import {Card, Button, Divider} from 'antd';

import {faList} from "@fortawesome/free-solid-svg-icons";

const MenuHeader = ({handleView, view}) => {
    const [showCard, setShowCard] = useState(false);

    const handleButtonClick = () => {
        setShowCard(!showCard);
    }

    return (
        <div className="Menu-Header-Container">
            <div className="Menu-Header-Inner">
                <div className="total-api">
                    <h3 className="h3-medium">APIs</h3>
                    <span className="totalapi-span">Total APIs:32</span>
                </div>

            </div>

            <div className="Menu-Header-Inner">


                <div style={{position: 'relative', zIndex: 1}}>
                    <Button style={{backgroundColor: '#16375A', color: "white"}} onClick={handleButtonClick}>
                        Create APIs
                        <CaretDownOutlined/>
                    </Button>
                    {showCard && (
                        <Card style={{position: 'absolute', top: '130%', right: '0%', width: 'auto'}}>
                            <div style={{display: "flex" ,width:'auto'}}>
                                <div>
                                REST API <a href="#">Link</a>
                                </div>
                                <Divider type="vertical"/>
                                <div>
                                    REST API <a href="#">Link</a>
                                </div>
                                <Divider type="vertical"/>
                                <div>
                                    REST API <a href="#">Link</a>
                                </div>
                                <Divider type="vertical"/>
                                <div>
                                    REST API <a href="#">Link</a>
                                </div>
                                <Divider type="vertical"/>
                                <div>
                                    REST API <a href="#">Link</a>
                                </div>
                                <Divider type="vertical"/>
                                <div>
                                    REST API <a href="#">Link</a>
                                </div>
                                <Divider type="vertical"/>
                                <div>
                                    REST API <a href="#">Link</a>
                                </div>
                            </div>
                        </Card>
                    )}
                </div>
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

            </div>
        </div>
    );
};

export default MenuHeader;
