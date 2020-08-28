import React from 'react';

import { SEO } from '../components/seo';
import { Grid, GridCell } from '@rmwc/grid';
import { Link } from 'gatsby';
import { Button } from '@rmwc/button';

export default () => (
  <Grid>
    <GridCell span={12}>
      <div style={{ minWidth: 250, height: 250 }}>
        <iframe
          title="lost gif"
          src="https://giphy.com/embed/3o7aCTPPm4OHfRLSH6"
          width="100%"
          height="100%"
          // style={{ position: 'absolute' }}
          frameBorder="0"
          allowFullScreen></iframe>
      </div>
    </GridCell>
    <GridCell span={12} style={{ textAlign: 'center' }}>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Button outlined tag={Link} to="/">
        Home
      </Button>
    </GridCell>
  </Grid>
);
