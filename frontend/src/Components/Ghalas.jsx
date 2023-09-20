import React from "react";
import Ghalasgenerator from "../SemiComponents/Ghalasgenerator";
import Sokopreview from "../SemiComponents/Sokopreview";
import Blogspreview from "../SemiComponents/Blogspreview";

import MyghalaModal from "../SemiComponents/Myghalamodal";
function Ghalas() {
  return (
    <div>
      <div className="flex">
        <div className="w-2/3">
          <MyghalaModal />
          <Ghalasgenerator />
        </div>
        <div className="flex flex-col gap-10 w-1/3 py-16 px-6">
          <div>
            <Sokopreview />
          </div>
          <div>
            <Blogspreview />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ghalas;
