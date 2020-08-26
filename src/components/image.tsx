import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogButton,
} from '@rmwc/dialog';
import { Elevation } from '@rmwc/elevation';
import { AllImagesQuery } from '../../graphql-types';

const ProjectImageWrapper = styled(Elevation)`
  cursor: pointer;
  border-radius: 0.25rem;
  height: 100%;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    max-height: 265px;
    border-radius: inherit;
  }
` as typeof Elevation;

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
` as typeof Dialog;

const query = graphql`
  query AllImages {
    images: allFile(
      filter: { sourceInstanceName: { eq: "images" }, extension: { ne: "svg" } }
    ) {
      edges {
        node {
          name
          relativePath
          childImageSharp {
            fluid(maxWidth: 1280) {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`;

export const Image = ({ src }) => {
  const data = useStaticQuery<AllImagesQuery>(query);

  if (!src) return null;

  const image = data.images.edges.find((n) => {
    return n.node.relativePath.includes(src);
  });
  const fluid = image.node?.childImageSharp?.fluid;

  if (!image || !fluid) return null;

  return <Img fluid={fluid} />;
};

//  state = { open: false, hover: false };
export const ProjectImage = ({ src }) => {
  const [state, setState] = useState({ open: false, hover: false });
  return (
    <>
      <ProjectImageWrapper
        z={state.hover ? 8 : 0}
        transition
        onClick={() => setState({ ...state, open: true })}
        onMouseOver={() => setState({ ...state, hover: true })}
        onMouseOut={() => setState({ ...state, hover: false })}>
        <Image src={src} />
      </ProjectImageWrapper>

      <FullDialog
        open={state.open}
        onClose={(evt) => {
          setState({ ...state, open: false });
        }}>
        <DialogContent>
          <Image src={src} />
        </DialogContent>
        <DialogActions>
          <DialogButton action="close">Close</DialogButton>
        </DialogActions>
      </FullDialog>
    </>
  );
};
