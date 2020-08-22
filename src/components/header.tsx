import React, { useEffect, useState } from 'react';
import { IconButton } from '@rmwc/icon-button';
import { Button as RMWCButton, ButtonHTMLProps } from '@rmwc/button';
import { Typography } from '@rmwc/typography';
import { TopAppBar, TopAppBarRow, TopAppBarSection } from '@rmwc/top-app-bar';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import { animateScroll, scroller } from 'react-scroll';
import { motion, Variants, useAnimation } from 'framer-motion';
import { Sky } from './sky';
import delay from 'delay';
import { SocialIcons } from './social-icons';
import { useBreakpoints } from './hooks';

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
    .mdc-button:nth-child(1),
    .mdc-button:nth-child(5) {
      display: none;
    }
  }
`;

const TopAppBarSectionCentered = styled(TopAppBarSection)`
  display: flex;
  justify-content: center;
  align-items: center;
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

const Title = styled(motion.div)`
  font-family: 'Open Sans';
  font-size: 4rem;
  font-weight: 700;
  margin: 0 1rem;
  z-index: 1;
  text-align: center;
  div {
    min-width: 1rem;
    display: inline-block;
    position: relative;
  }
  @media screen and (max-width: 599px) {
    font-size: 2rem;
    line-height: 2rem;
    div {
      min-width: 0.5rem;
    }
  }
`;

const Subtitle = styled(motion.div)`
  z-index: 1;
  text-align: center;
  opacity: 0;
  .mdc-typography--body1 {
    display: block;
    padding: 1rem 2rem;
  }
  .arrow-button {
    margin: 1rem auto 0 auto;
  }
`;

enum TitleStates {
  HIDDEN = 'HIDDEN',
  SHOWN = 'SHOWN',
}

const titleVariants: Variants = {
  [TitleStates.HIDDEN]: {
    opacity: 0,
    y: -10,
  },
  [TitleStates.SHOWN]: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Header = () => {
  const headerControls = useAnimation();
  const titleControls = useAnimation();
  const subtitleControls = useAnimation();
  const [title, setTitle] = useState(Array.from(`Hello there,`));
  const { isXsmall } = useBreakpoints();

  // console.log(breakpoint);
  // console.log(size);
  // console.log(isSmall);

  useEffect(() => {
    const sequence = async () => {
      await delay(1000);
      await titleControls.start(TitleStates.SHOWN);
      await delay(500);
      await titleControls.start(TitleStates.HIDDEN);
      setTitle(Array.from(`I'm Daniel Mahon.`));
      await titleControls.start(TitleStates.SHOWN);
      await delay(500);
      await subtitleControls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
      await headerControls.start(TitleStates.SHOWN);
    };
    sequence();
  }, [titleControls, subtitleControls, headerControls, setTitle]);

  return (
    <header>
      <StyledHeadroom>
        <TopAppBar>
          <TopAppBarRow>
            <motion.div
              initial={TitleStates.HIDDEN}
              animate={headerControls}
              variants={titleVariants}>
              <TopAppBarSectionCentered>
                {isXsmall ? (
                  <IconButton
                    icon="home"
                    onClick={() => animateScroll.scrollToTop()}
                  />
                ) : (
                  <Button onClick={() => animateScroll.scrollToTop()}>
                    Home
                  </Button>
                )}
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
            </motion.div>
          </TopAppBarRow>
        </TopAppBar>
      </StyledHeadroom>
      <Hero>
        <Sky />
        <Typography use="headline1" theme="textPrimaryOnDark">
          <Title
            initial={TitleStates.HIDDEN}
            animate={titleControls}
            variants={titleVariants}>
            {title.map((item, i) => (
              <motion.div variants={titleVariants} key={`letter-${i}`}>
                {item}
              </motion.div>
            ))}
          </Title>
        </Typography>
        <Subtitle animate={subtitleControls}>
          <Typography use="body1" theme="textPrimaryOnDark">
            I create engaging experiences through paper, screen, and matter.
          </Typography>
          <SocialIcons />
          {isXsmall && (
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
