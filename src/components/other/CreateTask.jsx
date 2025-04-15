import React from "react";

const CreateTask = () => {
  return (
    <div>
      <form className="flex items-center  justify-between mt-7 bg-[#1C1C1E] p-5 rounded-xl gap-10">
        <div className=" w-[45%] flex flex-col gap-3">
          <div>
            <h3 className="text-xl mb-2">Task Title</h3>
            <input
              className="bg-zinc-800 text-white px-3 py-2 rounded-md w-full"
              type="text"
              placeholder="Make UI Design "
            />
          </div>
          <div>
            <h3 className="text-xl mb-2">Date</h3>
            <input
              className="bg-zinc-800 text-white px-3 py-2 rounded-md w-full"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-xl mb-2">Assign To</h3>
            <input
              className="bg-zinc-800 text-white px-3 py-2 rounded-md w-full"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-xl mb-2">Category</h3>
            <input
              className="bg-zinc-800 text-white px-3 py-2 rounded-md w-full"
              type="text"
              placeholder="desgin , dev , etc"
            />
          </div>
        </div>
        <div className=" flex flex-col gap-4 w-[55%]">
          <h3 className="text-xl ">Description</h3>
          <textarea
            className="bg-zinc-800 border-2 border-emerald-500 rounded-xl"
            cols="30"
            rows="10"
          ></textarea>
          <button className="rounded bg-emerald-500 py-2 shadow-md hover:bg-emerald-700 duration-300 ease-in-out transition-all text-white font-semibold">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
