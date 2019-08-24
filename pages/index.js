import React from "react";

import { Layout, Menu } from "antd";
const { Content } = Layout;

import Navigation from "../components/Navigation";

export default () => {
  return (
    <Layout>
      <Navigation />
      <Layout
        style={{
          padding: "112px 48px 48px 48px"
        }}
      >
        <Content
          style={{
            background: "#fff",
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        ></Content>
      </Layout>
    </Layout>
  );
};
