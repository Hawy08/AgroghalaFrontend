import React from "react";
import BlogsReviewCard from "./blogscard";

function Blogswrapper() {
  return (
    <div className="flex flex-col gap-6 md:px-64 md:py-14 mx-4 pb-8">
      <p className="text-3xl ">Top Stories</p>
      <BlogsReviewCard />
      <BlogsReviewCard />
      <BlogsReviewCard />
      <BlogsReviewCard />
      <BlogsReviewCard />
    </div>
  );
}

export default Blogswrapper;
