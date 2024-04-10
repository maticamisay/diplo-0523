import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <section>
        {products.map((product) => (
          <article key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
            <p>${product.price}</p>
            <button>Ver detalles</button>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Home;
