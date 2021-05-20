import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
`;
const SocialLink = styled.a`
  color: var(--dark-grey);
  margin-right: 1em;
  transition: color 0.25s ease;
  &:hover {
    color: var(--blue);
  }
  .icon {
    vertical-align: middle;
  }
`;

const Socials = () => {
  return (
    <div>
      <List>
        <li>
          <SocialLink
            href="https://www.linkedin.com/in/hjeremyludwig/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={"2em"} className="icon" />
          </SocialLink>
        </li>
        <li>
          <SocialLink
            href="https://github.com/hjludwig"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={"2em"} className="icon" />
          </SocialLink>
        </li>
      </List>
    </div>
  );
};

export default Socials;
