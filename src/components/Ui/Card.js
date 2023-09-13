import { addComponets } from "@/redux/features/pcBuilderSlice";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const { Meta } = Card;
const ProductCard = ({ products, link }) => {
  const img = products?.image[0];
  
  const { _id: id } = products;
  const router = useRouter();

  const dispatch = useDispatch();

  const handleAddtoBuild = () => {
    
  };

  return (
    <>
      {link ? (
        <Link href={`products/product-details/${id}`}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<Image width={300} height={200} alt="example" src={img} />}>
            <Meta title={products?.name} />
            <p>{products?.category}</p>
            <p>Price : {products?.price}</p>
            <p>status: {products?.status}</p>
            <p>Rating: 4.3/5.0</p>
          </Card>
        </Link>
      ) : (
        <Card
          onClick={() =>
            dispatch(addComponets(products)) & router.push("/pc-builder")
          }
          hoverable
          style={{
            width: 240,
          }}
          cover={<Image width={300} height={200} alt="example" src={img} />}>
          <Meta title={products?.name} />
          <p>{products?.category}</p>
          <p>Price : {products?.price}</p>
          <p>status: {products?.status}</p>
          <p>Rating: 4.3/5.0</p>
        </Card>
      )}
    </>
  );
};
export default ProductCard;
