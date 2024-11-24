"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const page = () => {
  const router = useRouter();
  return (
    <>
      <div className="font-sans text-3xl font-bold ">About Page</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore esse
        nemo sunt fugiat, laborum sed expedita explicabo quod nihil consequuntur
        architecto aliquid atque ducimus ipsum unde voluptates saepe quidem
        tempore eligendi aperiam, optio excepturi tempora? Inventore neque ea
        tenetur dolor odio dolorum hic deserunt eum.
      </p>
      <button
        className="flex items-center justify-center text-center font-bold text-2xl border-2 my-2 px-3 border-black hover:bg-red-500 "
        type="button"
        onClick={() => router.push("/")}
      >
        Go to Home
      </button>

      <Image
        src="https://th.bing.com/th/id/R.1a551aa4cba59342dff2decfbaa9c8dd?rik=KQTDhx1ZUAAfjA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flogo-template-png-logo-templates-1655.png&ehk=9MRokJPqMM6lr6AsMn50qqBGQgGuPYXFuTzMFbKjOa8%3d&risl=&pid=ImgRaw&r=0.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </>
  );
};

export default page;
