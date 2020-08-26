import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { ClientImagesQuery } from '../../graphql-types';

import 'swiper/swiper-bundle.min.css';
import { useBreakpoints } from './hooks';

SwiperCore.use([Autoplay]);

const query = graphql`
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
`;

export const Clients = () => {
  const data = useStaticQuery<ClientImagesQuery>(query);
  const { isXsmall } = useBreakpoints();
  const nodes = data?.allFile?.nodes;

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
        {nodes.map(({ childImageSharp }, i) => {
          if (!childImageSharp) return null;
          return (
            <SwiperSlide key={`image-${i}`}>
              <Img
                fluid={childImageSharp.fluid}
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
