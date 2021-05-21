import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link } from "gatsby";
import { ms } from "../styles/global.css";
import { overLine } from "../styles/mixins";
import { FaArrowRight } from "react-icons/fa";

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: var(--grey);
  &:hover {
    h3 {
      color: var(--blue);
      transition: color 0.25s ease;
    }
    .icon {
      transform: translateX(0);
    }
  }
`;

const StyledProject = styled.div`
  padding-bottom: 0.5rem;
  box-shadow: #ccc 0 0 5px 0;
  position: relative;
  transition: box-shadow 0.25s ease;
  &:hover {
    box-shadow: #ccc 0 0 15px 0;
  }
  ul {
    list-style-type: none;
  }
  ul li {
    display: inline-block;
    background: var(--very-light-grey);
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
    height: ${ms(9)};
  }
`;
const Overline = styled.h4`
  ${overLine}
  /* color: white; */
  color: var(--brown);
  margin-top: 1em;
  margin-bottom: 0.5em;
`;
const Text = styled.div`
  align-self: end;
  padding: 1em;
`;
const ProjectName = styled.h3`
  color: var(--dark-grey);
  margin-top: 0;
  font-size: ${ms(2)};
  line-height: 0.75;
  &:after {
    content: "";
    display: block;
    width: 2em;
    border: 1px solid var(--light-grey);
    margin-top: 0.5em;
    /* margin-bottom: 1em; */
  }
`;

const Icon = styled.span`
  /* margin-left: 0.5em; */
  overflow: hidden;
  display: inline-block;
  .icon {
    transform: translateX(-100%);
    transition: transform 0.25s ease;
    vertical-align: bottom;
    color: var(--light-grey);
  }
`;

const SingleProject = ({ project }) => {
  const { name, category, image, tools, slug } = project;
  return (
    <ProjectLink to={`/${slug.current}`} title="View Project">
      <StyledProject>
        <ProjectImage>
          <Img fluid={image.asset.fluid} alt={name} />
        </ProjectImage>
        <Text>
          {category && <Overline>{category.category}</Overline>}

          <ProjectName>
            {name}{" "}
            <Icon>
              <FaArrowRight size={"0.5em"} className={"icon"} />
            </Icon>
          </ProjectName>
          <ul>
            {tools.map(tool => (
              <li key={tool.id}>{tool.name}</li>
            ))}
          </ul>
        </Text>
      </StyledProject>
    </ProjectLink>
  );
};

export default SingleProject;
