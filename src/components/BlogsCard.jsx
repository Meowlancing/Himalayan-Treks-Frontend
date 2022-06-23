import React from "react";
import { Card } from "react-bootstrap";
import "./styles/blogsCard.css";

function BlogsCard() {
  return (
    <div className="blogContainer">
      <Card className="blogCard">
        <Card.Body className="blogCardBody">
          <a href="/blogs/:id">
            <img
              src="https://himalayandreamtreks.in/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-09-at-16.20.08-min-1-768x432.jpeg"
              alt="banner"
            />
          </a>
          <h3>Covid-19 Report is Mandatory in Uttarakhand</h3>
          <a href="/blogs/:id">
            <button>Read More</button>
          </a>
          <span className="muted-text">April 9, 2021</span>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BlogsCard;
