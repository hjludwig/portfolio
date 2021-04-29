import React from "react";

import styled from "styled-components";

import ToolIcon from "./ToolIcon";

const ToolStyles = styled.li`
  margin-right: 1em;
`;

const Tool = ({ tool }) => {
  return (
    <ToolStyles>
      <ToolIcon name={tool.name} />
      {/* {tool.name} */}
    </ToolStyles>
  );
};

export default Tool;
