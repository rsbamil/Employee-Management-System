import React from "react";
import Header from "../other/Header";
import TaskNumbers from "../other/TaskNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashBoard = ({ data }) => (
  <div className="p-10 bg-[#1C1C1E] h-screen">
    <Header data={data} />
    <TaskNumbers data={data} />
    <TaskList data={data} />
  </div>
);

export default EmployeeDashBoard;
