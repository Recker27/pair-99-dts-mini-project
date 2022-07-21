import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "3em 0",
        }}
      >
        <Box>
          <Typography variant="body1">Audio and Subtitles</Typography>
          <Typography variant="body1">Media Center</Typography>
          <Typography variant="body1">Security</Typography>
          <Typography variant="body1">Contact Us</Typography>
          <Button variant="outlined">Service Code</Button>
        </Box>
        <Box>
          <Typography variant="body1">Audio and Subtitles</Typography>
          <Typography variant="body1">Media Center</Typography>
          <Typography variant="body1">Security</Typography>
          <Typography variant="body1">Contact Us</Typography>
        </Box>
        <Box>
          <Typography variant="body1">Audio and Subtitles</Typography>
          <Typography variant="body1">Media Center</Typography>
          <Typography variant="body1">Security</Typography>
          <Typography variant="body1">Contact Us</Typography>
        </Box>
        <Box>
          <Typography variant="body1">Audio and Subtitles</Typography>
          <Typography variant="body1">Media Center</Typography>
          <Typography variant="body1">Security</Typography>
          <Typography variant="body1">Contact Us</Typography>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
