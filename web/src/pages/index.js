import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const projects = data.projects.nodes
  console.log(projects)
  return (
    <Layout>
      <SEO title="Home" />
      {projects.map(project => {
        return (
          <>
            <h2>{project.name}</h2>
            <h3>{project.client}</h3>
          </>
        )
      })}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    projects: allSanityProject {
      nodes {
        name
        client
      }
    }
  }
`
