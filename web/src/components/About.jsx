import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import { fullHeight, sectionPadding } from "../styles/mixins";
import { ms } from "../styles/global.css";
import BlockContent from "@sanity/block-content-to-react";

const StyledBio = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 10%;
  font-size: 125%;
  ${sectionPadding}
  ${fullHeight};
  align-items: center;
`;
const Overline = styled.h2`
  grid-column: span 2;
  font-family: "Source Sans Pro";
  font-size: ${ms(1)};
  font-weight: 400;
  color: #ad8785;
  text-transform: none;
  align-self: end;
`;
const Bio = styled.div`
  max-width: 75ch;
  font-weight: 300;
  h1 {
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
