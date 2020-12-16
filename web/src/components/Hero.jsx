import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const StyledHero = styled.section`
  height: 90vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(122.77deg, #0f2335 20.83%, #050f18 87.52%);
  color: white;
  padding: 0 10%;
  font-size: 250%;
  h2 {
    font-weight: normal;
    .name {
      color: var(--gold);
    }
  }
  .tagline {
    font-weight: 300;
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: sanityProfile {
        name
        tagline
        bio
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
  const { name, tagline, bio, image } = data.profile;
  return (
    <StyledHero>
      <h2>
        Hi. I'm <span className="name">{name}.</span>
      </h2>
      <p className="tagline">{tagline}</p>
    </StyledHero>
  );
};

export default Hero;
