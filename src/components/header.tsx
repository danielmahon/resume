import React from 'react';
import { IconButton } from '@rmwc/icon-button';
import { Button as RMWCButton, ButtonHTMLProps } from '@rmwc/button';
import { Typography } from '@rmwc/typography';
import { TopAppBar, TopAppBarRow, TopAppBarSection } from '@rmwc/top-app-bar';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import { animateScroll, scroller } from 'react-scroll';
import { motion, Variants } from 'framer-motion';
import Sky from './sky';
import {
  SiGithub,
  SiFacebook,
  SiLinkedin,
  SiTwitter,
  SiInstagram,
} from 'react-icons/si';

const StyledHeadroom = styled(Headroom)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  .mdc-top-app-bar {
    transition: background-color 275ms ease;
  }
  .headroom--unfixed .mdc-top-app-bar {
    background-color: transparent;
  }
  .headroom--pinned .mdc-top-app-bar {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .headroom--unpinned .mdc-top-app-bar {
    background-color: rgba(0, 0, 0, 0);
  }
  @media screen and (max-width: 599px) {
    display: none;
  }
`;

const TopAppBarSectionCentered = styled(TopAppBarSection)`
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const Button = styled(RMWCButton).attrs({
  outlined: true,
})<ButtonHTMLProps>`
  &&& {
    color: var(--mdc-theme-text-primary-on-dark, white);
    border-color: transparent;
    transition: border-color 200ms ease;
    &:hover {
      border-color: rgba(255, 255, 255, 0.5);
    }
    &::before,
    ::after {
      background-color: black;
    }
    &.mdc-ripple-upgraded--background-focused {
      border-color: rgba(255, 255, 255, 0.25);
    }
    &.mdc-ripple-upgraded--foreground-activation {
      border-color: rgba(255, 255, 255, 1);
    }
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  height: 65vh;
  min-height: 384px;
  max-height: 768px;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: black;
  .mdc-typography--headline1 {
  }
  @media screen and (max-width: 599px) {
    height: 100vh;
  }
`;

const Icons = styled.div`
  color: white;
`;

const items = Array.from(`I'm Daniel Mahon.`);

const Title = styled(motion.div)`
  font-family: 'Open Sans';
  font-size: 4rem;
  font-weight: 700;
  margin: 0 1rem;
  z-index: 1;
  div {
    min-width: 1rem;
    display: inline-block;
  }
  @media screen and (max-width: 599px) {
    font-size: 2rem;
    line-height: 2rem;
    text-align: center;
    div {
      min-width: 0.5rem;
    }
  }
`;

const Subtitle = styled(motion.div)`
  z-index: 1;
  text-align: center;
  .mdc-typography--body1 {
    display: block;
    padding: 1rem 2rem;
  }
  .arrow-button {
    margin: 2rem auto 0 auto;
  }
`;

const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    transform: 'scale(0.75)',
  },
  shown: {
    opacity: 1,
    transform: 'scale(1)',
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Header = () => {
  return (
    <header>
      <StyledHeadroom>
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSectionCentered>
              <Button onClick={() => animateScroll.scrollToTop()}>Home</Button>
              <Button
                onClick={() => scroller.scrollTo('about', { smooth: true })}>
                About
              </Button>
              <Button
                onClick={() => scroller.scrollTo('work', { smooth: true })}>
                Work
              </Button>
              <Button
                onClick={() => scroller.scrollTo('skills', { smooth: true })}>
                Skills
              </Button>
              <Button
                onClick={() =>
                  scroller.scrollTo('education', { smooth: true })
                }>
                Education
              </Button>
              <Button
                onClick={() => scroller.scrollTo('contact', { smooth: true })}>
                Contact
              </Button>
            </TopAppBarSectionCentered>
          </TopAppBarRow>
        </TopAppBar>
      </StyledHeadroom>
      <Hero>
        <Sky />
        <Typography use="headline1" theme="textPrimaryOnDark">
          <Title initial="hidden" animate="shown" variants={titleVariants}>
            {items.map((item, i) => (
              <motion.div variants={titleVariants} key={`letter-${i}`}>
                {item}
              </motion.div>
            ))}
          </Title>
        </Typography>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2 } }}>
          <Typography use="body1" theme="textPrimaryOnDark">
            I create engaging experiences through paper, screen, and matter.
          </Typography>
          <Icons>
            <IconButton
              icon={{ icon: <SiGithub /> }}
              onClick={() => window.open('https://github.com/danielmahon')}
              rel="noopener noreferrer"
              aria-label="Find me on Github!"
            />
            <IconButton
              icon={{ icon: <SiLinkedin /> }}
              onClick={() =>
                window.open('https://www.linkedin.com/in/daniel-j-mahon/')
              }
              rel="noopener noreferrer"
              aria-label="Find me on LinkedIn!"
            />
            <IconButton
              icon={{ icon: <SiFacebook /> }}
              onClick={() =>
                window.open('https://www.facebook.com/danielmahon')
              }
              rel="noopener noreferrer"
              aria-label="Find me on Facebook!"
            />
            <IconButton
              icon={{ icon: <SiTwitter /> }}
              onClick={() => window.open('https://twitter.com/danielmahon')}
              rel="noopener noreferrer"
              aria-label="Follow me on Twitter!"
            />
            <IconButton
              icon={{ icon: <SiInstagram /> }}
              onClick={() =>
                window.open('https://www.instagram.com/daniel_mahon/')
              }
              rel="noopener noreferrer"
              aria-label="Follow me on Instagram!"
            />
          </Icons>
          {window.innerHeight < 896 && (
            <IconButton
              className="arrow-button"
              onClick={() => scroller.scrollTo('about', { smooth: true })}
              theme="onPrimary"
              icon="arrow_downward"
            />
          )}
        </Subtitle>
      </Hero>
    </header>
  );
};

export default Header;
