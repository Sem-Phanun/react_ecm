import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <Outlet/>
    </div>
  );
};

export default Layout;
