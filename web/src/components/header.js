import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  align-items: center;
  padding: 0 5% 0 1em;
`;
const Logo = styled.div`
  color: white;
  font-size: calc(10vh / 2.5);
  background: var(--blue);
  padding: 0 0.75em;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Crimson Text", serif;
  font-weight: 200;
  a {
    text-decoration: none;
    color: white;
  }
`;

const Header = () => (
  <StyledHeader>
    <Logo>
      <Link to="/">JL</Link>
    </Logo>

    <Navigation />
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
