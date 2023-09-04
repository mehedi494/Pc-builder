import Layouts from "@/components/Layouts";
import ProductCard from "@/components/Ui/Card";
import { Menu } from "antd";
import { BiMemoryCard } from "react-icons/bi";
import {
  BsCpu,
  BsMemory,
  BsMotherboard,
  BsPower,
  BsThreeDots,
} from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";

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

const Products = () => {
  const onClick = (e) => {
    console.log("click", e);
  };

  return (
    <div className="flex w-full flex-row p-4  ">
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        mode="vertical"
        items={items}
      />
      <div className="w-full p-8  grid grid-cols-4 ">
        {Array(4)
          .fill("")
          .map((product, index) => (
            <ProductCard key={index}></ProductCard>
          ))}
      </div>
    </div>
  );
};
export default Products;

Products.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};

