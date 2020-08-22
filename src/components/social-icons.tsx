import React from 'react';
import { IconButton } from '@rmwc/icon-button';
import styled from 'styled-components';
import {
  SiGithub,
  SiFacebook,
  SiLinkedin,
  SiTwitter,
  SiInstagram,
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
          icon: <SiFacebook />,
        }}
        onClick={() => window.open('https://www.facebook.com/danielmahon')}
        rel="noopener noreferrer"
        aria-label="Find me on Facebook!"
      />
      <IconButton
        icon={{
          icon: <SiTwitter />,
        }}
        onClick={() => window.open('https://twitter.com/danielmahon')}
        rel="noopener noreferrer"
        aria-label="Follow me on Twitter!"
      />
      <IconButton
        icon={{
          icon: <SiInstagram />,
        }}
        onClick={() => window.open('https://www.instagram.com/daniel_mahon/')}
        rel="noopener noreferrer"
        aria-label="Follow me on Instagram!"
      />
    </Icons>
  );
};
