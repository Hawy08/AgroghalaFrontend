import React, { useState } from 'react';
import axiosInstance from '../axios';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const response = await axiosInstance.post('user/accounts/login/', {
        email: values.email,
        password: values.password,
      });

      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      axiosInstance.defaults.headers['Authorization'] =
        'JWT ' + localStorage.getItem('access_token');

      // Redirect to the homepage after successful login
      navigate('/');
      console.log(response);
      console.log(response.data);
    } catch (error) {
      setError({ message: 'Login failed. Please check your credentials.' });
      console.error('Login failed', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="border-2 border-green-500 p-4 shadow-green-300 shadow-md rounded-md px-8 sm:w-4/5">
        <div className="text-3xl font-bold">
          <p className="">
            Agro<span className="text-[#23CE6B]">Ghala.</span>
          </p>
        </div>
        <div>
          <h2 className="mt-6 text-center text-3xl border-1 border-bottom font-medium text-gray-900">
            Login
          </h2>
        </div>
        <Formik
          initialValues={formData}
          onSubmit={handleLogin}
          validate={(values) => {
            const errors = {};

            if (!values.email) {
              errors.email = 'Email is required';
            }
            if (!values.password) {
              errors.password = 'Password is required';
            }

            return errors;
          }}
        >
          {({ isSubmitting, errors, touched, handleChange, handleBlur }) => (
            <Form className="mt-8 space-y-4">
              <div
                className={`form-group pt-3 ${
                  errors.email && touched.email ? 'has-error' : ''
                }`}
              >
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`p-3 rounded-lg outline-none border w-full ${
                    errors.email && touched.email
                      ? 'border-red-500'
                      : 'border-gray-300 focus:border-green-500'
                  } transition-all duration-300 transform ${
                    errors.email && touched.email ? 'shake' : ''
                  }`}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div
                className={`form-group pt-3 ${
                  errors.password && touched.password ? 'has-error' : ''
                }`}
              >
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={`p-3 rounded-lg outline-none border w-full ${
                    errors.password && touched.password
                      ? 'border-red-500'
                      : 'border-gray-300 focus:border-green-500'
                  } transition-all duration-300 transform ${
                    errors.password && touched.password ? 'shake' : ''
                  }`}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="password"
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
                  Login
                </button>
              </div>
              {error && (
                <p className="text-red-500 text-center">{error.message}</p>
              )}
              <p className="text-center">
                Don't have an account?{' '}
                <Link to="/signup" className="text-[#23CE6B]">
                  Register
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
