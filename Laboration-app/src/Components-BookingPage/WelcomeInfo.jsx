import React from "react";
import { Container, Typography } from "@mui/material";

const WelcomeInfo = () => {
  return (
    <Container className="welcome-content">
      <Typography className="welcome-content-title" variant="h1">
        Boka din upplevelse
        <span className="heart-emoji">
          {" "}
          <img src="/heart-eyes-emoji-icon.png" alt="Emoji med hjärtögon" />
        </span>
      </Typography>
      <Typography variant="body1">
        <span className="boldtext">Upptäck våra ridturer</span> med
        islandshästar. Välj bland våra olika ridturer nedan för att hitta en
        upplevelse som passar just dig. Klicka dig vidare på{" "}
        <span className="boldtext blue-span">Läs mer</span> för att få mer
        information och boka din vistelse.
      </Typography>
    </Container>
  );
};

export default WelcomeInfo;
