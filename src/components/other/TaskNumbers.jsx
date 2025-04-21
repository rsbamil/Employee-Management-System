import React from "react";

const TaskNumbers = ({ data }) => {
  console.log(data);
  return (
    <div className="flex screen justify-between gap-5 mt-10">
      <div
        className="flex flex-col gap-1 items-center rounded-xl w-[45%] px-9
      py-6 bg-red-400 hover:bg-red-700 hover:text-black transition duration-200 ease-in-out"
      >
        <h2 className="text-3xl ">{data.taskCount.newTask}</h2>
        <h3 className="text-l ">New Task</h3>
      </div>
      <div
        className="flex flex-col gap-1 items-center rounded-xl w-[45%] px-9
      py-6 bg-blue-400 hover:bg-blue-700 transition duration-200 ease-in-out hover:text-black"
      >
        <h2 className="text-3xl">{data.taskCount.completed}</h2>
        <h3 className="text-l">Completed Task</h3>
      </div>
      <div
        className="flex flex-col gap-1 items-center rounded-xl w-[45%] px-9
      py-6 bg-green-400 hover:bg-green-700 transition duration-200 ease-in-out hover:text-black"
      >
        <h2 className="text-3xl">{data.taskCount.active}</h2>
        <h3 className="text-l">Accepted Task</h3>
      </div>
      <div
        className="flex flex-col gap-1 items-center rounded-xl w-[45%] px-9
      py-6 bg-yellow-400 hover:bg-yellow-700 transition duration-200 ease-in-out hover:text-black"
      >
        <h2 className="text-3xl">{data.taskCount.failed}</h2>
        <h3 className="text-l">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskNumbers;
