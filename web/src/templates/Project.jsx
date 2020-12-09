import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledProject = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  header {
    grid-column: span 2;
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10%;
    max-width: 80ch;
  }
`;

const Project = ({ data }) => {
  const { name, client, image, tools, description } = data.project;
  return (
    <Layout>
      <StyledProject>
        <header>
          {" "}
          <h3>{name}</h3>
          {/* TODO: Conditional for client render */}
          <h4>{client}</h4>
        </header>

        <Img fluid={image.asset.fluid} alt={name} />
        <div className="details">
          <h3>Tools</h3>
          <ul>
            {tools.map(tool => (
              <li key={tool.id}>{tool.tool}</li>
            ))}
          </ul>
          <p>{description}</p>
          <button>
            <a href="#">Visit</a>
          </button>
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
      tools {
        tool
        id
      }
    }
  }
`;
