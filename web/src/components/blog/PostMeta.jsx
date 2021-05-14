import { format } from "date-fns";
import React from "react";

const PostMeta = ({ categories, publishedAt }) => {
  return (
    <div>
      Published {format(new Date(publishedAt), "MMMM d, yyyy")} in{" "}
      {categories.length === 0 ? (
        ""
      ) : categories.length === 1 ? (
        <span>{`${categories[0].title}.`}</span>
      ) : categories.length === 2 ? (
        <span>{`${categories[0].title} and ${categories[1].title}.`}</span>
      ) : (
        categories.map((category, i) => (
          <span>
            {i === categories.length - 1
              ? ` and ${category.title}.`
              : ` ${category.title},`}{" "}
          </span>
        ))
      )}
    </div>
  );
};

export default PostMeta;
