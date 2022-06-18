import { Button } from "react-bootstrap";
import React from "react";
import Header from "../components/Header";
import NavbarCompo from "../components/Navbar";
import "./styles/home.css"
import Treks from "./Treks";

function Home() {
  return (
    <div>
      <NavbarCompo />
      <Header />
      <div style={{textAlign: "center"}}>
        <div className="treksSection">
          <span className="duo">Popular </span>
          <span className="duo1">Treks</span>
        </div>
        <Treks />
        <Button className="treksBtn">View More Treks</Button>
      </div>


    </div>
  );
}

export default Home;
