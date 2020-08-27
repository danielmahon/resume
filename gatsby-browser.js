/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
const React = require('react');
const { store, StoreProvider } = require('./src/store');
const { Layout } = require('./src/layouts');

export const shouldUpdateScroll = ({ prevRouterProps, routerProps }) => {
  if (!prevRouterProps) {
    window.scrollTo(0, 0);
    return false;
  }
};

export const wrapRootElement = ({ element }) => {
  return <StoreProvider store={store}>{element}</StoreProvider>;
};

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  const secondary = typeof props.pageContext?.layout === 'string';
  return (
    <Layout secondary={secondary} {...props}>
      {element}
    </Layout>
  );
};
