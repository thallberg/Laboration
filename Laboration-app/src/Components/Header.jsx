import React from "react";
import { Box, Typography } from "@mui/material";


const Header = () => {
  return (

    <Box className="header">

      <img className="heroimg" src="/Hero.webp" alt="Välkomstbild på hästar" />

      <Typography className="header-title" variant="h1" >
        Välkommen till Swings Isländshästar
      </Typography>
    </Box>
  );
};

export default Header;
