import React from "react";
import useProducts from "../hooks/use-products";
import ContainerComponent from "../components/container";
import ProductsContainer from "../components/products/container";
import ProductCard from "../components/products/card";
import Title from "../components/title";

const Home = () => {
  const { products, loading } = useProducts();

  if (loading) {
    return <p>Cargando...</p>;
  }
  return (
    <ContainerComponent>
      <Title mainTitle="Bienvenidos" subtitle="El mejor ecommerce :D" />
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button>Ver detalles</button>
          </ProductCard>
        ))}
      </ProductsContainer>
    </ContainerComponent>
  );
};

export default Home;
