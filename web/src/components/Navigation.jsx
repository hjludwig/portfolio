import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: var(--blue-300);
    font-weight: 900;
    margin-left: 2em;
  }
`;

const Navigation = () => {
  return (
    <StyledNav>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </StyledNav>
  );
};

export default Navigation;
