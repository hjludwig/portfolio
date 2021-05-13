import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";

const Blog = () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      posts: allSanityPost {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <Layout>
      <SEO title="blog" />
      <div>
        {data.posts.nodes.map(post => (
          <h1>
            <Link to={`/${post.slug.current}`}>{post.title}</Link>
          </h1>
        ))}
      </div>
    </Layout>
  );
};

export default Blog;
