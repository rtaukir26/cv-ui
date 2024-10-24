import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const CommonOutlet = () => {
  return (
    <div className="app-container">
      <Header/>
      <div className="main-body">
        <div>Side bar</div>

        <div className="wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CommonOutlet;
