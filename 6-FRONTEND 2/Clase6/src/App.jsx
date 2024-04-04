import React, { useEffect, useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterProducts = ({ name, price, sortByName }) => {
    let filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(name.toLowerCase());
    });

    if (price) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= price
      );
    }

    if (sortByName) {
      filteredProducts.sort((a, b) => {
        if (sortByName) {
          return a.title.localeCompare(b.title);
        }
      });
    }

    setFilteredProducts(filteredProducts);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  return (
    <div>
      <h1>Ecommerce</h1>
      <p>Productos de fakestore api</p>
      <Search handleSearch={filterProducts} />
      <section>
        {filteredProducts.map((product) => (
          <article key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Categoria: {product.category}</p>
            <span>$ {product.price}</span>
            <button>Comprar</button>
          </article>
        ))}
      </section>
    </div>
  );
};

export default App;
