import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link, Typography } from "@mui/material";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation">
      <List>
        <ListItem>
          <Link to="/">
            <ListItemText primary="Hem" />
          </Link>
        </ListItem>
        <Divider />

        <ListItem button>
          <Link to="/booking">
            <ListItemText primary="Boka" />
          </Link>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link
              className="navbar-links"
              to="/"
              style={{color: "inherit" }}
            >
              <Typography variant="h6" component="div">
                Hem
              </Typography>
            </Link>
            <Link
              className="navbar-links"
              to="/booking"
              style={{ color: "inherit" }}
            >
              <Typography variant="h6" component="div">
                Boka
              </Typography>
            </Link>
          </Box>
          <IconButton
            className="hamburgermenu"
            style={{ marginLeft: "auto" }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer(true)()}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
};

export default Navbar;
