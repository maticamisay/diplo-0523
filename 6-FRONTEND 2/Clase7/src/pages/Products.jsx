import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #333;
  padding: 20px;
  width: 200px;
`;

const ProductName = styled.h2`
  font-size: 20px;
  margin: 0;
`;

const ProductLink = styled(Link)`
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Products = () => (
  <ProductsContainer>
    <ProductCard>
      <ProductName>Disco ssd</ProductName>
      <ProductLink to="/products/1">Ver detalles</ProductLink>
    </ProductCard>
    <ProductCard>
      <ProductName>Disco duro</ProductName>
      <ProductLink to="/products/2">Ver detalles</ProductLink>
    </ProductCard>
    <ProductCard>
      <ProductName>Memoria ram</ProductName>
      <ProductLink to="/products/3">Ver detalles</ProductLink>
    </ProductCard>
  </ProductsContainer>
);

export default Products;
