"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Form = () => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("$");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("e",e);
    const res = await fetch(`/api/hello`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product, price }),
    });

    router.refresh();
    const data = await res.json();
    console.log("data",data);
  };

  // // Ensure the value always starts with '$'
  // if (!value.startsWith("$")) {
  //     setPrice("$" + value.replace(/[^0-9]/g, "")); // Remove invalid characters
  //   } else {
  //     setPrice("$" + value.slice(1).replace(/[^0-9]/g, "")); // Keep numbers after $
  //   }
  // };

  return (
    <div>
      <h1>Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          value={product}
          onChange={(event) => setProduct(event.target.value)}
          type="text"
          className="border-2 py-2 px-4"
          placeholder="Enter your Text"
        />
        <input
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          type="text"
          className="border-2 py-2 px-4"
          placeholder="Enter your Price"
        />
        <button type="submit" className="py-2 px-5 border-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
