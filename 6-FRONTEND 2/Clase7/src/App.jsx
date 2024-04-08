import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./ui/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductsDetails from "./pages/ProductsDetails";
import Products from "./pages/Products";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:idProduct" element={<ProductsDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <>
              <h1>Oops ruta no encontrada</h1>
              <p>La ruta que buscas no existe</p>
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
