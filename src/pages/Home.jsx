import { Button, Row, Col } from "react-bootstrap";
import React from "react";
import "./styles/home.css";
import Header from "../components/Header";
import NavbarCompo from "../components/Navbar";
import DiscountedTreks from "../components/DiscountedTreks";
import TrekCards from "../components/TrekCards";
import ClientTestimonials from "../components/ClientTestimonials";
import BlogsCard from "../components/BlogsCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      {/* treksection */}
      <div style={{ textAlign: "center" }}>
        <div className="treksSection">
          <span className="duo">Popular </span>
          <span className="duo1">Treks</span>
        </div>
        <TrekCards />
        <a href="/treks">
          <Button className="treksBtn">View More Treks</Button>
        </a>
      </div>
      {/* discounted treks section */}
      <div style={{ textAlign: "center" }}>
        <div className="discountedtreksSection">
          <span className="duo">Discounted </span>
          <span className="duo1">Treks</span>
        </div>
        <DiscountedTreks />
      </div>

      {/* about us section */}
      <div className="aboutHero">
        <div className="aboutDetails">
          <div style={{ width: "100%" }}>
            <p>About Us</p>
            <h3>Himalyan Dreamtreks</h3>
            <span>
              We organized treks that belong in the Indian Himalayas. Our main
              aim is to provide a comfortable atmosphere with the highest degree
              of protection. All treks are led by a certified mountaineer and
              carefully planned to give trekkers the best possible experience.
            </span>
            <br />
            <a href="/about-us">
              <button className="aboutBtn">Learn More</button>
            </a>
          </div>
        </div>
      </div>
      {/* testimonial section */}
      <div style={{ textAlign: "center" }}>
        <div className="discountedtreksSection">
          <span className="duo">Client </span>
          <span className="duo1">Testimonials</span>
        </div>
        <ClientTestimonials />
      </div>

      <div style={{ textAlign: "center" }}>
        <div className="discountedtreksSection">
          <span className="duo">Recent </span>
          <span className="duo1">Blogs</span>
        </div>
        {/* display 3 blogs only by slice method */}
        <BlogsCard />
        <a href="/blogs">
          <Button className="treksBtn">View More</Button>
        </a>
      </div>
      {/* certificate section */}
      <div style={{ textAlign: "center" }}>
        <div className="discountedtreksSection">
          <span className="duo">Our </span>
          <span className="duo1">Certification</span>
        </div>
        <div className="certificate">
          <Row>
            <Col lg="3" md="4" className="certificateContainer">
              <img
                src="https://himalayandreamtreks.in/wp-content/uploads/2021/02/msme-min.jpg"
                alt="certificates"
              />
            </Col>
            <Col lg="3" md="4" className="certificateContainer">
              <img
                src="https://himalayandreamtreks.in/wp-content/uploads/2021/02/startupindia-min.jpg"
                alt="certificates"
              />
            </Col>
            <Col lg="3" md="4" className="certificateContainer">
              <img
                src="https://himalayandreamtreks.in/wp-content/uploads/2021/02/TC-Winner1-min.gif"
                alt="certificates"
              />
            </Col>
            <Col lg="3" md="4" className="certificateContainer">
              <img
                src="https://himalayandreamtreks.in/wp-content/uploads/2021/02/UK-Logo-min.jpg"
                alt="certificates"
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Home;
