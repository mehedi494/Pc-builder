// import { RiFacebookBoxFill, RiInstagramLine } from 'react-icons/ri';
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div
      style={{ backgroundColor: "#1e1f27", color: "white", padding: "20px" }}
    >
      <div className="flex  w-full desktop:flex-row tablet:flex-row  mobile:flex-col  justify-between " >
        <div>
         <h1 className="text-3xl font-bold">Pc Builder</h1>
        </div>
        <div className="flex gap-x-5">
          <ul className="space-y-2">
            <li>Upcoming</li>
            <li>Shipping</li>
            <li>How it works</li>
          </ul>
          <ul className="space-y-2">
            <li>Support</li>
            <li>Careers</li>
          </ul>
          <ul className="space-y-2">
            <li> List your gear</li>
            <li> Contact team</li>
          </ul>
        </div>
        <div className="flex gap-2 text-2xl">
          {/* <RiFacebookBoxFill />
          <RiInstagramLine /> */}
        </div>
      </div>
      <div className="flex w-full mt-20 gap-5">
        <p>Privacy Policy</p>
        <p>Terms & Condition</p>
        <p className="ml-auto"> &#169; Pc builder {year}</p>
      </div>
    </div>
  );
}
