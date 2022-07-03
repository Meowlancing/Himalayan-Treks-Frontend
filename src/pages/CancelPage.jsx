import React from "react";
import "./styles/treks.css";

function CancelPage() {
  return (
    <div>
      <div className="trekHeader">
        <div className="layer">
          <h2>
            Our
            <span className="duo">Cancellation</span>
            Pollicy
          </h2>
        </div>
      </div>
      <ul style={{padding: "50px 100px" , fontSize: "23px"}}>
        <li>
          Before 30 days: 90% of the total Land Package Cost is refundable
        </li>
        <li>
          Between 21-30 days: 75% of the total Land Package Cost is refundable.
        </li>
        <li>
          Between 11-20 days: 50% of the total Land Package Cost is refundable.
        </li>
        <li>Less than 10 days: No refund.</li>
      </ul>
    </div>
  );
}

export default CancelPage;
