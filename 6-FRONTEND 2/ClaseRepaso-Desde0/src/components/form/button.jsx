import styled from "styled-components";

const SubmitButton = styled.button`
  background-color: #007ea7;
  border: none;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00a7e1;
  }
`;

export default SubmitButton;
