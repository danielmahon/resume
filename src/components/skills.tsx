import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  ImageList,
  ImageListItem,
  ImageListImageAspectContainer,
  ImageListImage,
  ImageListSupporting,
  ImageListLabel,
  ImageListItemProps,
} from '@rmwc/image-list';
import styled from 'styled-components';
import { startCase } from 'lodash';
import { HTMLProps } from '@rmwc/types';

const ImageListItemStyled = styled(ImageListItem)<
  ImageListItemProps & HTMLProps
>`
  margin: 2rem;
  width: calc(100% / 2 - 4rem);
  @media screen and (min-width: 640px) {
    width: calc(100% / 3 - 4rem);
  }
  @media screen and (min-width: 1024px) {
    width: calc(100% / 4 - 4rem);
  }
`;

const ImageListLabelStyled = styled(ImageListLabel)`
  &&& {
    text-align: center;
    width: 100%;
    white-space: inherit;
    line-height: 1.25em;
    padding-top: 0.5rem;
    font-size: 0.875em;
  }
`;

const query = graphql`
  query Skills {
    images: allFile(
      filter: { relativeDirectory: { eq: "skills" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          name
          publicURL
          relativeDirectory
        }
      }
    }
  }
`;

export const Skills = () => {
  const data = useStaticQuery<SkillsQuery>(query);
  return (
    <ImageList>
      {data.images.edges.map(({ node }) => {
        const name = node.name.replace(/^\d+-/, '');
        return (
          <ImageListItemStyled key={node.name}>
            <ImageListImageAspectContainer>
              <ImageListImage src={node.publicURL} />
            </ImageListImageAspectContainer>
            <ImageListSupporting>
              <ImageListLabelStyled>
                {startCase(name).replace('Xx', '&')}
              </ImageListLabelStyled>
            </ImageListSupporting>
          </ImageListItemStyled>
        );
      })}
    </ImageList>
  );
};
