import React from "react";
import SokoModal from "./Sokocheckout";
import Mainsokocard from "./Sokocardmain";

function Sokopagewrapper(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="my-20">
      <p className="text-3xl m-8">Latest Price</p>
      <Mainsokocard handleOpen={handleOpen} />
      <SokoModal open={open} handleClose={handleClose} />
    </div>
  );
}

export default Sokopagewrapper;
