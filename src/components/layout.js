import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import SEO from './seo';

// Import styles
import 'normalize.css';
import 'typeface-roboto';
import 'typeface-open-sans';
import 'typeface-walter-turncoat';
import 'material-icons/css/material-icons.min.css';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@material/button/dist/mdc.button.css';
import '@material/typography/dist/mdc.typography.css';
import '@material/theme/dist/mdc.theme.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@material/grid-list/dist/mdc.grid-list.css';
import '@material/image-list/dist/mdc.image-list.css';

// Import custom styles
import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO
          bodyAttributes={{
            class: 'mdc-typography',
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
