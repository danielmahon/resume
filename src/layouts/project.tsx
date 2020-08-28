import React, { Fragment } from 'react';
import { navigate, graphql } from 'gatsby';
import styled from 'styled-components';

import { Grid, GridCell } from '@rmwc/grid';
import { Checkbox } from '@rmwc/checkbox';
import { Button } from '@rmwc/button';
import { Typography, TypographyProps } from '@rmwc/typography';
import { HTMLProps } from '@rmwc/types';
import { SEO } from '../components/seo';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img, { GatsbyImageProps } from 'gatsby-image';
import Zoom from 'react-medium-image-zoom';
import { ImageList, ImageListItem } from '@rmwc/image-list';
import { List, ListItem, ListItemGraphic, ListProps } from '@rmwc/list';
import { useBreakpoints } from '../hooks';

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
  /* height: 100%; */
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
  theme: 'primary',
})<TypographyProps & HTMLProps>`
  max-width: 700px;
  margin: 0 auto;
  font-size: ${({ theme }) => (theme.isLteSmall ? 18 : 24)}px;
  /* text-transform: uppercase; */
`;

const Headline2 = styled(Typography).attrs({
  use: 'headline5',
  tag: 'h2',
})`
  max-width: 700px;
  margin: 1rem auto;
`;

const Paragraph = styled(Typography).attrs<any>((props) => ({
  use: props?.use ?? 'body1',
  tag: 'p',
}))<Partial<TypographyProps> & HTMLProps>`
  max-width: 700px;
  margin: 1rem auto;
`;

const StyledImg = styled.img`
  border-radius: 0.5rem;
  overflow: hidden;
`;

// const UnorderedList = styled.div`
//   max-width: 700px;
//   margin: 1em auto;
//   padding: 0;
// `;
const StyledList = styled(List)<ListProps & HTMLProps>`
  --mdc-theme-secondary: var(--mdc-theme-primary);
  display: block;
  max-width: 700px;
  margin: 1em auto;
  padding: 0;
  .mdc-list-item__graphic {
    margin-right: 1rem;
  }
  .mdc-list-item {
    font-weight: bold;
  }
  > ul {
    margin: 1rem 0 1rem 1rem;
    padding: 0 1rem;
    li {
      list-style-type: disc;
    }
    ul {
      padding-left: 1rem;
      li {
        list-style-type: circle;
      }
    }
  }
`;

// const ListItem = styled(Checkbox)<CheckboxProps & HTMLProps>`
//   --mdc-theme-secondary: var(--mdc-theme-primary);
//   display: block;
//   label {
//     line-height: 40px;
//     font-size: 1rem;
//   }
// `;

const components = {
  h2: Headline2,
  p: Paragraph,
  img: StyledImg,
};

const shortcodes = {
  Checkbox,
};

const ProjectTemplate: React.FC<ProjectTemplateArgs> = ({ data }) => {
  const { isLteSmall } = useBreakpoints();

  const frontmatter = data.mdx?.frontmatter;
  const title = frontmatter?.title ?? '';
  const subtitle = frontmatter?.subtitle ?? '';
  const description = frontmatter?.description ?? '';
  const challenge = frontmatter?.challenge ?? '';
  const challenges = frontmatter?.challenges ?? [];
  const solution = frontmatter?.solution ?? '';
  const feature = frontmatter?.feature?.childImageSharp?.fluid;
  const videos = frontmatter?.videos ?? [];
  const images = frontmatter?.images ?? [];
  const client = frontmatter?.client ?? '';
  const roles = frontmatter?.roles ?? [];
  const body = data.mdx?.body ?? '';

  return (
    <MDXProvider components={{ ...components, ...shortcodes }}>
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
          <Subtitle>Summary</Subtitle>
          <MDXRenderer>{description}</MDXRenderer>
        </GridCell>
        <GridCell span={12}>
          <Subtitle>Challenge</Subtitle>
          <MDXRenderer>{challenge}</MDXRenderer>
          <Paragraph use="overline">Project requirements:</Paragraph>
          <StyledList nonInteractive>
            {challenges.map((item, i) => (
              <ListItem key={`challenge-${i}`} disabled>
                <ListItemGraphic icon={<Checkbox checked={false} />} />
                {item?.label}
              </ListItem>
            ))}
          </StyledList>
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
          <Subtitle>Solution</Subtitle>
          <MDXRenderer>{solution}</MDXRenderer>
          <StyledList nonInteractive>
            {challenges.map((item, i) => (
              <Fragment key={`solution-${i}`}>
                <ListItem disabled>
                  <ListItemGraphic icon={<Checkbox checked />} />
                  {item?.label}
                </ListItem>
                <MDXRenderer>{item?.content ?? ''}</MDXRenderer>
              </Fragment>
            ))}
          </StyledList>
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
        <GridCell span={12}>
          <ImageList
            masonry
            style={{
              columnCount: isLteSmall ? 2 : 4,
              columnGap: '1rem',
            }}>
            {images.map((image, i) => {
              const fluid = image?.childImageSharp?.fluid;
              if (!fluid) return null;
              return (
                <ImageListItem
                  key={`image-list-item-${i}`}
                  style={{ marginBottom: '1rem' }}>
                  <Zoom>
                    <Image fluid={fluid} />
                  </Zoom>
                </ImageListItem>
              );
            })}
          </ImageList>
        </GridCell>

        <GridCell span={12}>
          <Button onClick={() => navigate(-1)} icon="arrow_back">
            Back
          </Button>
        </GridCell>
      </Grid>
    </MDXProvider>
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
        challenges {
          label
          content
        }
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
