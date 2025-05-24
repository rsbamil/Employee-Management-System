import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Create the new task object
    const newTask = {
      taskTitle,
      taskDate,
      taskDescription,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    // Update the userData immutably
    const updatedData = userData.map((elem) => {
      if (elem.name === assignTo) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask], // Add the new task to the tasks array
          taskCount: {
            ...elem.taskCount,
            newTask: elem.taskCount.newTask + 1, // Increment the newTask count
          },
        };
      }
      return elem;
    });

    // Update the state
    setUserData(updatedData);

    // Clear the form fields
    setAssignTo("");
    setTaskTitle("");
    setTaskDate("");
    setTaskDescription("");
    setCategory("");

    console.log(updatedData); // Log the updated data for debugging
  };

  return (
    <div>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex items-center justify-between mt-7 bg-[#1C1C1E] p-5 rounded-xl gap-10"
      >
        <div className="w-[45%] flex flex-col gap-3">
          <div>
            <h3 className="text-xl mb-2">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="bg-zinc-800 text-white px-3 py-2 rounded-md w-full"
              type="text"
              placeholder="Make UI Design"
            />
          </div>
          <div>
            <h3 className="text-xl mb-2">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="bg-zinc-800 text-white px-3 py-2 rounded-md w-full"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-xl mb-2">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="bg-zinc-800 text-white px-3 py-2 rounded-md w-full"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-xl mb-2">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-zinc-800 text-white px-3 py-2 rounded-md w-full"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[55%]">
          <h3 className="text-xl">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
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
