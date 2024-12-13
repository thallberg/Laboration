import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Container, Box, Button } from "@mui/material";
import UndoIcon from "@mui/icons-material/Undo";
import BookingCard from "../api/BookingCard.json";
import { Link } from "react-router-dom";
import DayTour from "../Components/Formpage/DayTour";
import DayTourFood from "../Components/Formpage/DayTourFood";
import DayTourHouse from "../Components/Formpage/DayTourHouse";

const BookingForm = () => {
  const params = useParams();
  const { state } = useLocation();
  const { id, activity, price, description, image } = state;

  const selectedCard = BookingCard.find((card) => card.id === id);

  let formComponent = null;

  if (selectedCard) {
    switch (id) {
      case "1":
        formComponent = <DayTour activity={selectedCard.title} price={price} />;
        break;
      case "2":
        formComponent = (
          <DayTourFood activity={selectedCard.title} price={price} />
        );
        break;
      case "3":
        formComponent = (
          <DayTourHouse activity={selectedCard.title} price={price} />
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

export default BookingForm;
