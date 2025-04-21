import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  console.log(data);
  return (
    <div
      id="TaskList"
      className="h-[55%] py-10 w-full  mt-10 flex items-center justify-start gap-5  flex-nowrap overflow-x-auto  "
    >
      {data.tasks.map((task) => {
        if (task.active) {
          return <AcceptTask />;
        }
        if (task.completed) {
          return <CompleteTask />;
        }
        if (task.failed) {
          return <FailedTask />;
        }
        if (task.newTask) {
          return <NewTask />;
        }
      })}
    </div>
  );
};

export default TaskList;
