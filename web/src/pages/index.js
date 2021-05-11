import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import ProjectsGrid from "../components/ProjectsGrid";
import Hero from "../components/Hero";
import About from "../components/About";
import Tools from "../components/Tools";
import Contact from "../components/Contact";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <ProjectsGrid />
      <About />
      <Tools />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
