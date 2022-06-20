import { Button } from "react-bootstrap";
import React from "react";
import "./styles/home.css";
import Header from "../components/Header";
import NavbarCompo from "../components/Navbar";
import DiscountedTreks from "../components/DiscountedTreks";
import TrekCards from "../components/TrekCards";

function Home() {
  return (
    <div>
      <NavbarCompo />
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
          <div style={{width: "100%"}}>
            <p>About Us</p>
            <h3>Himalyan Dreamtreks</h3>
            <span>
              We organized treks that belong in the Indian Himalayas. Our main aim
              is to provide a comfortable atmosphere with the highest degree of
              protection. All treks are led by a certified mountaineer and
              carefully planned to give trekkers the best possible experience.
            </span>
            <br />
            <a href="/about-us">
              <button className="aboutBtn">Learn More</button>
            </a>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Home;
