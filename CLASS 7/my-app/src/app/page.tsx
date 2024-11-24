"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "./components/navbar";

export default function Home() {
  const router = useRouter();
  return (
    <>
      {/* <Navbar /> */}
      <div>My Home Page</div>

      <button type="button" onClick={() => router.push("/about")}>
        Go To About Page
      </button>
    </>
  );
}
