import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import { fullHeight, sectionPadding } from "../styles/mixins";
import { ms } from "../styles/global.css";
import BlockContent from "@sanity/block-content-to-react";

const StyledBio = styled.section`
  @media screen and (min-width: 1020px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 10%;
  }
  font-size: 125%;
  ${sectionPadding}
  min-height: 90vh;
  align-items: center;
`;
const Overline = styled.h2`
  grid-column: span 2;
  font-family: "Source Sans Pro";
  font-size: ${ms(0)};
  @media screen and (min-width: 600px) {
    font-size: ${ms(1)};
  }
  font-weight: 400;
  color: var(--brown);
  text-transform: none;
  align-self: end;
`;
const Bio = styled.div`
  max-width: 75ch;
  font-weight: 300;
  h1 {
    font-size: ${ms(2)};
    @media screen and (min-width: 600px) {
      font-size: ${ms(4)};
    }
    margin-top: 0;
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: sanityProfile {
        _rawBio
        image {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `);
  const { _rawBio, image } = data.profile;
  return (
    <StyledBio>
      <Overline>About Me</Overline>
      <Bio>
        <BlockContent blocks={_rawBio} />
      </Bio>
      <Image fluid={image.asset.fluid} />
    </StyledBio>
  );
};

export default About;
