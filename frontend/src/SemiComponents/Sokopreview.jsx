import React from "react";
import Sokocard from "./Sokocard";
import {Link} from "react-router-dom"

function Sokopreview() {
  return (
    <div>
      <div>
        <p className="text-2xl ">Soko</p>
        <p>
          Find out the prices of various commodities at our storage facilities.
          Get also to sell your products at Market friendly prices.
        </p>
      </div>
      <div className="flex flex-col gap-4 my-6">
        <Sokocard />
        <Sokocard />
        <Sokocard />
      </div>
      <Link to='/soko' className="bg-[#23CE6B] p-2 text-white rounded-2xl">View Soko</Link>
    </div>
  );
}

export default Sokopreview;
