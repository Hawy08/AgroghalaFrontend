// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Formside from "../SemiComponents/formside";
import { Link } from "react-router-dom";
const Loginform = () => {
  const initialValues = {
    email: "",
    password: ""
    
  };
   
  return (
    <div className="h-screen md:flex justify-center items-center ">
      <div className="md:flex  md:p-12 rounded-2xl shadow-lg">
        <div className="md:w-1/2 ">
          <Formside />
        </div>
        <div className="  rounded-tr-2xl  rounded-br-2xl md:px-10 px-4 md:w-1/2">
          <h1 className="text-4xl font-thin mb-4 ">Login</h1>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);

              setSubmitting(false);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-8">
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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#23CE6B] p-2 font-semibold text-white rounded-2xl"
                >
                  <Link to='/ghalas'>Login</Link>
                </button>
                <p className="text-center">
                  Do not have an account?{" "}
                  <Link to="/register" className="text-[#23CE6B]">
                    Register
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

export default Loginform;
