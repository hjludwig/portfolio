import SanityBlockContent from "@sanity/block-content-to-react";
import { format } from "date-fns";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import BlockContent from "@sanity/block-content-to-react";
import Img from "gatsby-image";

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

  console.log(data);

  return (
    <Layout>
      <SEO title="blog" />
      <div>
        {data.posts.nodes.map(post => {
          const {
            slug,
            title,
            publishedAt,
            _rawExcerpt,
            mainImage,
            categories,
          } = post;
          return (
            <article>
              {mainImage && <Img fluid={mainImage.asset.fluid} />}
              <h1>
                <Link to={`/${slug.current}`}>{title}</Link>
              </h1>
              <p>
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
              </p>
              <BlockContent blocks={_rawExcerpt} />
            </article>
          );
        })}
      </div>
    </Layout>
  );
};

export default Blog;
