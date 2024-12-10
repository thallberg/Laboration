import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import ContentData from "../../Api/ContentData.json";

const Events = () => {
  const [events, setEvents] = useState({});
  const [eventInfo, setEventInfo] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setEvents(ContentData.events);
  }, []);

  const handleClickOpen = (eventInfo) => {
    setEventInfo(eventInfo);
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <Container className="events-section">
      <Paper className="section-paper">
        <Typography variant="h2" className="section-title">
          {events.title}
        </Typography>

        <Typography variant="body1" className="section-description">
          {events.body1}
        </Typography>

        <Box className="event-section-image">
          {events.images &&
            events.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Event image ${index + 1}`}
                loading="lazy"
              />
            ))}
        </Box>

        <Box className="events-container">
          {events.eventDetails &&
            Object.keys(events.eventDetails).map((key, index) => {
              const event = events.eventDetails[key];
              return (
                <Box key={index} className="event-card">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="event-image"
                    loading="lazy"
                  />
                  <Typography variant="h3" className="event-title">
                    {event.title}
                  </Typography>
                  <Typography variant="body2" className="event-description">
                    {event.body2}
                  </Typography>
                  <Box className="event-footer">
                    <Button
                      variant="outlined"
                      className="read-more-btn"
                      onClick={() => handleClickOpen(event)}
                    >
                      Läs mer
                    </Button>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Paper>

      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>{eventInfo?.title}</DialogTitle>
        <DialogContent>
          <img
            src={eventInfo?.image}
            loading="lazy"
            style={{ width: "100%", marginBottom: "20px" }}
          />
          <Typography>{eventInfo?.body3}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose} color="primary">
            Stäng
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Events;
