import React from 'react';
import { navigate, graphql } from 'gatsby';
import styled from 'styled-components';

import { Grid, GridCell } from '@rmwc/grid';
import { Button } from '@rmwc/button';
import { Typography, TypographyProps } from '@rmwc/typography';
import { HTMLProps } from '@rmwc/types';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { ProjectQuery } from '../../graphql-types';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';

export type ProjectTemplateArgs = {
  data: ProjectQuery;
};

const HeroImage = styled.div`
  .gatsby-image-wrapper {
    border-radius: 0.25rem;
    overflow: hidden;
    height: 0;
    padding-top: 56.25%;
  }
`;
const Title = styled(Typography).attrs({ tag: 'h1', use: 'headline1' })<
  TypographyProps & HTMLProps
>`
  max-width: 700px;
  margin: 0 auto;
  font-weight: 300;
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
  const body = data.mdx?.body ?? '';

  return (
    <Layout secondary>
      <MDXProvider components={{ h2: Headline2, p: Paragraph }}>
        <SEO title={title} />
        <Grid>
          <GridCell span={12}>
            <Button onClick={() => navigate('/#work')} icon="arrow_back">
              Back
            </Button>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </GridCell>
          <GridCell span={12} style={{ textAlign: 'center' }}>
            <HeroImage>
              <Img fluid={feature as any} />
            </HeroImage>
          </GridCell>
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
                <Img fluid={fluid as any} />
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
                <Img fluid={fluid as any} />
              </GridCell>
            );
          })}
          <GridCell span={12}>
            <Button onClick={() => navigate('/#work')} icon="arrow_back">
              Back
            </Button>
          </GridCell>
        </Grid>
      </MDXProvider>
    </Layout>
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
        description
        challenge
        solution
        feature {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        images {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        videos
      }
    }
  }
`;

export default ProjectTemplate;
