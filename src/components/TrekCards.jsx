import "./styles/trekcards.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TrekCards() {
  const [data, setData] = useState([]);
  async function getData() {
    try {
      const resp = await axios({
        method: "GET",
        url: "https://himalyan-explorations.herokuapp.com/api/treksList",
      });
      setData(resp.data);
    } catch (err) {
      console.log("Something went wrong");
      return [];
    }
  }
  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="treks">
      {data.map((item) => {
        return (
          <div className="trekCard">
          <Link to={"/treks-" + `${item.title}`} state={{ prop: item }}>
              <img src={"https://himalyan-explorations.herokuapp.com/" + item.img} />
            </Link>
            <div className="topLeft">
              <span>{item.days} </span>
              <span>Days</span>
            </div>
            <div className="topRight">
              <span>Rs. </span>
              <span>{item.price}</span>
            </div>
            <div className="bottom">
              <Link to={"/treks-" + `${item.title}`} state={{ prop: item }}>
                <button className="trekName">{item.title}</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TrekCards;
