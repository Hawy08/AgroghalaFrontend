import React, { useState } from 'react';
import axiosInstance from '../axios'; // Import your Axios instance for API requests
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import jwt_decode from 'jwt-decode'; // Import jwt-decode library

function BlogPostForm() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const token = localStorage.getItem('access_token'); // Retrieve JWT token from localStorage

      if (!token) {
        console.error('JWT token not found in localStorage');
        return;
      }

      // Decode the token to access its payload
      const decodedToken = jwt_decode(token);

      // Access the user's ID from the decoded token
      const userId = decodedToken.author; // Replace 'user_id' with the actual key in your payload

      const response = await axiosInstance.post(
        '/blogs/', // Replace with your blog post creation endpoint
        {
          author: userId,
          title: values.title,
          content: values.content,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : `JWT ${token}`, // Include JWT token in the Authorization header
          },
        }
      );

      if (response.status === 201) {
        // Blog post was successfully created (201 status code)
        // You can redirect or display a success message
        console.log('Blog post created successfully');
        navigate('/'); // Redirect to the homepage after successful creation
      } else {
        // Handle errors here (e.g., validation errors)
        console.error('Error creating blog post');
      }
    } catch (error) {
      setError({ message: 'Blog post creation failed.' });
      console.error('Blog post creation failed', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center lg:px-4 sm:px-1">
      <div className="border-2 border-green-500 p-4 shadow-green-300 shadow-md rounded-md lg:px-8 sm:px-4 lg:w-2/5">
        {/* Your blog post creation form JSX */}
        <Formik
          initialValues={{ title: '', content: '' }}
          onSubmit={handleSubmit}
          validate={(values) => {
            const errors = {};

            if (!values.title) {
              errors.title = 'Title is required';
            }
            if (!values.content) {
              errors.content = 'Content is required';
            }

            return errors;
          }}
        >
          {({ isSubmitting, errors, touched, handleChange, handleBlur }) => (
            <Form className="mt-8 space-y-4">
              <div
                className={`form-group pt-3 ${
                  errors.title && touched.title ? 'has-error' : ''
                }`}
              >
                <Field
                  type="text"
                  name="title"
                  placeholder="Title"
                  className={`p-3 rounded-lg outline-none border w-full ${
                    errors.title && touched.title
                      ? 'border-red-500'
                      : 'border-gray-300 focus:border-green-500'
                  } transition-all duration-300 transform ${
                    errors.title && touched.title ? 'shake' : ''
                  }`}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div
                className={`form-group pt-3 ${
                  errors.content && touched.content ? 'has-error' : ''
                }`}
              >
                <Field
                  as="textarea"
                  name="content"
                  placeholder="Content"
                  className={`p-3 rounded-lg outline-none border w-full h-40 ${
                    errors.content && touched.content
                      ? 'border-red-500'
                      : 'border-gray-300 focus:border-green-500'
                  } transition-all duration-300 transform ${
                    errors.content && touched.content ? 'shake' : ''
                  }`}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="content"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full p-3 bg-[#23CE6B] text-white font-semibold rounded-lg hover:bg-green-600"
                >
                  Create Blog Post
                </button>
              </div>
              {error && (
                <p className="text-red-500 text-center">{error.message}</p>
              )}
            </Form>
          )}
        </Formik>
        {/* End of your blog post creation form JSX */}
      </div>
    </div>
  );
}

export default BlogPostForm;
