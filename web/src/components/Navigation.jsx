import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { ms } from "../styles/global.css";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  font-size: ${ms(1)};
  &:after {
    content: "";
    display: block;
    width: 25%;
    border-bottom: 1px solid var(--light-grey);
    margin: 1em 0 1.5em 0;
  }
  @media screen and (min-width: 650px) {
    padding-right: 2em;
    border-right: 1px solid var(--light-grey);
    font-size: ${ms(0)};
    flex-direction: row;
    margin-top: 0;
    align-items: center;
  }

  a {
    text-decoration: none;
    text-transform: lowercase;
    color: var(--blue-300);
    font-weight: 300;
    @media screen and (min-width: 650px) {
      margin-left: 2em;
    }
  }
`;

const Navigation = ({ handleClick }) => {
  return (
    <StyledNav>
      <Link onClick={handleClick} to="/blog">
        Blog
      </Link>
      <Link onClick={handleClick} to="/#work">
        Work
      </Link>
      <Link onClick={handleClick} to="/#about">
        About
      </Link>
      <Link onClick={handleClick} to="/#contact">
        Contact
      </Link>
    </StyledNav>
  );
};

export default Navigation;
