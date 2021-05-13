import { css } from "styled-components";
import { ms } from "./global.css";

export const sectionPadding = css`
  padding: 2rem 5vw;
  @media screen and (min-width: 600px) {
    padding: 6rem 10vw;
  }
`;

export const fullHeight = () => {
  return `height: 90vh`;
};

export const overLine = css`
  font-family: "Source Sans Pro";
  text-transform: uppercase;
  font-size: calc(${ms(0)} / 1.45);
  letter-spacing: 0.075em;
  font-weight: 400;
`;
