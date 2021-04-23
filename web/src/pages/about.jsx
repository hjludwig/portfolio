import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

const StyledBio = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 10%;
`;
const StyledPage = styled.div`
  margin: 6rem 10%;
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: sanityProfile {
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `);
  const { bio, image } = data.profile;
  return (
    <Layout>
      <StyledPage>
        <SEO title="about" />
        <h1>About me</h1>
        <StyledBio>
          {" "}
          <Image fluid={image.asset.fluid} />
          <p>{bio}</p>
        </StyledBio>
      </StyledPage>
    </Layout>
  );
};

export default About;
