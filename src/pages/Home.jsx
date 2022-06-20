import { Button } from "react-bootstrap";
import React from "react";
import "./styles/home.css"
import Header from "../components/Header";
import NavbarCompo from "../components/Navbar";
import DiscountedTreks from "../components/DiscountedTreks"
import TrekCards from "../components/TrekCards";

function Home() {
  return (
    <div>
      <NavbarCompo />
      <Header />
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
      <div style={{ textAlign: "center" }}>
        <div className="discountedtreksSection">
          <span className="duo">Discounted </span>
          <span className="duo1">Treks</span>
        </div>
        <DiscountedTreks />
      </div>

    </div>
  );
}

export default Home;
