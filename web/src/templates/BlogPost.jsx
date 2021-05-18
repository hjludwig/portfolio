import SanityBlockContent from "@sanity/block-content-to-react";
import React from "react";
import styled from "styled-components";
import PostMeta from "../components/blog/PostMeta";
import Layout from "../components/Layout";
import { ms } from "../styles/global.css";
import Img from "gatsby-image";
import serializers from "./../components/serializers";

const Post = styled.article`
  padding: 6rem 0 12rem 10vw;
  h2 {
    text-transform: none;
    color: var(--dark-grey);
  }
`;
const PostHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;
const Heading = styled.h1`
  font-size: ${ms(3)};
  margin-top: 0;
  line-height: 0.9;
  @media screen and (min-width: 760px) {
    font-size: ${ms(5)};
  }
  @media screen and (min-width: 960px) {
    margin-top: 4rem;
  }
  @media screen and (min-width: 1225px) {
    font-size: ${ms(6)};
  }
  &:after {
    content: "";
    display: block;
    width: 50%;
    border-bottom: 1px solid var(--grey);
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
`;

const Body = styled.div`
  max-width: 75ch;
  font-size: ${ms(0)};
  color: var(--grey);
  margin-top: 4em;
  /* TODO: add drop cap paragraph style */
  /* p:first-of-type:first-letter {
    color: var(--dark-grey);
    font-size: 6em;
    line-height: 1;
    font-weight: 600;
    float: left;
    margin: -0.1em 1rem 0 -0.5rem;
  } */
  ul {
    margin-left: 2em;
    margin-bottom: 1em;
  }
`;
const PostImage = styled.div`
  grid-column: 2/3;
  grid-row: 1/-1;
  .gatsby-image-wrapper {
    height: ${ms(10)};
  }
`;

const blogPost = ({ data }) => {
  console.log(data);
  const {
    title,
    categories,
    mainImage,
    publishedAt,
    tags,
    _rawBody,
  } = data.post;
  return (
    <Layout>
      <Post>
        <PostHeader>
          <div>
            <Heading>{title}</Heading>
            <PostMeta
              categories={categories}
              tags={tags}
              publishedAt={publishedAt}
            />
          </div>
          <PostImage>
            {mainImage && <Img fluid={mainImage.asset.fluid} />}
          </PostImage>
        </PostHeader>
        <Body>
          <SanityBlockContent serializers={serializers} blocks={_rawBody} />
        </Body>
      </Post>
    </Layout>
  );
};

export default blogPost;

export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
      _rawBody
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
`;
