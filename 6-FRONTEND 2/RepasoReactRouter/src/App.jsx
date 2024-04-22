import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import ProductDetail from "./pages/product-detail";

const App = () => {
  return (
    <>
      <nav>navbar content</nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos/:idProducto" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default App;
