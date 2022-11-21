import { css } from 'styled-components';
import {breakpoints} from '../assets/breakpoints'

type BreakpointKeys = keyof typeof breakpoints;

export const respondTo = (Object.keys(breakpoints) as BreakpointKeys[]).reduce<Record<BreakpointKeys, any>>(
  (accumulator, label) => {
    accumulator[label] = (...args: Parameters<typeof css>) => css`
      @media (min-width: ${breakpoints[label] + 'px'}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {} as Record<BreakpointKeys, any>,
);
