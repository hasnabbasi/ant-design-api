import React from "react";
import HeaderTitle from "./HeaderTitle";
import { FileTextFilled } from "@ant-design/icons";
const OverviewApplication = () => {
  const Data = [
    {
      key:1,
      title: "Description",
      icon: <FileTextFilled className="icon-overview" />,
      textContent: "My Mobile Application",
    },
    {
      key:2,
      title: "Business Plan",
      icon: <FileTextFilled className="icon-overview" />,
      textContent: "20 Per Min",
    },
    {
      key:3,
      title: "Workflow status",
      icon: <FileTextFilled className="icon-overview" />,
      textContent: "Approved",
    },
    {
      key:4,
      title: "Application owner",
      icon: <FileTextFilled className="icon-overview" />,
      textContent: "Admin",
    },
  ];
  return (
    <div>
      <HeaderTitle />
      <div className="overviewContent">
        {Data.map((item) => {
          return (
            <div key={item.key}>
              <div className="content-item" style={item.key==1?{ marginTop: "10px" }:null}>
                <div className="icon-item">
                  {item.icon}
                  <p>{item.title}</p>
                </div>
                <div className="textcontent">{item.textContent}</div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OverviewApplication;
