import React from "react";
import Header from "./Header";
import Missionvission from "./Missionvission";
import CustomizedAccordions from "./Accorion";
import Blogs from "./Blogsreview";
import Footer from "../SemiComponents/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Missionvission />
      <CustomizedAccordions />
      <Blogs />
      <Footer/>
    </div>
  );
}

export default Home;
