import {
  AlignLeftOutlined,
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Dropdown, Layout, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { useState } from "react";
import { SvgHome } from "../../@svg/home";
import { HomeDashboard } from "../../layout/Home/HomeDashboard/homeDashBoard";
import "./sideBarMenu.scss";
import { HomeTicket } from "../../layout/Home/HomeTicket/homeTicket";
import { TicketType } from "./../../properties/type";

const { Header, Sider, Content } = Layout;

export const SideBarMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");

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

  const renderContent = () => {
    switch (selectedKey) {
      case "1":
        return <HomeDashboard />;
      case "2-1":
        return <HomeTicket status={TicketType.Pending} />;
      case "2-2":
        return <HomeTicket status={TicketType.Pending} />;
      case "2-3":
        return <HomeTicket status={TicketType.Pending} />;

      default:
        return <div>Hiển thị nội dung item ở đây</div>;
    }
  };

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
          selectedKeys={[selectedKey]}
          onClick={({ key }) => setSelectedKey(key)} // Thêm dòng này
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
            <Menu.Item className="sideBarMenu__menu-subItem-item" key="2-1">
              Yêu cầu chờ duyệt
            </Menu.Item>
            <Menu.Item className="sideBarMenu__menu-subItem-item" key="2-2">
              Yêu cầu đã duyệt
            </Menu.Item>
            <Menu.Item className="sideBarMenu__menu-subItem-item" key="2-3">
              Yêu cầu bị từ chối
            </Menu.Item>
          </SubMenu>
          <SubMenu
            className="sideBarMenu__menu-subItem"
            key="3"
            icon={<AlignLeftOutlined />}
            title="Yêu cầu của tôi"
          >
            <Menu.Item className="sideBarMenu__menu-subItem-item" key="3-1">
              Tạo yêu cầu mới
            </Menu.Item>
            <Menu.Item className="sideBarMenu__menu-subItem-item" key="3-2">
              Lịch sử yêu cầu
            </Menu.Item>
          </SubMenu>
          <SubMenu
            className="sideBarMenu__menu-subItem"
            key="4"
            icon={<SettingOutlined />}
            title="Cài đặt"
          >
            <Menu.Item className="sideBarMenu__menu-subItem-item" key="4-1">
              Thông tin cá nhân
            </Menu.Item>
            <Menu.Item className="sideBarMenu__menu-subItem-item" key="4-2">
              Đổi mật khẩu
            </Menu.Item>
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
        <Content className="sideBarMenu__content">{renderContent()}</Content>
      </Layout>
    </Layout>
  );
};
