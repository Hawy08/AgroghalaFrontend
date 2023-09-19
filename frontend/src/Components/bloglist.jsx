import React, { useEffect, useState } from 'react';
import axiosInstance from '../axios';
import { Link } from 'react-router-dom';


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

  const handleReadClick = (blogId) => {
    // Replace this URL with your API endpoint for updating the read count
    const apiUrl = `/blogs/${blogId}/increase-reads/`;

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include any additional headers as needed
      },
      // You can send any data in the request body if required
      body: JSON.stringify({}),
    })
      .then((response) => {
        if (response.ok) {
          // Successful response, you can update the UI or handle it as needed
          console.log(`Read count increased for blog ${blogId}`);
        } else {
          // Handle error responses here
          console.error('Failed to increase read count');
        }
      })
      .catch((error) => {
        // Handle network errors or other exceptions here
        console.error('Error while making the request:', error);
      });
  };

  return (
    <div>
      <Link to='/blog/create'><button>post something</button></Link>
    {/* Blog List Header */}
    <h1 className='text-3xl font-bold mb-4'>Blog List</h1>

    {/* Blog Cards */}
    <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-4'>
      {blogs.map((blog) => (
        <div key={blog.id} className='max-w-sm bg-white border border-gray-100 rounded-lg shadow dark:bg-gray-100 dark:border-gray-100'>
          {/* Blog Image */}
          {/*<Link to={`/blogs/${blog.id}`}>
            <img className='rounded-t-lg' src={blog.image} alt='Blog' />
      </Link>*/}

          {/* Blog Content */}
          <div className='p-5'>
            {/* Blog Title */}
            <Link to={`/blogs/${blog.id}`}>
              <h5 className='mb-2 text-2xl font-bold text-green-500 hover:underline'>{blog.title}</h5>
            </Link>

            {/* Blog Content (Truncated to 3 lines) */}
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3'>{blog.content}</p>

            {/* Blog Details (Author, Date, Reads) */}
            <div className='flex justify-between items-center'>
              {/* Author and Date */}
              <span className='text-sm text-gray-600 dark:text-gray-400'>{blog.author_first_name} {blog.author_last_name}  {new Date(blog.date_posted).toLocaleDateString()}</span>
              {/* Read Count and Eye Icon */}
              <div className='flex items-center space-x-2'>
                {/* Eye Icon */}
                <button onClick={() => handleReadClick(blog.id)} className='focus:outline-none focus:ring-2 focus:ring-green-300 p-2 rounded-full hover:bg-green-300'>
                  <i className='text-green-500 far fa-eye'></i>
                </button>

                {/* Read Count (Styled) */}
                <span className='text-green-500 flex items-center'>
                <span className='pr-2'>{blog.reads}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                </svg>
              </span>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default BlogList;
