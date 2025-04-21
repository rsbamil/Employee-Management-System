import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashBoard from "./components/dashbaord/EmployeeDashBoard";
import AdminDashBoard from "./components/dashbaord/AdminDashBoard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserdata, setLoggedInUserdata] = useState(null);
  const Authdata = useContext(AuthContext);

  // Restore user from localStorage on first mount
  useEffect(() => {
    const stored = localStorage.getItem("loggedInUser");
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed.role);
      if (parsed.role !== "admin") {
        setLoggedInUserdata(parsed); // it's the full employee object
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (Authdata && Authdata.employees) {
      const employee = Authdata.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserdata(employee);
        localStorage.setItem("loggedInUser", JSON.stringify(employee));
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
        <AdminDashBoard />
      ) : (
        <EmployeeDashBoard data={loggedInUserdata} />
      )}
    </>
  );
};

export default App;
