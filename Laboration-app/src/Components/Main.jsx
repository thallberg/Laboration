import React from "react";
import About from "../Components-Main/About";
import Booking from "../Components-Main/Booking";
import Events from "../Components-Main/Events";
import { Grid2 } from "@mui/material";
import Reviews from "../Components-Main/Reviews";

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
      <Grid2 size={{ xs: 12 }}>
        <Reviews />
      </Grid2>
    </Grid2>
  );
};

export default Main;
