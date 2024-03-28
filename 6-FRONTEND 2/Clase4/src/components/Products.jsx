import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const prods = await res.json();
      console.log(prods);
      setProducts(prods);
    }
    fetchProducts();
  }, []);
  return (
    <section>
      {products.map((producto) => (
        <article key={producto.id}>
          <h2>{producto.title}</h2>
          <p>{producto.description}</p>
          <h3>$ {producto.price}</h3>
        </article>
      ))}
    </section>
  );
};

export default Products;
