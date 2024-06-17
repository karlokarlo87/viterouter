//import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
export default function Layout() {
  return (
    <>
      <div className="flex flex-row overflow-hidden">
        <Sidebar />
        <div className="flex-1 w-[calc(100vw-240px)] ml-[240px]">
          <Header />
          <div className="p-4">
            <div>{<Outlet />}</div>
          </div>
        </div>
      </div>
    </>
  );
}
