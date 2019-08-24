import React, { useState, useEffect } from "react";

import { useRouter } from "next/router";

import { Avatar, Layout, Menu, Icon } from "antd";
const { Header } = Layout;
const { Item } = Menu;

export default () => {
  const router = useRouter();
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState("index");
  console.log("defaultSelectedKeys: ", defaultSelectedKeys);
  const handleClick = event => {
    event.preventDefault();
    console.log("event: ", event);
    let { key } = event;
    setDefaultSelectedKeys(key);
    router.push(`/${key}`);
  };
  return (
    <Header
      className="header"
      style={{ position: "fixed", zIndex: 1, width: "100%" }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[defaultSelectedKeys]}
        style={{ lineHeight: "69px" }}
        onClick={handleClick}
      >
        <Avatar
          icon="user"
          style={{ backgroundColor: "#1890ff", marginRight: "30px" }}
        />
        <Item key="index">
          <Icon type="home" />
        </Item>
        <Item key="foo">Foo</Item>
      </Menu>
    </Header>
  );
};
