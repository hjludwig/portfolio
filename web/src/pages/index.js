import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import ProjectsGrid from "../components/ProjectsGrid";
import Hero from "../components/Hero";
import About from "../components/About";
import Tools from "../components/Tools";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <ProjectsGrid />
      <About />
      <Tools />
    </Layout>
  );
};

export default IndexPage;
