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
import "fontsource-lora/700.css";
import "fontsource-lato/300.css";
import "fontsource-lato/400.css";
import "fontsource-lato/900.css";

import Header from "./header";
import "./newlayout.css";

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
  /* width: 90%; */
  /* display: flex; */
  /* align-items: center;
  flex-direction: column; */
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
    <StyledLayout>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Jeremy Ludwig</footer>
      </div>
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
