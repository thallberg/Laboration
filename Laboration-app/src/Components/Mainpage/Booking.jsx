import React from "react";
import { Container, Typography, Button, Paper, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <Container className="booking-section">
      <Paper className="section-paper">
        <Typography variant="h2">Boka ditt besök</Typography>

        <Typography variant="body1" component="div">
          Upplev skönheten hos de isländska hästarna! Klicka på knappen nedan
          för att boka ditt besök. Följ med oss på en oförglömlig upplevelse med
          de isländska hästarna. Oavsett om du är intresserad av ridning eller
          bara vill lära dig mer om dessa otroliga djur, erbjuder vi olika
          bokningsalternativ som passar dina behov.
          <Box className="divider"></Box>
        </Typography>

        <Box className="Booking-section-image">
          <img
            src="/horse-booking-main.webp"
            alt="Emoji med hjärtögon"
            loading="lazy"
          />
        </Box>

        <Typography variant="body2">
          För att göra en bokning eller få mer information, klicka på knappen
          nedan för att gå vidare till vår bokningssida.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/booking"
        >
          Boka nu
        </Button>
      </Paper>
    </Container>
  );
};

export default Booking;
