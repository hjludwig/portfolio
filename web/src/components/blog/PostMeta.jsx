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

const PostMeta = ({ categories, publishedAt }) => {
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
    </Meta>
  );
};

export default PostMeta;
