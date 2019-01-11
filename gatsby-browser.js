/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React, { PureComponent } from 'react';
import { ThemeProvider } from '@rmwc/theme';
import FontFaceObserver from 'fontfaceobserver';

const options = {
  primary: 'rgba(56, 139, 154, 1.00)',
  secondary: 'rgba(200, 111, 133, 1.00)',
};

class FontLoader extends PureComponent {
  state = { ready: false };
  componentDidMount = () => {
    var fontA = new FontFaceObserver('Roboto');
    var fontB = new FontFaceObserver('Open Sans');
    var fontc = new FontFaceObserver('Walter Turncoat');
    Promise.all([fontA.load(), fontB.load(), fontc.load()]).then(() => {
      this.setState({ ready: true });
    });
  };
  render = () => {
    console.log(this.state.ready);
    return (
      <div
        className={
          this.state.ready ? 'root fonts-loaded' : 'root fonts-loading'
        }>
        {this.props.children}
      </div>
    );
  };
}

export const wrapRootElement = ({ element }) => {
  return (
    <FontLoader>
      <ThemeProvider options={options}>{element}</ThemeProvider>
    </FontLoader>
  );
};
