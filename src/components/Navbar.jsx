import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";


import MenuIcon from "@mui/icons-material/Menu";

import NavListDrawer from "./NavListDrawer";

const Navbar = ({navArrayLinks}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar> {/* //Todo lo que se encuentre dentro de Toolbar se muestra en el navbar y usa flex */}
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vite-React-MaterialUI
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navArrayLinks.map((link) => (
            <Button
              key={link.title}
              color="inherit"
              component={NavLink}
                to={link.path}
            >
              {link.title}
            </Button>
          ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer 
      open={open}
      anchor="left"        
      onClose={() => setOpen(false)}
      sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer 
        navArrayLinks={navArrayLinks}
        NavLink={NavLink}
        setOpen={setOpen}
        />
      </Drawer>
    </>
  );
};

export default Navbar;
