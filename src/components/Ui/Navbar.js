import "@/styles/Navbar.module.css";
import { DownOutlined,UserOutlined } from "@ant-design/icons";

import { Avatar, Dropdown, Layout, Space, theme } from "antd";

const { Header, Content, Footer } = Layout;

const Navbar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item（disabled）",
      key: "3",
      disabled: true,
    },
  ];

  return (
    <div>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "cernter",
        }}
      >
        <div className="flex items-center text-white m-0 p-0 text-xl font-bold">
          Pc Builder
        </div>

        <Space size={30}>
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space style={{ color: "white" }}>
                Hover me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <a>
            <p style={{ color: "white" }}>Nav options</p>
          </a>
          <a>
            <p style={{ color: "white" }}>Nav options</p>
          </a>
          <a>
          <Avatar
      style={{
        backgroundColor: '#87d068',
      }}
      icon={<UserOutlined />}
    />
          </a>
        </Space>
      </Header>
    </div>
  );
};

export default Navbar;
