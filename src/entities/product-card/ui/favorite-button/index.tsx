import React, { useState } from "react";
import { IProducts } from "@/shared/types/product";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import {
  addToFavorite,
  deleteAtFavorite,
} from "@/shared/store/slices/favorite-slice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";

interface IFavoriteProps {
  data: IProducts;
}

const FavoritButton = ({ data }: IFavoriteProps) => {
  const favoriteList = useAppSelector((state) => state.favoriteList.value);
  const [activeFavorite, setActiveFavorite] = useState<boolean>(
    favoriteList.some((elem) => elem.id === data.id)
  );
  const dispatch = useAppDispatch();

  const toggleFavorite = (): void => {
    if (activeFavorite) {
      dispatch(deleteAtFavorite(data.id));
    } else {
      dispatch(addToFavorite(data));
    }
    setActiveFavorite((prev) => !prev);
  };

  return (
    <IconButton onClick={toggleFavorite}>
      {activeFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
};

export default FavoritButton;
