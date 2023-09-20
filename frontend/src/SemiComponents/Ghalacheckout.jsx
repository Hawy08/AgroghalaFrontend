import * as React from "react";
import Box from "@mui/material/Box";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Modal from "@mui/material/Modal";
import CropSelect from "./Dropdown";
import axiosInstance from "../axios";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function GhalaModal(props) {
  const [totalPrice, setTotalPrice] = React.useState(null);
  const initialValues = {
    commodity: "",
    quantity: "",
    period: "",
  };
  const totalGhalaPrice = (values) => {
    console.log(values);
    const ghalaUnitRentPrice = 200;
    const period = Number(values.period);
    const quantity = Number(values.quantity);
    const pricePayable = period * quantity * ghalaUnitRentPrice;
    console.log(pricePayable);
    return pricePayable;
  };
  useEffect((values) => {
    const res= axiosInstance.get("/user/me/")
    const user_id = res.user_id
     axiosInstance
      .get("http://16.170.231.209:8000/api/ghala/")
      .then((res) => {
        const data = res.data;

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
       axiosInstance
      .post("/myghalas/",{
        user:user_id,
        ghala:"",
        commodity:"",
        quantity:{values.quantity}


      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
   
 


  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Formik
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const totalPrice = totalGhalaPrice(values);
                setTotalPrice(totalPrice);
                console.log(values);
                totalGhalaPrice(values);
                setSubmitting(false);
                resetForm();
              }}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-8">
                  <div>
                    <p className="text-xl">{props.ghalatitle}</p>
                    <p>{props.price}</p>
                    <p className="text-xl">Price: {totalPrice} </p>
                  </div>
                  {/* <Field
                    name="commodity"
                    placeholder=" Commodity"
                    className="p-2 rounded-lg outline-none border"
                  />
                  <ErrorMessage name=" commodity" component="div" /> */}
                  <CropSelect />
                  <Field
                    name="quantity"
                    type="Number"
                    placeholder="Quantity"
                    className="p-2 rounded-lg outline-none border"
                  />
                  <ErrorMessage name="quantity" component="div" />

                  <Field
                    name="period"
                    placeholder="Period in months"
                    className="p-2 rounded-lg outline-none border"
                  />
                  <ErrorMessage name="period" component="div" />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#23CE6B] p-2 font-semibold text-white rounded-2xl"
                  >
                    Rent Ghala
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
