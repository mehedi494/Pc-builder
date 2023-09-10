import Layouts from "@/components/Layouts";
import { useGetSingleProductQuery } from "@/redux/api/productsApi";
import { Button, Card, Divider, Input } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import image from "../../../assets/dynabook-toshiba-satellite-pro-c40-g-11i-intel-11663225340.webp";

const ProductDetails = ({}) => {
  const router = useRouter();
  const params = router.query.id;
  console.log(params);
  const { data } = useGetSingleProductQuery(params);
  const product = data?.data;
  console.log(product?.image);
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
              src={product?.image[0]}
              width={400}
              height={50}
              alt=""></Image>

            <div className="flex gap-2">
              {product?.image?.map((img, index) => {
                <Image
                  key={index}
                  className="border-2 "
                  src={img}
                  width={50}
                  height={50}
                  alt=""></Image>;
              })}
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
                <b> {product?.name}</b>
              </h1>
              <p className="">
                Category : <i>{product?.category}</i>{" "}
              </p>
              <p>
                Description:{" "}
                <i>
                  {product?.description}
                </i>
              </p>
              <p>
                Price: <b>{product?.price}$</b>
              </p>
              <p>
                Status: <b>{product?.status.toLocaleUpperCase()}</b>
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
