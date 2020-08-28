import React from 'react';
import { navigate, graphql } from 'gatsby';
import styled from 'styled-components';

import { Grid, GridCell } from '@rmwc/grid';
import { Button } from '@rmwc/button';
import { Typography, TypographyProps } from '@rmwc/typography';
import { HTMLProps } from '@rmwc/types';
import { SEO } from '../components/seo';
// import { ProjectQuery } from '../../graphql-types';
import type {} from 'gatsby-plugin-typegen/types';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img, { GatsbyImageProps } from 'gatsby-image';
import Zoom from 'react-medium-image-zoom';

export type ProjectTemplateArgs = {
  data: GatsbyTypes.ProjectQuery;
};

const HeroImage = styled.div`
  .gatsby-image-wrapper {
    height: 0;
    padding-top: 56.25%;
  }
`;

const Image = styled(Img)<GatsbyImageProps>`
  border-radius: 0.5rem;
  overflow: hidden;
`;

const Title = styled(Typography).attrs({ tag: 'h1', use: 'div' })<
  TypographyProps & HTMLProps
>`
  max-width: 700px;
  margin: 1rem auto;
  font-weight: 400;
  font-size: ${({ theme }) => (theme.isLteSmall ? 34 : 40)}px;
`;

const Subtitle = styled(Typography).attrs({
  tag: 'h2',
  use: 'headline5',
  theme: 'textSecondaryOnBackground',
})<TypographyProps & HTMLProps>`
  max-width: 700px;
  margin: 0 auto;
  font-size: ${({ theme }) => (theme.isLteSmall ? 18 : 24)}px;
`;

const Headline2 = styled(({ children, ...props }) => (
  <Typography use="headline5" tag="h2" {...props}>
    {children}
  </Typography>
))`
  max-width: 700px;
  margin: 1rem auto;
`;

const Paragraph = styled(({ children, ...props }) => (
  <Typography use="body1" tag="p" {...props}>
    {children}
  </Typography>
))`
  max-width: 700px;
  margin: 1rem auto;
`;
const StyledImg = styled(({ alt, ...props }) => <img alt={alt} {...props} />)`
  border-radius: 0.5rem;
  overflow: hidden;
`;

const ProjectTemplate: React.FC<ProjectTemplateArgs> = ({ data }) => {
  const frontmatter = data.mdx?.frontmatter;
  const title = frontmatter?.title ?? '';
  const subtitle = frontmatter?.subtitle ?? '';
  const description = frontmatter?.description ?? '';
  const challenge = frontmatter?.challenge ?? '';
  const solution = frontmatter?.solution ?? '';
  const feature = frontmatter?.feature?.childImageSharp?.fluid;
  const videos = frontmatter?.videos ?? [];
  const images = frontmatter?.images ?? [];
  const client = frontmatter?.client ?? '';
  const roles = frontmatter?.roles ?? [];
  const body = data.mdx?.body ?? '';

  return (
    <>
      <MDXProvider components={{ h2: Headline2, p: Paragraph, img: StyledImg }}>
        <SEO title={title} />
        <Grid>
          <GridCell span={12}>
            <Button onClick={() => navigate(-1)} icon="arrow_back">
              Back
            </Button>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </GridCell>
          <GridCell span={12}>
            <Paragraph>
              <b>Client:</b> {client}
              <br />
              <b>Roles:</b> {roles.join(' • ')}
            </Paragraph>
          </GridCell>
          {!!feature && (
            <GridCell span={12} style={{ textAlign: 'center' }}>
              <HeroImage>
                <Zoom>
                  <Image fluid={feature} />
                </Zoom>
              </HeroImage>
            </GridCell>
          )}
          <GridCell span={12}>
            <Subtitle>DESCRIPTION</Subtitle>
            <MDXRenderer>{description}</MDXRenderer>
          </GridCell>
          <GridCell span={12}>
            <Subtitle>CHALLENGE</Subtitle>
            <MDXRenderer>{challenge}</MDXRenderer>
          </GridCell>
          {images.slice(0, 3).map((image, i) => {
            const fluid = image?.childImageSharp?.fluid;
            if (!fluid) return null;
            return (
              <GridCell span={4} key={`image-${i}`}>
                <Zoom>
                  <Image fluid={fluid} />
                </Zoom>
              </GridCell>
            );
          })}
          <GridCell span={12}>
            <Subtitle>SOLUTION</Subtitle>
            <MDXRenderer>{solution}</MDXRenderer>
            <MDXRenderer>{body}</MDXRenderer>
          </GridCell>
          {videos.map((src, i) => {
            if (!src) return null;
            return (
              <GridCell span={6} key={`video-${i}`}>
                <div className="embed-container">
                  <iframe
                    title="Project Video"
                    src={src}
                    frameBorder={0}
                    allowFullScreen
                  />
                </div>
              </GridCell>
            );
          })}
          {images.slice(3).map((image, i) => {
            const fluid = image?.childImageSharp?.fluid;
            if (!fluid) return null;
            return (
              <GridCell span={4} key={`image-${i}`}>
                <Image fluid={fluid} />
              </GridCell>
            );
          })}
          <GridCell span={12}>
            <Button onClick={() => navigate(-1)} icon="arrow_back">
              Back
            </Button>
          </GridCell>
        </Grid>
      </MDXProvider>
    </>
  );
};

export const pageQuery = graphql`
  query Project($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        subtitle
        client
        roles
        description
        challenge
        solution
        feature {
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
        images {
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
        videos
      }
    }
  }
`;

export default ProjectTemplate;
