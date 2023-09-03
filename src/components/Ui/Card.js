import { Card } from "antd";
import Image from "next/image";
import image from "../../assets/lenovo-ideapad-d330-10igl-intel-cdc-n4020-101-11646051236.webp";
const { Meta } = Card;
const ProductCard = ({ props }) => {
  return (
    <>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<Image width={300} height={200} alt="example" src={image} />}
      >
        <Meta title="Europe Street beat" />
        <p>CATERGORIES</p>
        <p>Price : 200000</p>
        <p>status: IN STOCK</p>
        <p>Rating: 4.3/5.0</p>
      </Card>
    </>
  );
};
export default ProductCard;
