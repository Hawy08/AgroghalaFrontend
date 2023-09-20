import React, { useState, useEffect } from "react";
import Ghalascard from "./Ghalacard";
import GhalaModal from "./Ghalacheckout";
import axiosInstance from "../axios";

function Ghalasgenerator(props) {
  const [ghala, setghala] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleBuyClick = (item) => () => {
    setSelectedItem(item);
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
    setSelectedItem(null);
  };
  useEffect(() => {
    axiosInstance
      .get("http://16.170.231.209:8000/api/ghala/")
      .then((res) => {
        const data = res.data;
        setghala(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-8 my-16">
      {ghala.map((item) => (
        <Ghalascard
          key={item.id}
          image={item.images}
          name={item.ghala_name}
          address={item.address}
          price={item.rent_price}
          phone={item.phone_number}
          open={item.opening_time}
          close={item.closing_time}
          handleBuyClick={handleBuyClick(item)}
        />
      ))}
      {selectedItem && (
        <GhalaModal
          open={open}
          handleClose={handleCloseModal}
          handleOpen={handleBuyClick}
          ghalatitle={selectedItem.ghala_name}
          price={selectedItem.start_price}
        />
      )}
    </div>
  );
}

export default Ghalasgenerator;
