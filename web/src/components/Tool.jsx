import React from "react";
import {
  FaHtml5,
  FaGlobe,
  FaCss3,
  FaJava,
  FaCss3Alt,
  FaWordpress,
  FaAdobe,
  FaReact,
  FaFigma,
} from "react-icons/fa";
import { SiGatsby, SiJavascript, SiPhp } from "react-icons/si";
import styled from "styled-components";

import sanityIconBG from "../images/sanity-icon.png";

const ToolStyles = styled.li`
  margin-right: 1em;
`;

const Tool = ({ tool }) => {
  return (
    <ToolStyles>
      <Icon name={tool.name} />
      {/* {tool.name} */}
    </ToolStyles>
  );
};

export default Tool;

const Icon = ({ name }) => {
  const iconProps = {
    title: name,
    color: "#076381",
    style: {
      verticalAlign: "middle",
      marginRight: "0.5em",
      position: "relative",
      top: "-2px",
    },
    size: "2em",
  };
  return name === "HTML5" ? (
    <FaHtml5 {...iconProps} />
  ) : name === "CSS" ? (
    <FaCss3Alt {...iconProps} />
  ) : name === "Javascript" ? (
    <SiJavascript {...iconProps} />
  ) : name === "PHP" ? (
    <SiPhp {...iconProps} />
  ) : name === "Gatsby" ? (
    <SiGatsby {...iconProps} />
  ) : name === "Wordpress" ? (
    <FaWordpress {...iconProps} />
  ) : name === "React" ? (
    <FaReact {...iconProps} />
  ) : name === "Adobe Creative Suite" ? (
    <FaAdobe {...iconProps} />
  ) : name === "Figma" ? (
    <FaFigma {...iconProps} />
  ) : name === "Sanity" ? (
    <SanityIcon />
  ) : (
    <FaGlobe {...iconProps} />
  );
};

const SanityIcon = () => {
  const Icon = styled.span`
    background-image: url(${sanityIconBG});
    background-size: cover;
    display: inline-block;
    width: 2em;
    height: 2em;
    vertical-align: middle;
    margin-right: 0.25em;
    position: relative;
    top: -2px;
  `;
  return <Icon></Icon>;
};
