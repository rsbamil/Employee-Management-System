import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashBoard from "./components/dashbaord/EmployeeDashBoard";
import AdminDashBoard from "./components/dashbaord/AdminDashBoard";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/localStorage";

const App = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const [user, setUser] = useState(storedUser ? storedUser.role : null);
  const [loggedInUserdata, setLoggedInUserdata] = useState(
    storedUser ? storedUser.data : null
  );
  setLocalStorage();
  const Authdata = useContext(AuthContext);
  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (Authdata) {
      const employee = userData.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserdata(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashBoard changedUser={setUser} />
      ) : (
        <EmployeeDashBoard data={loggedInUserdata} changedUser={setUser} />
      )}
    </>
  );
};

export default App;
