import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav``;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/about" exact>
        Home
      </NavLink>
      <NavLink to="/contact" exact>
        Home
      </NavLink>
      <NavLink to="/portfolio" exact>
        Home
      </NavLink>
    </Nav>
  );
};

export default Navbar;
