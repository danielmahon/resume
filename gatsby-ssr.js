/**
 * Implement Gatsby's SSR APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.wrapRootElement = require('./gatsby-browser').wrapRootElement;
exports.wrapPageElement = require('./gatsby-browser').wrapPageElement;
