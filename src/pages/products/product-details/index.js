import Layouts from "@/components/Layouts";
import { Button, Card, Divider, Input } from "antd";
import Image from "next/image";
import image from "../../../assets/dynabook-toshiba-satellite-pro-c40-g-11i-intel-11663225340.webp";

const ProductDetails = () => {
  const data = [1, 2, 2, 2];
  return (
    <div>
      <div className="flex  w-full h-[450px]">
        {" "}
        {/* Upper section start*/}
        {/* Left side start */}
        <div className="w-full">
          <div className="flex justify-center items-center flex-col ">
            <Image
              className=" "
              src={image}
              width={400}
              height={50}
              alt=""></Image>

            <div className="flex gap-2">
              <Image
                className="border-2 "
                src={image}
                width={50}
                height={50}
                alt=""></Image>
              <Image
                className="border-2 "
                src={image}
                width={50}
                height={50}
                alt=""></Image>
              <Image
                className="border-2 "
                src={image}
                width={50}
                height={50}
                alt=""></Image>
            </div>
          </div>
        </div>{" "}
        {/* left side end */}
        {/* Right side  */}
        <div className=" w-full  py-8 h-screen ">
          <p className="text-center text-2xl text-gray-400">
            Specification below
          </p>

          <div className="flex   flex-col   ">
            <div>
              <h1>
                <b> Lenovo yoga idea pad i3</b>
              </h1>
              <p className="">
                Category : <i>Laptop</i>{" "}
              </p>
              <p>
                Description:{" "}
                <i>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officiis, veniam.
                </i>
              </p>
              <p>
                Price: <b>100$</b>
              </p>
              <p>
                Status: <b>IN STOCK</b>
              </p>
            </div>
            <div className=" flex felx-col gap-4 ">
              <p>Quantity</p>{" "}
              <Input
                size="small"
                value={1}
                type="text"
                className="inline w-10 text-center"
              />
              <Button type="default">Add to Cart</Button>
            </div>
          </div>
        </div>{" "}
        {/* righ side end */}
      </div>{" "}
      {/* Upper section end */}
      {/* bottom section */}
      <Divider></Divider>
      <p className="text-center text-gray-500 mb-4 font-semibold ">see more </p>
      <div className="flex justify-center gap-x-4 py-2 ">
        {Array(5)
          .fill("")
          .map((product, index) => (
            <Card
              key={index}
              hoverable
              style={{ width: 150 }}
              className="border-2"
              cover={<Image alt="example" src={image} />}></Card>
          ))}
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};
