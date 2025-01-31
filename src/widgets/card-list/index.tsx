"use client";

import React from "react";
import { CircularProgress, Stack, Typography } from "@mui/material";
import { IProducts } from "@/shared/types/product";
import Card from "@/entities/product-card";
import { Wrapper } from "./styled";

interface IPropsCardList {
  products: IProducts[] | undefined;
  isLoading: boolean;
  isEmptyTitle: string;
}

const CardList = ({ products, isLoading, isEmptyTitle }: IPropsCardList) => {
  return (
    <Stack pb={"20px"}>
      {isLoading ? (
        <Stack
          width={"100%"}
          flexDirection={"row"}
          justifyContent={"center"}
          padding={"20px"}
        >
          <CircularProgress size={"30px"} />
        </Stack>
      ) : products && products.length > 0 ? (
        <Wrapper>
          {products.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </Wrapper>
      ) : (
        <Stack padding={"40px 0px"}>
          <Typography variant="h6" align="center">
            {isEmptyTitle}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default CardList;
