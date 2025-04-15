import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-semibold ">
        Hello <br /> <span className="text-3xl font-semibold">Rohit 👏</span>
      </h1>
      <button className="bg-red-500 text-white px-3 py-1 rounded-md font-medium shadow-md hover:bg-red-700 transition duration-200 ease-in-out">
        Logout
      </button>
    </div>
  );
};

export default Header;
