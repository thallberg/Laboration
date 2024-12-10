import React, { useEffect, useState } from "react";
import { Container, Typography, Paper, Box } from "@mui/material";
import ContentData from "../../Api/ContentData.json";

const About = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(ContentData.about);
  }, []);

  return (
    <Container className="about-section">
      <Paper className="section-paper">
        <Typography variant="h2">
          {data.title}
          <Box className="horse-icon-container">
            <span className="horse-icon1">
              <img src={data.icon} alt="Emoji med hjärtögon" loading="lazy" />
            </span>
            <span className="horse-icon">
              <img src={data.icon} alt="Emoji med hjärtögon" loading="lazy" />
            </span>
          </Box>
        </Typography>

        <Typography className="about-text1" variant="body1" component="div">
          <span className="boldtext">Vår gård är dedikerad</span> {data.body1}
          <Box className="divider"></Box>
        </Typography>

        <Box className="about-section-image">
          {data.images &&
            data.images.map((image, index) => (
              <img key={index} src={image} alt="Horse Image" loading="lazy" />
            ))}
        </Box>

        <Typography variant="body2">{data.body2}</Typography>
      </Paper>
    </Container>
  );
};

export default About;
