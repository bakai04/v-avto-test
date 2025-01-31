import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { SortByAlpha, Sort } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import React from "react";

const SortButtons = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentSort = searchParams.get("sort") || "title";
  const currentOrder = searchParams.get("order") || "asc";

  const getNextOrder = (field: "title" | "price") => {
    if (currentSort === field) {
      return currentOrder === "asc" ? "desc" : "asc";
    }
    return "asc";
  };

  const handleSort = (field: "title" | "price") => {
    const nextOrder = getNextOrder(field);
    const params = new URLSearchParams(searchParams);
    params.set("sort", field);
    params.set("order", nextOrder);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Stack flexDirection="row" gap={2}>
      <Button
        variant={currentSort === "title" ? "contained" : "outlined"}
        endIcon={<SortByAlpha />}
        onClick={() => handleSort("title")}
      >
        Name{" "}
        {currentSort === "title" ? (currentOrder === "desc" ? "↑" : "↓") : ""}
      </Button>
      <Button
        variant={currentSort === "price" ? "contained" : "outlined"}
        endIcon={<Sort />}
        onClick={() => handleSort("price")}
      >
        Price{" "}
        {currentSort === "price" ? (currentOrder === "desc" ? "↑" : "↓") : ""}
      </Button>
    </Stack>
  );
};

export default SortButtons;
