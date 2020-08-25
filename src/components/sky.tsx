// import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import './sky.css';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import delay from 'delay';
import { random } from 'lodash';

export const Sky = () => (
  <>
    <div className="background" />
    <div className="twinkling" />
    <ShootingStars />
    <div className="clouds" />
  </>
);

const Container = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`;

const Star = styled(motion.div)`
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    rgba(255, 255, 255, 0.5) 100%
  );
  height: 1px;
  position: absolute;
  opacity: 0;
`;

export const ShootingStars = () => {
  const animation = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current === null) return;
    const controller = new AbortController();
    const sequence = async () => {
      await delay(random(1000, 5000), { signal: controller.signal });
      const width = ref.current?.clientWidth ?? 0;
      const height = ref.current?.clientHeight ?? 0;
      const left = random(0, width);
      const top = random(0, 20);
      const targetLeft = random(0, width);
      const targetTop = random(height * 0.4, height * 0.75);
      const rotation =
        Math.atan2(targetTop - top, targetLeft - left) * (180 / Math.PI);

      // reset
      animation.set({ width: random(100, 400), left, top, rotate: rotation });
      // animate
      await animation.start({
        left: targetLeft,
        top: targetTop,
        opacity: [0, 1, 0],
        transition: { duration: 2 },
      });
      // loop
      sequence();
    };
    sequence();
    return () => {
      controller.abort();
      animation.unmount();
    };
  }, [animation, ref]);

  return (
    <Container ref={ref}>
      <Star animate={animation}></Star>
    </Container>
  );
};
