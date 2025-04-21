import React, { useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashBoard from "./components/dashbaord/EmployeeDashBoard";
import AdminDashBoard from "./components/dashbaord/AdminDashBoard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  useEffect(() => {
    // setLocalStorage();
    getLocalStorage();
  });

  return (
    <>
      <Login />
      {/* <EmployeeDashBoard /> */}
      {/* <AdminDashBoard /> */}
    </>
  );
};

export default App;
