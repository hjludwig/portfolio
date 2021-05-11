import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import styled from "styled-components";
import { OutlineButton } from "../components/common/Button";
import { ms } from "../styles/global.css";
import BlockContent from "@sanity/block-content-to-react";
import ToolIcon from "../components/ToolIcon";

const ProjectStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 6rem 0 6rem 10vw;
`;
const Main = styled.div`
  padding-right: 2rem;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
`;
const Name = styled.h1`
  font-size: ${ms(6)};
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
  margin-top: 2em;
`;

const Image = styled.div`
  .gatsby-image-wrapper {
    height: ${ms(10)};
  }
`;
const Description = styled.div`
  max-width: 70ch;
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
  margin-top: 6em;
`;
const ToolsList = styled.ul`
  list-style-type: none;
  display: flex;
  margin-bottom: 4em;
`;
const Tool = styled.li`
  margin-right: 1em;
`;

const Project = ({ data }) => {
  console.log(data);
  const { name, image, tools, _rawDescription, link, category } = data.project;
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
          {link && (
            <OutlineButton primary>
              <a href={link} target="blank">
                Visit Project
              </a>
            </OutlineButton>
          )}
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
