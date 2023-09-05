import ProductCard from "@/components/Ui/Card";
import { Divider } from "antd";

const SelectProduct = () => {
  return (
    <div className=" py-4">
      <h1 className="text-center text-2xl text-gray-600 ">
        Select Your `Dynamic`  Componets Here
      </h1>
      <Divider></Divider>
      <div className="grid grid-cols-5 gap-2  px-8 items-center justify-center ">
        {Array(17)
          .fill("")
          .map((z, key) => (
            <ProductCard key={key}></ProductCard>
          ))}
      </div>
    </div>
  );
};

export default SelectProduct;
