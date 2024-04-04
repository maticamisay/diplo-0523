import React, { useState } from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CreateProduct from "./pages/CreateProduct";

const App = () => {
  const [pageRoute, setPageRoute] = useState("home");
  const [isLogged, setIsLogged] = useState(true);

  const redirectTo = (route) => {
    setPageRoute(route);
  };
  return (
    <div>
      <nav className="bg-gray-300">
        <ul className="flex flex-row justify-between py-4 px-2">
          <li
            className={`bg-white text-gray-800 shadow-sm px-2 py-1 rounded-md hover:bg-gray-100 border border-gray-300 ${
              pageRoute === "home" &&
              "bg-indigo-700 text-white hover:bg-indigo-800"
            }`}
          >
            <a href="#" onClick={() => setPageRoute("home")}>
              Inicio
            </a>
          </li>
          <li
            className={`bg-white text-gray-800 shadow-sm px-2 py-1 rounded-md hover:bg-gray-100 border border-gray-300 ${
              pageRoute === "about" &&
              "bg-indigo-700 text-white hover:bg-indigo-800"
            }`}
          >
            <a href="#" onClick={() => setPageRoute("about")}>
              Acerca de
            </a>
          </li>
          <li
            className={`bg-white text-gray-800 shadow-sm px-2 py-1 rounded-md hover:bg-gray-100 border border-gray-300 ${
              pageRoute === "products" &&
              "bg-indigo-700 text-white hover:bg-indigo-800"
            }`}
          >
            <a href="#" onClick={() => setPageRoute("products")}>
              Productos
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setPageRoute("new-product")}>
              Añadir producto
            </a>
          </li>
        </ul>
      </nav>
      {isLogged ? (
        <h3 className={`${isLogged && "text-red-800"}`}>Bienvenido usuario</h3>
      ) : (
        <h3>No has iniciado sesión</h3>
      )}
      {pageRoute === "home" && <Home />}
      {pageRoute === "about" && <h1>Acerca de</h1>}
      {pageRoute === "products" && <Products />}
      {pageRoute === "new-product" && (
        <CreateProduct redirect={() => redirectTo("products")} />
      )}
    </div>
  );
};

export default App;
