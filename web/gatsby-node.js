/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      projects: allSanityProject {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      posts: allSanityPost {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);
  data.projects.edges.forEach(edge => {
    const slug = edge.node.slug.current;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/Project.jsx`),
      context: { slug: slug },
    });
  });

  data.posts.edges.forEach(edge => {
    const slug = edge.node.slug.current;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/BlogPost.jsx`),
      context: { slug: slug },
    });
  });
};
