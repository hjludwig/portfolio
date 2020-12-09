import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectsGrid from "../components/ProjectsGrid";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <ProjectsGrid />
    </Layout>
  );
};

export default IndexPage;
