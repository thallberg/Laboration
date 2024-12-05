import React from "react";
import About from "../Components-Main/About";
import Booking from "../Components-Main/Booking";
import Events from "../Components-Main/Events";
import { Grid } from "@mui/material";
import Reviews from "../Components-Main/Reviews";

const Main = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={6}>
        <Grid container spacing={0}>
          <Grid item sm={12} md={6} lg={12}>
            <About />
          </Grid>
          <Grid item sm={12} md={6} lg={12}>
            <Booking />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={12} lg={6}>
        <Events />
      </Grid>
      <Reviews />
    </Grid>
  );
};

export default Main;
