import React from "react";
import { Outlet } from "react-router";

const MainHeader = () => {
  
  return (
    <div>
      Header for every page
      <Outlet />
    </div>
  );
};

export default MainHeader;