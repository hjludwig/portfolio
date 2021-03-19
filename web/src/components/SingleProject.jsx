import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link } from "gatsby";
import { SolidButton, OutlineButton } from "./common/Button";

const StyledProject = styled.div`
  padding-bottom: 0.5rem;
  box-shadow: #ccc 0 0 5px 0;
  /* margin: 1.5rem 1rem; */
  > :not(.gatsby-image-wrapper) {
    margin: 1rem;
  }
  .gatsby-image-wrapper {
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
  h4 span {
    font-weight: normal;
  }
  button {
  }
`;

const SingleProject = ({ project }) => {
  const { name, client, image, description, tools, slug } = project;
  return (
    <StyledProject>
      <Img fluid={image.asset.fluid} alt={name} />
      <h3>{name}</h3>
      {!client || client === name ? (
        ""
      ) : (
        <h4>
          {client != "Personal project" ? <span>Client: </span> : ""}
          {client}
        </h4>
      )}
      <ul>
        {tools.map(tool => (
          <li key={tool.id}>{tool.tool}</li>
        ))}
      </ul>
      <p>{description}</p>
      <OutlineButton secondary>
        <Link to={slug.current}>View</Link>
      </OutlineButton>
    </StyledProject>
  );
};

export default SingleProject;
