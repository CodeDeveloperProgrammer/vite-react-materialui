import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const NavListDrawer = ({ navArrayLinks, NavLink, setOpen }) => {
  return (
    <Box
      bgcolor="#884A39"
      color={"white"}
      sx={{
        width: 250,
      }}
    >
      <nav>
        <List>
          {navArrayLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton  
              component={NavLink}
              to={item.path}
              onClick={() => setOpen(false)}
              >
              <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
