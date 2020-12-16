import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import { fullHeight, sectionPadding } from "../styles/mixins";

const StyledBio = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 10%;
  font-size: 125%;
  background: var(--light-grey);
  ${sectionPadding}
  ${fullHeight};
  h2 {
    grid-column: span 2;
    text-align: center;
    font-size: 3rem;
    color: var(--grey);
    align-self: end;
    :after {
      display: block;
      content: "";
      width: 3ch;
      border-top: 2px solid var(--grey);
      margin: 2rem auto;
    }
  }
  .bio {
    max-width: 60ch;
  }
  align-items: center;
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: sanityProfile {
        bio
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
  const { bio, image } = data.profile;
  return (
    <StyledBio>
      <h2>About Me</h2>
      <div class="bio">{bio}</div>
      <Image fluid={image.asset.fluid} />
    </StyledBio>
  );
};

export default About;
