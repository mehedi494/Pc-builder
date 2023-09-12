import Layouts from "@/components/Layouts";
import { removeComponets } from "@/redux/features/pcBuilderSlice";
import { Button, Card, Divider, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCpu, BsMemory, BsMotherboard, BsPower } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
// import iconPic from "../../assets/dynabook-toshiba-satellite-pro-c40-g-11i-intel-11663225340.webp";

const Pcbuilder = () => {
  const [cpu, setCpu] = useState({});
  const [motherboard, setMotherboard] = useState({});
  const [ram, setRam] = useState({});
  const [psu, setPsu] = useState({});
  const [monitor, setMonitor] = useState({});

  const { componets } = useSelector((state) => state.pcbuilder);
  const dispatch = useDispatch();

  useEffect(() => {
    componets.find((compo) => {
      if (compo.category === "cpu") {
        return setCpu(compo);
      } else if (compo.category === "motherboard") {
        return setMotherboard(compo);
      } else if (compo.category === "ram") {
        return setRam(compo);
      } else if (compo.category === "power supply") {
        return setPsu(compo);
      } else if (compo.category === "monitor") {
        return setMonitor(compo);
      }
    });
  }, [componets]);

  const cardData = (category) => {
    const res = componets.find((compo) => {
      if (compo.category === category) {
        return compo;
      }
    });
  };

  const cardCOntent = [
    {
      title: "CPU",
      icon: <BsCpu className="text-xl"></BsCpu>,
      type: "PROCESSOR",
      category: "cpu",
      data: cpu,
    },
    {
      title: "MOTHER BOARD",
      icon: <BsMotherboard className="text-xl"></BsMotherboard>,
      type: "MOTHERBOARD",
      category: "motherboard",
      data: motherboard,
    },
    {
      title: "RAM",
      icon: <BsMemory className="text-xl"></BsMemory>,
      type: "RAM",
      category: "ram",
      data: ram,
    },

    {
      title: "POWER SUPPLY",
      icon: <BsPower className="text-xl"></BsPower>,
      type: "POWER SUPPLY",
      category: "power supply",
      data: psu,
    },
    {
      title: "MONITOR",
      icon: <FiMonitor className="text-xl"></FiMonitor>,
      type: "MONITOR",
      category: "monitor",
      data: monitor,
    },
  ];

  const handleCancel = (category) => {
    switch (category) {
      case "cpu":
        setCpu({});
        break;
      case "motherboard":
        setMotherboard({});
        break;
      case "ram":
        setRam({});
        break;
      case "power supply":
        setPsu({});
        break;
      case "monitor":
        setMonitor({});
        break;
      default:
        break;
    }
  };
  return (
    <div className="flex py-2 justify-center items-center min-h-screen scroll-m-1">
      <Card className="">
        <h1 className=" text-center font-semibold text-gray-600 text-2xl mb-2">
          <i>Build Your Custom Pc</i>{" "}
        </h1>
        <Divider type="horizontal"></Divider>
        {cardCOntent.map((content, index) => (
          <Card key={index} className="mb-2">
            <div className="flex w-full justify-between items-center gap-x-1 ">
              {content?.icon}
              <p>{content.title}</p>

              <Divider type="vertical"></Divider>
              <div>
                <>{console.log(content?.data)}</>
                {content?.data?.image&& (
                  <Image
                    alt=""
                    src={content?.data?.image?.[0]}
                    width={50}
                    height={50}></Image>
                )}
              </div>
              {content?.data?.name && (
                <div className="flex flex-col   ">
                  <p>
                    <b>
                      <i> Name: </i>
                    </b>
                    {content?.data?.name}
                  </p>

                  <p>
                    <b>
                      <i>Model: </i>
                    </b>
                    {content?.data?.keyFeature?.[0].model}
                  </p>
                  <p>
                    <b>
                      <i>Type:</i> {content.category.toUpperCase()}
                    </b>
                  </p>
                </div>
              )}
              <Divider className="" type="vertical"></Divider>
              <div className="flex  gap-x-1 items-center ">
                {content?.data?.price && (
                  <>
                    <Input
                      type="number"
                      size="small"
                      defaultValue={1}
                      className="text-center  w-16"></Input>
                    <p className="border rounded p-1">
                      <i>Price: </i> {content?.data?.price} $
                    </p>
                  </>
                )}
                {content?.data?.name ? (
                  <Button
                    onClick={() =>
                      dispatch(removeComponets(content?.data?.category)) &&
                      handleCancel(content?.data?.category)
                    }
                    danger
                    type="primary">
                    cancel{" "}
                  </Button>
                ) : (
                  <Link href={`/select-pc-builder/${content?.category}`}>
                    <Button type="dashed ">Select </Button>
                  </Link>
                )}
              </div>
            </div>
          </Card>
        ))}
      </Card>
    </div>
  );
};

export default Pcbuilder;

Pcbuilder.getLayout = (page) => {
  return <Layouts>{page}</Layouts>;
};

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.SERVER_BASE_URL}/products`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
