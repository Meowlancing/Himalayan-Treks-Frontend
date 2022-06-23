import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import BlogPage from "./pages/BlogPage";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Treks from "./pages/Treks";

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/treks" element={<Treks />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/:id" element={<BlogPage />} />
     </Routes>
     </>
  );
}
  
export default App;
