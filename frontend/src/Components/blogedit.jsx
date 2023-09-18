import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../axios';

const BlogEdit = ({ match, history }) => {
  const [blog, setBlog] = useState({ title: '', content: '' });
  const navigate = useNavigate()

  useEffect(() => {
    axiosInstance
    .get(`/blogs/${match.params.id}/`)
      .then(response => {
        setBlog(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [match.params.id]);

  const handleInputChange = (event) => {
    setBlog({ ...blog, [event.target.name]: event.target.value });
  };

  const handleUpdate = () => {
    axiosInstance
    .put(`/blogs/${match.params.id}/`, blog)
      .then(response => {
        console.log('Blog updated:', response);
        navigate(`/blogs/${match.params.id}`); // Redirect to the updated blog
      })
      .catch(error => {
        console.error(error);
      });
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Blog</h1>
      <input
        type="text"
        name="title"
        value={blog.title}
        onChange={handleInputChange}
      />
      <textarea
        name="content"
        value={blog.content}
        onChange={handleInputChange}
      />
      <button onClick={handleUpdate}>Update</button> |{' '}
      <Link to={`/blogs/${match.params.id}`}>Cancel</Link>
    </div>
  );
};

export default BlogEdit;
