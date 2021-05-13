import React from "react";

const blogPost = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>This is a blog post</h1>
    </div>
  );
};

export default blogPost;

export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      title
    }
  }
`;
