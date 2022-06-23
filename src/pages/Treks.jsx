import React from "react";
import NavbarCompo from "../components/Navbar";
import TrekCards from "../components/TrekCards";
import "./styles/treks.css";
function Treks() {
  return (
    <div>
      <NavbarCompo />
      <div className="trekHeader">
        <div className="layer">
          <h2>
            Our
            <span className="duo">Treks</span>{" "}
          </h2>
        </div>
      </div>
      <TrekCards />
    </div>
  );
}

export default Treks;
