import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SingleProject from "./SingleProject";
import styled from "styled-components";
import { ms } from "../styles/global.css";

const StyledContainer = styled.section`
  padding: 10rem 5%;
  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2em;
    margin-top: 0;
    color: var(--blue-300);
    :after {
      display: block;
      content: "";
      width: 3ch;
      border-top: 2px solid;
      margin: 2rem auto;
    }
  }
`;
const StyledProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
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
          category {
            category
            id
          }
          tools {
            name
            id
          }
        }
      }
    }
  `);
  const projects = data.projects.nodes;
  return (
    <StyledContainer>
      <h2>My Work</h2>
      <StyledProjectsGrid>
        {projects.map(project => {
          return <SingleProject project={project} />;
        })}
      </StyledProjectsGrid>
    </StyledContainer>
  );
};

export default ProjectsGrid;
