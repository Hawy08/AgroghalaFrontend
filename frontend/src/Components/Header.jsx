import React from "react";
import { Link } from "react-router-dom";
import lady from "../assets/IE67-TW4 1.png";

function Header() {
  return (
    <div className="flex justify-center mx-auto gap-28  ">
      <div className=" p-20">
        <p className="text-6xl py-16 font-thin ">
          Bridging the Gap to <br></br>Greenery <br></br>Connecting You to{" "}
          <br></br>Your Nearest Stores.
        </p>
        <Link to="/register">
          <button className="bg-[#23CE6B] text-white px-8 py-2 border-0 rounded-2xl font-semibold mb-20">
            Start Today
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
