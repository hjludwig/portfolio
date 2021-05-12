import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled, { keyframes } from "styled-components";
import { ms } from "../styles/global.css";
import { BiChevronDown } from "react-icons/bi";

const StyledHero = styled.section`
  height: 95vh;
  position: relative;
  top: -10vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 10%;
  text-align: center;
  line-height: 1;
  z-index: -1;
  > * {
    letter-spacing: -0.04em;
  }
`;
const Intro = styled.h1`
  font-size: ${ms(3)};
  @media screen and (min-width: 600px) {
    font-size: ${ms(4)};
  }
  @media screen and (min-width: 1000px) {
    font-size: ${ms(5)};
  }
  @media screen and (min-width: 1200px) {
    font-size: ${ms(6)};
  }

  margin-bottom: 0;
`;
const Tagline = styled.h3`
  font-size: ${ms(2)};
  @media screen and (min-width: 600px) {
    font-size: ${ms(3)};
  }
  @media screen and (min-width: 1000px) {
    font-size: ${ms(4)};
  }
  @media screen and (min-width: 1200px) {
    font-size: ${ms(5)};
  }

  color: var(--dark-grey);
  margin-top: 0;
`;
const pulseAnimation = keyframes`
  0% {transform: scale(1);}
  10% {transform: scale(1.5);}
  20% {transform: scale(1);}
`;
const Arrow = styled.div`
  color: var(--light-grey);
  position: absolute;
  bottom: 1em;
  left: 50%;
  margin-left: -2em;
  animation: ${pulseAnimation} 5s ease-out infinite;
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
      <Intro>I’m {name}.</Intro>
      <Tagline>{tagline}</Tagline>
      <Arrow>
        <BiChevronDown size="4em" />
      </Arrow>
    </StyledHero>
  );
};

export default Hero;
