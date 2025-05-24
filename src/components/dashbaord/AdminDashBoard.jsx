import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashBoard = (props) => {
  return (
    <div className="h-screen w-full py-2 px-10">
      <Header changedUser={props.changedUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashBoard;
