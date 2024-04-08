import React from "react";
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const params = useParams();

  return (
    <section>
      <h1>Producto {params.idProduct}</h1>
    </section>
  );
};

export default ProductsDetails;
