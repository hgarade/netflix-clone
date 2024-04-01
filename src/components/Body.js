import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <>
      <Header /> <Outlet></Outlet>
    </>
  );
};

export default Body;
