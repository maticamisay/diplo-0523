import React, { useState } from "react";
import ContainerComponent from "../components/container";
import Title from "../components/title";
import FormContainer from "../components/form/container";
import FormField from "../components/form/field";
import Label from "../components/form/label";
import Input from "../components/form/input";
import SubmitButton from "../components/form/button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <ContainerComponent>
      <Title mainTitle="Iniciar sesión" />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormField>
          <SubmitButton type="submit">Iniciar sesión</SubmitButton>
        </form>
      </FormContainer>
    </ContainerComponent>
  );
};

export default Login;
