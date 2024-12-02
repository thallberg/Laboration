import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation">
      <List>
      <ListItem button>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <ListItemText primary="Hem" />
          </Link>
        </ListItem>
        <Divider />

        <ListItem button>
          <Link
            to="/booking"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemText primary="Boka" />
          </Link>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="navbar" position="fixed">
      <Toolbar className="toolbar">
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link className="navbar-links" to="/" style={{ color: "inherit" }}>
              <Typography variant="h6" component="div">
                Hem
              </Typography>
            </Link>
            <Link
              to="/booking"
              className="navbar-links"
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