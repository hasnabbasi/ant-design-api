import React from "react";
import HeaderTitle from "./HeaderTitle";
import { Input, Checkbox } from "antd";
import { CopyFilled } from "@ant-design/icons";
const ProductionKeys = () => {
  return (
    <div>
      <HeaderTitle />
      <div className="productionkey-title">
        <h3>Production OAuth2 Key</h3>
        <p>Key and Secret</p>
      </div>
      <div className="customerandsecretkey">
      <div>
      <label htmlFor="customerkey" className="key-label">Customer Key</label>
      <Input name="customerkey" value="QW3425632YUYTR" suffix={<CopyFilled />} className="key-input"/>
      </div>
      <div>
      <label htmlFor="customersectretkey" className="key-label">Customer Secret</label>
      <Input name="customersectretkey" value="QW3425632YUYTR" suffix={<CopyFilled />} className="key-input"/>
      </div>
        
      </div>
      <div className="generate-btns">
        <button>GENERATE ACCESS TOKEN</button>
        <button>CURL TO GENERATE ACCESS TOKEN</button>
      </div>

      <div className="keyCOnfiguration">
        <h3>Key Configuration</h3>
        <div className="item-key">
          <p className="test">Token Expert</p>
          <span className="itemkeyUrl">
            https://www.kris.org/est-id-saepe-rem-et-quia-omnis-asperiore-et
          </span>
        </div>
        <hr />
        <div className="item-key">
          <p className="test">Token Expert</p>
          <span className="itemkeyUrl">
            https://www.kris.org/est-id-saepe-rem-et-quia-omnis-asperiore-et
          </span>
        </div>
        <hr />
        <div className="item-key-checkbox">
          <p className="test">Grant Type</p>
          <div>
            <div className="key-checkboxs">
              <Checkbox>Refresh Token</Checkbox>
              <Checkbox>SAML2</Checkbox>
              <Checkbox>Password</Checkbox>
              <Checkbox>Client Credentials</Checkbox>
              <Checkbox>IWA-NTLM</Checkbox>
              <Checkbox>JWT</Checkbox>
            </div>
            <p className="grant-accesshint">
              An Application is a logical Collection of APIs. Application is
              allow you to use a single token to ins
            </p>
          </div>
        </div>
        <hr />
      </div>
      <div className="productionkeys-inputmain">
        <label htmlFor="callbackurl" className="key-label">
          Callback URL
        </label>
        <Input
          className="productionkeys-input"
          placeholder="Callback URL"
          name="callbackurl"
        />
        <p className="key-hint">
          Callback URL is a redirection URL in the client application which is
          used by the authorized server to send the Client user-agent
        </p>
      </div>
      <div className="productionkeys-inputmain">
        <label htmlFor="tokenexpiry" className="key-label">
          Application access token expiry time
        </label>
        <Input
          className="productionkeys-input"
          placeholder="3600"
          name="tokenexpiry"
        />
        <p className="key-hint">Type application access token expiry time</p>
      </div>
      <div className="productionkeys-inputmain">
        <label htmlFor="useraccesstoken" className="key-label">
          User Access token expiry time
        </label>
        <Input
          className="productionkeys-input"
          placeholder="3600"
          name="useraccesstoken"
        />
        <p className="key-hint">Type user Access token expiry time</p>
      </div>
      <div className="productionkeys-inputmain">
        <label htmlFor="refreshtoken" className="key-label">
          Refresh Token Expiry Time
        </label>
        <Input
          className="productionkeys-input"
          placeholder="3600"
          name="refreshtoken"
        />
        <p className="key-hint">Type refresh Token Expiry Time</p>
      </div>
      <div className="productionkeys-inputmain">
        <label htmlFor="idToken" className="key-label">
          Id Token Expiry Time
        </label>
        <Input
          className="productionkeys-input"
          placeholder="3600"
          name="idToken"
        />
        <p className="key-hint">Type ID Token Expiry Time</p>
      </div>
      <div className="productioncheckboxs">
        <div className="key-checkboxs">
          <Checkbox>Enable PKCE</Checkbox>
          <Checkbox>Support PKCE Plain Text</Checkbox>
          <Checkbox>Public Client</Checkbox>
        </div>
      </div>
      <button className="production-generate-btn">Generate</button>
    </div>
  );
};

export default ProductionKeys;
