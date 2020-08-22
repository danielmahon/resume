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
} from 'react-icons/si';
import { BiPyramid } from 'react-icons/bi';
import { Button } from '@rmwc/button';

const tech: [string, string?, IconType?][] = [
  ['Typescript', 'https://www.typescriptlang.org/', SiTypescript],
  ['Flutter', 'https://flutter.dev/', SiFlutter],
  ['NodeJS', 'https://nodejs.org/', SiNodeDotJs],
  ['Dart', 'https://dart.dev/', SiDart],
  ['ReactJS', 'https://reactjs.org/', SiReact],
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
  ['Prisma', 'https://www.prisma.io/', BiPyramid],
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
  ['Plus many more...'],
];

const ButtonSet = styled('div')`
  .mdc-button {
    padding: 1.25rem;
    margin: 0 0.5rem 0.5rem 0;
    font-size: 18px;
    line-height: 18px;
    text-transform: inherit;
    font-weight: normal;
    letter-spacing: inherit;
    border-radius: 0.5rem;
  }
`;

export const TechCloud = () => {
  return (
    <>
      <Typography tag="p" use="body1">
        Some of my most proficient technologies, software languages, and
        programs. <i>(Click them to learn more.)</i>
      </Typography>
      <ButtonSet>
        {tech.map(([word, link, Icon], i) => {
          return (
            <Button
              disabled={i === tech.length - 1}
              icon={Icon ? { icon: <Icon /> } : null}
              style={{
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
