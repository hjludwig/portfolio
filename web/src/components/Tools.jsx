import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { ms } from "../styles/global.css";
import { sectionPadding } from "../styles/mixins";
import ToolsList from "./ToolsList";

const ToolsSection = styled.div`
  ${sectionPadding}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Heading = styled.h1`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300;
  grid-column: 1 /-1;
  font-size: ${ms(3)};
  color: var(--grey);
  border-top: 1px solid var(--light-grey);
  padding-top: 2em;
`;

const Tools = () => {
  const data = useStaticQuery(graphql`
    query {
      tools: allSanityTool {
        nodes {
          category {
            name
          }
          name
          id
        }
      }
    }
  `);

  const tools = data.tools.nodes;
  const languages = tools.filter(tool => tool.category.name === "Languages");
  const frameworks = tools.filter(
    tool => tool.category.name === "Frameworks / Libraries"
  );
  const other = tools.filter(
    tool => tool.category.name === "Design & Layout / Other"
  );
  return (
    <ToolsSection>
      <Heading>Tools</Heading>
      <ToolsList tools={languages} />
      <ToolsList tools={frameworks} />
      <ToolsList tools={other} />
    </ToolsSection>
  );
};

export default Tools;
