import styled, { css, keyframes } from "styled-components";

export const colors = {
  primaryColor: "#37D09C",
  second: "#23c0e9",
};

const sizes = {
  small: 480,
};

const sharedProps = css`
  padding: 20px 15px 10px 15px;
`;
const centerContent = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const breakpoint = (
  cssProp = "padding", // the CSS property to apply to the breakpoints
  cssPropUnits = "px", // the units of the CSS property (can set equal to "" and apply units to values directly)
  values = [], // array of objects, e.g. [{ 800: 60 }, ...] <-- 800 (key) = screen breakpoint, 60 (value) = CSS prop breakpoint
  mediaQueryType = "min-width" // media query breakpoint type, i.e.: max-width, min-width, max-height, min-height
) => {
  const breakpointProps = values.reduce((mediaQueries, value) => {
    const [screenBreakpoint, cssPropBreakpoint] = [
      Object.keys(value)[0],
      Object.values(value)[0],
    ];
    return (mediaQueries += `
    @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
      ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
    }
    `);
  }, "");
  return css([breakpointProps]);
};

export const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1440,
  xxl: 1800,
};

export const size = {
  xs: `${breakpoints.xs}px`,
  sm: `${breakpoints.sm}px`,
  md: `${breakpoints.md}px`,
  lg: `${breakpoints.lg}px`,
  xl: `${breakpoints.xl}px`,
  xxl: `${breakpoints.xxl}px`,
};

export const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`,
};
