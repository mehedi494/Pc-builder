import "@/styles/Navbar.module.css";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

import { Avatar, Button, Dropdown, Layout, Space, theme } from "antd";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const { Header, Content, Footer } = Layout;

const Navbar = () => {

const pathname = usePathname()

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      label: <Link href='/products'>Cpu / Processor</Link>,
      key: "0",
    },
    {
      label: <Link href='/products'>MotherBoard</Link>,
      key: "1",
    },
    {
      label: <Link href='/products'>Ram</Link>,
      key: "2",
    },
    {
      label: <Link href='/products'>Power supply</Link>,
      key: "3",
    },
    {
      label: <Link href='/products'>Storage Device</Link>,
      key: "4",
    },
    {
      label: <Link href='/products'>Monitor</Link>,
      key: "5",
    },
    {
      label: <Link href='/products'>Others</Link>,
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
        }}>
        <div className="flex items-center text-white m-0 p-0 text-xl font-bold">
          <Link href="/">Pc Builder</Link>
        </div>

        <Space size={30}>
          {
          pathname !== "/products"&&<Dropdown
          menu={{
            items,
          }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space style={{ color: "white" }}>
              Categories
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
          }

          {/* <Link href="/products">
            <p style={{ color: "white" }}>Products</p>
          </Link> */}
          <Link href="/pc-builder">
            <Button type="default">
              <p style={{ color: "white" }}>Pc Builder</p>
            </Button>
          </Link>

          <a>
            <Avatar
              style={{
                backgroundColor: "#87d068",
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
