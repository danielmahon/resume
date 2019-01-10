import React from 'react';
import { Link } from 'gatsby';
import { Grid, GridCell, GridInner } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';
import { Button } from '@rmwc/button';
import styled from 'styled-components';
import {
  GridList,
  GridTile,
  GridTileIcon,
  GridTilePrimary,
  GridTilePrimaryContent,
  GridTileSecondary,
  GridTileTitle,
} from '@rmwc/grid-list';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import avatar from '../images/profile.jpg';

const About = styled(Grid)`
  color: white;
  background-color: rgba(1, 1, 1, 1);
  .mdc-typography--body1 {
    opacity: 0.8;
  }
  .mdc-typography--headline4 {
    &:not(:first-child) {
      margin-top: 3rem;
    }
  }
`;
const Avatar = styled.div`
  display: inline-block;
  .gatsby-image-wrapper {
    border-radius: 100px;
    height: 200px;
    width: 200px;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <About>
      <GridCell span={4} style={{ textAlign: 'center' }}>
        <Avatar>
          <Image path="profile.jpg" />
        </Avatar>
      </GridCell>
      <GridCell span={7}>
        <Typography use="headline4" tag="div">
          About Me
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

        <Typography use="body1" tag="p">
          Proident qui sint mollit anim anim dolore cillum aliquip irure laboris
          mollit labore cillum incididunt. In sint adipisicing ea consequat
          aliqua do nisi et fugiat et non. Voluptate irure elit adipisicing
          labore pariatur ad aliqua. Reprehenderit consectetur aute mollit magna
          Lorem commodo sint reprehenderit nisi aute. Laboris labore incididunt
          voluptate proident laboris duis aute nostrud duis consectetur et velit
          labore. Adipisicing deserunt fugiat id laboris et est.
        </Typography>

        <Typography use="body1" tag="p">
          Cupidatat adipisicing Lorem ad nostrud officia dolore amet deserunt
          proident. Sit consequat excepteur culpa cupidatat enim deserunt. Dolor
          dolor esse eiusmod consectetur exercitation exercitation do.
        </Typography>

        <Typography use="body1" tag="p">
          Now go build something great.
        </Typography>

        <Typography use="headline4" tag="div">
          Contact Details
        </Typography>

        <GridInner>
          <GridCell span={6}>
            <Typography use="body1" tag="p">
              Daniel Mahon
              <br />
              570 Fairhill Dr.
              <br />
              Akron, OH 44313
              <br />
              (646) 812-4550
              <br />
              dan@mahonstudios.com
            </Typography>
          </GridCell>
          <GridCell span={6}>
            <Button
              raised
              style={{ marginTop: '1rem' }}
              onClick={() => window.alert('download resume')}>
              Download my Resumé
            </Button>
          </GridCell>
        </GridInner>
        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </GridCell>
    </About>
    <Grid>
      <GridCell span={4} style={{ textAlign: 'center' }}>
        <Typography use="headline4" tag="p">
          WORK
        </Typography>
      </GridCell>
      <GridCell span={8}>
        <Typography use="headline5" tag="p">
          University of Life
        </Typography>
        <Typography use="body1" tag="p">
          Master in Graphic Design • April 2007
        </Typography>
        <Typography use="body1" tag="p">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
        </Typography>
        <Typography use="headline5" tag="p">
          School of Cool Designers
        </Typography>
        <Typography use="body1" tag="p">
          B.A. Degree in Graphic Design • April 2007
        </Typography>
        <Typography use="body1" tag="p">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
        </Typography>
      </GridCell>
    </Grid>
    <Grid>
      <GridCell span={4} style={{ textAlign: 'center' }}>
        <Typography use="headline4" tag="p">
          SKILLS
        </Typography>
      </GridCell>
      <GridCell span={8}>
        <Typography use="headline5" tag="p">
          University of Life
        </Typography>
        <Typography use="body1" tag="p">
          Master in Graphic Design • April 2007
        </Typography>
        <Typography use="body1" tag="p">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
        </Typography>
        <Typography use="headline5" tag="p">
          School of Cool Designers
        </Typography>
        <Typography use="body1" tag="p">
          B.A. Degree in Graphic Design • April 2007
        </Typography>
        <Typography use="body1" tag="p">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
        </Typography>
      </GridCell>
    </Grid>
    <Grid>
      <GridCell span={4} style={{ textAlign: 'center' }}>
        <Typography use="headline4" tag="p">
          EDUCATION
        </Typography>
      </GridCell>
      <GridCell span={8}>
        <Typography use="headline5" tag="p">
          University of Life
        </Typography>
        <Typography use="body1" tag="p">
          Master in Graphic Design • April 2007
        </Typography>
        <Typography use="body1" tag="p">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
        </Typography>
        <Typography use="headline5" tag="p">
          School of Cool Designers
        </Typography>
        <Typography use="body1" tag="p">
          B.A. Degree in Graphic Design • April 2007
        </Typography>
        <Typography use="body1" tag="p">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
        </Typography>
      </GridCell>
    </Grid>
    <Grid>
      <GridCell span={12}>
        <Typography use="headline4" tag="p">
          PORTFOLIO
        </Typography>
        <GridList tileAspect="4x3">
          {[0, 1, 2, 3, 4, 5].map((val, i) => (
            <GridTile key={i} style={{ width: '33%' }}>
              <GridTilePrimary>
                <GridTilePrimaryContent>
                  <img
                    src="https://material-components-web.appspot.com/images/1-1.jpg"
                    alt="test"
                  />
                </GridTilePrimaryContent>
              </GridTilePrimary>
              <GridTileSecondary>
                <GridTileIcon icon="info" />
                <GridTileTitle>Tile {i + 1}</GridTileTitle>
              </GridTileSecondary>
            </GridTile>
          ))}
        </GridList>
      </GridCell>
    </Grid>
  </Layout>
);

export default IndexPage;
