import React, { PureComponent } from 'react';
import { IconButton } from '@rmwc/icon-button';
import { Button as RMWCButton } from '@rmwc/button';
import { Typography } from '@rmwc/typography';
import { TopAppBar, TopAppBarRow, TopAppBarSection } from '@rmwc/top-app-bar';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import simpleIcons from 'simple-icons';
import { animateScroll, scroller } from 'react-scroll';
import { Keyframes, config, animated } from 'react-spring';
import delay from 'delay';
import Sky from './sky';

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
  @media screen and (max-width: 599px) {
    display: none;
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
  min-height: 384px;
  max-height: 768px;
  justify-content: center;
  align-items: center;
  position: relative;
  .mdc-typography--headline1 {
    font-family: 'Open Sans';
    font-size: 5rem;
    font-weight: 700;
    margin: 0 2rem;
    z-index: 1;
  }
  .mdc-typography--body1 {
    margin: 1rem 20%;
    text-align: center;
    z-index: 1;
  }
  @media screen and (max-width: 599px) {
    height: 100vh;
    .mdc-typography--headline1 {
      font-size: 4rem;
      line-height: 4rem;
      word-spacing: 100vw;
      text-align: center;
    }
    .mdc-typography--body1 {
      margin: 1rem 2rem;
    }
  }
`;
const Icons = styled.div`
  color: white;
`;

const items = Array.from(`I'm Daniel Mahon.`.replace(/ /g, '\u00a0'));

const TitleAnimation = Keyframes.Trail({
  hide: {
    opacity: 0,
    display: 'inline-block',
    transform: 'scale(0.75)',
  },
  show: async (next, cancel, { onFinish }) => {
    await delay(500);
    await next({
      opacity: 1,
      transform: 'scale(1)',
    });
    await delay(1000);
    onFinish();
  },
});

const SubtitleAnimation = Keyframes.Spring({
  hide: { opacity: 0 },
  show: async next => {
    await delay(1000);
    await next({ opacity: 1 });
  },
});

class Header extends PureComponent {
  state = { step: 1 };
  render = () => {
    const { step } = this.state;
    const { ready } = this.props;
    return (
      <header>
        <StyledHeadroom disableInlineStyles>
          <TopAppBar>
            <TopAppBarRow>
              <TopAppBarSectionCentered>
                <Button onClick={() => animateScroll.scrollToTop()}>
                  Home
                </Button>
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
                  onClick={() =>
                    scroller.scrollTo('contact', { smooth: true })
                  }>
                  Contact
                </Button>
              </TopAppBarSectionCentered>
            </TopAppBarRow>
          </TopAppBar>
        </StyledHeadroom>
        <Hero>
          <Sky />
          <Typography use="headline1" theme="textPrimaryOnDark">
            <TitleAnimation
              onFinish={() => this.setState({ step: step + 1 })}
              native
              items={items}
              keys={items.map((item, index) => index)}
              state={ready ? 'show' : 'hide'}>
              {item => props => (
                <animated.span style={props}>{item}</animated.span>
              )}
            </TitleAnimation>
          </Typography>
          <SubtitleAnimation
            config={{ tension: 16 }}
            state={step === 2 ? 'show' : 'hide'}>
            {props => (
              <>
                <Typography use="body1" theme="textPrimaryOnDark" style={props}>
                  I create engaging experiences through paper, screen, and
                  matter.
                </Typography>
                <Icons style={props}>
                  <IconButton
                    icon={
                      <span
                        dangerouslySetInnerHTML={{
                          __html: simpleIcons.GitHub.svg,
                        }}
                      />
                    }
                    onClick={() =>
                      window.open('https://github.com/danielmahon')
                    }
                    rel="noopener noreferrer"
                    aria-label="Find me on Github!"
                  />
                  <IconButton
                    icon={
                      <span
                        dangerouslySetInnerHTML={{
                          __html: simpleIcons.Facebook.svg,
                        }}
                      />
                    }
                    onClick={() =>
                      window.open('https://www.facebook.com/danielmahon')
                    }
                    rel="noopener noreferrer"
                    aria-label="Find me on Facebook!"
                  />
                  <IconButton
                    icon={
                      <span
                        dangerouslySetInnerHTML={{
                          __html: simpleIcons.Twitter.svg,
                        }}
                      />
                    }
                    onClick={() =>
                      window.open('https://twitter.com/danielmahon')
                    }
                    rel="noopener noreferrer"
                    aria-label="Follow me on Twitter!"
                  />
                  <IconButton
                    icon={
                      <span
                        dangerouslySetInnerHTML={{
                          __html: simpleIcons['Instagram'].svg,
                        }}
                      />
                    }
                    onClick={() =>
                      window.open('https://www.instagram.com/daniel_mahon/')
                    }
                    rel="noopener noreferrer"
                    aria-label="Follow me on Instagram!"
                  />
                </Icons>
              </>
            )}
          </SubtitleAnimation>
        </Hero>
      </header>
    );
  };
}

export default Header;
