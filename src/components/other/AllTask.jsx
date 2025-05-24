import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded-xl mt-5  ">
      <div className="bg-red-400 mb-2 py-2 px-5 flex justify-between rounded-xl">
        <h2 className="w-1/5 text-center font-semibold">Employee Name</h2>

        <h5 className="w-1/5 text-center font-semibold">New Task</h5>
        <h5 className="w-1/5 text-center font-semibold">Active Task</h5>
        <h5 className="w-1/5 text-center font-semibold">Completed</h5>
        <h5 className="w-1/5 text-center font-semibold">Failed</h5>
      </div>

      <div>
        {userData.map((employee, idx) => (
          <div
            key={idx}
            className="bg-zinc-900 mb-2 py-2 px-5 flex justify-between rounded-xl"
          >
            <h2 className="w-1/5 text-center">{employee.name}</h2>

            <h5 className="w-1/5 text-center text-yellow-600">
              {employee.taskCount.newTask}
            </h5>
            <h5 className="w-1/5 text-center text-violet-600">
              {employee.taskCount.active}
            </h5>
            <h5 className="w-1/5 text-center text-green-600">
              {employee.taskCount.completed}
            </h5>
            <h5 className="w-1/5 text-center text-red-600">
              {employee.taskCount.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
