import React from "react";
import BlogsCard from "../components/BlogsCard";
import NavbarCompo from "../components/Navbar";
import "./styles/treks.css";
function Blogs() {
  return (
    <div>
      <NavbarCompo />
      <div className="trekHeader">
        <div className="layer">
          <span>Our</span>
          <span className="duo">Recent</span>
          <span>Blogs</span>
        </div>
      </div>
      <BlogsCard />
    </div>
  );
}

export default Blogs;
