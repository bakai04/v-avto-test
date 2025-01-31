import {
  combineReducers,
  Action,
  ThunkAction,
  configureStore,
} from "@reduxjs/toolkit";
import { productsApi } from "./api/products-api";
import cartSlice from "./slices/cart-slice";
import favoriteSlice from "./slices/favorite-slice";

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  cartList: cartSlice.reducer,
  favoriteList: favoriteSlice.reducer,
});

export const setupStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([productsApi.middleware]),
});

export type AppDispatch = typeof setupStore.dispatch;
export type RootState = ReturnType<typeof setupStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
