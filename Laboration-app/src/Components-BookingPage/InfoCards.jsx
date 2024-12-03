import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import InfoCard from "../api/InfoCard.json";

const InfoCards = () => {
  return (
    <Grid className="Info-card-grid" container spacing={2}>
      {InfoCard.map((card, index) => (
         <Grid item xs={12} md={6} lg={3}  key={index}>
          <Card className="Info-card-content">
            <CardMedia
              className="info-card-image"
              component="img"
              image={card.image}
              alt="Bild på kortets innehåll"
            />
            <CardContent>
              <Typography className="Info-card-title" variant="h5">
                {card.title}
              </Typography>
              <Typography className="Info-card-text info-card1 " variant="subtitle1">
                {card.subtitle}
              </Typography>
              <Typography className="Info-card-text" variant="body2">
                {card.description}
              </Typography>
              <Typography
                className="Info-card-text boldtext"
                variant="body2"
              >
                Från: <span className="red-span">{card.Price}</span> /person
              </Typography>
              <Button className="Info-card-link" variant="contained">
                {card.link}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default InfoCards;
