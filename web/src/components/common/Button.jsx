import styled from "styled-components";
import { ms } from "../../styles/global.css";

const Button = styled.button`
  padding: 0.75em 1.5em;
  border-radius: 10em;
  border: none;
  letter-spacing: 0.075em;
  font-family: "Source Sans Pro";
  font-size: calc(${ms(0)} / 1.45);
  font-weight: 200;
  text-transform: uppercase;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const SolidButton = styled(Button)`
  background: ${props =>
    props.primary ? "var(--blue)" : props.secondary ? "var(--gold)" : "none"};
  color: white;
  &:hover,
  &:active {
    background: ${props =>
      props.primary
        ? "var(--blue)"
        : props.secondary
        ? "var(--gold-dark)"
        : ""};
  }
`;

export const OutlineButton = styled(Button)`
  background: none;
  border: 1px solid;
  color: ${props =>
    props.primary
      ? "var(--blue-500)"
      : props.secondary
      ? "var(--gold)"
      : "grey"};
  &:hover,
  &:active {
    background: ${props =>
      props.primary
        ? "var(--blue-500)"
        : props.secondary
        ? "var(--gold)"
        : "grey"};
    color: white;
  }
`;
