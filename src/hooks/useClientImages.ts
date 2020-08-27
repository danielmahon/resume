import { useStaticQuery, graphql } from 'gatsby';

export const useClientImages = () => {
  const { allFile } = useStaticQuery<GatsbyTypes.ClientImagesQuery>(graphql`
    query ClientImages {
      allFile(filter: { relativeDirectory: { eq: "clients" } }) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 512) {
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
  `);
  return allFile.nodes;
};
