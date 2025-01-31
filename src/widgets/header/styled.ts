import { styled } from "@mui/material";
import Link from "next/link";

export const StyledLink = styled(Link)(({ theme }) => ({
  display: "inline-block",
  padding: theme.spacing(1, 2),
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "0.875rem",
  textTransform: "uppercase",
  borderRadius: theme.shape.borderRadius,
  transition: "background-color 0.3s ease",

  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  '[data-active="true"]': {
    backgroundColor: theme.palette.secondary.main,
  },
}));
