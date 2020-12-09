import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Navigation from "./Navigation";

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link>{siteTitle}</Link>
      </h1>
    </div>
    <Navigation />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
