"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import CardList from "@/widgets/card-list";
import { Stack } from "@mui/material";
import Sort from "@/feature/sort";
import Container from "@/widgets/container";
import FilterSidebar from "@/feature/filter/ui/sidebar";
import FilterModal from "@/feature/filter/ui/modal";
import { useFetchProductsQuery } from "@/shared/store/api/products-api";

export default function Home() {
  const { data: products, isLoading } = useFetchProductsQuery();
  const searchParams = useSearchParams();

  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const showNew = searchParams.get("new") === "true";
  const sort = (searchParams.get("sort") as "price" | "title") || "title";
  const order = searchParams.get("order") || "asc";

  const filteredAndSortedProducts = useMemo(() => {
    if (!products) return [];

    let filtered = [...products];

    if (minPrice) {
      filtered = filtered.filter((p) => p.price >= Number(minPrice));
    }
    if (maxPrice) {
      filtered = filtered.filter((p) => p.price <= Number(maxPrice));
    }
    if (showNew) {
      filtered = filtered.filter((p) => p.rating.count > 300);
    }

    filtered.sort((a, b) => {
      if (order === "asc") {
        return a[sort] > b[sort] ? 1 : -1;
      } else {
        return a[sort] < b[sort] ? 1 : -1;
      }
    });

    return filtered;
  }, [products, minPrice, maxPrice, showNew, sort, order]);

  return (
    <Container>
      <Stack
        marginTop={"40px"}
        flexDirection={"row"}
        alignItems={"start"}
        gap={2}
        width={"100%"}
      >
        <FilterSidebar />
        <Stack width={"100%"} flexDirection={"column"} gap={2}>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Sort />
            <FilterModal />
          </Stack>
          <CardList
            products={filteredAndSortedProducts}
            isLoading={isLoading}
            isEmptyTitle={"Нету товаров"}
          />
        </Stack>
      </Stack>
    </Container>
  );
}
