import "@mui/material/styles";

declare module "@mui/material/styles" {
  export interface PaletteColor {}

  export interface TypeBackground {}

  export interface TypeText {}
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    lgg: true;
    xl: true;
    xxl: true;
    hd: true;
    fullHd: true;
    hdMiddle: true;
    ultrahd: true;
  }
}

declare module "@mui/material/Button" {
  export interface ButtonPropsVariantOverrides {}
}

declare module "@mui/material/Paper" {
  export interface PaperPropsVariantOverrides {}
}
