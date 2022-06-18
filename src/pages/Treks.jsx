import React from "react";
import "./styles/treks.css";

function Treks() {
  return (
    <div className="treks">
      <div className="trekCard">
        <a href="#">
          <img src="https://himalayandreamtreks.in/wp-content/uploads/2021/03/Kedarkantha-min-1.jpg" />
        </a>
        <div className="topLeft">
          <span>05 </span>
          <span>Days</span>
        </div>
        <div className="topRight">
          <span>Rs. </span>
          <span>7999</span>
        </div>
        <div className="bottom">
          <button className="trekName">Kedarkantha Trek </button>
        </div>
      </div>


    </div>
  );
}

export default Treks;
