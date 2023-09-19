import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FloatingActionButtons from "./Floatingbtn";
import axiosInstance from "../axios";
import { useEffect, useState } from "react";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#23ce6b",
  boxShadow: 24,
  p: 4,
};

export default function MyghalaModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [myghala, setmyghala] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("http://16.170.231.209:8000/api/myghalas")
      .then((res) => {
        const data = res.data;
        console.log(data);
        setmyghala(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <FloatingActionButtons onClick={handleOpen}>
        Open modal
      </FloatingActionButtons>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p className="text-3xl text-white">MyGhala</p>
          {myghala.map((item) => (
            <div>
              <div className="shadow-md p-2 my-4 rounded-sm bg-white">
                <p>Ghala:{item.ghala}</p>
                <p>Bags Stored:{item.bags_stored}</p>
                <p>Date Rented:{item.date_rented}</p>
                <p>Duration:{item.duration_of_storage}</p>
              </div>
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
