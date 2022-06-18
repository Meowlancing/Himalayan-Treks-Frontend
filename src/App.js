import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Treks from "./pages/Treks";

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/treks" element={<Treks />} />
     </Routes>
     </>
  );
}

export default App;
