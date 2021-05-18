import React from "react";
import Img from "gatsby-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../clientConfig";

export const Figure = ({ node }) => {
  if (!node || !node.asset || !node.asset._id) {
    return null;
  }
  const gatsbyImageData = getGatsbyImageData(
    node,
    { maxWidth: 675 },
    clientConfig.sanity
  );
  return (
    <figure>
      <Img image={gatsbyImageData} alt={node.alt} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  );
};
