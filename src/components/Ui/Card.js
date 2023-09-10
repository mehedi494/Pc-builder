import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Meta } = Card;
const ProductCard = ({ products }) => {
  const img = products?.image[0];
  console.log(products);
  const {_id:id} = products;
  return (
    <>
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
    </>
  );
};
export default ProductCard;
