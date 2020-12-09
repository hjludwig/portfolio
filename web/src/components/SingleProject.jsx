import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledProject = styled.div`
  /* display: block; */
  /* Take your row sizing not from the pizzaStyles div, but from the  PizzaGridStyles grid */
  /* @supports not (grid-template-rows: subgrid) {
    --rows: 1fr auto;
  }
  grid-template-rows: var(--rows, subgrid);
  /* grid-row: span 4; */
  /* grid-gap: 1rem; */
  box-shadow: #ccc 0 0 5px 0;
  > :not(img) {
    padding: 0 1rem;
  }
  > :not(h3) {
    margin-bottom: 1rem;
  }
  ul {
    list-style-type: none;
  }
  ul li {
    display: inline-block;
    background: #f6f6f6;
    font-size: 0.8em;
    padding: 0.25rem;
    margin-right: 0.25rem;
  }
`;

const SingleProject = ({ project }) => {
  const { name, client, image, description, tools, slug } = project;
  return (
    <StyledProject>
      <Img fluid={image.asset.fluid} alt={name} />
      <h3>{name}</h3>
      <h4>{client}</h4>
      <ul>
        {tools.map(tool => (
          <li key={tool.id}>{tool.tool}</li>
        ))}
      </ul>
      <p>{description}</p>
      <button>
        <Link to={slug.current}>View</Link>
      </button>
    </StyledProject>
  );
};

export default SingleProject;
