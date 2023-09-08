import { Button, Typography } from "@mui/material";
import React from "react";
import "./ErrorMessage.css";
const styles = {
  errorContainer: {
    margin: "auto",
    width: "500px",
    height: "400px",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    border: "2px solid orange",
    borderRadius: "50px",
  },
  errorContainerMob: {
    margin: "auto",
    width: "100%",
    height: "200px",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
  },
};

const ErrorMessage = ({ OnClick }) => {
  return (
    <>
      <div className="error" style={styles.errorContainer} OnClick={OnClick}>
        <Typography
          variant="h3"
          sx={{ fontFamily: "Monserrat", paddingBottom: 3 }}
        >
          Something went wrong
        </Typography>
        <span onClick={OnClick}>
          <Button
            variant="contained"
            sx={{
              marginTop: 2,
              backgroundColor: "#FFA500",
              "&:hover": {
                backgroundColor: "#FF6347",
              },
            }}
          >
            Refresh
          </Button>
        </span>
      </div>
      <div
        className="errorMob"
        style={styles.errorContainerMob}
        OnClick={OnClick}
      >
        <Typography variant="h5" sx={{ fontFamily: "Monserrat" }}>
          Something went wrong
        </Typography>
        <span onClick={OnClick}>
          <Button
            variant="contained"
            sx={{
              marginTop: 2,
              backgroundColor: "#FFA500",
              "&:hover": {
                backgroundColor: "#FF6347",
              },
            }}
          >
            Refresh
          </Button>
        </span>
      </div>
    </>
  );
};

export default ErrorMessage;
