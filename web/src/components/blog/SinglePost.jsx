import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import SanityBlockContent from "@sanity/block-content-to-react";
import PostMeta from "./PostMeta";
import styled from "styled-components";
import { ms } from "../../styles/global.css";

const Post = styled.article`
  margin: 2rem 10%;
  padding-bottom: 2em;
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

const SinglePost = ({ post }) => {
  const { slug, title, publishedAt, _rawExcerpt, mainImage, categories } = post;
  return (
    <Post>
      <PostImage>
        {mainImage && <Img fluid={mainImage.asset.fluid} />}
      </PostImage>
      <div>
        <h1>
          <Link to={`/${slug.current}`}>{title}</Link>
        </h1>
        <PostMeta categories={categories} publishedAt={publishedAt} />
        <SanityBlockContent blocks={_rawExcerpt} />
      </div>
    </Post>
  );
};

export default SinglePost;
