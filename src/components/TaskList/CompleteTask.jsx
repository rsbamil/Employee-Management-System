import React from "react";

const CompleteTask = ({ data }) => {
  console.log(data);
  return (
    <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5 ">
      <div className="flex  items-center justify-between">
        <h3 className="bg-blue-600 px-3 py-1 rounded text-sm">High</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2">{data.description}</p>
      <div className="mt-4">
        <button className="text-sm bg-blue-600 py-1 px-2 rounded-sm hover:bg-blue-800 transition duration-300 ease-in-out w-full">
          {data.completed ? "Completed" : "Mark as Completed"}
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
