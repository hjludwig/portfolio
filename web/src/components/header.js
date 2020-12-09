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
  border-bottom: 1px solid #eee;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <h1>
        <Link>{siteTitle}</Link>
      </h1>
    </div>
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
