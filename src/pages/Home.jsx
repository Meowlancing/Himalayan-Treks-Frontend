import { Button, Row, Col } from "react-bootstrap";
import React from "react";
import "./styles/home.css";
import Header from "../components/Header";
import DiscountedTreks from "../components/DiscountedTreks";
import TrekCards from "../components/TrekCards";
import ClientTestimonials from "../components/ClientTestimonials";
import BlogsCard from "../components/BlogsCard";
import WPbuttons from "../components/WPbuttons";

function Home() {
  return (
    <div>
    <WPbuttons/>
      <Header />
      {/* treksection */}
      <div style={{ textAlign: "center" }}>
        <div className="treksSection">
          <span className="duo">Popular </span>
          <span className="duo1">Treks</span>
        </div>
        <TrekCards item="true" />
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
            <h3>Himalyan Explorations</h3>
            <span>
              The Himalayan Exploration Company is a boldly developed operator
              considering on trips to the Himalaya. We have a strong track
              record and extensive experience of our equipment, while still
              advancing sufficiently to provide excellent budget service. We
              focus on customizing each trip according to the interests and
              expectations of our guests. Our troupes of excellent moments are
              often exclusive to The Himalayan Exploration, promising a unique
              adventure.
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
