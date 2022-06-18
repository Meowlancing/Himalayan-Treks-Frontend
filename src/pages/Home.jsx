import { Button } from "react-bootstrap";
import React from "react";
import Header from "../components/Header";
import NavbarCompo from "../components/Navbar";
import "./styles/home.css"

function Home() {
  return (
    <div>
      <NavbarCompo />
      <Header />
      <Button className="treksBtn">View All</Button>
    </div>
  );
}

export default Home;
