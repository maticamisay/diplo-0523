import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { idProducto } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${idProducto}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <section>
      <h1>Product Detail</h1>
      {product && (
        <>
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
          <p>{product.price}</p>
          <div>
            <button type="button">Agregar +1 al carrito</button>
          </div>
        </>
      )}
    </section>
  );
};

export default ProductDetail;
