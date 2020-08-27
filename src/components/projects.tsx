import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import {
  GridList,
  GridTile,
  GridTilePrimary,
  GridTileSecondary,
  GridTileTitle,
} from '@rmwc/grid-list';

import styled from 'styled-components';
import { useAllProjects } from '../hooks';

const StyledGridTile = styled(GridTile)`
  .gatsby-image-wrapper {
    border-radius: 0.5rem;
    overflow: hidden;
  }
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
` as typeof GridTile;

export const Projects = () => {
  const projects = useAllProjects();

  return (
    <GridList tileAspect="4x3">
      {projects.map((project) => {
        const fluid = project.frontmatter?.feature?.childImageSharp?.fluid;

        if (!fluid || !project.slug) return null;

        return (
          <StyledGridTile key={project.slug}>
            <Link
              to={project.slug}
              state={{ prevPath: window.location.pathname }}>
              <GridTilePrimary>
                <Img fluid={fluid as any} />
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
