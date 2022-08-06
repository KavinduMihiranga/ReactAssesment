import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import User from "../pages/User";
import Admin from "../pages/Admin";
import ProductManage from "../pages/ProductManage";
import CartManage from "../pages/CartManage";

function App() {
  return (
    <Routes>
      <Route exact path={"/"}element={<Home/>}/>
      <Route exact path={"/users"}element={<User/>}/>
      <Route exact path={"/admin"}element={<Admin/>}/>
      <Route exact path={"/product"}element={<ProductManage/>}/>
      <Route exact path={"/cart"}element={<CartManage/>}/>
    </Routes>
  );
}

export default App;
