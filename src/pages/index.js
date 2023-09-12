import Head from "next/head";

import Layouts from "@/components/Layouts";
import ProductCard from "@/components/Ui/Card";
import { Button, Carousel } from "antd";
import Image from "next/image";
import { useState } from "react";
import image1 from "../assets/apple-macbook-pro-late-2021-apple-m1-pro-142-11657363629.webp";
import image2 from "../assets/asus-x415ka-intel-cdc-n4500-14-inch-slate-grey-11667307058.webp";
import image3 from "../assets/dynabook-toshiba-satellite-pro-c40-g-109-intel-11681618797.webp";
import image4 from "../assets/dynabook-toshiba-satellite-pro-c40-g-11i-intel-11663225340.webp";
import image5 from "../assets/lenovo-ideapad-d330-10igl-intel-cdc-n4020-101-11646051236.webp";

export default function Home({ data }) {
  // const { data } = useGetAllProductsQuery();
  // console.log(data);

  const contentStyle = {
    height: "500px",
    color: "#fff",

    display: "flex",
  };

  const [dotPosition, setDotPosition] = useState("bottom");
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

  const bannerData = [
    {
      img: image1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae expedita amet aliquam quis voluptates ",
    },
    {
      img: image2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae expedita amet aliquam quis voluptates ",
    },
    {
      img: image3,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae expedita amet aliquam quis voluptates ",
    },
    {
      img: image4,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae expedita amet aliquam quis voluptates ",
    },
    {
      img: image5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae expedita amet aliquam quis voluptates ",
    },
  ];

  const sliceData = data.data.slice(0, 4);
  // console.log(sliceData);

  return (
    <>
      <Head>
        <title>Pc Builder | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ minHeight: "100vh", maxWidth: "100vw" }} className="">
        <div>
          <Carousel autoplay dotPosition={dotPosition}>
            {bannerData.map((product, index) => (
              <div key={index}>
                <div style={contentStyle}>
                  <div className="w-full flex justify-center items-center  flex-col px-4 ">
                    <h1 className="font-bold text-3xl text-justify  text-black">
                      {product.description}
                    </h1>
                    <p className="my-1 text-blue-900 text-xl ">
                      <i>So lets grab your device ✌️ </i>
                    </p>
                    <Button className="bg-green-600 text-white " type="text">
                      Get started{" "}
                    </Button>
                  </div>
                  <div className="w-full flex justify-center items-center   object-contain">
                    <Image className="w-full" alt="" src={product.img}></Image>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>

          <div className=" ">
            <p className="text-center text-2xl font-semibold  text-gray-600">
              Most Treanding Sales in this month
            </p>

            <div className="flex justify-center flex-row gap-x-12 py-4">
              {sliceData?.map((products, index) => (
                <ProductCard key={index} link={true} products={products}></ProductCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layouts>{page}</Layouts>;
};

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.SERVER_BASE_URL}/products`);
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      data,
    },
    revalidate: 30,
  };
};
