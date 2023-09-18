import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../axios';


const BlogDetail = ({ match, history }) => {
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

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

  const handleDelete = () => {
    axiosInstance
    .delete(`/blogs/${match.params.id}/`)
      .then(response => {
        console.log('Blog deleted:', response);
        navigate('/blogs'); // Redirect to the blog list after deleting
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
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <Link to={`/blogs/${match.params.id}/edit`}>Edit</Link> |{' '}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BlogDetail;
