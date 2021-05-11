import styled from "styled-components";
import { ms } from "../../styles/global.css";

const Button = styled.button`
  padding: 0.75em 1.5em;
  border-radius: 10em;
  border: none;
  letter-spacing: 0.075em;
  font-family: "Source Sans Pro";
  font-size: calc(${ms(0)} / 1.25);
  a {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const SolidButton = styled(Button)`
  background: ${props =>
    props.primary ? "var(--blue)" : props.secondary ? "var(--gold)" : "none"};
  color: white;
  transition: all 0.25s ease;
  &:hover,
  &:active {
    background: ${props =>
      props.primary
        ? "var(--light-blue)"
        : props.secondary
        ? "var(--gold-dark)"
        : ""};
  }
`;

export const OutlineButton = styled(Button)`
  background: none;
  border: 1px solid;
  transition: all 0.25s ease;
  color: ${props =>
    props.primary ? "var(--blue)" : props.secondary ? "var(--gold)" : "grey"};
  &:hover,
  &:active {
    background: ${props =>
      props.primary ? "var(--blue)" : props.secondary ? "var(--gold)" : "grey"};
    color: white;
  }
`;
