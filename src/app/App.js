import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import User from "../pages/User";
import Admin from "../pages/Admin";

function App() {
  return (
    <Routes>
      <Route exact path={"/"}element={<Home/>}/>
      <Route exact path={"/users"}element={<User/>}/>
      <Route exact path={"/admin"}element={<Admin/>}/>
    </Routes>
  );
}

export default App;
