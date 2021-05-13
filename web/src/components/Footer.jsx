import React from "react";
import { FaWrench } from "react-icons/fa";
import styled from "styled-components";
import { ms } from "../styles/global.css";
import { sectionPadding } from "../styles/mixins";

const StyledFooter = styled.footer`
  padding: 2rem 5% 2em 1em;
  color: var(--grey);
  display: flex;
  flex-direction: column;
  gap: 1em;
  @media screen and (min-width: 1100px) {
    /* display: flex; */
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  border-top: 1px solid var(--light-grey);
  .icon {
    color: var(--light-grey);
    margin-left: 0.5em;
    vertical-align: middle;
  }
`;
const Copyright = styled.small`
  border-top: 1px solid;
  padding-top: 1em;
  color: var(--light-grey);
  text-align: center;
  @media screen and (min-width: 500px) {
    text-align: left;
  }
  @media screen and (min-width: 1100px) {
    border-top: none;
    padding-top: 0;
  }
`;
const Logo = styled.span`
  display: block;
  padding: 0.5em 0.75em;
  margin-bottom: 1em;
  font-family: "Crimson", serif;
  background: var(--light-grey);
  border: 2px solid;
  background: white;
  color: white;
  color: var(--light-grey);
  font-size: ${ms(1)};
  @media screen and (min-width: 500px) {
    display: inline-block;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;
const Tools = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  @media screen and (min-width: 500px) {
    flex-direction: row;
    text-align: left;
  }
  align-items: center;
  p {
    margin-bottom: 0;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Tools>
        <Logo>JL</Logo>
        <p>
          Built with chagrin, elation, tedium, and coffee by Jeremy Ludwig.{" "}
          <br />
          Tools: <a href="https://www.gatsbyjs.com/">Gatsby.js</a>,{" "}
          <a href="https://www.sanity.io/">Sanity.io</a>,{" "}
          <a href="https://styled-components.com/">Styled Components</a>.
          <FaWrench className="icon" />
        </p>
      </Tools>
      <Copyright>
        Copyright © {new Date().getFullYear()}, Jeremy Ludwig. All rights
        reserved and all that.
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;
