import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { Grid, GridCell } from '@rmwc/grid';
import { Button, ButtonIcon } from '@rmwc/button';
import { Typography } from '@rmwc/typography';
import { ProjectImage, Image } from '../../components/image';

const HeroImage = styled.div`
  .gatsby-image-wrapper {
    width: 100%;
    height: 75vh;
    border-radius: 0.25rem;
  }
`;
const Title = styled(Typography).attrs({ tag: 'h2', use: 'headline3' })`
  text-align: center;
  margin: 2rem 0;
`;
const Subtitle = styled(Typography).attrs({
  tag: 'div',
  use: 'subtitle1',
  theme: 'primary',
})`
  text-align: center;
`;

const SecondPage = () => (
  <Layout secondary>
    <SEO title="HydroChemPSC Technology Trailer" />
    <Grid>
      <GridCell span={12} style={{ textAlign: 'center' }}>
        <HeroImage>
          <Image src={`projects/one/DSC_5056.jpg`} />
        </HeroImage>
      </GridCell>
      <GridCell span={12}>
        <Button onClick={() => navigate('/#work')}>
          <ButtonIcon icon="arrow_back" />
          Back
        </Button>
        <Title>HydroChemPSC Technology Trailer</Title>
        <Subtitle>
          Interactive trade show exhibit that travels directly to the customer.
        </Subtitle>
      </GridCell>
      <GridCell span={2} />
      <GridCell span={8}>
        <Typography use="body1" tag="p">
          The HydroChemPSC Technology Trailer is an interactive mobile exhibit,
          that travels the country and showcases the company's latest services
          and technology through remotely updated touchscreen and physical
          interfaces.
        </Typography>
        <Typography use="overline" tag="p">
          Challenge
        </Typography>
        <Typography use="body1" tag="p">
          The client was struggling to showcase their continually evolving
          service-lines and state-of-the-art technology to a broad customer base
          spread throughout the United States. Traditional marketing mediums
          were not impactful enough and typical trade show exhibits were not
          mobile. They needed a solution that would work throughout the year,
          where and when they needed it.
          <br />
          <br />
          The content needed to frequently update so that they could keep their
          brand and message ahead of the competition. The ultimate goal was to
          inform, educate, and impress upon prospective customers the value of
          their services and advanced technology.
        </Typography>
        {/* <Link to="/">Go back to the homepage</Link> */}
      </GridCell>
      <GridCell span={2} />
      <GridCell span={4}>
        <ProjectImage src={`projects/one/_DSC8987.jpg`} />
      </GridCell>
      <GridCell span={4}>
        <ProjectImage src={`projects/one/DSC_5049.jpg`} />
      </GridCell>
      <GridCell span={4}>
        <ProjectImage src={`projects/one/DSC_5027.jpg`} />
      </GridCell>
      <GridCell span={2} />
      <GridCell span={8}>
        <Typography use="overline" tag="p">
          Solution
        </Typography>
        <Typography use="body1" tag="p">
          Excepteur sunt ea incididunt nulla nostrud eiusmod minim culpa veniam
          duis mollit laborum id. Nostrud deserunt laborum laborum sint nulla id
          elit enim mollit consectetur voluptate ullamco aliqua. Reprehenderit
          enim anim sunt ipsum sunt consectetur laborum qui incididunt nulla
          non. Occaecat excepteur officia officia incididunt sit commodo elit
          qui proident ut dolor eiusmod. Fugiat eu veniam laborum mollit in
          consectetur eu pariatur dolor ut incididunt id ad consectetur. Dolor
          est amet aliquip cillum eiusmod deserunt nulla ipsum. Eu incididunt
          laborum do proident deserunt.
        </Typography>
        {/* <Link to="/">Go back to the homepage</Link> */}
      </GridCell>
      <GridCell span={2} />
      <GridCell span={4}>
        <ProjectImage src={`projects/one/_DSC9028.jpg`} />
      </GridCell>
      <GridCell span={4}>
        <ProjectImage src={`projects/one/_DSC9028.jpg`} />
      </GridCell>
      <GridCell span={4}>
        <ProjectImage src={`projects/one/_DSC9028.jpg`} />
      </GridCell>
      <GridCell span={4}>
        <ProjectImage src={`projects/one/_DSC9028.jpg`} />
      </GridCell>
      <GridCell span={4}>
        <ProjectImage src={`projects/one/_DSC9028.jpg`} />
      </GridCell>
      <GridCell span={4}>
        <ProjectImage src={`projects/one/_DSC9028.jpg`} />
      </GridCell>
      <GridCell span={12}>
        <Button onClick={() => navigate('/#work')}>
          <ButtonIcon icon="arrow_back" />
          Back
        </Button>
      </GridCell>
    </Grid>
  </Layout>
);

export default SecondPage;
