import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";
import logo from "../images/logo.svg";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  align-items: center;
  padding: 0 5%;
  border-bottom: 1px solid #eee;
  .logo {
    width: 5em;
    display: block;
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to="/">
      <img className="logo" src={logo} />
    </Link>

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
