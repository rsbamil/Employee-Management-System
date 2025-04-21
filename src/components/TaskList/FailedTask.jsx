import React from "react";

const FailedTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5 ">
      <div className="flex  items-center justify-between">
        <h3 className="bg-yellow-600 px-3 py-1 rounded text-sm">High</h3>
        <h4 className="text-sm">Date</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a Yt Video</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum animi
        nesciunt delectus esse, ducimus amet.
      </p>
      <div className="mt-4">
        <button className="text-sm bg-red-600 py-1 px-2 rounded-sm hover:bg-red-800 transition duration-300 ease-in-out w-full">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
