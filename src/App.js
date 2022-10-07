import "./App.css";
import "./style/home.css";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Populer from "./components/Populer";
import React from "react";
import MCarousel from "./components/MCarousel";

function App() {
  return (
    <div>
      <div className="mainBackground">
        <NavBar />
        <Intro />
      </div>
      <div className="populer">
        <Populer />
      </div>
    </div>
  );
}

export default App;
