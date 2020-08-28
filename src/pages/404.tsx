import React from 'react';

import { SEO } from '../components/seo';
import { Grid, GridCell } from '@rmwc/grid';
import { Link } from 'gatsby';
import { Button } from '@rmwc/button';
import styled from 'styled-components';

const Image = styled.img`
  display: block;
  margin: 0 auto;
  height: 250px;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const PageNotFound = () => (
  <Grid>
    <GridCell span={12}>
      <Image
        alt="404 gif"
        src="https://media.giphy.com/media/3o7aCTPPm4OHfRLSH6/giphy.gif"
      />
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

export default PageNotFound;
