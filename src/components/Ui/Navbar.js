import "@/styles/Navbar.module.css";
import { DownOutlined,UserOutlined } from "@ant-design/icons";

import { Avatar, Button, Dropdown, Layout, Space, theme } from "antd";
import Link from "next/link";

const { Header, Content, Footer } = Layout;

const Navbar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      label: (
        <a
         
          href="https://www.antgroup.com"
        >
          Cpu / Processor
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          
          href="https://www.aliyun.com"
        >
          MotherBoard
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a
          
          href="https://www.aliyun.com"
        >
          Ram
        </a>
      ),
      key: "2",
    },
    {
      label: (
        <a
          
          href="https://www.aliyun.com"
        >
          Power Supply
        </a>
      ),
      key: "3",
    },
    {
      label: (
        <a
          
          href="https://www.aliyun.com"
        >
         Storage Device
        </a>
      ),
      key: "4",
    },
    {
      label: (
        <a
          
          href="https://www.aliyun.com"
        >
        Monitor
        </a>
      ),
      key: "5",
    },
    {
      label: (
        <a
          
          href="https://www.aliyun.com"
        >
       others
        </a>
      ),
      key: "6",
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
        <Link href='/'>Pc Builder</Link>
        </div>

        <Space size={30}>
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space style={{ color: "white" }}>
              Categories
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

          <Link href='/products'>
            <p style={{ color: "white" }}>Products</p>
          </Link>
          <Link href='/pc-builder'>
            <Button type="default" >
            <p style={{ color: "white" }}>Pc Builder</p>
            </Button>
          </Link>
          
         
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
