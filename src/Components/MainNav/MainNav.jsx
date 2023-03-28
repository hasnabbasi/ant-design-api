import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Select, theme } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import "./MainNav.css";

const MainNav = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    >
      <div className="Main-Nav-Header">
        <span>
          <Input
            size="large"
            placeholder="Search anything..."
            prefix={<SearchOutlined style={{ color: "#A0A3BD" }} />}
            id="searchInput"
            allowClear={true}
            style={{ backgroundColor: "#D9E7EF" }}
          />
        </span>
        <div style={{ display: "flex" }}>
          <img
            src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3BsYXlcLzBiN2Y0ZTliLWY1OWMtNDAyNC05ZjA2LWIzZGMxMjg1MGFiNy0xOTIwLTEwODAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9LCJ0b0Zvcm1hdCI6ImF2aWYifX0="
            alt="user"
            height={50}
            width={50}
            className="userImage"
          />
          <Select
          suffixIcon={<FontAwesomeIcon icon={faChevronDown} className="ant-select-suffix downarrow-select"/>}
            defaultValue="admin"
            bordered={false}
            className="user-select"
            style={{
              width: 100,
            }}
            options={[
              {
                value: "admin",
                label: "Admin",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "Yiminghe",
                label: "yiminghe",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
