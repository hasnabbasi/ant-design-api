import React, { useState } from "react";
import {
  HomeFilled,
  CloseOutlined,
  AccountBookFilled,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
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

const appMenu = [
  getItem("Overview", "overview", <HomeFilled />),
  getItem("Subscriptions", "subscription", <HomeFilled />),
  getItem("Try Out", "tryout", <HomeFilled />),
  getItem("Comments", "comments", <HomeFilled />),
  getItem("Documentation", "documentation", <HomeFilled />),
  getItem("SDKs", "sdks", <HomeFilled />),
];


const apiMenu = [
  
  {
    key: "overview",
    icon: <HomeFilled />,
    label: "Overview",
    children: [
      getItem("Subscriptions", "subscription", <AccountBookFilled />),
      getItem("Sandbox Keys", "sandboxkeys", <HomeFilled />),
      getItem("Oauth2 Tokens", "sandboxOauth2tokens", <HomeFilled />),
      getItem("API Keys", "sandboxapikeys", <HomeFilled />),
      getItem("Subscription", "subscription", <HomeFilled />),
    ]
  },
  {
    key: "subscription",
    icon: <HomeFilled />,
    label: "Subscriptions",
    children: [
      getItem("Subscriptions", "subscription", <AccountBookFilled />),
      getItem("Sandbox Keys", "sandboxkeys", <HomeFilled />),
      getItem("Oauth2 Tokens", "sandboxOauth2tokens", <HomeFilled />),
      getItem("API Keys", "sandboxapikeys", <HomeFilled />),
      getItem("Subscription", "subscription", <HomeFilled />),
    ]
  },
   getItem("Subscriptions", "subscription", <AccountBookFilled />),
  getItem("Sandbox Keys", "sandboxkeys", <HomeFilled />),
  getItem("Oauth2 Tokens", "sandboxOauth2tokens", <HomeFilled />),
  getItem("API Keys", "sandboxapikeys", <HomeFilled />),
  getItem("Subscription", "subscription", <HomeFilled />),
];
const SidebarMenu = ({ ChangeComponent, selectedComponent }) => {
  const [menu, setMenu] = useState(apiMenu);
  const [icon, setIcon] = useState(<MenuFoldOutlined />);

  const onClick = (e) => {
    ChangeComponent(e.key);
  };

  const toggleMenu = () => {
    if (icon.type === MenuFoldOutlined) {
      setMenu(appMenu);
      setIcon(<CloseOutlined />);
    } else {
      setMenu(apiMenu);
      setIcon(<MenuFoldOutlined />);
    }
  };

  return (
    <Sider breakpoint="lg" collapsedWidth="80">
      <div className="logo"
      >
        Logo
      </div>
      <div>
        <div className="icon-div">
          <span className="icon-span icon" onClick={toggleMenu}>
            {icon}
          </span>
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
