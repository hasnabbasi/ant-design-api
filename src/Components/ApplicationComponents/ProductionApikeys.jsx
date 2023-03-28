import React, { useState } from "react";
import HeaderTitle from "./HeaderTitle";
import { Input } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
const ProductionApikeys = () => {
    const [radioCheck, setRadioCheck] = useState("None");

    return (
        <div>
            <HeaderTitle IpAddress={true} />
            <div className="productionkey-title">
                <h3>Production API Key</h3>
            </div>
            <div className="main-apikey">
                <div className="keys-div">
                    <p>Key Restriction</p>
                    <div className="key-manage">
                        <div className="radio-div">
                            <input
                                name="None"
                                type="radio"
                                className="None radio-btn"
                                value={radioCheck}
                                checked={radioCheck === "None"}
                                onChange={(e) => {
                                    setRadioCheck("None");
                                }}
                            />
                            <label htmlFor="None">None</label>
                            <input
                                name="IpAddress"
                                type="radio"
                                className="IpAddress radio-btn"
                                value={radioCheck}
                                checked={radioCheck === "IpAddress"}
                                onChange={(e) => {
                                    setRadioCheck("IpAddress");
                                }}
                            />
                            <label htmlFor="IpAddress">IP Address</label>
                            <input
                                name="Referrers"
                                type="radio"
                                className="Referrers radio-btn"
                                value={radioCheck}
                                checked={radioCheck === "Referrers"}
                                onChange={(e) => {
                                    setRadioCheck("Referrers");
                                }}
                            />
                            <label htmlFor="Referrers">HTTP Referrers(Web Sites)</label>
                        </div>
                    </div>
                </div>

                {radioCheck === "IpAddress" ? (
                    <div className="restrictionDescription">
                        <div className="IpaddressExample">
                            <p>Example of IP Address allowed</p>
                            <span>
                                Specify one IPV4 or IPV6 or a subnet using CIDR notation
                            </span>
                            <div className="exampleip-div">
                                <span>Example:</span>{" "}
                                <p>192.168.1.2, 152.12 .0.0/13 2002: eb8:2</p> <span>or</span>{" "}
                                <p>1001: ab8::/44</p>
                            </div>
                        </div>
                    </div>
                ) : radioCheck === "Referrers" ? (
                    <div className="restrictionDescription">
                        {" "}
                        <div className="IpaddressExample">
                            <p>Example of URLs allowed to restrict websites</p>
                            <div className="exampleip-div">
                                <span>A specify URL with an exact path: </span>{" "}
                                <p>www.example.com/path </p>
                            </div>
                            <div className="exampleip-div">
                                <span>Any URL in a Single Subdomain, Using a wildcard asterisk: </span>{" "}
                                <p>sub.example.com </p>
                            </div>
                            <div className="exampleip-div-2">
                                <span>Any Subdomain or path URLs in a single domain , Using wildcard
                                    Asterisk:  </span>
                                <p>example.com </p>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
           {radioCheck==="IpAddress"? <div className="apikey-input">
                <Input placeholder="IP Address" className="apikey-addinput"/>
                <span><PlusCircleFilled className="apikey-icon" /></span>
            </div>:radioCheck==="Referrers"?
            <div className="apikey-input refer-input">
                <Input placeholder="Refer" className="apikey-addinput"/>

            <span><PlusCircleFilled className="apikey-icon" /></span>
        </div>:null}
            <div className="apikeyGenerate">
                <button className="apikeyGenerate-btn">Generate Key</button>
                <p>Use the generate key button to generate a self contained JWT token</p>
            </div>
        </div>
    );
};

export default ProductionApikeys;
