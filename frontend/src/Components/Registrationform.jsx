// Render Prop
import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Formside from "../SemiComponents/formside";
import { Link } from "react-router-dom";
const Registrationform = () => {
  const initialValues = {
    email: "",
    password: "",
    phone: "",
    firstname: "",
    lastname: "",
    location: "",
  };
  const handleSubmit = (values) => {
    const authOptions = {
      method: "post",
      url: "http://localhost:8000/api/user/create/",
      data: values,
      headers: {
        "Content-Type": "application/json",
      },
      json: true,
    };
    axios(authOptions)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="h-screen md:flex justify-center items-center ">
      <div className="md:flex md:p-12 rounded-2xl shadow-lg">
        <div className="md:w-1/2 ">
          <Formside />
        </div>
        <div className="  rounded-tr-2xl  rounded-br-2xl md:px-10 md:w-1/2 px-4">
          <h1 className="text-4xl font-thin mb-4 ">Register</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);
              handleSubmit(values);
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-8">
                <Field
                  name="firstname"
                  placeholder="Firstname"
                  className="p-2 rounded-lg outline-none border"
                />
                <ErrorMessage name="firstname" component="div" />
                <Field
                  name="lastname"
                  placeholder="Lastname"
                  className="p-2 rounded-lg outline-none border"
                />
                <ErrorMessage name="lastname" component="div" />

                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="p-2 rounded-lg outline-none border"
                />
                <ErrorMessage name="email" component="div" />
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="p-2 rounded-lg outline-none border"
                />
                <ErrorMessage name="password" component="div" />

                <Field
                  name="phone"
                  placeholder="Phone"
                  className="p-2 rounded-lg outline-none border"
                />
                <ErrorMessage name="phone" component="div" />
                <Field
                  name="location"
                  placeholder="Location"
                  className="p-2 rounded-lg outline-none border"
                />
                <ErrorMessage name="location" component="div" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#23CE6B] p-2 font-semibold text-white rounded-2xl"
                >
                  Register
                </button>
                <p className="text-center">
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#23CE6B]">
                    Login
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Registrationform;
