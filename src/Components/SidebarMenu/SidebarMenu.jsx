import React, { useState } from "react";
import {
  HomeFilled,
  AppstoreFilled,
  PieChartFilled,
  AccountBookFilled,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import "./SidebarMenu.css";
const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const menu1 = [
  getItem("Dashboard", "1", <HomeFilled />),
  getItem("Rate Limiting Policies", "sub1", null, [
    getItem("Gateways", "3", <AppstoreFilled />),
    getItem("API Categories", "4", <PieChartFilled />),
    getItem("Key Managers", "5", <AccountBookFilled />),
  ]),
  getItem("Gateways", "6", <AppstoreFilled />),
  getItem("API Categories", "7", <PieChartFilled />),
  getItem("Key Managers", "8", <AccountBookFilled />),
  getItem("Tasks", "sub2", null, [
    getItem("User Creation", "9", <AppstoreFilled />),
    getItem("Application Creation", "10", <PieChartFilled />),
    getItem("Subscription Creation", "11", <AccountBookFilled />),
    getItem("Subscription Update", "12", <AccountBookFilled />),
    getItem("Application Registration", "13", <AccountBookFilled />),
    getItem("API State Change", "14", <AccountBookFilled />),
    getItem("Api Product State Change", "15", <AccountBookFilled />),
  ]),
  getItem("Settings", "sub3", null, [
    getItem("Application", "17", <AppstoreFilled />),
    getItem("Scope Arrangements", "18", <PieChartFilled />),
    getItem("Advanced", "19", <AccountBookFilled />),
  ]),
];

const menu2 = [
  getItem("Overview", "overview", <HomeFilled />),
  getItem("Subscriptions", "subscription", <HomeFilled />),
  getItem("Try Out", "tryout", <HomeFilled />),
  getItem("Comments", "comments", <HomeFilled />),
  getItem("Documentation", "documentation", <HomeFilled />),
  getItem("SDKs", "sdks", <HomeFilled />),
];
const menu3 = [
  getItem("Overview", "overview", <HomeFilled />),
  getItem("Production Keys", "productionkeys", <HomeFilled />),
  getItem("OAuth2 Tokens", "productionOauth2tokens", <HomeFilled />),
  getItem("API Keys", "productionapikeys", <HomeFilled />),
  getItem("Sandbox Keys", "sandboxkeys", <HomeFilled />),
  getItem("Oauth2 Tokens", "sandboxOauth2tokens", <HomeFilled />),
  getItem("API Keys", "sandboxapikeys", <HomeFilled />),
  getItem("Subscription", "subscription", <HomeFilled />),
];
const SidebarMenu = ({
  ChangeComponent,
  selectedComponent,
  handleChangeMenu,
  changeMenu,
}) => {
  const [menu, setMenu] = useState(menu2);
  const onClick = (e) => {
    ChangeComponent(e.key);
  };
  return (
    <Sider breakpoint="lg" collapsedWidth="80">
      <div
        style={{
          padding: "1rem 0",
          textAlign: "center",
          color: "white",
          fontSize: "2rem",
        }}
      >
        Logo
      </div>
      <div>
        <div className="button-div">
          <Button
            size="small"
            className={changeMenu === "api" ? "api-btn active" : "api-btn"}
            onClick={(e) => {
              e.preventDefault();
              handleChangeMenu("api");
              ChangeComponent("overview");
              setMenu(menu2);
            }}
          >
            Api's
          </Button>
          <Button
            size="small"
            className={
              changeMenu === "application" ? "api-btn active" : "api-btn"
            }
            onClick={(e) => {
              e.preventDefault();
              handleChangeMenu("application");
              ChangeComponent("");
              setMenu(menu3);
            }}
          >
            {" "}
            Applications
          </Button>
        </div>
      </div>
      <Menu
        theme="dark"
        onClick={onClick}
        selectedKeys={[selectedComponent]}
        mode="inline"
        items={menu}
      />
    </Sider>
  );
};

export default SidebarMenu;
