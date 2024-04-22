import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section>
      <h1>Home</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
            />
            <Link to={`/productos/${product.id}`}>
              <button type="button">
                Ver detalles de prod id: {product.id}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
