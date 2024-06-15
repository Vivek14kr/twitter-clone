import React from "react";
import WestIcon from "@mui/icons-material/West";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Image from "next/image";
import CoinItem from "./CoinItem";

function MainBox() {
  return (
    <div className="space-y-4">
      <div className="hidden lg:block mt-4 ">
        <WestIcon className="cursor-pointer" style={{ color: "white" }} />
      </div>
      {/* Profile Header */}
      <div className="flex flex-col justify-center gap-4 space-x-4 p-2 pb-0 mb-0 bg-black-900 rounded-lg">
        <div
          style={{ background: "white" }}
          className="w-40 h-40 p-2 rounded-full"
        ></div>
        <div className="flex justify-between">
          <div className="flex w-1/2 flex-col gap-2">
            <h2 className="font-bold">@KakarotBuilds</h2>
            <p style={{ color: "#BFDBFE" }}>0x2342342342323</p>
            <p>
              Building in the SocialFi space. Coming soon to the blockchains
              near you!
            </p>
            <p className="mt-1 text-gray-400">Joined May 2024</p>
          </div>
          <div className="flex w-1/2 flex-col gap-2 items-end">
            <p className="underline text-yellow-500">
              30.30{" "}
              <span>
                <PowerSettingsNewIcon />
              </span>{" "}
            </p>
            <button className="bg-white-500 text-black bg-white px-4 py-2 rounded-full">
              <p className="shadow-lg shadow-black-500">Follow</p>
            </button>
          </div>
        </div>
        <div>
          <div className="flex mt-0 mb-0 gap-4">
            <p className="text-gray-400">
              <span style={{ color: "white" }}>2</span> Following
            </p>
            <p className="text-gray-400">
              <span style={{ color: "white" }}>2</span> Followers
            </p>
            <p className="text-gray-400">
              <span style={{ color: "white" }}>2</span> Likes
            </p>
            <p className="text-gray-400">
              <span style={{ color: "white" }}>2</span> Mentions
            </p>
          </div>
          <p className="mt-2 text-gray-400">
            Reward Earned: <span style={{ color: "white" }}>1.12 ETH</span>
          </p>
        </div>
      </div>
      {/* Coins Held */}
      <div className="bg-black-800 p-4 rounded-lg">
        <div className="flex justify-between border-bottom border-white-900">
          <p
            style={{ borderBottom: "6px solid  #1D9BF0" }}
            className="text-white pb-2 cursor-pointer text-xs md:text-base"
          >
            Coins held
          </p>
          <p className="text-gray-400 pb-2 cursor-pointer text-xs md:text-base">
            Replies
          </p>
          <p className="text-gray-400 pb-2 cursor-pointer text-xs md:text-base">
            Created Created
          </p>
          <p className="text-gray-400 pb-2 cursor-pointer text-xs md:text-base">
            Created Created
          </p>
        </div>
        <div className="space-y-4">
          <CoinItem />
          <CoinItem />
          <CoinItem />
        </div>
      </div>
    </div>
  );
}

export default MainBox;
