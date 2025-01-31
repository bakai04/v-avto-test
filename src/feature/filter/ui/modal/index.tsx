import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterContent from "../content";
import { StyledButton } from "./styled";

const FilterModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledButton
        variant="contained"
        onClick={() => setOpen(true)}
        endIcon={<FilterAltIcon />}
      >
        Фильтр
      </StyledButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Фильтры</DialogTitle>
        <DialogContent sx={{ overflowY: "visible" }}>
          <FilterContent />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FilterModal;
