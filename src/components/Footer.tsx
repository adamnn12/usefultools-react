import React from "react";
import { Container, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <img src="/Logo.png" alt="Dash Studios" width={"250px"} />
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={4}></Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
