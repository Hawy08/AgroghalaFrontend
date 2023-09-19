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
      <Link to='/blog/create'><button className='btn'>post something</button></Link>
    {/* Blog Cards */}
    <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-8'>
      {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={blog.image}
                  alt={`Image for ${blog.title}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600">{blog.content}</p>
                </div>
              </div>
            ))}
    </div>
  </div>
  );
};

export default BlogList;
