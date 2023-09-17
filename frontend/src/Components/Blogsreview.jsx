import React from "react";
import BlogsReviewCard from "../SemiComponents/blogscard";

function Blogs() {
  return (
    <div className=" flex flex-col justify-center items-center  p-28 gap-8">
      <div>
        <p className="font-thin text-5xl">Hear What Our Farmers have to Say</p>
      </div>
      <BlogsReviewCard />
      <BlogsReviewCard />
      <BlogsReviewCard />
    </div>
  );
}

export default Blogs;
