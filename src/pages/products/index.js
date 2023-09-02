import Layouts from "@/components/Layouts";
import { MailOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import {BsCpu,BsMotherboard,BsMemory,BsPower,BsThreeDots} from 'react-icons/bs'
import {FiMonitor} from 'react-icons/fi'
import {BiMemoryCard} from 'react-icons/bi'


function getItem(label, key, icon, link) {
  return {
    key,
    icon,
    label: <a href={link}>{label}</a>,
  };
}
const items = [
  getItem("CPU", "sub1", <BsCpu />, "/"),
  getItem("MOTHERBOARD", "sub2", <BsMotherboard />, "/"),
  getItem("RAM", "sub3", <BsMemory />, "/"),
  getItem("POWER SUPPLY", "sub4", <BsPower />, "/"),
  getItem("MONITOR", "sub1", <FiMonitor />, "/"),
  getItem("STORAGE DEVICE", "sub1", <BiMemoryCard />, "/"),
  getItem("OTHERS", "sub1", <BsThreeDots />, "/"),
];
const onClick = (e) => {
  console.log("click", e);
};
const Products = () => {
  return (
    <div>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        mode="vertical"
        items={items}
      />
    </div>
  );
};
export default Products;

Products.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};
