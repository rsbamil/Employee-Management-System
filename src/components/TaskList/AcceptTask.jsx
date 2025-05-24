import React from "react";

const AcceptTask = ({ data }) => {
  console.log(data);
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5 ">
      <div className="flex  items-center justify-between">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="flex justify-between mt-4">
        <button className="text-sm bg-green-500 py-1 px-2 rounded-sm hover:bg-green-600 transition duration-300 ease-in-out">
          Mark as Completed
        </button>
        <button className="text-sm bg-red-500 py-1 px-2 rounded-sm hover:bg-red-600 transition duration-300 ease-in-out">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
