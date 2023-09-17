import React from "react";
import Image from "../assets/Rectangle 29.png"

function Mainblogscard() {
  return (
    <div className="flex m-8 gap-14">
      <div className="w-1/3">
        <img src={Image} alt="product" />
      </div>
      <div>
        <span className="font-thin">12Kg Sold|400Kg Available</span>
        <p className="text-4xl ">Wheat</p>
        <p>Ksh. 2000</p>
        <button className="bg-[#23CE6B] px-8 py-1 my-12 text-white rounded-2xl  ">Sell</button>
      </div>
    </div>
  );
}

export default Mainblogscard;
