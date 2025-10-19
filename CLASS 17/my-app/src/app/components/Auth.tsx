"use client";
import React, { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";

const Auth = () => {
  const email = useRef<HTMLInputElement>(null);
  console.log(email);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const emailres = email.current?.value;
    console.log("ema ilres", emailres);

    e.preventDefault();

    const url = await fetch("api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailres }),
    });

    // receiving response from api
    const data = await url.json();

    if (data.redirectUrl) {
      router.push(data.redirectUrl);
    }
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={email}
          className="py-2 px-5 bg-slate-500 text-white"
          placeholder=" enter your e-mail"
        />
        <button
          className="px-5 py-2 bg-blue-500 text-white rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Auth;
