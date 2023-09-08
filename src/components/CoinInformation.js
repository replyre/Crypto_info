import React, { useEffect, useState } from "react";
import { CryptoState } from "../pages/CrptoCoins";
import axios from "axios";
import { HistoricalChart } from "../config/api";
import { ThemeProvider } from "react-bootstrap";
import { CircularProgress, createTheme } from "@mui/material";
import "./CoinInformation.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  //   responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};
const CoinInformation = ({ coin }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#FFA500",
      },
    },
  });
  const [historicalData, setHistoricalData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();
  const fetchHistoricalData = async () => {
    const { data } = await axios.get(HistoricalChart(coin?.id, days, currency));
    setHistoricalData(data?.prices);
  };

  console.log(historicalData);
  useEffect(() => {
    fetchHistoricalData();
  }, [currency, days]);

  return (
    <div className="containerChart">
      {!historicalData ? (
        <CircularProgress sx={{ color: "orange" }} size={250} thickness={1} />
      ) : (
        <>
          <Line
            options={{
              elements: {
                point: {
                  radius: 0,
                },
              },
            }}
            className="chart"
            data={{
              labels: historicalData?.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : String(date.toLocalDateString());
              }),
              datasets: [
                {
                  borderColor: "#eeBC1D",
                  label: `Price (Past ${days} Days) in ${currency}`,
                  data: historicalData?.map((coi) => coi[1].toFixed()),
                },
              ],
            }}
          />
        </>
      )}
    </div>
  );
};
export default CoinInformation;
