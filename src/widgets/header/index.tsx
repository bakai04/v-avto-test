"use client";
import React, { useMemo } from "react";
import { AppBar, Toolbar, Box, Stack, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import Container from "../container";
import { useAppSelector } from "@/shared/hooks/redux";
import { StyledLink } from "./styled";

const Header = () => {
  const cartList = useAppSelector((store) => store.cartList.value);
  const favorites = useAppSelector((state) => state.favoriteList.value);

  const cartProductPrice = useMemo(() => {
    return cartList.reduce(
      (accum, elem) => accum + elem.price * (elem?.count ?? 1),
      0
    );
  }, [cartList]);

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
            <Stack flexDirection={"row"} gap={2}>
              <StyledLink href={"/cart"}>
                Корзина $ {cartProductPrice || 0}
              </StyledLink>
              <StyledLink href={"/favorites"}>
                Избранные {favorites.length}
              </StyledLink>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
