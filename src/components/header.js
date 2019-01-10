import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Grid, GridCell } from '@rmwc/grid';

const Header = ({ siteTitle }) => (
  <header>
    <Grid>
      <GridCell span={12}>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </GridCell>
    </Grid>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
