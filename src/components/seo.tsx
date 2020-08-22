import React from 'react';
import Helmet, { HelmetProps } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

export type SEOProps = {
  exact?: boolean;
  description?: string;
  lang?: string;
  keywords?: string[];
} & Partial<HelmetProps>;

export const SEO: React.FC<SEOProps> = ({
  description,
  lang = 'en',
  meta,
  keywords,
  title = '',
  bodyAttributes,
  exact,
  children,
}) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;

        const combinedMeta = [
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: data.site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ];

        if (keywords) {
          combinedMeta.concat(
            keywords.length > 0
              ? {
                  name: `keywords`,
                  content: keywords.join(`, `),
                }
              : []
          );
        }

        if (meta) {
          combinedMeta.concat(meta as any);
        }

        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            bodyAttributes={bodyAttributes}
            titleTemplate={
              exact ? undefined : `%s | ${data.site.siteMetadata.title}`
            }
            meta={combinedMeta}>
            {children}
          </Helmet>
        );
      }}
    />
  );
};
