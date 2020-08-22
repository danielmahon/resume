import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import 'swiper/swiper-bundle.min.css';
import { useBreakpoints } from './hooks';

SwiperCore.use([Autoplay]);

const query = graphql`
  query {
    images: allFile(
      filter: { relativeDirectory: { eq: "clients" } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        publicURL
        relativeDirectory
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export const Clients = () => {
  const data = useStaticQuery(query);
  const { isXsmall } = useBreakpoints();
  const nodes = data?.images?.nodes;

  return (
    <div style={{ padding: '1rem' }}>
      <Swiper
        spaceBetween={64}
        slidesPerView={isXsmall ? 1 : 5}
        loop={true}
        style={{ height: 100 }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}>
        {nodes.map((node) => {
          const image = node.childImageSharp;

          if (image === null) return null;

          return (
            <SwiperSlide key={`${node.name}`}>
              <Img
                fluid={image.fluid}
                fadeIn={false}
                style={{ height: '100%' }}
                imgStyle={{ objectFit: 'contain' }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
