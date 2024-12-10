import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Paper, Box } from "@mui/material";
import { Link } from "react-router-dom";
import ContentData from "../../Api/ContentData.json";

const Booking = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(ContentData.booking);
  }, []);

  return (
    <Container className="booking-section">
      <Paper className="section-paper">
        <Typography variant="h2">{data.title}</Typography>

        <Typography variant="body1" component="div">
          {data.body1}
          <Box className="divider"></Box>
        </Typography>

        <Box className="Booking-section-image">
          {data.images &&
            data.images.map((image, index) => (
              <img key={index} src={image} alt="Booking Image" loading="lazy" />
            ))}
        </Box>

        <Typography variant="body2">{data.body2}</Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to={data.buttonLink}
        >
          {data.buttonText}
        </Button>
      </Paper>
    </Container>
  );
};

export default Booking;
