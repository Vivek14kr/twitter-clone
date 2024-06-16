import React from 'react'
import Rectange from "../assets/Rectangle.png";
import Image from 'next/image';

function CoinItem() {
  return (
    <div
      style={{
        borderRadius: "20px",
      }}
      className="bg-black border border-gray-500 p-3 mt-3 rounded-lg flex items-center justify-between"
    >
      <div className="flex items-center space-x-4">
        <Image src={Rectange} alt="Kittyann" className="w-16 h-16 " />
        <div>
          <h3 className="font-bold">KITTYANN Token</h3>
          <p
            style={{
              color: "#FBC025",
            }}
          >
            100 $KITTYANN (0.1 ETH)
          </p>
          <p
            style={{
              color: "#71767B",
            }}
          >
            Rewards: 0.1 ETH
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoinItem