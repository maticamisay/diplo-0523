import React, { useState } from "react";
import styled from "styled-components";
import useLogin from "../store/useLogin";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 5rem auto 0 auto;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // validar usuario y contraseña
    // ej usuario mati009 pass 1234
    if (username === "mati009" && password === "1234") {
      login(username);
      navigate("/");
    } else {
      alert("Usuario o contraseña incorrecta");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="username"
        placeholder="mati009"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        name="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default Login;
