import Layouts from "@/components/Layouts";
import ProductCard from "@/components/Ui/Card";
import { useGetAllProductsQuery } from "@/redux/api/productsApi";

import { Menu } from "antd";
import { useEffect, useState } from "react";
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
  getItem("CPU", "cpu", <BsCpu />),
  getItem("MOTHERBOARD", "motherboard", <BsMotherboard />),
  getItem("RAM", "ram", <BsMemory />),
  getItem("POWER SUPPLY", "power supply", <BsPower />),
  getItem("MONITOR", "monitor", <FiMonitor />),
  getItem("STORAGE DEVICE", "ssd", <BiMemoryCard />),
  getItem("OTHERS", "others", <BsThreeDots />),
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const { data } = useGetAllProductsQuery();

  const onClick = (e) => {
    console.log("click", e);
    setProducts(selectProduct(e.key));
  };

  useEffect(() => {
    setProducts(data?.data);
  }, [data]);
  // console.log(products);
  const selectProduct = (category) => {
    const x = data?.data?.filter((product) => {
      if (product.category === category && category !== "others") {
        return product;
      } else if (
        category === "others" &&
        product.category !==
          ("monitor" &&
            "ssd" &&
            "power supply" &&
            "ram" &&
            "motherboard" &&
            "cpu")
      ) {
        return product;
        // console.log(product);
      }
    });
    console.log(x);
    return x;
  };

  // console.log(selectProduct);

  return (
    <div className="flex w-full flex-row p-4  ">
      <Menu
        onClick={/* () => selectProduct("ram") */ onClick}
        style={{
          width: 256,
        }}
        mode="vertical"
        items={items}
      />
      <div className="w-full p-8  grid grid-cols-4 gap-4  ">
        {products?.map((products, index) => (
          <ProductCard key={index} products={products}></ProductCard>
        ))}
      </div>
    </div>
  );
};
export default Products;

Products.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};
