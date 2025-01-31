import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "16px",

  [theme.breakpoints.down("xxl")]: {
    gridTemplateColumns: "1fr 1fr",
  },

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));
