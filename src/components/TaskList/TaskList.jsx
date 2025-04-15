import React from "react";

const TaskList = () => {
  return (
    <div
      id="TaskList"
      className="h-[55%] py-10 w-full  mt-10 flex items-center justify-start gap-5  flex-nowrap overflow-x-auto  "
    >
      <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5 ">
        <div className="flex  items-center justify-between">
          <h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">Date</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Yt Video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum animi
          nesciunt delectus esse, ducimus amet.
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5 ">
        <div className="flex  items-center justify-between">
          <h3 className="bg-green-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">Date</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Yt Video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum animi
          nesciunt delectus esse, ducimus amet.
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5 ">
        <div className="flex  items-center justify-between">
          <h3 className="bg-blue-600 px-3 py-1 rounded text-sm">High</h3>
          <h4 className="text-sm">Date</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Yt Video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum animi
          nesciunt delectus esse, ducimus amet.
        </p>
      </div>
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
      </div>
    </div>
  );
};

export default TaskList;
