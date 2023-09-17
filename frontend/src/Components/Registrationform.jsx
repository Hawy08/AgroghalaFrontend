// Render Prop
import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Registrationform = () => {
  const initialValues = {
    email: "",
    password: "",
    // conpassword: "",
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
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          //   console.log(values);
          handleSubmit(values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="firstname" />
            <ErrorMessage name="firstname" component="div" />
            <Field name="lastname" />
            <ErrorMessage name="lastname" component="div" />
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            {/* <Field type="password" name="conpassword" />
            <ErrorMessage name="conpassword" component="div" /> */}
            <Field name="location" />
            <ErrorMessage name="location" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registrationform;
