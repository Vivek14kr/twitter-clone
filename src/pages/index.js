import React, { useState } from "react";
import MainBox from "@/components/MainBox";
import RightSidebar from "@/components/RightSidebar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-grow lg:ml-[20%] lg:mr-[380px] mt-12 lg:mt-0 md:mt-0 sm:p-0 md:p-4 lg:p-4 overflow-y-auto">
        <MainBox />
      </div>
      <RightSidebar />
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={toggleSidebar}
        ></div>
      )}
      {!sidebarOpen && (
        <button
          className="fixed top-4 left-4 z-30 lg:hidden  bg-black"
          onClick={toggleSidebar}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
