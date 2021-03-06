import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import SinglePost from "../components/blog/SinglePost";

const Blog = () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      posts: allSanityPost(sort: { order: DESC, fields: publishedAt }) {
        nodes {
          title
          id
          slug {
            current
          }
          _rawExcerpt
          publishedAt
          categories {
            title
          }
          tags {
            value
          }
          mainImage {
            asset {
              fluid(maxWidth: 900) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Blog" />
      <div>
        {data.posts.nodes.map(post => (
          <SinglePost post={post} key={post.id} />
        ))}
      </div>
    </Layout>
  );
};

export default Blog;
