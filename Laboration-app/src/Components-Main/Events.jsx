import React from "react";
import { Container, Typography, Button, Box, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <Container className="events-section">
      <Paper className="section-paper">
        <Typography variant="h2" className="section-title">
          Turridning Vid Högtider
        </Typography>

        <Typography variant="body1" className="section-description">
          Vi erbjuder en mängd olika ridturer under hela året, med särskilda
          evenemang och temaridningar under högtider. Här kan du läsa mer om våra
          populära turer under påsken, midsommar, advent och fler!
        </Typography>

        <Box className="events-container">
        
          <Box className="event-card">
            <img
              src="/Easter.webp" 
              alt="Påskridning"
              className="event-image"
            />
            <Typography variant="h5" className="event-title">
              Påskridning
            </Typography>
            <Typography variant="body2" className="event-description">
              Fira påsken med en fantastisk ridtur genom vår vackra gård. Upplev
              påskens fridfulla atmosfär medan du rider på våra isländska hästar.
            </Typography>
            <Box className="event-footer">
              <Button
                variant="outlined"
                component={Link}
                to=""
                className="read-more-btn"
              >
                Läs mer
              </Button>
            </Box>
          </Box>

         
        
          <Box className="event-card">
            <img
              src="/Advent.webp"
              alt="Advent Ridning"
              className="event-image"
            />
            <Typography variant="h5" className="event-title">
              Advent Ridning
            </Typography>
            <Typography variant="body2" className="event-description">
              Kom och upplev den lugna och vackra adventstiden. Rid genom
              vinterlandskapet med våra islandshästar och få en julig upplevelse.
            </Typography>
            <Box className="event-footer">
              <Button
                variant="outlined"
                component={Link}
                to=""
                className="read-more-btn"
              >
                Läs mer
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Events;
