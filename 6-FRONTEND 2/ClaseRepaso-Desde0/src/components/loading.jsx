import React from "react";
import styled, { keyframes } from "styled-components";

// Animación de carga
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 5px solid #00a7e1;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingSpinner />
    </LoadingContainer>
  );
};

export default Loading;
