import React from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { IProducts } from "@/shared/types/product";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import {
  addToCart,
  decreaseCount,
  increaseCount,
} from "@/shared/store/slices/cart-slice";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { cartProductCountSelector } from "@/shared/store/selectors/cart-selector";

interface ICartButtonProps {
  data: IProducts;
}

const CartButton = ({ data }: ICartButtonProps) => {
  const dispatch = useAppDispatch();
  const productCount = useAppSelector((store) =>
    cartProductCountSelector(store.cartList.value, data.id)
  );

  const toggleCart = () => {
    dispatch(addToCart(data));
  };

  if (!productCount) {
    return (
      <Button variant="contained" onClick={toggleCart}>
        Добавить в Корзину
      </Button>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background: "#F5F5F7",
        borderRadius: "30px",
        padding: "9px 16px",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton
          sx={{
            width: 24,
            height: 24,
          }}
          onClick={() => dispatch(decreaseCount(data.id))}
        >
          <RemoveIcon />
        </IconButton>

        <Typography sx={{ fontSize: 12, fontWeight: 500, opacity: 0.8 }}>
          {productCount}
        </Typography>

        <IconButton
          sx={{
            width: 24,
            height: 24,
          }}
          onClick={() => dispatch(increaseCount(data.id))}
        >
          <AddIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default CartButton;
