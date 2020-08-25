import { withPrefix } from 'gatsby';
// import PropTypes from 'prop-types';
import React from 'react';
import { Grid, GridCell } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';
import { Button } from '@rmwc/button';

export const Footer = () => (
  <footer
    style={{
      padding: '3rem 0 0 0',
      // margin: '3rem 0 0 0',
      backgroundColor: 'rgba(205, 226, 230, 1.00)',
    }}>
    <Grid>
      <GridCell span={12} style={{ textAlign: 'center' }}>
        <Typography use="headline5" tag="p">
          Thank you for your consideration!
        </Typography>
        <Typography use="body1" tag="div">
          <Button
            raised
            style={{ margin: '0.5rem' }}
            tag="a"
            target="_blank"
            href="mailto:daniel@mahonstudios.com">
            Email Me
          </Button>
          <Button
            raised
            tag="a"
            target="__blank"
            style={{ margin: '0.5rem' }}
            href={withPrefix('daniel-mahons-resume.pdf')}>
            Download my Resumé
          </Button>
        </Typography>
      </GridCell>
    </Grid>
    <Grid>
      <GridCell span={12} style={{ textAlign: 'right' }}>
        <Typography use="caption" tag="p">
          © {new Date().getFullYear()} | Daniel Mahon
        </Typography>
      </GridCell>
    </Grid>
  </footer>
);
