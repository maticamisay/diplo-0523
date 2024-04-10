import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
      </Routes>
      <div>footer</div>
    </>
  );
};

export default App;
