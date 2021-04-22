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
  padding: 0 5%;
`;
const Logo = styled.div`
  color: white;
  font-size: 2em;
  background: var(--blue);
  padding: 1em;
  font-family: "Crimson Text", serif;
  font-weight: 200;
  a {
    text-decoration: none;
    color: white;
  }
`;

const Header = ({ siteTitle }) => (
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
