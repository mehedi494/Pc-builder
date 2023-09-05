import Layouts from "@/components/Layouts";
import { Button, Card, Divider, Input } from "antd";
import Image from "next/image";
import iconPic from "../../assets/dynabook-toshiba-satellite-pro-c40-g-11i-intel-11663225340.webp";

import { BsCpu } from "react-icons/bs";
const Pcbuilder = () => {
  return (
    <div className="flex py-2 justify-center items-center min-h-screen">
      <Card className="">
        <h1 className=" text-center font-semibold text-gray-600 text-2xl mb-2"><i>Build Your Custom Pc</i> </h1>
        <Divider type="horizontal"></Divider>
        {Array(4)
          .fill("")
          .map((product, index) => (
            <Card key={index} className="mb-2">
              <div className="flex w-full items-center gap-x-1 ">
                <BsCpu className="text-xl"></BsCpu>
                <p>Cpu</p>

                <Divider type="vertical"></Divider>
                <div>
                  <Image alt="" src={iconPic} width={50} height={50}></Image>
                </div>
                <div className="flex flex-col   ">
                  <p>
                    <b>
                      <i>Name:</i>{" "}
                    </b>{" "}
                    Intel i3 6 gen{" "}
                  </p>
                  <p>
                    <b>
                      <i>Model:</i>
                    </b>{" "}
                    6th gen 6490U Lpa-1700 socket
                  </p>
                  <p>
                    <b>
                      <i>Type:</i> PROCESSOR
                    </b>
                  </p>
                </div>
                <Divider className="" type="vertical"></Divider>
                <div className="flex  gap-x-1 items-center ">
                  <Input
                    type="number"
                    size="small"
                    defaultValue={1}
                    className="text-center  w-16"></Input>
                  <p className="border rounded p-1">
                    <i>Price: </i> 238 $
                  </p>
                  <Button type="dashed ">Select </Button>
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
