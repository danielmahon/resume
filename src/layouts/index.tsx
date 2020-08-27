import React, { useEffect, useState } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import { ThemeProvider as RMWCThemeProvider } from '@rmwc/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { SEO } from '../components/seo';

// Import styles
import 'normalize.css';
import 'typeface-roboto';
import 'typeface-open-sans';

import '@rmwc/theme/styles';
import '@rmwc/typography/styles';
import '@rmwc/button/styles';
import '@rmwc/grid/styles';
import '@rmwc/grid-list/styles';
import '@rmwc/image-list/styles';
import '@rmwc/dialog/styles';
import '@rmwc/elevation/styles';
import '@rmwc/icon-button/styles';
import '@rmwc/chip/styles';

// Import custom styles
import './index.css';
import { useBreakpoints } from '../hooks';

const options = {
  primary: 'rgba(56, 139, 154, 1.00)',
  secondary: 'rgba(200, 111, 133, 1.00)',
};

export type LayoutProps = {
  secondary?: boolean;
};

export const Layout: React.FC<LayoutProps> = ({ children, secondary }) => {
  const [ready, setReady] = useState(false);
  const breakpoints = useBreakpoints();

  useEffect(() => {
    var fontA = new FontFaceObserver('Roboto');
    var fontB = new FontFaceObserver('Open Sans');
    Promise.all([fontA.load(), fontB.load()]).then(() => {
      setReady(true);
    });
  }, [setReady]);

  return (
    <RMWCThemeProvider options={options}>
      <StyledThemeProvider theme={{ ...options, ...breakpoints }}>
        <SEO bodyAttributes={{ class: 'mdc-typography' }}>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          {/* Netlify Identity Widget */}
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </SEO>
        <motion.div animate={{ opacity: ready ? 1 : 0 }}>
          <Header secondary={secondary} />
          <main>{children}</main>
          <Footer />
        </motion.div>
      </StyledThemeProvider>
    </RMWCThemeProvider>
  );
};
