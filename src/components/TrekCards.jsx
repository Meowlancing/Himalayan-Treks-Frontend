import "./styles/trekcards.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function TrekCards() {
  const [data, setData] = useState("");
  async function getData() {
    try {
      const resp = await axios({
        method: "GET",
        url: "http://localhost:8000/api/treksList",
      });
      setData(resp.data);
    } catch (err) {
      alert("Something went wrong");
      return [];
    }
  }
  console.log(data);
  useEffect(() => {
    getData();
  }, []);


  return data.map((item) => {
    return (
      <div className="treks">
        <div className="trekCard">
          <a href="/treks-id">
            <img src="https://himalayandreamtreks.in/wp-content/uploads/2021/03/Kedarkantha-min-1.jpg" />
          </a>
          <div className="topLeft">
            <span>{item.days} </span>
            <span>Days</span>
          </div>
          <div className="topRight">
            <span>Rs. </span>
            <span>{item.price}</span>
          </div>
          <div className="bottom">
            <a href="/treks-id">
              <button className="trekName">{item.title}</button>
            </a>
          </div>
        </div>
      </div>
    );
  });
}

export default TrekCards;
