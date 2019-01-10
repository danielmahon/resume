// import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React from 'react';
import { Grid, GridCell, GridInner } from '@rmwc/grid';

const Footer = () => (
  <footer style={{ paddingTop: '4rem' }}>
    <Grid theme="onPrimary primaryBg">
      <GridCell span={12} style={{ textAlign: 'center' }}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </GridCell>
    </Grid>
  </footer>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
