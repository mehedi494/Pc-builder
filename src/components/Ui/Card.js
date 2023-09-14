import { addComponets } from "@/redux/features/pcBuilderSlice";
import { Button, Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const { Meta } = Card;
const ProductCard = ({ products, link }) => {
  const img = products?.image[0];

  const { _id } = products;
  const router = useRouter();

  const dispatch = useDispatch();

  const handleAddtoBuild = () => {};

  return (
    <>
      {link ? (
        <Link href={`products/product-details/${_id}`}>
          <Card
            hoverable
           className="w-[240px] desktop:w-[240px] tablet:w-[240px] mobile:w-[auto]"
            cover={<Image width={300} height={200} alt="example" src={img} />}>
            <Meta title={products?.name} />
            <p>Category: {products?.category}</p>
            <p>Price : {products?.price}</p>
            <p>status: {products?.status}</p>
            <p>Rating: 4.3/5.0</p>
          </Card>
        </Link>
      ) : (
        <Card
          
          
          style={{
            width: 240,
          }}
          cover={<Image width={300} height={200} alt="example" src={img} />}>
          <Meta title={products?.name} />
          <p>{products?.category}</p>
          <p>Price : {products?.price}</p>
          <p>status: {products?.status}</p>
          <p>Rating: 4.3/5.0</p>
          <Button onClick={() =>
            dispatch(addComponets(products)) & router.push("/pc-builder")
          } type="primary" className="bg-green-500"> Add To Builder</Button>
        </Card>
      )}
    </>
  );
};
export default ProductCard;
