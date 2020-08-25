import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import {
  GridList,
  GridTile,
  GridTilePrimary,
  GridTileSecondary,
  GridTileTitle,
} from '@rmwc/grid-list';

import { ProjectLinksQuery } from '../../graphql-types';
import styled from 'styled-components';
import { Button } from '@rmwc/button';

const StyledGridTile = styled(GridTile)`
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

const getProjectLinks = graphql`
  query ProjectLinks {
    allMdx {
      nodes {
        slug
        frontmatter {
          feature {
            childImageSharp {
              fluid(maxWidth: 1280) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export const Projects = () => {
  const data = useStaticQuery<ProjectLinksQuery>(getProjectLinks);
  const projects = data.allMdx.nodes;

  return (
    <GridList tileAspect="4x3">
      {projects.map((project) => {
        const fluid = project.frontmatter?.feature?.childImageSharp?.fluid;

        if (!fluid || !project.slug) return null;

        return (
          <StyledGridTile key={project.slug}>
            <Link to={project.slug}>
              <GridTilePrimary>
                <Img fluid={fluid as any} />
              </GridTilePrimary>
              <GridTileSecondary
                style={{
                  padding: '0 1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                <GridTileTitle style={{ lineHeight: '48px' }}>
                  Project: Technology Trailer
                </GridTileTitle>
                <GridTileTitle style={{ lineHeight: '48px' }}>
                  <Button
                    style={{ borderColor: 'white', lineHeight: '1rem' }}
                    outlined
                    dense
                    theme="onPrimary">
                    Learn more
                  </Button>
                </GridTileTitle>
              </GridTileSecondary>
            </Link>
          </StyledGridTile>
        );
      })}
    </GridList>
  );
};
