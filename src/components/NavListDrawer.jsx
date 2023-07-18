import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const NavListDrawer = ({ navArrayLinks }) => {
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
              <ListItemButton href={item.path} component="a">
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
