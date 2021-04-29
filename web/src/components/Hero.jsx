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
      <h1>I'm {name}.</h1>
      <h3 className="tagline">{tagline}</h3>
      <Arrow>
        <BiChevronDown size="4em" />
      </Arrow>
    </StyledHero>
  );
};

export default Hero;
