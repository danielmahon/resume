import React from 'react';
import { withPrefix } from 'gatsby';
import { Grid, GridCell, GridRow } from '@rmwc/grid';
import { Typography } from '@rmwc/typography';
import { Button } from '@rmwc/button';
import styled from 'styled-components';
import { Element } from 'react-scroll';

import { Clients } from '../components/clients';
import { Image } from '../components/image';
import { SEO } from '../components/seo';
import { Skills } from '../components/skills';
import { TechCloud } from '../components/tech-cloud';
import { SocialIcons } from '../components/social-icons';
import { Projects } from '../components/projects';

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
    border-radius: calc(256px / 2);
    height: 256px;
    width: 256px;
  }
`;

const IndexPage = () => {
  return (
    <>
      <SEO
        exact={true}
        title="Daniel Mahon"
        keywords={[`daniel mahon`, `developer`, `designer`]}
      />
      <Element name="about" />
      <AboutWrapper>
        <About>
          <GridCell span={4} style={{ textAlign: 'center' }}>
            <Avatar>
              <Image src="profile.jpg" />
            </Avatar>
          </GridCell>
          <GridCell span={7}>
            <Typography use="headline4" tag="div">
              My Story
            </Typography>
            <Typography use="body1" tag="p">
              My name is Daniel, and simply put, I love to make things look nice
              and do neat stuff. I have worked in the creative industry for most
              of my life and have had the privilege to learn and experience many
              creative disciplines. I enjoy working solo as well as alongside
              other talented team members on unique and impactful projects.
              <br />
              <br />
              Having been part of a family creative agency for over 20 years, I
              have had more than a variety of roles and responsibilities.
              Starting as a teenager, I developed and enlarged negatives in a
              darkroom, eventually learning commercial photography and
              videography. Along with this came some experience in set design
              and fabrication. I was eventually asked to work on print campaigns
              which lead to a broader interest in design, digital media, and
              motion graphics. After designing hundreds of marketing materials,
              campaigns, and websites, I found myself interested in interactive
              design and started into software and web development. This lead to
              learning Coldfusion, Javascript, HTML, CSS, Flash, Appcelerator
              Titanium, DevOps, etc. Lately, I've been utilizing NodeJS and
              Dart, along with UI frameworks like Facebook's ReactJS and
              Google's Flutter to create interactive applications across a wide
              range of devices (web, mobile, desktop, embedded/IoT).
              <br />
              <br />I have many hobbies as well, some which nicely complement my
              professional career. Such as woodworking, model making, sculpture,
              drawing, 3D printing, and tinkering with embedded systems
              (Arduino, RaspberryPi, etc.). I create interactive Halloween
              decorations, smart-home devices, and even reverse engineer parts
              of Disney/Universal attractions. I'm also an active soccer player,
              hiker, and traveler.
              <br />
              <br />
              To be able to enjoy so many disciplines and hobbies, there is one
              thing you must enjoy... learning. I am very proud that even though
              I have learned a great deal from many talented people and
              institutions, I am also very good at teaching myself. I enjoy the
              challenge of learning new skills, especially when that knowledge
              allows me to work on more diverse projects. My favorite challenges
              are those which require combining a variety of technologies from
              the physical and digital realms to form unique experiences.
              <br />
              <br />
              Today, I am looking to take the next step in my career and join a
              team that focuses on creating educational and impactful
              interactive projects with positive influences. If you have a
              project or a team where you think I would be a good fit, please
              feel free to contact me.
              <br />
              <br />
              Thank you.
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

            <GridRow>
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
                  daniel@mahonstudios.com
                </Typography>
              </GridCell>
              <GridCell
                span={6}
                style={{ textAlign: 'center', padding: '1rem 0 1rem 0' }}>
                <Button
                  raised
                  tag="a"
                  target="__blank"
                  href={withPrefix('daniel-mahons-resume.pdf')}>
                  Download my Resumé
                </Button>
                <br />
                <br />
                <Button
                  raised
                  tag="a"
                  target="_blank"
                  style={{ borderColor: 'rgba(255, 255, 255, 0.25)' }}
                  href="mailto:daniel@mahonstudios.com">
                  Email Me
                </Button>
                <SocialIcons />
              </GridCell>
            </GridRow>
          </GridCell>
        </About>
      </AboutWrapper>
      <Grid>
        <GridCell span={12}>
          <Clients />
        </GridCell>
      </Grid>
      <Element name="projects" />
      <Grid
        style={{
          textAlign: 'center',
          backgroundColor: '#f1f1f1',
          paddingBottom: '4rem',
        }}>
        <GridCell span={12}>
          <Typography use="headline4" tag="p">
            RECENT PROJECTS
          </Typography>
          <Projects />
          <Typography use="body1" tag="p">
            MORE PROJECTS COMING SOON...
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
      <Grid>
        <GridCell span={4} style={{ textAlign: 'center' }}>
          <Typography use="headline4" tag="p">
            TECH
          </Typography>
        </GridCell>
        <GridCell span={8}>
          <TechCloud />
        </GridCell>
      </Grid>
      <Element name="work" />
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
            Owner / Creative Direction & Development • 2011 - Current (OH)
            <br />
            Designer / Developer / Photographer • 1999 - 2006 (OH)
          </Typography>
          <Typography use="body1" tag="p">
            <Button
              dense
              outlined
              onClick={() =>
                window.open('https://www.mahonstudios.com', '_blank')
              }>
              mahonstudios.com
            </Button>
          </Typography>
          <Typography use="body1" tag="p">
            Mahon Studios is a full service interactive creative agency. Makers
            at heart, and with over 35 years of experience across a broad array
            of disciplines.
          </Typography>

          <Typography use="body1" tag="div">
            <Typography use="overline" tag="span" style={{ display: 'block' }}>
              Responsibilities
            </Typography>
            <ul>
              <li>
                Designed thousands of client marketing materials for print,
                outdoor, and interactive mediums.
              </li>
              <li>
                Cultivated and managed hundreds of client relationships across
                the US, some lasting over 20 years.
              </li>
              <li>Experience in a variety of roles on multiple team sizes.</li>
              <li>
                Managed typical business functions including payroll, taxes,
                bookkeeping, and building maintenance.
              </li>
              <li>Regularly traveled for meetings, location shoots, etc.</li>
              <li>
                Designed and developed hundreds of complex mobile/web/desktop
                client/server applications and websites.
              </li>
              <li>
                Engineered, designed, and fabricated a variety of physical sets,
                props, and interactive components.
              </li>
              <li>
                Utilized fabrication technologies including 3D printing, CNC
                machining, carpentry, and graphics production.
              </li>
              <li>
                Produced regular studio and on-site photography and videography
                projects, both commercial and portrait.
              </li>
              <li>
                Created various 3D models, riggings, and animations for usage in
                print, video, and game engines.
              </li>
            </ul>
          </Typography>
          {/* <Typography use="body1" tag="p">
          <Typography use="overline" tag="span" style={{ display: 'block' }}>
            Awards
          </Typography>
          Lorem ipsum dolor...
        </Typography> */}
          <hr />
          {/* Job */}
          <Typography use="headline5" tag="p">
            Prompter Communications
          </Typography>
          <Typography use="body1" tag="i">
            Partner / Lead Developer / Designer • 2011 - 2016 (OH)
          </Typography>
          <Typography use="body1" tag="p">
            BarPrompter is an integrated marketing approach to building patron
            loyalty, and a powerful multi-tool, specifically designed for the
            Bar and Restaurant business. BarPrompter keeps your customers
            actively engaged in your brand by using a variety of customer
            interactions, sales motivators, entertainment, education, and peer
            to peer advertising.
          </Typography>
          <Typography use="body1" tag="div">
            <Typography use="overline" tag="span" style={{ display: 'block' }}>
              Responsibilities
            </Typography>
            <ul>
              <li>
                Developed "BarPrompter", a patent pending interactive
                application allowing users to interact in real-time with
                distributed video systems in bars and restaurants
              </li>
              <li>
                Developed "ElderVue", another patent pending system, allowing
                users to remotely communicate with family members in nursing
                homes via distributed video. HIPAA compliant transmission back
                to users fromstaff.
              </li>
              <li>Co-managed a small sales team.</li>
            </ul>
          </Typography>
          <hr />
          {/* Job */}
          <Typography use="headline5" tag="p">
            Jewish National Fund
          </Typography>
          <Typography use="body1" tag="i">
            Creative Director • 2009 - 2011 (NYC)
            <br />
            Graphic Designer / Interactive Developer • 2006 - 2009 (NYC)
          </Typography>
          <Typography use="body1" tag="p">
            <Button
              dense
              outlined
              onClick={() => window.open('https://www.jnf.org', '_blank')}>
              jnf.org
            </Button>
          </Typography>
          <Typography use="body1" tag="p">
            JNF is a nonprofit organization and United Nations NGO
            (non-governmental organization) that strives to bring an enhanced
            quality of life to all of Israel’s residents and translate these
            advancements to the world beyond.
          </Typography>
          <Typography use="body1" tag="div">
            <Typography use="overline" tag="span" style={{ display: 'block' }}>
              Responsibilities
            </Typography>
            <ul>
              <li>
                Hired as a developer, consistently took on more responsibility
                leading to a promotion as Creative Director.
              </li>
              <li>Designed full company rebrand with guidelines.</li>
              <li>
                Worked closely with the Director of Marketing to design and
                implement fundraising campaign initiatives.
              </li>
              <li>Designed quarterly print magazine.</li>
              <li>
                Cut extraneous vendor costs by hiring and managing a small team
                of creative designers.
              </li>
              <li>
                Implemented and managed nationwide company content management
                system and issue/task tracking.
              </li>
              <li>Mobile and website application development.</li>
              <li>
                Learned that I enjoy working on projects with meaningful impacts
                and positive influences.
              </li>
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

      {/* <Grid>
        <GridCell span={4} style={{ textAlign: 'center' }}>
          <Typography use="headline4" tag="p">
            REFERENCES
          </Typography>
        </GridCell>
        <GridCell span={8}>
          <Typography use="headline5">
            Brian Walters
            <br />
            <Typography use="body1" tag="p">
              Chief Creative Officer | Communications Exhibits, Inc.
              <br />
              <Typography use="caption">
                (See print resumé for phone number)
              </Typography>
            </Typography>
          </Typography>
          <Button
            outlined
            icon={{ icon: <SiLinkedin /> }}
            tag="a"
            target="_blank"
            href="https://www.linkedin.com/in/brian-walters-16ab173/">
            LinkedIn Profile
          </Button>
          <hr />
          <Typography use="headline5">
            Linda Wenger
            <br />
            <Typography use="body1" tag="p">
              Sr. VP, Marketing and Communications | LUNGevity Foundation
              <br />
              <Typography use="caption">
                (See print resumé for phone number)
              </Typography>
            </Typography>
          </Typography>
          <Button
            outlined
            icon={{ icon: <SiLinkedin /> }}
            tag="a"
            target="_blank"
            href=" https://www.linkedin.com/in/linda-wenger-a100714/">
            LinkedIn Profile
          </Button>
          <Typography use="body1" tag="p"></Typography>
          <hr />
          <Typography use="headline5">
            Jared Singer
            <br />
            <Typography use="body1" tag="p">
              Director | MEP - PRIME AE Group, Inc.
              <br />
              <Typography use="caption">
                (See print resumé for phone number)
              </Typography>
            </Typography>
          </Typography>
          <Button
            outlined
            icon={{ icon: <SiLinkedin /> }}
            tag="a"
            target="_blank"
            href=" https://www.linkedin.com/in/jared-singer-pe-leed-ap-3525a73/">
            LinkedIn Profile
          </Button>
        </GridCell>
      </Grid> */}
      <Element name="education" />
      <Grid>
        <GridCell span={4} style={{ textAlign: 'center' }}>
          <Typography use="headline4" tag="p">
            EDUCATION
          </Typography>
        </GridCell>
        <GridCell span={8}>
          <GridRow>
            <GridCell span={12}>
              <Typography use="headline5" tag="p">
                University of Akron (Myers School of Art)
              </Typography>
              <Typography use="body1" tag="i">
                Graphic Design • 2002 - 2006
              </Typography>
              <Typography use="body1" tag="p">
                The largest program within the Myers School of Art. It is a
                professional program for students pursuing careers in the
                expanding multidisciplinary field of visual communication
                design. Critical thinking and logical problem solving in print,
                web and interactive media are emphasized.
              </Typography>
              <Typography use="body1" tag="p">
                <Typography
                  use="overline"
                  tag="span"
                  style={{ display: 'block' }}>
                  Activities and Societies
                </Typography>
                Phi Gamma Delta, International Business Club, H.O.L.A Spanish
                Club, Various Art Clubs, Intramural Soccer
              </Typography>
              <Typography use="body1" tag="p">
                <Typography
                  use="overline"
                  tag="span"
                  style={{ display: 'block' }}>
                  Study Abroad - Universidad de Valladolid (España)
                </Typography>
                The DISSTA Study Abroad Program is an immersion learning
                experience spent living and studying in Spain. Included
                international business practicum. Received certificate of
                Spanish language & culture.
              </Typography>
            </GridCell>
          </GridRow>
          {/* <hr />
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
            Placement (AP) Physics, Woodshop, Set Design (Theatre)
          </Typography> */}
        </GridCell>
      </Grid>
    </>
  );
};

export default IndexPage;
