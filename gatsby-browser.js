/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import { ThemeProvider } from '@rmwc/theme';

const options = {
  primary: 'rgba(56, 139, 154, 1.00)',
  secondary: 'rgba(200, 111, 133, 1.00)',
};

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider options={options}>{element}</ThemeProvider>;
};
