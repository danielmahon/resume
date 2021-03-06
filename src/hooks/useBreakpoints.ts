import { useEffect, useState, useCallback } from 'react';
import { startCase, transform } from 'lodash';

export type UseBreakpointResult = {
  breakpoint: string;
  size: number;
} & BreakpointConditionals;

export type BreakpointConditionals = {
  isXsmall: boolean;
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isXlarge: boolean;
  isLtXsmall: boolean;
  isLtSmall: boolean;
  isLtMedium: boolean;
  isLtLarge: boolean;
  isLtXlarge: boolean;
  isLteXsmall: boolean;
  isLteSmall: boolean;
  isLteMedium: boolean;
  isLteLarge: boolean;
  isLteXlarge: boolean;
  isGtXsmall: boolean;
  isGtSmall: boolean;
  isGtMedium: boolean;
  isGtLarge: boolean;
  isGtXlarge: boolean;
  isGteXsmall: boolean;
  isGteSmall: boolean;
  isGteMedium: boolean;
  isGteLarge: boolean;
  isGteXlarge: boolean;
};

const defaultBreakpoints = {
  xsmall: 0,
  small: 600,
  medium: 960,
  large: 1280,
  xlarge: 1920,
};

export const useBreakpoints = (
  breakpoints = defaultBreakpoints
): UseBreakpointResult => {
  const sortedBreakpoints = Object.entries(
    breakpoints
  ).sort(([_, a], [__, b]) => (a === b ? 0 : a > b ? 1 : -1));

  const getBreakPoint = useCallback(
    (width: number) => {
      return (
        [...sortedBreakpoints].reverse().find(([_, size]) => width >= size) ||
        sortedBreakpoints[0]
      );
    },
    [sortedBreakpoints]
  );

  const [
    [currentBreakpoint, currentBreakpointSize],
    setCurrentBreakpoint,
  ] = useState(
    getBreakPoint(typeof window === 'object' ? window.innerWidth : 0)
  );

  useEffect(() => {
    //a handler which will be called on change of the screen resize
    const setSize = () => {
      setCurrentBreakpoint(getBreakPoint(window.innerWidth));
    };

    //register the window resize listener
    window.addEventListener('resize', setSize);

    //unregister the listerner on destroy of the hook
    return () => window.removeEventListener('resize', setSize);
  }, [setCurrentBreakpoint, getBreakPoint]);

  const conditionals = transform<number, BreakpointConditionals>(
    breakpoints,
    (result, value, key) => {
      // equals
      let name = `is${startCase(key)}`;
      result[name] = currentBreakpointSize === value;
      // lt
      name = `isLt${startCase(key)}`;
      result[name] = currentBreakpointSize < value;
      // lte
      name = `isLte${startCase(key)}`;
      result[name] = currentBreakpointSize <= value;
      // gt
      name = `isGt${startCase(key)}`;
      result[name] = currentBreakpointSize > value;
      // gte
      name = `isGte${startCase(key)}`;
      result[name] = currentBreakpointSize >= value;
    }
  );

  return {
    breakpoint: currentBreakpoint,
    size: currentBreakpointSize,
    ...conditionals,
  };
};
