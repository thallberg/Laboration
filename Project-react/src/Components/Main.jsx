import React from "react";
import { Grid2 } from "@mui/material";
import About from "./Mainpage/About";
import Booking from "./Mainpage/Booking";
import Events from "./Mainpage/Events";

const Main = () => {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={{ xs: 12, md: 12, lg: 6 }}>
        <Grid2 container spacing={0}>
          <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 12 }}>
            <About />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 6, lg: 12 }}>
            <Booking />
          </Grid2>
        </Grid2>
      </Grid2>

      <Grid2 size={{ xs: 12, md: 12, lg: 6 }}>
        <Events />
      </Grid2>
    </Grid2>
  );
};

export default Main;
