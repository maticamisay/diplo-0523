import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-color: darkgray;
  }

  &::placeholder {
    color: #aaaa;
  }

  &:hover {
    border-color: darkgray;
  }
`;

export default Input;
