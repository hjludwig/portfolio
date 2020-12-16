import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import ProjectsGrid from "../components/ProjectsGrid";
import Hero from "../components/Hero";
import About from "../components/About";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <ProjectsGrid />
      <About />
    </Layout>
  );
};

export default IndexPage;
