import React from 'react';
// Import Swiper React components
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import { graphql, useStaticQuery } from 'gatsby';
import styled, { css } from 'styled-components';

SwiperCore.use([Autoplay]);

const query = graphql`
  query {
    images: allFile(
      filter: { relativeDirectory: { eq: "clients" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          name
          publicURL
          relativeDirectory
        }
      }
    }
  }
`;

const ClientWrapper = styled('div')`
  height: 100%;
  width: 100%;
  display: flex;
  /* align-content: center; */
  justify-content: center;
  /* overflow: hidden; */
  /* position: relative; */
`;
const ClientImage = styled('img')`
  /* width: 250px; */
  /* display: block; */
  max-width: 100%;
  /* position: relative; */
  /* display: inline-block; */
  object-fit: contain;
  /* max-height: 100%; */
  flex: 0;
`;

export const Clients = () => {
  const data = useStaticQuery(query);
  const edges = data?.images?.edges;

  return (
    <Swiper
      spaceBetween={64}
      slidesPerView={5}
      loop={true}
      style={{ height: 100 }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}

      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}>
    >
      {edges.map(({ node }) => {
        return (
          <SwiperSlide key={`${node.name}`}>
            <ClientWrapper>
              <ClientImage src={node.publicURL} alt={node.name} />
            </ClientWrapper>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
