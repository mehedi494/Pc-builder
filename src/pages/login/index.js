import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import { signIn } from "next-auth/react";
const Login = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 h-screen">
      <div className="border bg-green-50 flex justify-center items-center text-4xl w-[400px] h-[200px]">
        <div>
          <h1 className="py-4 text-center text-gray-600">Log in with</h1>
          <div className="flex justify-around bg">
            <GoogleOutlined
              onClick={() =>
                signIn("google", { callbackUrl: "https://pc-builder-fronend.vercel.app" })
              }
            />
            <Divider type="vertical"></Divider>
            <GithubOutlined
              onClick={() =>
                signIn("github", { callbackUrl: "https://pc-builder-fronend.vercel.app" })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
