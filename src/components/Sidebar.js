import React from 'react'
import {
  BellIcon,
  EnvelopeIcon,
  UserIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import WestIcon from "@mui/icons-material/West";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { HomeIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/logo.png";
import Image from "next/image";
import Frog from "../assets/frog.png";
import Rectange from "../assets/Rectangle.png";
import UltraStock from "../assets/ultrastock.png";
import SearchIcon from "@mui/icons-material/Search";
import RightMuscle from "../assets/right.png";
import LeftMuscle from "../assets/left.png";

import Taz from "../assets/taz.png";
import KingOfStock from "../assets/king.png";
import SidebarLink from './SidebarLink';

function Sidebar() {
  return (
    <div className="w-1/5 p-4 flex flex-col bg-black-900">
      <div className="mb-4 ">
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
      <button className="mt-4 bg-yellow-500 text-white font-extrabold  px-4 py-2 rounded-full hidden lg:block md:block">
        <p className="shadow-lg  shadow-black-500">Create a Coin</p>
      </button>

      <div className="w-full hidden lg:block md:block ">
        <div className="flex mt-4 ml-2 items-center gap-2">
          <Image
            src={Frog}
            alt="Logo"
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
    </div>
  );
}



export default Sidebar