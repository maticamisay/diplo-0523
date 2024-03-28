// title con styled components
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;

  @media (min-width: 768px) {
    color: green;
  }
`;

export default Title;
