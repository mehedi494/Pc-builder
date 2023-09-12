import ProductCard from "@/components/Ui/Card";
import { Divider } from "antd";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const SelectProduct = ({ data }) => {
  const router = useRouter();
  const { category } = router.query;

  
  
  return (
    <div className=" py-4">
      <h1 className="text-center text-2xl text-gray-600 ">
        Select Your {category.toUpperCase()} Componets Below
      </h1>
      <Divider></Divider>
      <div className="flex  gap-x-5  px-8 items-center justify-center ">
        {data?.data.map((products, key) => (
          <ProductCard  key={key} link={false} products={products}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default SelectProduct;

// export const getStaticPaths = async () => {
//   // console.log(context);
//   const res = await fetch(`${process.env.SERVER_BASE_URL}/products`);
//   const data = await res.json();

//   const category = [
//     "cpu",
//     "motherboard",
//     "ram",
//     "power supply",
//     "monitor",
//     "ssd",
//   ];

//   const paths = category.map((category) => ({
//     params: { category },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps = async (context) => {
  // ?category=${category}
  const { category } = context.params;
  console.log(context);
  const res = await fetch(
    `${process.env.SERVER_BASE_URL}/products?category=${category}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
