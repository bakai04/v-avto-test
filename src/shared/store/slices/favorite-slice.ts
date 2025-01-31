import { IProducts } from "@/shared/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFavoriteSliceState {
  value: IProducts[];
}

const initialState: IFavoriteSliceState = {
  value: [],
};

export const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<IProducts>) {
      state.value = [...state.value, action.payload];
    },

    deleteAtFavorite(state, action: PayloadAction<number>) {
      console.log(state.value.filter((elem) => elem.id !== action.payload));
      state.value = [
        ...state.value.filter((elem) => elem.id !== action.payload),
      ];
    },

    resetFavorite(state) {
      state.value = [];
    },
  },
});

export const { addToFavorite, deleteAtFavorite, resetFavorite } =
  favoriteSlice.actions;
export default favoriteSlice;
