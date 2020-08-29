import React from 'react';
import { darken, lighten } from 'polished';
import styled from 'styled-components';
import { Typography } from '@rmwc/typography';
import { IconType } from 'react-icons';
import {
  SiTypescript,
  SiFlutter,
  SiNodeDotJs,
  SiDart,
  SiReact,
  SiMaterialdesign,
  SiUnity,
  SiCsharp,
  SiDotNet,
  SiJavascript,
  SiGooglecloud,
  SiAmazonaws,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiArduino,
  SiRaspberrypi,
  SiVisualstudiocode,
  SiGraphql,
  SiAdobe,
  SiBlender,
  SiAutodesk,
  SiHtml5,
  SiGit,
  SiDigitalocean,
  SiCss3,
  SiHeroku,
  SiNetlify,
  SiGatsby,
  SiDocker,
  SiTrello,
} from 'react-icons/si';
import { Button } from '@rmwc/button';

// import BalenaIcon from '../images/svgs/balena.inline.svg';
// import PrismaIcon from '../images/svgs/prisma.inline.svg';

const tech: [string, string?, IconType?][] = [
  ['Typescript', 'https://www.typescriptlang.org/', SiTypescript],
  ['Flutter', 'https://flutter.dev/', SiFlutter],
  ['NodeJS', 'https://nodejs.org/', SiNodeDotJs],
  ['Dart', 'https://dart.dev/', SiDart],
  ['ReactJS', 'https://reactjs.org/', SiReact],
  ['GatsbyJS', 'https://www.gatsbyjs.com/', SiGatsby],
  ['Docker', 'https://www.docker.com/', SiDocker],
  // ['Balena', 'https://www.balena.io/', BalenaIcon],
  ['Adobe Creative Cloud', 'https://www.adobe.com/creativecloud.html', SiAdobe],
  ['Material Design', 'https://material.io/', SiMaterialdesign],
  ['Unity', 'https://unity.com/', SiUnity],
  ['C#', 'https://docs.microsoft.com/en-us/dotnet/csharp/', SiCsharp],
  ['.Net', 'https://docs.microsoft.com/en-us/dotnet/', SiDotNet],
  [
    'Javascript',
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    SiJavascript,
  ],
  [
    'HTML5',
    'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
    SiHtml5,
  ],
  ['CSS3', 'https://developer.mozilla.org/en-US/docs/Web/CSS', SiCss3],
  ['Google Cloud', 'https://cloud.google.com/', SiGooglecloud],
  ['Firebase', 'https://firebase.google.com/', SiFirebase],
  ['Netlify', 'https://www.netlify.com/', SiNetlify],
  ['AWS', 'https://aws.amazon.com/', SiAmazonaws],
  ['Heroku', 'https://www.heroku.com/home', SiHeroku],
  ['DigitalOcean', 'https://www.digitalocean.com/', SiDigitalocean],
  ['GraphQL', 'https://graphql.org/', SiGraphql],
  // ['Prisma', 'https://www.prisma.io/', PrismaIcon],
  ['MongoDB', 'https://www.mongodb.com/', SiMongodb],
  ['PostgreSQL', 'https://www.postgresql.org/', SiPostgresql],
  ['MySQL', 'https://www.mysql.com/', SiMysql],
  ['Arduino', 'https://www.arduino.cc/', SiArduino],
  ['RaspberryPi', 'https://www.raspberrypi.org/', SiRaspberrypi],
  ['Visual Studio Code', 'https://code.visualstudio.com/', SiVisualstudiocode],
  ['Blender', 'https://www.blender.org/', SiBlender],
  [
    'AutoDesk Fusion 360',
    'https://www.autodesk.com/products/fusion-360/overview',
    SiAutodesk,
  ],
  ['Git', 'https://git-scm.com/', SiGit],
  ['Trello', 'https://trello.com/', SiTrello],
  ['Plus many more...'],
];

const ButtonSet = styled('div')`
  .mdc-button {
    padding: 0 0.75rem;
    margin: 0 0.5rem 0.5rem 0;
    border-radius: 0.5rem;
    text-transform: inherit;
    height: 2.5rem;
    .mdc-button__label {
      font-size: 16px;
      letter-spacing: inherit;
      font-weight: normal;
    }
  }
`;

export const TechCloud = () => {
  return (
    <>
      <Typography tag="p" use="body1">
        Some of my most proficient technologies, software languages, and
        programs.
        <br />
        <i>(Click them to learn more.)</i>
      </Typography>
      <ButtonSet>
        {tech.map(([word, link, Icon], i) => {
          const icon = Icon ? { icon: <Icon /> } : null;
          return (
            <Button
              disabled={i === tech.length - 1}
              icon={icon}
              style={{
                fill: 'white',
                color: 'white',
                backgroundColor: lighten(
                  0 + i * 0.018,
                  darken(0.25, '#2c808e')
                ),
              }}
              key={word}
              label={word}
              onClick={link ? () => window.open(link, '_blank') : undefined}
            />
          );
        })}
      </ButtonSet>
    </>
  );
};
