import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #003459;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #007ea7;
`;

const Title = ({ mainTitle, subtitle }) => {
  return (
    <TitleContainer>
      <MainTitle>{mainTitle}</MainTitle>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </TitleContainer>
  );
};

export default Title;
