import React from "react";

import sanityIconBG from "../images/sanity-icon.png";
import {
  FaHtml5,
  FaGlobe,
  FaCss3Alt,
  FaWordpress,
  FaAdobe,
  FaReact,
  FaFigma,
} from "react-icons/fa";
import {
  SiGatsby,
  SiJavascript,
  SiPhp,
  SiStyledComponents,
} from "react-icons/si";
import styled from "styled-components";

const ToolIcon = ({ name }) => {
  const iconProps = {
    title: name,
    color: "#076381",
    style: {
      verticalAlign: "middle",

      position: "relative",
      top: "-2px",
    },
    size: "2em",
    className: "tool-icon",
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
  ) : name === "Styled Components" ? (
    <SiStyledComponents {...iconProps} />
  ) : name === "Sanity" ? (
    <SanityIcon {...iconProps} />
  ) : (
    <FaGlobe {...iconProps} />
  );
};

const SanityIcon = ({ className }) => {
  const Icon = styled.span`
    background-image: url(${sanityIconBG});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
    width: 2em;
    height: 2em;
    vertical-align: middle;
    /* margin-right: 0.25em; */
    position: relative;
    top: -2px;
  `;
  return <Icon title="Sanity.io" className={className}></Icon>;
};

export default ToolIcon;
