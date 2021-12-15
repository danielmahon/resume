import React from 'react';
import { IconButton } from '@rmwc/icon-button';
import styled from 'styled-components';
import {
  SiGithub,
  SiLinkedin,
  SiTwitter,
} from 'react-icons/si';

const Icons = styled.div`
  color: white;
  text-align: center;
  padding: 1rem;
`;

export const SocialIcons = () => {
  return (
    <Icons>
      <IconButton
        icon={{
          icon: <SiGithub />,
        }}
        onClick={() => window.open('https://github.com/danielmahon')}
        rel="noopener noreferrer"
        aria-label="Find me on Github!"
      />
      <IconButton
        icon={{
          icon: <SiLinkedin />,
        }}
        onClick={() =>
          window.open('https://www.linkedin.com/in/daniel-j-mahon/')
        }
        rel="noopener noreferrer"
        aria-label="Find me on LinkedIn!"
      />
      <IconButton
        icon={{
          icon: <SiTwitter />,
        }}
        onClick={() => window.open('https://twitter.com/danielmahon')}
        rel="noopener noreferrer"
        aria-label="Follow me on Twitter!"
      />
    </Icons>
  );
};
