import React, { useEffect, useState } from 'react';
import axiosInstance from '../axios';
const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axiosInstance
    .get('/blogs/')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>{blog.title} {blog.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
