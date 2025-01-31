"use client";

import { Button, Link, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/shared/hooks/redux";

const LeftBar = () => {
  const pathname = usePathname();
  const cartList = useAppSelector((store) => store.cartList.value);
  const favorites = useAppSelector((state) => state.favoriteList.value);

  const cartProductPrice = useMemo(() => {
    return cartList.reduce(
      (accum, elem) => accum + elem.price * (elem?.count ?? 1),
      0
    );
  }, [cartList]);
  return (
    <Stack flexDirection={"row"} gap={2}>
      <Link href={"/cart"}>
        <Button
          variant={pathname === "/cart" ? "contained" : "outlined"}
          endIcon={<ShoppingCartIcon />}
        >
          ${cartProductPrice}
        </Button>
      </Link>
      <Link href={"/favorites"}>
        <Button
          variant={pathname === "/favorites" ? "contained" : "outlined"}
          endIcon={<FavoriteIcon />}
        >
          {favorites.length}
        </Button>
      </Link>
    </Stack>
  );
};

export default LeftBar;
