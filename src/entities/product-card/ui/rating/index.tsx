import React from "react";
import { Stack, Typography, Rating as MuiRating } from "@mui/material";
import { IRating } from "@/shared/types/product";

interface IRatingProps {
  rating: IRating;
}

const Rating = ({ rating }: IRatingProps) => {
  return (
    <Stack direction="row" alignItems="center" spacing={0.5}>
      <MuiRating value={rating.rate} />
      <Typography
        sx={{
          fontSize: 12,
          fontWeight: 400,
          textDecoration: "underline",
          color: "#999999",
        }}
      >
        {rating.count} отзыва
      </Typography>
    </Stack>
  );
};

export default Rating;
