import styled from "@emotion/styled";
import { Box, Button, Paper, Typography } from "@mui/material";

const Product = () => {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    borderRadius: 5,
    border: "1px solid #ccc",
    objectPosition: "center",
  });

  return (
    <>
      <Paper
        sx={{
          width: "80%",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          gap: "2px",
          overflow: "hidden",
          mt: 5,
          mb: 5,
          p: 2,
        
        }}
      >
        <Box sx={{ ml: 5 }}>
          <Img
            src="https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </Box>

        <Box sx={{ flexGrow: 1, display: "grid", gap:2, ml: 5 }}>
          <Typography variant="h4" component="h4" sx={{ fontWeight: 700 }}>
            Product Name{" "}
          </Typography>
          <Typography variant="body1" component="h6" sx={{ fontWeight: 400 }}>
            Product Description{" "}
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Add to cart
          </Button>
        </Box>

        <Box sx={{ m:5 }} component={"h5"}>
          €115.19
        </Box>
      </Paper>
    </>
  );
};

export default Product;
