import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Link } from "react-router-dom";

const Events = () => {
  const [open, setOpen] = useState(false);
  const [eventInfo, setEventInfo] = useState("");

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
          Turridning Vid Högtider
        </Typography>

        <Typography variant="body1" className="section-description">
          Vi erbjuder en mängd olika ridturer under hela året, med särskilda
          evenemang och temaridningar under högtider. Här kan du läsa mer om
          våra populära turer under påsken, midsommar, advent och fler!
        </Typography>

        <Box className="events-container">
          <Box className="event-card">
            <img src="/Easter1.webp" alt="Påskridning" className="event-image" />
            <Typography variant="h5" className="event-title">
              Påskridning
            </Typography>
            <Typography variant="body2" className="event-description">
              Fira påsken med en fantastisk ridtur genom vår vackra gård. Upplev
              påskens fridfulla atmosfär medan du rider på våra isländska
              hästar.
            </Typography>
            <Box className="event-footer">
              <Button
                variant="outlined"
                component={Link}
                to=""
                className="read-more-btn"
                onClick={() =>
                  handleClickOpen({
                    description: `Fira påsken på ett unikt sätt med en rogivande ridtur genom vår vackra gård 
                   och omgivande landskap. Våra isländska hästar, kända för sin stabilitet och 
                   lugna temperament, gör att även nybörjare kan känna sig trygga i sadeln. 
                   Under turen kommer vi att stanna för en kort fika där du kan njuta av lokala 
                   påskdelikatesser och höra spännande berättelser om påskens traditioner på 
                   gården. Denna tur är perfekt för familjer, par eller grupper som vill uppleva
                    naturen på ett annorlunda och minnesvärt sätt. 
                    Vi rekommenderar att boka i god tid då platserna snabbt blir fullbokade under högtiden!`,
                    image: "/Easter1.webp",
                })
                }
              >
                Läs mer
              </Button>
            </Box>
          </Box>

          <Box className="event-card">
            <img
              src="/Advent1.webp"
              alt="Advent Ridning"
              className="event-image"
            />
            <Typography variant="h5" className="event-title">
              Advent Ridning
            </Typography>
            <Typography variant="body2" className="event-description">
              Kom och upplev den lugna och vackra adventstiden. Rid genom
              vinterlandskapet med våra islandshästar och få en julig
              upplevelse.
            </Typography>
            <Box className="event-footer">
              <Button
                variant="outlined"
                component={Link}
                to=""
                className="read-more-btn"
                onClick={() =>
                  handleClickOpen({
                    description: 
                    `
                        Upplev adventstiden på ett magiskt sätt med en ridtur genom ett gnistrande vinterlandskap. 
                        Våra isländska hästar tar dig med på en fridfull resa genom snötäckta skogar och öppna ängar, 
                        där lugnet i naturen skapar en perfekt inramning för julens förväntan. Under turen gör vi ett stopp 
                        vid en varm eld där du kan njuta av pepparkakor, glögg och julmusik medan vi berättar om gårdens egna 
                        jultraditioner. Denna upplevelse är idealisk för både familjer och vänner som vill skapa nya minnen 
                        tillsammans under en av årets mest stämningsfulla tider. Missa inte chansen att låta advent bli något ,
                        alldeles extra!
                      `,
                    image: "/Advent1.webp",
                 } )
                }
              >
                Läs mer
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>

      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>Information</DialogTitle>
        <DialogContent>
          <img
            src={eventInfo.image}
            style={{ width: "100%", marginBottom: "20px" }}
          />
          <Typography>{eventInfo.description}</Typography>
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
