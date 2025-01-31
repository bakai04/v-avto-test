import { IProducts } from "@/shared/types/product";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/products",
  }),
  endpoints: (build) => ({
    fetchProducts: build.query<IProducts[], void>({
      query: () => ({
        url: `/`,
      }),
    }),
    fetchProduct: build.query<IProducts, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useFetchProductsQuery, useFetchProductQuery } = productsApi;
