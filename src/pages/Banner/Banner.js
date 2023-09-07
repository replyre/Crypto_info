import { Container, Typography } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";

const styles = {
  banner: { backgroundImage: "url(./back.jpg) " },
  container: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 5,
    justifyContent: "space-around",
    border: "none",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  tagContentTitle: {
    fontWeight: "bold",
    marginBottom: 2,
    fontFamily: "Montserrat",
  },

  tagContentSubTitle: {
    color: "darkgrey",
    textTrasform: "captialize",
    fontFamily: "Montserrat",
  },
};

const Banner = () => {
  return (
    <div style={styles.banner}>
      <Container sx={styles.container}>
        <div style={styles.tagline}>
          <Typography variant="h2" sx={styles.tagContentTitle}>
            Crypto Provider
          </Typography>
          <Typography variant="subtitle2" sx={styles.tagContentSubTitle}>
            Best place to get all your crypto info.
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
