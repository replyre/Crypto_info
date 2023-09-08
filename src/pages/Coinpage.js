import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "./CrptoCoins";
import { SingleCoin } from "../config/api";
import axios from "axios";
import CoinInformation from "../components/CoinInformation";

import "./CoinPage.css";
import { Typography } from "@mui/material";
import { numberWithCommas } from "./Banner/Carousel";

const styles = {
  image: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    margin: "auto",
  },
  heading: {
    display: "flex",
    marginBottom: "20px",
    justifyContent: "center",
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
};

const Coinpage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();
  let obj;

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };
  {
    obj = { __html: coin?.description.en.split(". ")[0] };
  }
  console.log(coin);
  useEffect(() => {
    fetchCoin();
  }, []);
  return (
    <div className="container">
      <div className="sidebar">
        <div className="image" style={styles.image}>
          <img src={coin?.image.large} alt={coin?.name} height="200" />
        </div>
        <Typography variant="h3" sx={styles.heading}>
          {coin?.name}
        </Typography>
        <Typography
          sx={{
            width: "100%",
            fontFamily: "monospace",
            padding: 0.5,
            paddingBottom: 5,
            paddingTop: 0,
            textAlign: "justify",
          }}
        >
          <div dangerouslySetInnerHTML={obj}></div>
        </Typography>
        <div className="marketData">
          <span
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" sx={styles.heading}>
              Rank
            </Typography>{" "}
            &nbsp;&nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {coin?.market_cap_rank}
            </Typography>
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" sx={styles.heading}>
              Current Price
            </Typography>{" "}
            &nbsp;&nbsp;
            <Typography
              variant="h6"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {" "}
              {symbol}{" "}
              {coin &&
                numberWithCommas(
                  coin?.market_data.current_price[currency.toLowerCase()]
                )}
            </Typography>
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" sx={styles.heading}>
              Market Cap
            </Typography>{" "}
            &nbsp;&nbsp;
            <Typography
              variant="h6"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {coin &&
                numberWithCommas(
                  coin?.market_data.market_cap[currency.toLowerCase()]
                    .toString()
                    .slice(0, -6)
                ) + " M"}
            </Typography>
          </span>
        </div>
      </div>
      <CoinInformation coin={coin} />
    </div>
  );
};

export default Coinpage;
