/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "./Header";
import { Global } from "../styles/global.css.js";
import Footer from "./Footer";

const StyledLayout = styled.div``;

const Layout = ({ children }) => {
  return (
    <>
      <Global />
      <StyledLayout>
        <Header />
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
