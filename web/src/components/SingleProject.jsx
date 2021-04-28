import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link } from "gatsby";
import { SolidButton, OutlineButton } from "./common/Button";
import { ms } from "../styles/global.css";
import { overLine } from "../styles/mixins";

const StyledProject = styled.div`
  padding-bottom: 0.5rem;
  box-shadow: #ccc 0 0 5px 0;
  position: relative;

  ul {
    list-style-type: none;
  }
  ul li {
    display: inline-block;
    background: #f6f6f6;
    font-size: 0.8em;
    padding: 0.25rem;
    margin-right: 0.25rem;
  }
  h4 span {
    font-weight: normal;
  }
`;
const ProjectImage = styled.div`
  z-index: -1;
  .gatsby-image-wrapper {
    height: ${ms(10)};
  }
`;
const Overline = styled.h4`
  ${overLine}
  color: white;
  margin-top: 0;
`;
const Text = styled.div`
  align-self: end;
  padding: 1em;
`;
const ProjectName = styled.h3`
  color: white;
  /* font-weight: 400; */
  margin-top: 0;
  font-size: ${ms(2)};
  &:after {
    content: "";
    display: block;
    width: 2em;
    border: 1px solid white;
    margin-top: 0.5em;
    margin-bottom: 1em;
  }
`;
const CardTop = styled.div`
  display: grid;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
  grid-template-areas: "stack";
  > * {
    grid-area: stack;
  }
`;
const CardBottom = styled.div`
  margin: 1em;
`;

const SingleProject = ({ project }) => {
  const { name, category, image, description, tools, slug } = project;
  return (
    <StyledProject>
      <CardTop>
        <Text>
          {category && <Overline>{category.category}</Overline>}
          <ProjectName>{name}</ProjectName>
          <SolidButton primary>
            <Link to={slug.current}>View Project</Link>
          </SolidButton>
        </Text>
        <ProjectImage>
          <Img fluid={image.asset.fluid} alt={name} />
        </ProjectImage>
      </CardTop>
      <CardBottom>
        <ul>
          {tools.map(tool => (
            <li key={tool.id}>{tool.name}</li>
          ))}
        </ul>
      </CardBottom>
    </StyledProject>
  );
};

export default SingleProject;
