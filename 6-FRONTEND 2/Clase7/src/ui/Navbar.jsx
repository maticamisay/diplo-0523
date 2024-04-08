import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background: #333;
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => (
  <Nav>
    <Logo>Logo</Logo>
    <NavItems>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/products">Products</NavItem>
      <NavItem to="/contact">Contact</NavItem>
      <NavItem to="/login">Login</NavItem>
    </NavItems>
  </Nav>
);

export default Navbar;
