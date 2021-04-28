import React from "react";
import styled from "styled-components";
import { ms } from "../styles/global.css";
import Tool from "./Tool";

const Wrapper = styled.div``;

const List = styled.ul`
  list-style-type: none;
  display: flex;
`;

const Heading = styled.h2`
  font-family: "Source Sans Pro", sans-serif;
  color: var(--grey-500);
  font-weight: 300;
  font-size: ${ms(0)};
  letter-spacing: 0.025em;
`;
const ToolsList = ({ tools }) => {
  return (
    <div>
      <Heading>{tools[0].category.name}</Heading>
      <List>
        {tools.map(tool => (
          <Tool tool={tool} />
        ))}
      </List>
    </div>
  );
};

export default ToolsList;
