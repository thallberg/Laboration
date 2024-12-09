import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, Email } from "@mui/icons-material";
import "../Styles/Styles.css";

const Footer = () => {
  return (
    <Box className="footer">
      <Box className="footer-contact">
        <Typography variant="h6">Kontakta oss</Typography>
        <Typography variant="body2">Ridgården AB</Typography>
        <Typography variant="body2">Gårdvägen 123, 456 78 Stallby</Typography>
        <Typography variant="body2">Telefon: 070-123 45 67</Typography>
        <Typography variant="body2">E-post: info@ridgarden.se</Typography>
      </Box>

      <Box className="divider dividerleft"></Box>

      <Box className="footer-social">
        <Typography variant="h6">Följ oss</Typography>
        <IconButton className="social-icon" aria-label="Facebook">
          <Facebook />
        </IconButton>
        <IconButton className="social-icon" aria-label="Instagram">
          <Instagram />
        </IconButton>
        <IconButton className="social-icon" aria-label="Twitter">
          <Twitter />
        </IconButton>
        <IconButton className="social-icon" aria-label="Email">
          <Email />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
