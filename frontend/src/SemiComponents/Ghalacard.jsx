import React from "react";
import BasicRating from "./Ratings";
import image1 from "../assets/Warehousing-system.jpg";

function Ghalacard() {
  return (
    <div className="md:flex gap-10 shadow-2xl p-2 rounded-xl">
      <div className="md:w-1/2">
        <img src={image1} alt="warehouse" className="h-full md:rounded-2xl" />
      </div>
      <div>
        <BasicRating />
        <div>
          <p className="md:text-2xl ">NCPB Narok</p>
          <p>Narok</p>
          <p className="text-[#23CE6B]">Ksh. 200 per bag</p>
          <p className="font-thin">
            078398934938 |<span> 1800hrs-1900hrs</span>
          </p>
          <button className="bg-[#23CE6B] p-2 my-2 text-white rounded-2xl ">Rent Ghala</button>
        </div>
      </div>
    </div>
  );
}

export default Ghalacard;
