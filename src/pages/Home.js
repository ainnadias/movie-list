import Populer from "./Populer";
import React from "react";
import Footer from "../components/Footer";
import Carousels from "../components/Carousels";
import "../style/home.css";
function Home() {
  return (
    <div>
      <div className="mainBackground">
        {/* <NavBar /> */}
        <Carousels />
        {/* <Intro /> */}
      </div>
      <div className="populer">
        <Populer />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
