import React, { useState, useEffect } from "react";
import BlogsReviewCard from "./blogscard";
import axios from "axios";
function Blogswrapper() {
  const [blog, setblog] = useState([]);
  useEffect(() => {
    axios
      .get("http://16.170.231.209:8000/api/blogs/")
      .then((res) => {
        const data = res.data;
        setblog(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="flex flex-col gap-6 md:px-64 md:py-14 mx-4 pb-8">
      {blog.map((item) => (
        <div>
          <p className="text-3xl ">Top Stories</p>
          <BlogsReviewCard
            title={item.title}
            dateposted={item.date_posted}
            image={item.image}
            content={item.content}
          />
        </div>
      ))}
    </div>
  );
}

export default Blogswrapper;
