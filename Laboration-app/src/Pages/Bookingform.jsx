import React from "react";
import { useParams } from "react-router-dom";
import { Container, Box, Button } from "@mui/material";
import UndoIcon from "@mui/icons-material/Undo";
import infoCard from "../api/InfoCard.json";
import { Link } from "react-router-dom";
import Daytour from "../Components/Formpage/Daytour";
import Daytourfood from "../Components/Formpage/Daytourfood";
import Daytourhouse from "../Components/Formpage/Daytourhouse";




const Bookingform = () => {
  const params = useParams();
  const id = params.id;

  const selectedCard = infoCard.find((card) => card.id === id);

  const price = selectedCard.price;

  let formComponent = null;

  if (selectedCard) {
    switch (id) {
      case "1":
        formComponent = (
          <Daytour activity={selectedCard.title} price={price} />
        );
        break;
      case "2":
        formComponent = (
          <Daytourfood activity={selectedCard.title} price={price} />
        );
        break;
      case "3":
        formComponent = (
          <Daytourhouse
            activity={selectedCard.title}
            price={price}
          />
        );
        break;
      default:
        formComponent = <div>Tjänsten är ej tillgänlig..</div>;
    }
  }

  return (
    <Container className="booking-container">
      <Button
        variant="text"
        className="booking-form-backarrow"
        component={Link}
        to="/Booking/"
        startIcon={<UndoIcon />}
      >
        Ångrat dig?
      </Button>
      <Box className="booking-form-container">{formComponent}</Box>
    </Container>
  );
};

export default Bookingform;
