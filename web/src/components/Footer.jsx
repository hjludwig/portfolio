import React from "react";
import styled from "styled-components";
import { sectionPadding } from "../styles/mixins";

const StyledFooter = styled.footer`
  ${sectionPadding};
  background: var(--dark-grey);
  color: var(--light-grey);
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>THis here is m'foot.</p>
      <p>© {new Date().getFullYear()}, Jeremy Ludwig</p>
    </StyledFooter>
  );
};

export default Footer;
