import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import styled from "styled-components";
import { overLine, sectionPadding } from "../styles/mixins";
import { OutlineButton } from "../components/common/Button";

const StyledProject = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 6rem 0 6rem 10vw;

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 80ch;
  }
`;

const Overline = styled.h4`
  ${overLine};
`;

const Project = ({ data }) => {
  console.log(data);
  const {
    name,
    client,
    image,
    tools,
    description,
    link,
    category,
  } = data.project;
  return (
    <Layout>
      <StyledProject>
        <header>
          <h1>{name}</h1>
          <h2>{category.category}</h2>
          <h3>Tools</h3>
          <ul>
            {tools.map(tool => (
              <li key={tool.id}>{tool.name}</li>
            ))}
          </ul>
          {!link || (
            <OutlineButton primary>
              <a href={link} target="blank">
                Visit Project
              </a>
            </OutlineButton>
          )}
        </header>

        <div className="details">
          <Img fluid={image.asset.fluid} alt={name} />
          <p>{description}</p>
        </div>
      </StyledProject>
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
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
      description
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
