import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SingleProject from "../components/SingleProject";
import styled from "styled-components";
import Layout from "../components/Layout";

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
const Category = styled.div`
  margin-bottom: 6rem;
  h3 {
    margin-bottom: 1em;
  }
`;

const buildCategories = projects => {
  const categories = {};
  const categoriesDictionary = [];
  projects.forEach(project => {
    const category = project.category.category;
    if (categoriesDictionary.includes(category)) {
      categories[category].push(project);
    } else {
      categoriesDictionary.push(category);
      categories[category] = [];
      categories[category].push(project);
    }
  });
  return categories;
};

const AllProjects = () => {
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
  const categories = buildCategories(projects);
  const keys = Object.keys(categories);

  return (
    <Layout>
      <StyledContainer id="work">
        <h2>All projects</h2>
        {keys.map(key => (
          <Category>
            <h3>{key}</h3>
            <StyledProjectsGrid>
              {categories[key].map(project => (
                <SingleProject project={project} />
              ))}
            </StyledProjectsGrid>
          </Category>
        ))}
      </StyledContainer>
    </Layout>
  );
};

export default AllProjects;
