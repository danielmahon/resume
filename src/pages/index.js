import React from 'react';
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
import { Element } from 'react-scroll';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Skills from '../components/skills';

const About = styled(Grid)`
  color: white;
  .mdc-typography--body1 {
    opacity: 0.8;
  }
  .mdc-typography--headline4 {
    &:not(:first-child) {
      margin-top: 3rem;
    }
  }
`;
const AboutWrapper = styled.div`
  background-color: rgba(1, 1, 1, 1);
`;
const Avatar = styled.div`
  display: inline-block;
  .gatsby-image-wrapper {
    border-radius: 100px;
    height: 200px;
    width: 200px;
  }
`;
const StyledGridTile = styled(GridTile)`
  &&& {
    width: 100%;
    @media screen and (min-width: 600px) {
      width: calc(50% - 4px);
    }
    @media screen and (min-width: 1024px) {
      width: calc(33% - 2px);
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Element name="about" />
    <AboutWrapper>
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
            Excepteur sunt ea incididunt nulla nostrud eiusmod minim culpa
            veniam duis mollit laborum id. Nostrud deserunt laborum laborum sint
            nulla id elit enim mollit consectetur voluptate ullamco aliqua.
            Reprehenderit enim anim sunt ipsum sunt consectetur laborum qui
            incididunt nulla non. Occaecat excepteur officia officia incididunt
            sit commodo elit qui proident ut dolor eiusmod. Fugiat eu veniam
            laborum mollit in consectetur eu pariatur dolor ut incididunt id ad
            consectetur. Dolor est amet aliquip cillum eiusmod deserunt nulla
            ipsum. Eu incididunt laborum do proident deserunt.
          </Typography>

          <Typography use="body1" tag="p">
            Proident qui sint mollit anim anim dolore cillum aliquip irure
            laboris mollit labore cillum incididunt. In sint adipisicing ea
            consequat aliqua do nisi et fugiat et non. Voluptate irure elit
            adipisicing labore pariatur ad aliqua. Reprehenderit consectetur
            aute mollit magna Lorem commodo sint reprehenderit nisi aute.
            Laboris labore incididunt voluptate proident laboris duis aute
            nostrud duis consectetur et velit labore. Adipisicing deserunt
            fugiat id laboris et est.
          </Typography>

          <Typography use="body1" tag="p">
            Cupidatat adipisicing Lorem ad nostrud officia dolore amet deserunt
            proident. Sit consequat excepteur culpa cupidatat enim deserunt.
            Dolor dolor esse eiusmod consectetur exercitation exercitation do.
          </Typography>

          <Typography
            use="body1"
            tag="p"
            style={{ color: 'rgba(255, 189, 149, 1.00)' }}>
            I want to listen to your ideas... you'll want to listen to mine.
          </Typography>

          <Element name="contact" />

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
            <GridCell
              span={6}
              style={{ textAlign: 'center', padding: '1rem 0 2rem 0' }}>
              <Button raised onClick={() => window.alert('download resume')}>
                Download my Resumé
              </Button>
              <br />
              <br />
              <Button outlined tag="a" href="mailto:dan@mahonstudios.com">
                Email Me
              </Button>
            </GridCell>
          </GridInner>
          {/* <Link to="/page-2/">Go to page 2</Link> */}
        </GridCell>
      </About>
    </AboutWrapper>
    <Element name="work" />
    <Grid>
      <GridCell span={12}>
        <GridList tileAspect="4x3">
          {[0, 1, 2, 3, 4, 5].map((val, i) => (
            <StyledGridTile key={i}>
              <GridTilePrimary>
                <GridTilePrimaryContent>
                  <img src={`https://source.unsplash.com/random`} alt="test" />
                </GridTilePrimaryContent>
              </GridTilePrimary>
              <GridTileSecondary>
                <GridTileIcon icon="info" />
                <GridTileTitle>Project {i + 1}</GridTileTitle>
              </GridTileSecondary>
            </StyledGridTile>
          ))}
        </GridList>
      </GridCell>
    </Grid>
    <Grid>
      <GridCell span={4} style={{ textAlign: 'center' }}>
        <Typography use="headline4" tag="p">
          WORK
        </Typography>
      </GridCell>
      <GridCell span={8}>
        {/* Job */}
        <Typography use="headline5" tag="p">
          Mahon Studios
        </Typography>
        <Typography use="body1" tag="i">
          Owner / President • 2011 - Current
          <br />
          Designer / Developer / Photographer • 1999 - 2006
        </Typography>
        <Typography use="body1" tag="p">
          <Button
            dense
            outlined
            tag="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.mahonstudios.com">
            mahonstudios.com
          </Button>
        </Typography>
        <Typography use="body1" tag="p">
          Mahon Studios is a full service interactive creative agency. Makers at
          heart, and with over 25 years of experience across a broad array of
          disciplines, Mahon Studios has the skill and motivation to help you
          achieve your vision.
        </Typography>
        <Typography use="body1" tag="div">
          <Typography use="overline" tag="span" style={{ display: 'block' }}>
            Responsibilities
          </Typography>
          <ul>
            <li>Graphic Design</li>
            <li>Photography & Videography</li>
            <li>Set, Exhibit, and Prop Design</li>
            <li>3D Modeling, Animation, and Virtual Reality</li>
            <li>Mobile, Desktop, and Web Application Development</li>
            <li>Interactive Physical Computing</li>
            <li>Print & Outdoor Media Design</li>
            <li>Illustration</li>
            <li>Copywriting</li>
          </ul>
        </Typography>
        <Typography use="body1" tag="p">
          <Typography use="overline" tag="span" style={{ display: 'block' }}>
            Awards
          </Typography>
          Lorem ipsum dolor...
        </Typography>
        <hr />
        {/* Job */}
        <Typography use="headline5" tag="p">
          Prompter Communications
        </Typography>
        <Typography use="body1" tag="i">
          Partner / Developer / Designer • 2011 - 2016
        </Typography>
        <Typography use="body1" tag="p">
          BarPrompter is an integrated marketing approach to building patron
          loyalty, and a powerful multi-tool, specifically designed for the Bar
          and Restaurant business. BarPrompter keeps your customers actively
          engaged in your brand by using a variety of customer interactions,
          sales motivators, entertainment, education, and peer to peer
          advertising.
        </Typography>
        <Typography use="body1" tag="div">
          <Typography use="overline" tag="span" style={{ display: 'block' }}>
            Responsibilities
          </Typography>
          <ul>
            <li>Graphic Design</li>
            <li>Mobile, Desktop, and Web Application Development</li>
            <li>Interactive Physical Computing</li>
            <li>Copywriting</li>
          </ul>
        </Typography>
        <hr />
        {/* Job */}
        <Typography use="headline5" tag="p">
          Jewish National Fund
        </Typography>
        <Typography use="body1" tag="i">
          Creative Director • 2009 - 2011
          <br />
          Graphic Designer / Interactive Developer • 2006 - 2009
        </Typography>
        <Typography use="body1" tag="p">
          <Button
            dense
            outlined
            tag="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.jnf.org">
            jnf.org
          </Button>
        </Typography>
        <Typography use="body1" tag="p">
          JNF is a nonprofit organization and United Nations NGO
          (non-governmental organization) that strives to bring an enhanced
          quality of life to all of Israel’s residents and translate these
          advancements to the world beyond. JNF is “greening” the desert with
          millions of trees, building thousands of parks across Israel, creating
          new communities and cities for generations of Israelis to call home,
          bolstering Israel’s water supply, helping develop innovative arid
          agriculture techniques and educating both young and old about the
          founding and importance of Israel and Zionism.
        </Typography>
        <Typography use="body1" tag="div">
          <Typography use="overline" tag="span" style={{ display: 'block' }}>
            Responsibilities
          </Typography>
          <ul>
            <li>Art Direction</li>
            <li>Graphic Design</li>
            <li>Mobile, Desktop, and Web Application Development</li>
          </ul>
        </Typography>
        <Typography use="body1" tag="p">
          <Typography use="overline" tag="span" style={{ display: 'block' }}>
            Awards
          </Typography>
          Convio Innovator Award 2009
        </Typography>
      </GridCell>
    </Grid>
    <Element name="skills" />
    <Grid>
      <GridCell span={4} style={{ textAlign: 'center' }}>
        <Typography use="headline4" tag="p">
          SKILLS
        </Typography>
      </GridCell>
      <GridCell span={8}>
        <Skills />
      </GridCell>
    </Grid>
    <Element name="education" />
    <Grid>
      <GridCell span={4} style={{ textAlign: 'center' }}>
        <Typography use="headline4" tag="p">
          EDUCATION
        </Typography>
      </GridCell>
      <GridCell span={8}>
        <Typography use="headline5" tag="p">
          University of Akron (Myers School of Art)
        </Typography>
        <Typography use="body1" tag="i">
          Graphic Design • Spring 2006
        </Typography>
        <Typography use="body1" tag="p">
          The largest program within the Myers School of Art. It is a
          professional program for students pursuing careers in the expanding
          multidisciplinary field of visual communication design. Critical
          thinking and logical problem solving in print, web and interactive
          media are emphasized.
        </Typography>
        <Typography use="body1" tag="p">
          <Typography use="overline" tag="span" style={{ display: 'block' }}>
            Activities and Societies
          </Typography>
          Phi Gamma Delta, International Business Club, H.O.L.A (spanish club),
          Various Art Clubs, Intramural Soccer
        </Typography>
        <Typography use="body1" tag="p">
          <Typography use="overline" tag="span" style={{ display: 'block' }}>
            Study Abroad - Universidad de Valladolid (España)
          </Typography>
          The DISSTA Study Abroad Program is an immersion learning experience
          spent living and studying in Spain. Included international business
          practicum. Received certificate of Spanish language & culture.
        </Typography>
        <hr />
        <Typography use="headline5" tag="p">
          Central Catholic High School
        </Typography>
        <Typography use="body1" tag="i">
          Spring 2002
        </Typography>
        <Typography use="body1" tag="p">
          <Typography use="overline" tag="span" style={{ display: 'block' }}>
            Relevant Coursework
          </Typography>
          Architecture elective (4 years), Art elective (4 years), Advanced
          Placement (AP) Physics, Organic Chemistry
        </Typography>
      </GridCell>
    </Grid>
  </Layout>
);

export default IndexPage;
