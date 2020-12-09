import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SingleProject from "./SingleProject";
import styled from "styled-components";

const StyledProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
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
  console.log(data);
  const projects = data.projects.nodes;
  console.log(projects);
  return (
    <>
      <h2>Projects</h2>
      <StyledProjectsGrid>
        {projects.map(project => {
          return <SingleProject project={project} />;
        })}
      </StyledProjectsGrid>
    </>
  );
};

export default ProjectsGrid;
