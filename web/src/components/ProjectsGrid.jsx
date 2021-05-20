import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import SingleProject from "./SingleProject";
import styled from "styled-components";
import { OutlineButton } from "./common/Button";

const StyledContainer = styled.section`
  padding: 5rem 5vw;
  h2 {
    text-align: center;
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
  /* grid-template-columns: repeat(2, 1fr); */
  @media screen and (min-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1470px) {
    grid-template-columns: repeat(4, 1fr);
  }
  gap: 1rem;
`;
const Button = styled.div`
  margin: 4rem;
  display: flex;
  /* align-items: center; */
  justify-content: center;
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
              fluid(maxWidth: 900) {
                ...GatsbySanityImageFluid
              }
            }
          }
          isFeatured
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
    <StyledContainer id="work">
      <h2>My Work</h2>
      <StyledProjectsGrid>
        {projects.map(
          project =>
            project.isFeatured && (
              <SingleProject key={project.id} project={project} />
            )
        )}
      </StyledProjectsGrid>
      <Button>
        <Link to="/all-projects">
          <OutlineButton>See all projects</OutlineButton>
        </Link>
      </Button>
    </StyledContainer>
  );
};

export default ProjectsGrid;
