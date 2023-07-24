import { Route, Routes } from "react-router-dom";

//import { Box } from "@mui/system"
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import AndroidIcon from "@mui/icons-material/Android";
import AnchorIcon from "@mui/icons-material/Anchor";

import Product from "./components/Product";
import CardMui from "./components/CardMui";
import Navbar from "./components/Navbar";
import { navArrayLinks } from "./components/navArrayLinks ";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      {/* NAVBAR */}
      <Navbar navArrayLinks={navArrayLinks} />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
        </Routes>
      </Container>

      {/* CONTENIDO CON GRID Y FLEX */}
      <Container
        maxWidth="md"
        sx={{
          mt: 5,
          p: 5,
          border: "2px solid #ccc",
          boxShadow: "0 0 10px #ccc",
        }}
      >
        <Typography variant="h4" sx={{ mb: 5, p: 5 }}>
          Typography variant=h4
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              nihil, minima aperiam nostrum, sequi nam illo ipsam ea tempore
              quas iure dolorem vitae deleniti sapiente! Pariatur beatae sequi
              iusto est. Nemo, adipisci! Maiores iste pariatur consequatur dolor
              optio! Architecto deserunt iste omnis sed cupiditate, sunt aliquam
              quaerat at veritatis sint repudiandae dolor ab nemo dolorem eum
              ullam nulla quos tenetur? Iusto dolore exercitationem autem
              similique esse adipisci ad sit illum nobis. Voluptatum quia cum
              quam facere ipsam laboriosam. Itaque velit deserunt enim fugiat
              suscipit voluptates, magni alias corporis quo id?
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              nihil, minima aperiam nostrum, sequi nam illo ipsam ea tempore
              quas iure dolorem vitae deleniti sapiente! Pariatur beatae sequi
              iusto est. Nemo, adipisci! Maiores iste pariatur consequatur dolor
              optio! Architecto deserunt iste omnis sed cupiditate, sunt aliquam
              quaerat at veritatis sint repudiandae dolor ab nemo dolorem eum
              ullam nulla quos tenetur? Iusto dolore exercitationem autem
              similique esse adipisci ad sit illum nobis. Voluptatum quia cum
              quam facere ipsam laboriosam. Itaque velit deserunt enim fugiat
              suscipit voluptates, magni alias corporis quo id?
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              nihil, minima aperiam nostrum, sequi nam illo ipsam ea tempore
              quas iure dolorem vitae deleniti sapiente! Pariatur beatae sequi
              iusto est. Nemo, adipisci! Maiores iste pariatur consequatur dolor
              optio! Architecto deserunt iste omnis sed cupiditate, sunt aliquam
              quaerat at veritatis sint repudiandae dolor ab nemo dolorem eum
              ullam nulla quos tenetur? Iusto dolore exercitationem autem
              similique esse adipisci ad sit illum nobis. Voluptatum quia cum
              quam facere ipsam laboriosam. Itaque velit deserunt enim fugiat
              suscipit voluptates, magni alias corporis quo id?
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              nihil, minima aperiam nostrum, sequi nam illo ipsam ea tempore
              quas iure dolorem vitae deleniti sapiente! Pariatur beatae sequi
              iusto est. Nemo, adipisci! Maiores iste pariatur consequatur dolor
              optio! Architecto deserunt iste omnis sed cupiditate, sunt aliquam
              quaerat at veritatis sint repudiandae dolor ab nemo dolorem eum
              ullam nulla quos tenetur? Iusto dolore exercitationem autem
              similique esse adipisci ad sit illum nobis. Voluptatum quia cum
              quam facere ipsam laboriosam. Itaque velit deserunt enim fugiat
              suscipit voluptates, magni alias corporis quo id?
            </p>
          </Grid>
        </Grid>

        <Button variant="contained" endIcon={<AndroidIcon />}>
          endIcon
        </Button>

        <Box
          sx={{
            mt: 5,
            p: 5,
            border: "2px solid #ccc",
            boxShadow: "0 0 10px #ccc",
          }}
        >
          <Typography variant="h3">Typography variant=h3 </Typography>
          <Button
            variant="contained"
            sx={{ mt: 5, bg: green[500] }}
            startIcon={<AnchorIcon />}
          >
            startIcon
          </Button>
        </Box>
      </Container>

      <Container>
        <Product/>
        <Product/>
        <Product/>
      </Container>

      {/* CardMedia */}
      <Container sx={{ mt: 5, display:"flex" }}>
        <CardMui />
        <CardMui />
        <CardMui />
      </Container>
    </>
  );
};

export default App;
