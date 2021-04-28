import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const Tools = () => {
  const data = useStaticQuery(graphql`
    query {
      tools: allSanityTool {
        nodes {
          id
          name
        }
      }
    }
  `);

  console.log(data);
  const tools = data.tools.nodes;
  return (
    <div>
      <h1>Some tools</h1>
      <ul>
        {tools.map(tool => (
          <li key={tool.id}>{tool.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tools;
