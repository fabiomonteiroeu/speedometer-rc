import { generateMedia } from "styled-media-query";
export const BREAKPOINT_XS = 480;
export const BREAKPOINT_SM = 576;
export const BREAKPOINT_MD = 768;
export const BREAKPOINT_LG = 1024;
export const BREAKPOINT_XL = 1366;
export const BREAKPOINT_HD = 1680;
export const BREAKPOINT_FULLHD = 1921;
export const BREAKPOINT_ULTRAHD = 2551;
export const media = generateMedia({
    xs: `${BREAKPOINT_XS}px`,
    sm: `${BREAKPOINT_SM}px`,
    md: `${BREAKPOINT_MD}px`,
    lg: `${BREAKPOINT_LG}px`,
    xl: `${BREAKPOINT_XL}px`,
    hd: `${BREAKPOINT_HD}px`,
    fullhd: `${BREAKPOINT_FULLHD}px`,
    ultrahd: `${BREAKPOINT_ULTRAHD}px`
});
