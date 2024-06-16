import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import Rectange from "../assets/Rectangle.png";
import UltraStock from "../assets/ultrastock.png";
import RightMuscle from "../assets/right.png";
import LeftMuscle from "../assets/left.png";
import Taz from "../assets/taz.png";
import KingOfStock from "../assets/king.png";
import Frog from "../assets/frog.png";

function RightSidebar() {
  return (
    <div
      style={{ width: "400px" }}
      className="hidden lg:block fixed inset-y-0 right-0 p-4 bg-black"
    >
      <div className="relative w-full max-w-md mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
        </div>
        <input
          type="text"
          className="w-full pl-10 pr-3 py-2 rounded-full bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:bg-gray-700"
          placeholder="Search a coin"
        />
      </div>
      <div className="bg-black-900 border border-gray-500 p-4 rounded-[16px] mt-4 mb-4">
        <div className="space-y-2">
          <div className="ml-4 flex items-center relative w-fit">
            <Image
              src={RightMuscle}
              className="w-5 h-5 absolute right-[-20px]"
              alt="left"
            />
            <Image
              src={UltraStock}
              alt="ultrasotck"
              style={{
                width: "182px",
                height: "40px",
              }}
            />
            <Image
              src={LeftMuscle}
              className="w-5 h-5 absolute left-[-20px]"
              alt="right"
            />
          </div>
          <div className="flex gap-4">
            <Image src={Rectange} alt="cat" className="w-20 h-20" />
            <div>
              <p>KITTYANN Token</p>
              <p className="text-yellow-500">$KITTYANN</p>
              <p className="text-blue-500">Created by @bonk20_solana</p>
              <p className="text-green-300">Market cap: 46.03K (10%)</p>
              <p className="text-green-300">Comments: 80, Holders: 200</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black-900 border border-gray-500 p-4 rounded-[16px] mt-4 mb-4">
        <div className="space-y-2">
          <div className="ml-4 flex items-center relative w-fit">
            <Image
              src={Taz}
              className="w-5 h-5 absolute left-[-10px] top-[-10px]"
              alt="left"
            />
            <Image
              src={KingOfStock}
              alt="ultrasotck"
              style={{
                width: "182px",
                height: "40px",
              }}
            />
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className="flex w-full justify-between items-center">
              <div className="flex items-center gap-2">
                <Image
                  src={Frog}
                  alt="Logo"
                  className="w-12 h-10 rounded-full ml-2"
                />
                <div className="max-w-xs">
                  <p>@PhysicsToday</p>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "140px",
                      maxWidth: "150px", // Adjust this value as needed
                    }}
                  >
                    Building in the SocialFi sdkfj sdlf sfs sdjf skdljfls fjsdlk
                    f
                  </p>
                </div>
              </div>
              <button
                style={{
                  height: "32px",
                }}
                className="bg-white-500 text-black bg-white px-4 py-1 rounded-full"
              >
                <p className="shadow-lg shadow-black-500">Follow</p>
              </button>
            </div>{" "}
            <div className="flex w-full justify-between items-center">
              <div className="flex items-center gap-2">
                <Image
                  src={Frog}
                  alt="Logo"
                  className="w-12 h-10 rounded-full ml-2"
                />
                <div className="max-w-xs">
                  <p>@PhysicsToday</p>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "140px",
                      maxWidth: "150px", // Adjust this value as needed
                    }}
                  >
                    Building in the SocialFi sdkfj sdlf sfs sdjf skdljfls fjsdlk
                    f
                  </p>
                </div>
              </div>
              <button
                style={{
                  height: "32px",
                }}
                className="bg-white-500 text-black bg-white px-4 py-1 rounded-full"
              >
                <p className="shadow-lg shadow-black-500">Follow</p>
              </button>
            </div>{" "}
            <div className="flex w-full justify-between items-center">
              <div className="flex items-center gap-2">
                <Image
                  src={Frog}
                  alt="Logo"
                  className="w-12 h-10 rounded-full ml-2"
                />
                <div className="max-w-xs">
                  <p>@PhysicsToday</p>
                  <p
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      width: "140px",
                      maxWidth: "150px", // Adjust this value as needed
                    }}
                  >
                    Building in the SocialFi sdkfj sdlf sfs sdjf skdljfls fjsdlk
                    f
                  </p>
                </div>
              </div>
              <button
                style={{
                  height: "32px",
                }}
                className="bg-white-500 text-black bg-white px-4 py-1 rounded-full"
              >
                <p className="shadow-lg shadow-black-500">Follow</p>
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
      <div style={{}} className="w-full flex justify-center">
        <div
          style={{
            fontSize: "13px",
            color: "#71767B",
            display: "flex",

            flexWrap: "wrap",
            columnGap: "15px",
            rowGap: "2px",
          }}
          className=""
        >
          <p>Terms of Service</p>
          <p>Privacy Policy</p> <p>Cookie Policy</p> <p>Accessibility</p>{" "}
          <p>Ads info</p> <p>More</p> <p>© 2024 X Corp.</p>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
