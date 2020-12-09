import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";

const Project = ({ data }) => {
  const { name, client, image, tools, description } = data.project;
  return (
    <Layout>
      <h3>{name}</h3>
      <h4>{client}</h4>
      <Img fluid={image.asset.fluid} alt={name} />
      <ul>
        {tools.map(tool => (
          <li key={tool.id}>{tool.tool}</li>
        ))}
      </ul>
      <p>{description}</p>
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
