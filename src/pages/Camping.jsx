import React, { useEffect, useState } from "react";
import CampingCards from "../components/CampingCards";
import "./styles/treks.css";

function Treks() {
  return (
    <div>
      <div className="trekHeader">
        <div className="layer">
          <h2>
            Our
            <span className="duo">Treks</span>{" "}
          </h2>
        </div>
      </div>
      <CampingCards />
    </div>
  );
}

export default Treks;