import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { ms } from "../styles/global.css";

const StyledHero = styled.section`
  height: 90vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 10%;
  text-align: center;
  line-height: 1;
  > * {
    letter-spacing: -0.04em;
  }
  h1 {
    font-size: ${ms(6)};
    margin-bottom: 0;
  }
  .tagline {
    font-size: ${ms(5)};
    color: var(--dark-grey);
    margin-top: 0;
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: sanityProfile {
        name
        tagline
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `);
  const { name, tagline } = data.profile;
  return (
    <StyledHero>
      <h1>I'm {name}.</h1>
      <h3 className="tagline">{tagline}</h3>
    </StyledHero>
  );
};

export default Hero;
