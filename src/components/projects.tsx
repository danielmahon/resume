import React from 'react';
import { Link } from 'gatsby';
import Img, { GatsbyImageProps } from 'gatsby-image';
import {
  GridList,
  GridTile,
  GridTilePrimary,
  GridTileSecondary,
  GridTileTitle,
  GridTileProps,
} from '@rmwc/grid-list';

import styled from 'styled-components';
import { useAllProjects } from '../hooks';
import { HTMLProps } from '@rmwc/types';

const StyledGridTile = styled(GridTile)<GridTileProps & HTMLProps>`
  /* margin: 1rem; */
  .mdc-grid-tile__secondary {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  &&& {
    width: 100%;
    @media screen and (min-width: 600px) {
      width: calc(50% - 4px);
    }
    @media screen and (min-width: 1024px) {
      width: calc(33% - 2px);
    }
  }
`;

const Image = styled(Img)<GatsbyImageProps>`
  height: inherit;
  padding-bottom: inherit;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const Projects = () => {
  const projects = useAllProjects();

  return (
    <GridList tileAspect="4x3">
      {projects.map((project) => {
        const fluid = project.frontmatter?.feature?.childImageSharp?.fluid;

        if (!fluid || !project.slug) return null;

        return (
          <StyledGridTile key={project.slug}>
            <Link to={project.slug}>
              <GridTilePrimary>
                <Image fluid={fluid} />
              </GridTilePrimary>
              <GridTileSecondary>
                <GridTileTitle>{project.frontmatter?.title}</GridTileTitle>
              </GridTileSecondary>
            </Link>
          </StyledGridTile>
        );
      })}
    </GridList>
  );
};
