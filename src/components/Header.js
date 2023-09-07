import {
  AppBar,
  Container,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../pages/CrptoCoins";

const styles = {
  title: {
    flex: 1,
    color: "orange",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: 28,
  },
  select: {
    width: 100,
    height: 40,
    marginRight: 5,
    border: "2px solid orange",
    color: "orange",
  },
};
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFA500",
    },
  },
});

const Header = () => {
  const navigate = useNavigate();
  const { currency, setCurrency } = CryptoState();
  console.log(currency);
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => {
                navigate("/");
              }}
              sx={styles.title}
            >
              Crypto Provider
            </Typography>
            <Select
              variant="outlined"
              sx={styles.select}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}> USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
