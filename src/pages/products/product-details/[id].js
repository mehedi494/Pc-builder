import Layouts from "@/components/Layouts";
import { Button, Divider, Input } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductDetails = ({ data }) => {
  const router = useRouter();
  const params = router.query.id;
  // console.log(data);
  // const { data } = useGetSingleProductQuery(params);

  const product = data?.data;

  const keyFeature = product?.keyFeature[0];

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
                Description: <i>{product?.description}</i>
              </p>
              <ul className="list-disc">
                <b>Features:</b>{" "}
                <li className="ml-4">Brand: {keyFeature?.brand}</li>
                <li className="ml-4">Model: {keyFeature?.model}</li>
                <li className="ml-4">
                  Specification: {keyFeature?.specification}
                </li>
              </ul>
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
        {/* {allProducts?.map((product, index) => (
          <Card
            key={index}
            hoverable
            style={{ width: 150 }}
            className="border-2"
            cover={<Image alt="example" src={product?.image} />}></Card>
        ))} */}
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.SERVER_BASE_URL}/products`);
  const data = await res.json();

  const paths = data?.data.map((product, index) => ({
    params: { id: product?._id },
  }));
  // console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`${process.env.SERVER_BASE_URL}/products/${id}`);
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      data,
    },
    revalidate: 20,
  };
};
