import React from "react";
import Header from "../other/Header";
import TaskNumbers from "../other/TaskNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashBoard = (props) => (
  <div className="p-10 bg-[#1C1C1E] h-screen">
    <Header changedUser={props.changedUser} data={props.data} />
    <TaskNumbers data={props.data} />
    <TaskList data={props.data} />
  </div>
);

export default EmployeeDashBoard;
