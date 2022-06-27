import React from "react";
import "./styles/trekcards.css";

function TrekCards() {
  return (
    <div className='treks'>
        <div className="trekCard">
        <a href="/treks-id">
          <img src="https://himalayandreamtreks.in/wp-content/uploads/2021/03/Kedarkantha-min-1.jpg" />
        </a>
        <div className="topLeft">
          <span>05 </span>
          <span>Days</span>
        </div>
        <div className="topRight">
          <span>Rs. </span>
          <span>8,999</span>
        </div>
        <div className="bottom">
          <a href="/treks-id">
            <button className="trekName">Kedarkantha Trek </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrekCards;
