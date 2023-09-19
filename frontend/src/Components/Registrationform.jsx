// Render Prop
import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Formside from "../SemiComponents/formside";
import * as Yup from "yup";
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
  const validationSchema = Yup.object({
    firstname: Yup.string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name cannot exceed 50 characters"),
    lastname: Yup.string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name cannot exceed 50 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    location: Yup.string()
      .required("Location is required")
      .min(3, "Location must be at least 3 characters")
      .max(100, "Location cannot exceed 100 characters"),

    phone: Yup.string()
      .required("Phone number is required")
      .matches(
        /^[0-9]{10}$/,
        "Phone number must be 10 digits long and contain only numbers"
      ),
  });
  const handleSubmit = (values) => {
    const authOptions = {
      method: "post",
      url: "http://16.170.231.209:8000/api/user/create/",
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
            validationSchema={validationSchema}
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
