import { Grid2 } from "@mui/material";
import React from "react";
import InfoCards from "../Components-BookingPage/InfoCards";
import WelcomeInfo from "../Components-BookingPage/WelcomeInfo";
import Reviews from '../Components-BookingPage/Reviews'

const BookingPage = () => {
  return (
    <Grid2 container spacing={4} padding={2}>
   
   <Grid2 size={{ xs: 12, md: 12}}>
      <WelcomeInfo />
    </Grid2>
    
   
    <Grid2 size={{ xs: 12, md: 6}}>
      <InfoCards />
    </Grid2>

  
    <Grid2 size={{ xs: 12, md: 6 }}
     sx={{ margin: "auto"}}>
      <Reviews />
    </Grid2>
  </Grid2>
  );
};

export default BookingPage;
