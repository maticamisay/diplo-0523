import styled from "styled-components";

const ProductCard = styled.article`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h2 {
    font-size: 1.5rem;
    margin: 1rem;
  }

  p {
    margin: 0 1rem 1rem;
  }

  button {
    background-color: #007ea7;
    border: none;
    color: #ffffff;
    padding: 0.5rem 1rem;
    text-decoration: none;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    margin: 1rem;
  }
`;

export default ProductCard;
