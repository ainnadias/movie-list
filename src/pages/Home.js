import "../style/home.css";
import Intro from "./Intro";
import NavBar from "../components/NavBar";
import Populer from "./Populer";
import React from "react";
import Footer from "../components/Footer";
import Carousels from "../components/Carousels";
// import MCarousel from "./components/MCarousel";

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
