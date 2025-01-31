import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("lgg")]: {
    display: "flex",
  },
}));
