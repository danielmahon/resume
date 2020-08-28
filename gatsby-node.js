// const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMdx(limit: 1000) {
        edges {
          node {
            id
            slug
            frontmatter {
              layout
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const pages = result.data.allMdx.edges;

    pages.forEach(({ node }) => {
      createPage({
        path: node.slug,
        // tags: edge.node.frontmatter.tags,
        component: path.resolve(`src/layouts/${node.frontmatter.layout}.tsx`),
        // additional data can be passed via context
        context: { id: node.id, layout: node.frontmatter.layout },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode, getNodes }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({ name: `slug`, node, value });
  }
};

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }
    type MdxFrontmatter {
      description: String @mdx
      challenge: String @mdx
      solution: String @mdx
    }
  `);
};
