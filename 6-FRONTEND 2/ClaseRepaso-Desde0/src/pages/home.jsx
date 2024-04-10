import React from "react";
import useProducts from "../hooks/use-products";

const Home = () => {
  const { products, loading } = useProducts();

  if (loading) {
    return <p>Cargando...</p>;
  }
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
