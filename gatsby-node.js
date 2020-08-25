// const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

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

    const posts = result.data.allMdx.edges;

    posts.forEach(({ node }) => {
      createPage({
        path: node.slug,
        // tags: edge.node.frontmatter.tags,
        component: path.resolve(`src/layouts/${node.frontmatter.layout}.tsx`),
        // additional data can be passed via context
        context: { id: node.id },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // convert image paths for gatsby images
  fmImagesToRelative(node);

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
