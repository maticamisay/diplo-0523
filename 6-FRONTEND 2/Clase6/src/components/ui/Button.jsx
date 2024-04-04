import styled from "styled-components";

const Boton = styled.button`
  background-color: ${(props) => (props.primario ? "blue" : "gray")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primario ? "darkblue" : "darkgray")};
  }
`;

export default Boton;
