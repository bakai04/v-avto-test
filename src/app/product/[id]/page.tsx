"use client";

import { useParams } from "next/navigation";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Rating,
  Stack,
  Chip,
} from "@mui/material";
import Container from "@/widgets/container";
import FavoritButton from "@/entities/product-card/ui/favorite-button";
import CartButton from "@/entities/product-card/ui/cart-button";
import { useFetchProductQuery } from "@/shared/store/api/products-api";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useFetchProductQuery(id as string);

  if (isLoading) {
    return (
      <Container
        width={"100%"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  if (!product) {
    return (
      <Container>
        <Typography variant="h6" color="error" textAlign="center">
          Товар не найден
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: "20px" }}>
      <Card>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            sx={{
              width: { md: 300 },
              height: { xs: 300, md: "auto" },
              objectFit: "contain",
              p: 2,
            }}
          />
          <CardContent>
            <Stack flexDirection={"row"} gap={"16px"} alignItems={"start"}>
              <Typography variant="h5" fontWeight="bold">
                {product.title}
              </Typography>
              {product.rating.count > 300 && (
                <Chip color="error" label={"Новинка"} />
              )}
            </Stack>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {product.category}
            </Typography>
            <Typography variant="h6" color="primary">
              ${product.price.toFixed(2)}
            </Typography>
            <Rating value={product.rating.rate} precision={0.1} readOnly />
            <Typography variant="body2" color="text.secondary">
              ({product.rating.count} отзывов)
            </Typography>
            <Typography variant="body1" mt={2}>
              {product.description}
            </Typography>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              sx={{ mt: 2 }}
              gap={2}
            >
              <CartButton data={product} />
              <FavoritButton data={product} />
            </Stack>
          </CardContent>
        </Stack>
      </Card>
    </Container>
  );
};

export default ProductDetailPage;
