/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
const React = require('react');
const { store, StoreProvider } = require('./src/store');
const { Layout } = require('./src/layouts');
const { Simple } = require('./src/layouts/simple');

exports.shouldUpdateScroll = ({ prevRouterProps, routerProps }) => {
  if (!prevRouterProps) {
    window.scrollTo(0, 0);
    return false;
  }
};

exports.wrapRootElement = ({ element }) => {
  return <StoreProvider store={store}>{element}</StoreProvider>;
};

exports.wrapPageElement = ({ element, props, ...rest }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it

  switch (props.pageContext.layout) {
    case '404':
      return <Simple {...props}>{element}</Simple>;
    case 'project':
      return (
        <Layout secondary={true} {...props}>
          {element}
        </Layout>
      );
    default:
      return <Layout {...props}>{element}</Layout>;
  }
};
