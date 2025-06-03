//import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
export default function Layout() {
  return (
    <>
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        <Header />
        <Sidebar />
        <main className="xl:p-4 p-0 xl:ml-64 xl:pt-20 pt-20 mt-15 border-l ">
          {<Outlet />}
        </main>
      </div>
    </>
  );
}
