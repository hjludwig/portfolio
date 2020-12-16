import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SingleProject from "./SingleProject";
import styled from "styled-components";

const StyledContainer = styled.section`
  padding: 10rem 10%;
  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2em;
    color: var(--blue-300);
    :after {
      display: block;
      content: "";
      width: 3ch;
      border-top: 2px solid;
      margin: 2rem auto;
    }
  }
  .gatsby-image-wrapper {
    height: 200px;
  }
`;
const StyledProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  /* grid-auto-rows: 200px; */
`;

const ProjectsGrid = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allSanityProject {
        nodes {
          id
          name
          slug {
            current
          }
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
    }
  `);
  const projects = data.projects.nodes;
  return (
    <StyledContainer>
      <h2>Projects</h2>
      <StyledProjectsGrid>
        {projects.map(project => {
          return <SingleProject project={project} />;
        })}
      </StyledProjectsGrid>
    </StyledContainer>
  );
};

export default ProjectsGrid;
