import { Card } from "react-bootstrap";
import "./styles/blogsCard.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function BlogsCard() {
  const [data, setData] = useState("");
  async function getData() {
    try {
      const resp = await axios({
        method: "GET",
        url: "http://localhost:8000/api/blogList",
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
      <div className="blogContainer">
        <Card className="blogCard">
          <Card.Body className="blogCardBody">
            <a href="/id">
              <img
                src={item.banner != "" ? `$(item.banner)` : "https://www.emergingedtech.com/wp/wp-content/uploads/2018/04/blogging.jpg" }
                alt="banner"
              />
            </a>
            <h3>{item.title}</h3>
            <a href="/id">
              <button>Read More</button>
            </a>
            <span className="muted-text">{item.date}</span>
          </Card.Body>
        </Card>
      </div>
    );
  });
}

export default BlogsCard;
