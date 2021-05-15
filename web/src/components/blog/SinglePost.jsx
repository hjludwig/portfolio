import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import SanityBlockContent from "@sanity/block-content-to-react";
import PostMeta from "./PostMeta";
import styled from "styled-components";
import { ms } from "../../styles/global.css";

const Post = styled.article`
  margin: 4em 10%;
  padding-bottom: 4em;
  border-bottom: 1px solid var(--light-grey);
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 4em;
`;
const PostImage = styled.div`
  .gatsby-image-wrapper {
    height: ${ms(10)};
  }
`;
const Heading = styled.h1`
  margin-top: 0;
  a {
    color: var(--blue);
    text-decoration: none;
  }
  &:after {
    content: "";
    display: block;
    border-bottom: 1px solid var(--grey);
    width: 50%;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
`;
const Excerpt = styled.div`
  max-width: 75ch;
  font-size: ${ms(0)};
  color: var(--grey);
`;

const SinglePost = ({ post }) => {
  console.log(post);
  const {
    slug,
    title,
    publishedAt,
    _rawExcerpt,
    mainImage,
    categories,
    tags,
  } = post;
  return (
    <Post>
      <PostImage>
        {mainImage && <Img fluid={mainImage.asset.fluid} />}
      </PostImage>
      <div>
        <Heading>
          <Link to={`/${slug.current}`}>{title}</Link>
        </Heading>
        <PostMeta
          categories={categories}
          publishedAt={publishedAt}
          tags={tags}
        />
        <Excerpt>
          <SanityBlockContent blocks={_rawExcerpt} />
        </Excerpt>
      </div>
    </Post>
  );
};

export default SinglePost;
