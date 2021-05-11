import React from "react";
import { FaWrench } from "react-icons/fa";
import styled from "styled-components";
import { ms } from "../styles/global.css";
import { sectionPadding } from "../styles/mixins";

const StyledFooter = styled.footer`
  padding: 2rem 5% 2em 1em;
  color: var(--grey);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--light-grey);
  .icon {
    color: var(--light-grey);
    margin-left: 0.5em;
    vertical-align: middle;
  }
`;
const Logo = styled.span`
  display: inline-block;
  padding: 0.5em 0.75em;
  font-family: "Crimson", serif;
  background: var(--light-grey);
  border: 2px solid;
  background: white;
  color: white;
  color: var(--light-grey);
  font-size: ${ms(1)};
  margin-right: 1rem;
`;
const Tools = styled.div`
  display: flex;
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
      <small>
        Copyright © {new Date().getFullYear()}, Jeremy Ludwig. All rights
        reserved and all that.
      </small>
    </StyledFooter>
  );
};

export default Footer;
