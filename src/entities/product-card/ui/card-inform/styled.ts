import { styled, Typography } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 400,
  color: "#2E2E33",
  lineHeight: "22px",
  "&:hover": {
    textDecoration: "underline",
    color: theme.palette.primary.main,
  },
}));
