import React, { useState, useEffect } from "react";
import Ghalascard from "./Ghalacard";
import axios from "axios";

function Ghalasgenerator(props) {
  const [ghala, setghala] = useState([]);
  
  useEffect(() => {
    axios
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
    <div className="flex flex-col gap-8 my-16">
      {ghala.map((item) => (
        <Ghalascard
          image={item.images}
          name={item.ghala_name}
          address={item.address}
          price={item.start_price}
          phone={item.phone_number}
          open={item.opening_time}
          close={item.closing_time}
          handleOpen={props.handleOpen}
        />
      ))}
    </div>
  );
}

export default Ghalasgenerator;
