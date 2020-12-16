/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import "fontsource-lora/400.css";
import "fontsource-lato/300.css";
import "fontsource-lato/400.css";
import "fontsource-lato/900.css";

import Header from "./Header";
// import "../styles/global.css";
import { Global } from "../styles/global.css.js";
import Footer from "./Footer";

const StyledLayout = styled.div`
  h1,
  h2 {
    font-family: "Lora", serif;
  }
  h3,
  h4 {
    font-family: "Lato", sans-serif;
  }
  h3 {
    text-transform: uppercase;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Global />
      <StyledLayout>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <Footer />
      </StyledLayout>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
