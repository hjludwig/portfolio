import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import SinglePost from "../components/blog/SinglePost";

const Blog = () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      posts: allSanityPost {
        nodes {
          title
          slug {
            current
          }
          _rawExcerpt
          publishedAt
          categories {
            title
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
      <SEO title="blog" />
      <div>
        {data.posts.nodes.map(post => (
          <SinglePost post={post} />
        ))}
      </div>
    </Layout>
  );
};

export default Blog;
