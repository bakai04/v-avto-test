import Image from "next/image";
import React from "react";
import { Box, Typography, Stack, Chip } from "@mui/material";
import Rating from "../rating";
import { IProducts } from "@/shared/types/product";
import Link from "next/link";
import { Title } from "./styled";

interface ICardInformProps {
  data: IProducts;
  count?: number;
}

const CardInform = ({ data, count }: ICardInformProps) => {
  return (
    <Box>
      <Box
        sx={{ width: "100%", position: "relative", textAlign: "center", mb: 2 }}
      >
        <Image
          src={data.image}
          alt="photos"
          width={220}
          height={220}
          style={{ objectFit: "contain" }}
        />
      </Box>

      <Stack
        direction="row"
        flexWrap={"wrap"}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography fontSize={12} fontWeight={400} color="#2E2E33">
          {data.category}
        </Typography>
        <Rating rating={data.rating} />
      </Stack>

      <Box sx={{ mt: 1 }}>
        <Link href={`/product/${data.id}`}>
          <Title>{data.title}</Title>
        </Link>

        <Stack
          mt={"10px"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            fontSize={22}
            fontWeight={600}
            color="#2E2E33"
            marginTop={1}
          >
            ${(data.price * (count || 1)).toFixed(1)}{" "}
            <Typography
              component="span"
              fontSize={12}
              fontWeight={400}
              color="$999999"
            >
              /шт.
            </Typography>
          </Typography>
          {data.rating.count > 300 && <Chip color="error" label={"Новинка"} />}
        </Stack>
      </Box>
    </Box>
  );
};

export default CardInform;
