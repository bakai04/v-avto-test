import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Stack, Switch, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const FilterContent = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const showNew = searchParams.get("new") === "true";

  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Stack flexDirection={"column"} gap={2}>
      <TextField
        label="Цена от"
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        onBlur={() => handleFilterChange("minPrice", minPrice)}
      />
      <TextField
        label="Цена до"
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        onBlur={() => handleFilterChange("maxPrice", maxPrice)}
      />
      <Stack direction="row" alignItems="center" spacing={1}>
        <Switch
          checked={showNew}
          onChange={(e) =>
            handleFilterChange("new", e.target.checked ? "true" : "")
          }
        />
        <Typography>Только новинки</Typography>
      </Stack>
    </Stack>
  );
};

export default FilterContent;
