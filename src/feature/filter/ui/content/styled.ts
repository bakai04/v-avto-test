import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  maxWidth: "300px",
  minHeight: "300px",
  flexShrink: "0",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  background: "#f3f4f6",
  padding: "24px",
  gap: "16px",

  [theme.breakpoints.down("lgg")]: {
    display: "none",
  },
}));
