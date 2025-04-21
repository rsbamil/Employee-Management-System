import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className=" border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-zinc-500 "
            type="email"
            placeholder="Enter Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="  border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-zinc-500 mt-4"
            type="password"
            placeholder="Enter Password"
          />
          <button className="  bg-emerald-600 rounded-full py-3 px-5 text-xl outline-none placeholder:text-zinc-500 mt-4 shadow-md hover:bg-emerald-700 transition duration-300 ease-in-out">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
