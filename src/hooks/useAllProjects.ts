import { graphql, useStaticQuery } from 'gatsby';

export const useAllProjects = () => {
  const { allMdx } = useStaticQuery<GatsbyTypes.AllProjectsQuery>(graphql`
    query AllProjects {
      allMdx {
        nodes {
          slug
          body
          frontmatter {
            title
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
          }
        }
      }
    }
  `);
  return allMdx.nodes;
};
