import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Grid, GridCell } from '@rmwc/grid';
import { IconButton } from '@rmwc/icon-button';
import { Button as RMWCButton, ButtonIcon } from '@rmwc/button';
import { Typography } from '@rmwc/typography';
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarFixedAdjust,
  TopAppBarTitle,
} from '@rmwc/top-app-bar';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import simpleIcons from 'simple-icons';

const StyledHeadroom = styled(Headroom)`
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
`;
const TopAppBarSectionCentered = styled(TopAppBarSection)`
  justify-content: center;
`;
const Button = styled(RMWCButton).attrs({
  outlined: true,
})`
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
  min-height: 480px;
  justify-content: center;
  align-items: center;
  position: relative;
  .img-wrapper {
    position: absolute;
    height: 100%;
    z-index: -1;
    img {
      object-fit: cover;
      object-position: bottom;
      height: 100%;
      min-height: 480px;
      width: 100vw;
    }
  }
  .mdc-typography--headline1 {
    font-family: 'Open Sans';
    font-weight: 600;
  }
  .mdc-typography--body1 {
    margin: 1rem 20%;
    text-align: center;
  }
`;
const Icons = styled.div`
  color: white;
`;

const Header = () => (
  <header>
    <StyledHeadroom disableInlineStyles>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSectionCentered>
            <Button>Home</Button>
            <Button>About</Button>
            <Button>Resume</Button>
            <Button>Portfolio</Button>
            <Button>Testimonials</Button>
            <Button>Contact</Button>
          </TopAppBarSectionCentered>
        </TopAppBarRow>
      </TopAppBar>
    </StyledHeadroom>
    <Hero>
      <div className="img-wrapper">
        <img src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=80&sat=-50&nrs=100&exp=-10" />
      </div>
      <Typography use="headline1" theme="textPrimaryOnDark">
        I'm Daniel Mahon.
      </Typography>
      <Typography use="body1" theme="textPrimaryOnDark">
        Occaecat commodo laborum commodo sunt Lorem excepteur ea occaecat irure
        esse reprehenderit. Enim ullamco ipsum esse adipisicing aute Lorem magna
        incididunt. Duis ipsum fugiat ullamco aute pariatur dolore irure ullamco
        excepteur pariatur.
      </Typography>
      <Icons>
        <IconButton
          icon={
            <span
              dangerouslySetInnerHTML={{ __html: simpleIcons.LinkedIn.svg }}
            />
          }
          onClick={() =>
            window.open('https://www.linkedin.com/in/daniel-j-mahon')
          }
          aria-label="Find me on LinkedIn!"
        />
        <IconButton
          icon={
            <span
              dangerouslySetInnerHTML={{ __html: simpleIcons.GitHub.svg }}
            />
          }
          onClick={() => window.open('https://github.com/danielmahon')}
          aria-label="Find me on Github!"
        />
        <IconButton
          icon={
            <span
              dangerouslySetInnerHTML={{ __html: simpleIcons.Facebook.svg }}
            />
          }
          onClick={() => window.open('https://www.facebook.com/danielmahon')}
          aria-label="Find me on Facebook!"
        />
        <IconButton
          icon={
            <span
              dangerouslySetInnerHTML={{ __html: simpleIcons.Twitter.svg }}
            />
          }
          onClick={() => window.open('https://twitter.com/danielmahon')}
          aria-label="Follow me on Twitter!"
        />
        <IconButton
          icon={
            <span
              dangerouslySetInnerHTML={{ __html: simpleIcons['Instagram'].svg }}
            />
          }
          onClick={() => window.open('https://www.instagram.com/daniel_mahon/')}
          aria-label="Follow me on Instagram!"
        />
      </Icons>
    </Hero>
  </header>
);

export default Header;
