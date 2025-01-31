"use client";
import React from "react";
import { AppBar, Toolbar, Box, Stack, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import Container from "../container";
import dynamic from "next/dynamic";

const LeftBar = dynamic(() => import("./ui/left-bar"), { ssr: false });

const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={3}
      sx={{ backgroundColor: "white", mb: 1 }}
    >
      <Container>
        <Toolbar sx={{ padding: "0px !important" }}>
          <Stack
            width="100%"
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={2}
          >
            <Stack
              direction="row"
              spacing={2}
              component="ul"
              sx={{ listStyle: "none", padding: 0, margin: 0 }}
            >
              <Box component="li">
                <MuiLink
                  component={Link}
                  href={"/"}
                  sx={{
                    fontSize: 16,
                    fontWeight: 400,
                    textDecoration: "underline",
                  }}
                >
                  Главная
                </MuiLink>
              </Box>
            </Stack>
            <LeftBar />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
