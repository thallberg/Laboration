import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";

const About = () => {
  return (
    <Container className="about-section">
      <Paper className="section-paper">
        <Typography variant="h2">
          Vår Passion för Isländska Hästar
          <Box className="horse-icon-container">
            <span className="horse-icon1">
              <img
                src="/horse-icon.png"
                alt="Emoji med hjärtögon"
                loading="lazy"
              />
            </span>
            <span className="horse-icon">
              <img
                src="/horse-icon.png"
                alt="Emoji med hjärtögon"
                loading="lazy"
              />
            </span>
          </Box>
        </Typography>
        <Typography className="about-text1" variant="body1" component="div">
          <span className="boldtext">Vår gård är dedikerad</span> till
          bevarandet och omvårdnaden av den unika och starka islandshästen. Med
          en rik historia i den isländska kulturen är vi stolta över att avla
          och träna hästar som förkroppsligar rasens anda och mångsidighet. Våra
          hästar är kända för sin gångart, karaktär och kärleksfulla
          temperament, vilket gör dem perfekta för både nybörjare och erfarna
          ryttare.
          <Box className="divider"></Box>
        </Typography>

        <Box className="about-section-image">
          <img
            src="/childandhorse.webp"
            alt="Emoji med hjärtögon"
            loading="lazy"
          />
          <img
            src="/childandhorse1.webp"
            alt="Emoji med hjärtögon"
            loading="lazy"
          />
        </Box>

        <Typography variant="body2">
          Oavsett om du är intresserad av ridning, träning eller bara vill
          uppleva skönheten hos dessa anmärkningsvärda djur, bjuder vi in dig
          att bli en del av vår isländska hästtradition.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
