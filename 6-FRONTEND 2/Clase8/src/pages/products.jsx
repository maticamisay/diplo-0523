import React from "react";
import { useQuery } from "@tanstack/react-query";

const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

const Products = () => {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  console.log({
    data,
    isLoading,
    error,
  });
  return (
    <div>
      <h1>Clase 8</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {data.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;
