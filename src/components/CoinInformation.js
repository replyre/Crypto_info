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
import { chartDays } from "../config/data";
import SelectButton from "./SelectButton";
import ErrorMessage from "./ErrorMessage";

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
  const [error, setError] = useState(false);
  const [update, setUpdate] = useState(false);
  const fetchHistoricalData = async () => {
    try {
      const { data } = await axios.get(
        HistoricalChart(coin?.id, days, currency)
      );
      {
        data && setHistoricalData(data.prices);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    setError(false);
    fetchHistoricalData();
  }, [currency, days, update]);

  return (
    <>
      {error && (
        <ErrorMessage
          OnClick={() => {
            setUpdate(!update);
          }}
        ></ErrorMessage>
      )}
      {!error && (
        <div className="containerChart">
          {!historicalData ? (
            <CircularProgress
              sx={{ color: "orange" }}
              size={250}
              thickness={1}
            />
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
                    return days === 1
                      ? time
                      : String(date.toLocaleDateString());
                  }),
                  datasets: [
                    {
                      borderColor: "#eeBC1D",
                      label: `Price (Past ${days} Days) in ${currency}`,
                      data: historicalData?.map((coin) => coin[1].toFixed()),
                    },
                  ],
                }}
              />
              <div
                style={{
                  display: "flex",
                  marginTop: 20,
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {chartDays.map((day) => (
                  <SelectButton
                    selected={day.value === days}
                    key={day.value}
                    onClick={() => setDays(day.value)}
                    item={day.label}
                  ></SelectButton>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
export default CoinInformation;
