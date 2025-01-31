"use client";
import { useAppSelector } from "@/shared/hooks/redux";
import CardList from "@/widgets/card-list";
import Container from "@/widgets/container";
import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

const Favorites = () => {
  const favorites = useAppSelector((state) => state.favoriteList.value);
  const router = useRouter();
  return (
    <Container>
      <Stack
        m={"20px 0px"}
        flexDirection={"row"}
        alignItems={"center"}
        gap={"16px"}
      >
        <IconButton onClick={() => router.back()}>
          <ArrowBackIcon />
        </IconButton>
        <Typography fontSize={24} fontWeight={500} component={"h1"}>
          Избранные - {favorites.length}
        </Typography>
      </Stack>
      <CardList
        products={favorites}
        isLoading={false}
        isEmptyTitle={"У вас нету избранных товаров"}
      />
    </Container>
  );
};

export default Favorites;
