import { Typography } from "@mui/material";
import React from "react";
import { Wrapper } from "./styled";
import FilterContent from "../content";

const FilterSidebar = () => {
  return (
    <Wrapper>
      <Typography variant="h6">Фильтры</Typography>
      <FilterContent />
    </Wrapper>
  );
};

export default FilterSidebar;
