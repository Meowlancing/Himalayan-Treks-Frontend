import { Card } from "react-bootstrap";
import "./styles/blogsCard.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogsCard() {
  const [data, setData] = useState([]);
  async function getData() {
    try {
      const resp = await axios({
        method: "GET",
        url: "https://himalyan-explorations.herokuapp.com/api/blogList",
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
    <div className="blogContainer">
      {data.map((item) => {
        return (
          <Card className="blogCard">
            <Card.Body className="blogCardBody">
              <a href="/id">
                <img
                  src={item.banner}
                  alt="banner"
                />
              </a>
              <h3>{item.title}</h3>
              <Link to={item.title} state={{ prop: item }}>
                <button>Read More</button>
              </Link>
              <span className="muted-text">{item.date}</span>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default BlogsCard;
