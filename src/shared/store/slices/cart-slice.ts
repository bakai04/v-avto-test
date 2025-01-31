import { IProducts } from "@/shared/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartSliceState {
  value: IProducts[];
}

const initialState: ICartSliceState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IProducts>) {
      state.value = [...state.value, { ...action.payload, count: 1 }];
    },

    deleteAtCart(state, action: PayloadAction<number>) {
      state.value = state.value.filter((elem) => elem.id !== action.payload);
    },

    increaseCount(state, action: PayloadAction<number>) {
      const product = state.value.find((item) => item.id === action.payload);
      if (product) {
        product.count = (product.count ?? 1) + 1;
      }
    },

    decreaseCount(state, action: PayloadAction<number>) {
      const product = state.value.find((item) => item.id === action.payload);
      if (product && product.count && product.count > 1) {
        product.count -= 1;
      } else {
        state.value = state.value.filter((item) => item.id !== action.payload);
      }
    },

    resetCart(state) {
      state.value = [];
    },
  },
});

export const {
  addToCart,
  deleteAtCart,
  increaseCount,
  decreaseCount,
  resetCart,
} = cartSlice.actions;
export default cartSlice;
