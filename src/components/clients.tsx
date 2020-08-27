import React from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Img from 'gatsby-image';

import 'swiper/swiper-bundle.min.css';
import { useBreakpoints, useClientImages } from '../hooks';

SwiperCore.use([Autoplay]);

export const Clients = () => {
  const nodes = useClientImages();
  const { isXsmall } = useBreakpoints();

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
        {nodes.map((node, i) => {
          const fluid = node.childImageSharp?.fluid;
          if (!fluid) return null;
          return (
            <SwiperSlide key={`image-${i}`}>
              <Img
                fluid={fluid as any}
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
