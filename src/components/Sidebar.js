import React from "react";
import {
  BellIcon,
  EnvelopeIcon,
  UserIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Frog from "../assets/frog.png";
import SidebarLink from "./SidebarLink";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:translate-x-0 z-30 w-4/5 lg:w-1/5 p-4 flex flex-col bg-black`}
    >
      <div className="mb-4">
        <Image
          src={Logo}
          alt="Logo"
          className="w-10 h-10 cursor-pointer rounded-full ml-2"
        />
      </div>
      <nav className="space-y-4">
        <SidebarLink icon={<HomeIcon className="w-6 h-6" />} label="Home" />
        <SidebarLink
          icon={<BellIcon className="w-6 h-6" />}
          label="Notifications"
        />
        <SidebarLink
          icon={<EnvelopeIcon className="w-6 h-6" />}
          label="Messages"
        />
        <SidebarLink icon={<UserIcon className="w-6 h-6" />} label="Profile" />
        <SidebarLink icon={<CogIcon className="w-6 h-6" />} label="Settings" />
      </nav>
      <button className="mt-4 bg-yellow-500 text-white font-extrabold px-4 py-2 rounded-full hidden lg:block">
        <p
          style={{
            textShadow: "0px 5px 4px rgba(0, 0, 0, 0.5)",
            fontSize: "17px",
            fontFamily: "Inter",
            WebkitTextStroke: "1px rgba(7, 7, 7, 1)",
         
            fontWeight:"600",
            lineHeight:"20px",
            display: "inline-block",
          }}
        >
          Create a Coin
        </p>
      </button>
      <div className="w-full hidden lg:block">
        <div className="flex mt-4 ml-2 items-center gap-2">
          <Image
            src={Frog}
            alt="Profile Picture"
            className="w-12 h-10 rounded-full ml-2"
          />
          <div>
            <p className="font-roboto font-normal text-sm leading-5">Kakarot</p>
            <p className="font-roboto font-normal text-sm leading-5 text-[#71767B]">
              @KakarotBuilds
            </p>
          </div>
        </div>
      </div>
      {isOpen && (
        <button
          className="lg:hidden absolute top-4 right-4"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Sidebar;
