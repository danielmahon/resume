import React from 'react';
import { navigate, graphql } from 'gatsby';
import styled from 'styled-components';

import { Grid, GridCell } from '@rmwc/grid';
import { Button } from '@rmwc/button';
import { Typography, TypographyProps } from '@rmwc/typography';
import { HTMLProps } from '@rmwc/types';
import { Image } from '../components/image';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { ProjectQuery } from '../../graphql-types';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Img } from 'gatsby-image';

export type ProjectTemplateArgs = {
  data: ProjectQuery;
};

const HeroImage = styled.div`
  .gatsby-image-wrapper {
    width: 100%;
    height: 75vh;
    border-radius: 0.25rem;
  }
`;
const Title = styled(Typography).attrs({ tag: 'h2', use: 'headline3' })<
  TypographyProps & HTMLProps
>`
  text-align: center;
  margin: 2rem 0;
`;

const Subtitle = styled(Typography).attrs({
  tag: 'div',
  use: 'subtitle1',
  theme: 'primary',
})<TypographyProps & HTMLProps>`
  text-align: center;
`;

const Content = styled('div')`
  [class^='mdc-typography'] {
    max-width: 700px;
    margin: 1rem auto;
  }
`;

const Headline2 = ({ children, ...props }) => (
  <Typography use="headline5" tag="h2" {...props}>
    {children}
  </Typography>
);
const Paragraph = ({ children, ...props }) => (
  <Typography use="body1" tag="p" {...props}>
    {children}
  </Typography>
);

const components = {
  h2: Headline2,
  p: Paragraph,
};

const ProjectTemplate: React.FC<ProjectTemplateArgs> = ({ data }) => {
  const title = data.mdx?.frontmatter?.title ?? '';
  const subtitle = data.mdx?.frontmatter?.subtitle ?? '';
  const description = data.mdx?.frontmatter?.description ?? '';
  const challenge = data.mdx?.frontmatter?.challenge ?? '';
  const solution = data.mdx?.frontmatter?.solution ?? '';
  const videos = data.mdx?.frontmatter?.videos ?? [];
  const images = data.mdx?.frontmatter?.images ?? [];
  const body = data.mdx?.body ?? '';

  return (
    <Layout secondary>
      <MDXProvider components={components}>
        <SEO title={title} />
        <Grid>
          <GridCell span={12} style={{ textAlign: 'center' }}>
            <HeroImage>
              <Image src={`projects/one/DSC_5056.jpg`} />
            </HeroImage>
          </GridCell>
          <GridCell span={12}>
            <Button onClick={() => navigate('/#work')} icon="arrow_back">
              Back
            </Button>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </GridCell>
          <GridCell span={12}>
            <Content>
              <MDXRenderer>{description}</MDXRenderer>
              <MDXRenderer>{challenge}</MDXRenderer>
              <MDXRenderer>{solution}</MDXRenderer>
              <MDXRenderer>{body}</MDXRenderer>
            </Content>
          </GridCell>
          {images.map(({ childImageSharp }, i) => (
            <GridCell span={4} key={`image-${i}`}>
              <Img fluid={childImageSharp.fluid} />
            </GridCell>
          ))}
          {videos.map((src, i) => (
            <GridCell span={6} key={`video-${i}`}>
              <div className="embed-container">
                <iframe
                  title="Project Video"
                  src={src ?? ''}
                  frameBorder={0}
                  allowFullScreen
                />
              </div>
            </GridCell>
          ))}
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
