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
import Backdrop from "@mui/material/Backdrop";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
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
      <AppBar className="navbar" position="sticky">
        <Toolbar className="toolbar">
          <Box className="links-content">
            <Link className="navbar-links" to="/" style={{ color: "inherit" }}>
              <Typography variant="h6">Hem</Typography>
            </Link>
            <Link
              to="/booking"
              className="navbar-links"
              style={{ color: "inherit" }}
            >
              <Typography variant="h6">Boka</Typography>
            </Link>
          </Box>
          <IconButton
            className="hamburgermenu"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => toggleDrawer(true)()}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

      <Backdrop
        sx={(theme) => ({
          backdropFilter: "blur(5px)",
          zIndex: theme.zIndex.drawer - 1,
        })}
        open={open}
        onClick={toggleDrawer(false)}
      ></Backdrop>
    </Box>
  );
};

export default Navbar;
