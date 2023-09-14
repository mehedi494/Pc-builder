import { DownOutlined, UserOutlined } from "@ant-design/icons";

import { Avatar, Button, Dropdown, Layout, Space, theme } from "antd";
import { useSession ,signOut} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const { Header, Content, Footer } = Layout;

const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      label: <Link href="/products">Cpu / Processor</Link>,
      key: "0",
    },
    {
      label: <Link href="/products">MotherBoard</Link>,
      key: "1",
    },
    {
      label: <Link href="/products">Ram</Link>,
      key: "2",
    },
    {
      label: <Link href="/products">Power supply</Link>,
      key: "3",
    },
    {
      label: <Link href="/products">Storage Device</Link>,
      key: "4",
    },
    {
      label: <Link href="/products">Monitor</Link>,
      key: "5",
    },
    {
      label: <Link href="/products">Others</Link>,
      key: "6",
    },
  ];
console.log(session?.user);
  return (
    <div>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "cernter",
        }}>
        <div className="flex items-center text-white m-0 p-0 text-xl font-bold  tablet:text-xl  mobile:text-sm ">
          <Link href="/">Pc Builder</Link>
        </div>

        <Space size={30}>
          {pathname !== "/products" && (
            <Dropdown
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
          )}

          <Link href="/pc-builder">
            <Button type="default">
              <p style={{ color: "white" }}>Pc Builder</p>
            </Button>
          </Link>

          {session?.user ? (
            <>
              <a>
                <Image alt='avater' width={30} height={20} src={session?.user?.image}className="rounded-[50%]"></Image>
              </a>
              <Button onClick={()=>signOut()} type="dashed" className="text-yellow-400">
              Log out
            </Button>
            </>
          ) : (
            <Button href="/login" type="dashed" className="bg-inherit text-yellow-400">
              Log in
            </Button>
          )}
        </Space>
      </Header>
    </div>
  );
};

export default Navbar;
