import React, { useEffect, useState } from "react";
import TrekCards from "../components/TrekCards";
import "./styles/treks.css";
import axios from "axios";

function Treks() {
  
  const [data, setData] = useState("");
  async function getData() {
    try {
      const resp = await axios({
        method: "GET",
        url: "http://localhost8000:/api/treksList",
      });
      console.log(resp.data);
      setData(resp.data);
    } catch (err) {
      alert("Something went wrong");
      return [];
    }
  }
  useEffect(() => {
    getData();
  }, []);

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
      <TrekCards />
    </div>
  );
}

export default Treks;
