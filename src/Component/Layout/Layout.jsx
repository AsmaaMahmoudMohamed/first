import React from "react";
import Navbar from "../Navebar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />

      <div className=" py-5 ">
        <Outlet />
      </div>

    <Footer/>
    </>
  );
}
