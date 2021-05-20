import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import styled from "styled-components";
import { OutlineButton } from "../components/common/Button";
import { ms } from "../styles/global.css";
import BlockContent from "@sanity/block-content-to-react";
import ToolIcon from "../components/ToolIcon";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";

const ProjectStyles = styled.div`
  @media screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  padding: 6rem 0 12rem 5vw;
  @media screen and (min-width: 1225px) {
    padding-left: 10vw;
  }
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
  margin-bottom: 2em;
  button {
    align-self: flex-start;
  }
  .git-icon {
    margin: -5px 0.5em 0 -0.5em;
    vertical-align: middle;
  }
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.h1`
  font-size: ${ms(3)};
  margin-top: 0;
  @media screen and (min-width: 760px) {
    font-size: ${ms(5)};
  }
  @media screen and (min-width: 960px) {
    margin-top: 4rem;
  }
  @media screen and (min-width: 1225px) {
    font-size: ${ms(6)};
  }
  &:after {
    content: "";
    display: block;
    width: 50%;
    border-bottom: 1px solid var(--grey);
    margin-top: 0.5em;
  }
`;
const Category = styled.h2`
  color: var(--dark-grey);
  font-size: ${ms(0)};
  letter-spacing: 0.025em;
  order: -1;
  @media screen and (min-width: 960px) {
    order: 0;
  }
  margin-top: 2em;
`;

const Image = styled.div`
  .gatsby-image-wrapper {
    height: ${ms(10)};
  }
`;
const Description = styled.div`
  max-width: 70ch;
  padding-right: 2em;
  font-size: ${ms(0)};
  color: var(--grey);
  h2 {
    font-family: "Source Sans Pro", sans-serif;
    color: var(--grey);
    font-weight: 300;
    font-size: ${ms(0)};
    letter-spacing: 0.025em;
  }
`;

const ToolsHeading = styled.h3`
  font-family: "Source Sans Pro", sans-serif;
  color: var(--dark-grey);
  font-weight: 300;
  margin-top: 0;
  font-size: ${ms(1)};
  display: none;
  @media screen and (min-width: 960px) {
    display: block;
    font-size: ${ms(2)};
    margin-top: 6em;
  }
`;
const ToolsList = styled.ul`
  list-style-type: none;
  margin-top: 1em;
  margin-bottom: 2em;
  @media screen and (min-width: 960px) {
    margin-bottom: 4em;
  }
`;
const Tool = styled.li`
  margin-right: 1em;
  display: inline-block;
  margin-bottom: 1em;
  .tool-icon {
    height: 1.25em;
    @media screen and (min-width: 760px) {
      height: 2em;
      margin-right: 0.5em;
    }
  }
`;
const Buttons = styled.div`
  display: flex;
  gap: 1em;
`;
const Navigation = styled.nav`
  margin: 3em 0 3em -0.5rem;
  a {
    color: var(--light-grey);
    text-decoration: none;
    transition: color 0.25s ease;
    &:hover {
      color: var(--blue);
      .icon {
        transform: translateX(0);
      }
    }
  }
`;
const Divider = styled.span`
  color: var(--light-grey);
  margin: 0 0.5em;
`;
const Icon = styled.span`
  /* margin-left: 0.5em; */
  overflow: hidden;
  display: inline-block;
  .icon {
    transition: transform 0.25s ease;
    vertical-align: bottom;
  }
  .icon-right {
    /* margin-left: 0.25rem; */
    transform: translateX(-150%);
  }
  .icon-left {
    margin-right: 0.25rem;
    transform: translateX(150%);
  }
`;

const Project = ({ data }) => {
  const {
    name,
    image,
    tools,
    _rawDescription,
    link,
    category,
    github,
  } = data.project;
  return (
    <Layout>
      <ProjectStyles>
        <Main>
          <Name>{name}</Name>
          <Category>{category.category}</Category>
          <ToolsHeading>Tools</ToolsHeading>
          <ToolsList>
            {tools.map(tool => (
              <Tool key={tool.id}>
                <ToolIcon name={tool.name} />
                {tool.name}
              </Tool>
            ))}
          </ToolsList>
          <Buttons>
            {link && (
              <a href={link} target="blank">
                <OutlineButton primary>Visit Project</OutlineButton>
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <OutlineButton>
                  <FaGithub className={"git-icon"} size={"1.5em"} />
                  Code
                </OutlineButton>{" "}
              </a>
            )}
          </Buttons>
        </Main>

        <Details>
          <Image>
            <Img fluid={image.asset.fluid} alt={name} />
          </Image>
          <Description>
            <h2>About</h2>
            <BlockContent blocks={_rawDescription} />
          </Description>
        </Details>
        <Navigation>
          <Link to="/#work">
            <Icon>
              <FaArrowLeft size={"0.5em"} className={"icon icon-left"} />
            </Icon>
            Featured Projects
          </Link>
          <Divider>|</Divider>
          <Link to="/all-projects">
            All projects{" "}
            <Icon>
              <FaArrowRight size={"0.5em"} className={"icon icon-right"} />
            </Icon>
          </Link>
        </Navigation>
      </ProjectStyles>
    </Layout>
  );
};

export default Project;

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      id
      name
      client
      image {
        asset {
          fluid(maxWidth: 900) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawDescription
      link
      github
      tools {
        name
        id
      }
      category {
        category
      }
    }
  }
`;
