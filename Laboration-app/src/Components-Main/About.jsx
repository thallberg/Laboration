import React from "react";
import { Container, Typography, Paper, Divider, Box } from "@mui/material";

const About = () => {
  return (
    <Container className="about-section">
      <Paper className="section-paper">
        <Typography variant="h2">
        Vår Passion för Isländska Hästar
        </Typography>
        <Typography className="about-text1" variant="body1">
          <span className="boldtext">Vår gård är dedikerad</span> till
          bevarandet och omvårdnaden av den unika och starka islandshästen. Med
          en rik historia i den isländska kulturen är vi stolta över att avla
          och träna hästar som förkroppsligar rasens anda och mångsidighet. Våra
          hästar är kända för sin gångart, karaktär och kärleksfulla
          temperament, vilket gör dem perfekta för både nybörjare och erfarna
          ryttare.
          <Box className="divider"></Box>
        </Typography>

        <Typography variant="body2">
          Oavsett om du är intresserad av ridning, träning eller bara vill
          uppleva skönheten hos dessa anmärkningsvärda djur, bjuder vi in dig att
          bli en del av vår isländska hästtradition.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
