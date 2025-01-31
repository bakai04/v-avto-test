"use client";

import React from "react";
import { Paper, Stack } from "@mui/material";
import CartButton from "./ui/cart-button";
import FavoritButton from "./ui/favorite-button";
import CardInform from "./ui/card-inform";
import { IProducts } from "@/shared/types/product";
import { useAppSelector } from "@/shared/hooks/redux";
import { cartProductCountSelector } from "@/shared/store/selectors/cart-selector";

interface ICardProps {
  data: IProducts;
}

const Card = ({ data }: ICardProps) => {
  const productCount = useAppSelector((store) =>
    cartProductCountSelector(store.cartList.value, data.id)
  );

  return (
    <Paper
      elevation={1}
      sx={{
        padding: "30px",
        border: "1px solid #F5F5F7",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardInform data={data} count={productCount} />
      <Stack direction="row" spacing={2} mt={2}>
        <CartButton data={data} />
        <FavoritButton data={data} />
      </Stack>
    </Paper>
  );
};

export default Card;
