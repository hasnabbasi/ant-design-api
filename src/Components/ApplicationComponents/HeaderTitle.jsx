import React from "react";
import {
  EditFilled,
  DeleteFilled,
} from "@ant-design/icons";
const HeaderTitle = ({ apikey }) => {
  return (
    <div>
      <div className="header-title-application">
        <div>
          <p style={{ color: "#16375a" }} className="applicationheader-title">Test Application</p>
          <p className="subscription-total">0 Subscription</p>
        </div>
        {!apikey && <div className="headerapplication-icons">
          <EditFilled className="headerapplication-icon" />
          <DeleteFilled className="headerapplication-icon" />
        </div>}
      </div>
      <hr />
    </div>
  );
};

export default HeaderTitle;
