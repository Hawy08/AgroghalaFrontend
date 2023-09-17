import React from "react";
import { Link } from "react-router-dom";
import ActionAreaCard from "./Blogcard";

function Blogspreview() {
  return (
    <div>
      <div>
        <p className="text-2xl ">Latest Stories</p>
         
      </div>
      <div className="flex flex-col gap-4 my-6">
        <ActionAreaCard/>
        <ActionAreaCard/>
        <ActionAreaCard/>
      </div>
      <Link to="/blogs" className="bg-[#23CE6B] p-2 text-white rounded-2xl">
        View Blogs
      </Link>
    </div>
  );
}

export default Blogspreview;
