import React, { PureComponent, Component, Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogButton,
} from '@rmwc/dialog';
import { Elevation } from '@rmwc/elevation';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const ProjectImageWrapper = styled(Elevation)`
  cursor: pointer;
  border-radius: 0.25rem;
  .gatsby-image-wrapper {
    width: 100%;
    max-height: 265px;
    border-radius: inherit;
  }
`;
const FullDialog = styled(Dialog)`
  &&& {
    .mdc-dialog__surface {
      max-width: none;
    }
    .mdc-dialog__scrim {
      background-color: rgba(0, 0, 0, 0.75);
    }
    .gatsby-image-wrapper {
      width: 80vw;
      max-height: 80vw;
      border-radius: 0.25rem;
    }
  }
`;

export class Image extends PureComponent {
  render = () => {
    const { src } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query {
            images: allFile {
              edges {
                node {
                  name
                  relativePath
                  childImageSharp {
                    fluid(maxWidth: 1280) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          if (!src) return null;
          const image = data.images.edges.find(n => {
            return n.node.relativePath.includes(src);
          });
          if (!image) return null;
          return <Img fluid={image.node.childImageSharp.fluid} />;
        }}
      />
    );
  };
}
export class ProjectImage extends PureComponent {
  state = { open: false, hover: false };
  render = () => {
    const { src } = this.props;
    const { open, hover } = this.state;
    return (
      <Fragment>
        <ProjectImageWrapper
          z={hover ? 8 : 0}
          transition
          onClick={() => this.setState({ open: true })}
          onMouseOver={() => this.setState({ hover: true })}
          onMouseOut={() => this.setState({ hover: false })}>
          <Image src={src} />
        </ProjectImageWrapper>

        <FullDialog
          open={open}
          onClose={evt => {
            console.log(evt.detail);
            this.setState({ open: false });
          }}>
          <DialogContent>
            <Image src={src} />
          </DialogContent>
          <DialogActions>
            <DialogButton action="close">Close</DialogButton>
          </DialogActions>
        </FullDialog>
      </Fragment>
    );
  };
}
