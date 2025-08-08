import React, { useState } from "react";
import { Layout, Menu, Button, Avatar, Badge, Dropdown } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellOutlined,
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
  TeamOutlined,
  FileTextOutlined,
  UnorderedListOutlined,
  AlignLeftOutlined,
} from "@ant-design/icons";
import "./sideBarMenu.scss";
import SubMenu from "antd/lib/menu/SubMenu";
import { SvgHome } from "../../@svg/home";

const { Header, Sider, Content } = Layout;

export const SideBarMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const userMenu = (
    <Menu>
      <Menu.Item key="info">
        <Button type="text" block>
          Thông tin cá nhân
        </Button>
      </Menu.Item>
      <Menu.Item key="logout">
        <Button type="text" danger block>
          Đăng xuất
        </Button>
      </Menu.Item>
    </Menu>
  );

  const notificationMenu = (
    <Menu>
      <Menu.Item key="1">Thông báo 1</Menu.Item>
      <Menu.Item key="2">Thông báo 2</Menu.Item>
      <Menu.Item key="3">Thông báo 3</Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh" }} className="sideBarMenu">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sideBarMenu__sider"
      >
        <div
          className="sideBarMenu__logo"
          style={{
            height: 32,
            margin: 16,
            background: "#fff",
            borderRadius: 6,
          }}
        />
        <Menu
          className="sideBarMenu__menu"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item
            className="sideBarMenu__menu-item"
            key="1"
            icon={<SvgHome />}
          >
            Trang chủ
          </Menu.Item>
          <SubMenu
            className="sideBarMenu__menu-subItem"
            key="2"
            icon={<UnorderedListOutlined />}
            title="Danh sách yêu cầu"
          >
            <Menu.Item key="2-1">Yêu cầu chờ duyệt</Menu.Item>
            <Menu.Item key="2-2">Yêu cầu đã duyệt</Menu.Item>
            <Menu.Item key="2-3">Yêu cầu bị từ chối</Menu.Item>
          </SubMenu>
          <SubMenu key="3" icon={<AlignLeftOutlined />} title="Yêu cầu của tôi">
            <Menu.Item key="3-1">Tạo yêu cầu mới</Menu.Item>
            <Menu.Item key="3-2">Lịch sử yêu cầu</Menu.Item>
          </SubMenu>
          <SubMenu key="4" icon={<SettingOutlined />} title="Cài đặt">
            <Menu.Item key="4-1">Thông tin cá nhân</Menu.Item>
            <Menu.Item key="4-2">Đổi mật khẩu</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header className="sideBarMenu__header">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <Dropdown
              overlay={notificationMenu}
              trigger={["click"]}
              placement="bottomRight"
            >
              <Badge count={5} style={{ cursor: "pointer" }}>
                <BellOutlined style={{ fontSize: 20 }} />
              </Badge>
            </Dropdown>
            <Dropdown
              overlay={userMenu}
              trigger={["click"]}
              placement="bottomRight"
            >
              <Avatar
                size="large"
                icon={<UserOutlined />}
                style={{ cursor: "pointer" }}
              />
            </Dropdown>
          </div>
        </Header>
        <Content className="sideBarMenu__content">
          Hiển thị nội dung item ở đây
        </Content>
      </Layout>
    </Layout>
  );
};
