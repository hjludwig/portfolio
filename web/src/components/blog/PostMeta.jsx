import { format } from "date-fns";
import React from "react";
import styled from "styled-components";
import { ms } from "../../styles/global.css";

const Meta = styled.div`
  font-family: "Crimson Test", serif;
  text-transform: uppercase;
  color: var(--light-grey);
  letter-spacing: 0.025em;
  font-size: calc(${ms(0)} / 1.45);
  margin-bottom: 1em;
`;
const Category = styled.span`
  color: var(--grey);
`;

const Tags = styled.ul`
  list-style-type: none;
  margin: 0.5em 0;
`;
const Tag = styled.li`
  display: inline-block;
  background: var(--very-light-grey);
  font-family: "Source Sans", sans-serif;
  color: var(--grey);
  text-transform: none;
  padding: 0.25rem;
  margin-right: 0.25rem;
`;

const PostMeta = ({ categories, publishedAt, tags }) => {
  return (
    <Meta>
      Published {format(new Date(publishedAt), "MMMM d, yyyy")} in{" "}
      {categories.length === 0 ? (
        ""
      ) : categories.length === 1 ? (
        <Category>{`${categories[0].title}.`}</Category>
      ) : categories.length === 2 ? (
        <>
          <Category>{categories[0].title}</Category> and{" "}
          <Category>{categories[1].title}</Category>
        </>
      ) : (
        categories.map((category, i) => (
          <Category>
            {i === categories.length - 1
              ? ` and ${category.title}.`
              : ` ${category.title},`}{" "}
          </Category>
        ))
      )}
      {tags && (
        <Tags>
          {tags.map(tag => (
            <Tag>{tag.value}</Tag>
          ))}
        </Tags>
      )}
    </Meta>
  );
};

export default PostMeta;
