import React from 'react';
import { Container, Typography } from '@mui/material'; 

const WelcomeInfo = () => {
  return (
    <Container className="booking-title">
      <Typography variant="h1" fontSize="3rem">
        Boka din upplevelse
      </Typography>
      <Typography variant="body1">
        <span className='boldtext'>Upptäck våra ridturer</span> med islandshästar. Välj bland våra olika
        ridturer nedan för att hitta en upplevelse som passar just dig.
        Klicka dig vidare på <span className='boldtext green-span'>Läs mer</span> för att få mer information och boka din vistelse.
      </Typography>
    </Container>
  );
};

export default WelcomeInfo;
