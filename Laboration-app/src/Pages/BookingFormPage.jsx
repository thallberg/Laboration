import React from "react";
import { useParams } from "react-router-dom";
import { Container, Box, Button, Typography } from "@mui/material";
import UndoIcon from "@mui/icons-material/Undo";
import infoCard from "../api/InfoCard.json";
import { Link } from "react-router-dom";
import FormDagsTur from "../Components-FormPage/FormDagsTur";
import FormDagsTurMat from "../Components-FormPage/FormDagsTurMat";
import FormDagsTurOvernattning from "../Components-FormPage/FormDagsTurOvernattning";


const BookingFormPage = () => {
  const params = useParams();
  const id = params.id;

  const selectedCard = infoCard.find((card) => card.id === id);

  const price = selectedCard.price;

  let formComponent = null;

  if (selectedCard) {
    switch (id) {
      case "1":
        formComponent = (
          <FormDagsTur activity={selectedCard.title} price={price} />
        );
        break;
      case "2":
        formComponent = (
          <FormDagsTurMat activity={selectedCard.title} price={price} />
        );
        break;
      case "3":
        formComponent = (
          <FormDagsTurOvernattning
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

export default BookingFormPage;
