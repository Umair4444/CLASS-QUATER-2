import Image from "next/image";
import ChildComponents from "./components/ChildComponents";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      {/* <ChildComponents/> */}
      {/* <Button btnText="Signup" bgColor="bg-green-600" />
      <Button btnText="Login" bgColor="bg-purple-600" />
      <Button btnText="Logout" bgColor="bg-pink-600" /> */}
      <Navbar />
    </>
  );
}
