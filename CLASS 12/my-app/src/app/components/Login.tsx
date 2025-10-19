"use client";
import UserContext from "@/context/UserContext";
import React, { FormEvent, useContext, useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Use context properly here
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setUser({ userName, password }); // ✅ This only works if context is set up correctly
    console.log(userName, password);
  };

  return (
    <div>
      <div className="w-screen h-52 bg-red-500 text-center border-4">
        <h1>Login Form</h1>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        username is {userName} and password is {password}
      </div>
      <div className="bg-blue-800 text-white text-center">
        <p>
          From Context: username is {user?.userName} and password is{" "}
          {user?.password}
        </p>
      </div>
    </div>
  );
};

export default Login;
