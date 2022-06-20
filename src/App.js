import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Treks from "./pages/Treks";

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/treks" element={<Treks />} />
      <Route path="/about-us" element={<AboutUs />} />
     </Routes>
     </>
  );
}
  
export default App;
