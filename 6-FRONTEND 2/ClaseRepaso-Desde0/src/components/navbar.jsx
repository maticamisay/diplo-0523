import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00171f;
  padding: 1rem 2rem;
`;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00a7e1;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>MatiasZapas</Logo>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Iniciar sesión</NavLink>
        <NavLink to="#">Registrarse</NavLink>
        <NavLink to="#">Carrito</NavLink>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
