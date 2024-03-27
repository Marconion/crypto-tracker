import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Stack } from "@mui/material";
import { ibmImg } from "./images";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key

// A59KLPQJYBEF12DU

var url =
  "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo";
export const StocksFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const lastRefreshed = data ? data["Meta Data"]["3. Last Refreshed"] : null;
  console.log(data);

  if (data && data["Time Series (5min)"]) {
    console.log(data["Time Series (5min)"][lastRefreshed]["1. open"]);
  }

  const openPrice = data
    ? parseFloat(data["Time Series (5min)"][lastRefreshed]["1. open"])
    : null;
  const symbol = data ? data["Meta Data"]["2. Symbol"] : null;

  return (
    <div>
      <Stack
        spacing={2}
        paddingY={1.7}
        direction="row"
        style={{ justifyContent: "space-between" }}>
        <Grid container alignItems={"center"} width={"20px"}>
          <p>1</p>
        </Grid>
        <Grid container width={"300px"} alignItems={"center"}>
          <img src={ibmImg} alt="IBM" style={{ width: "15px" }} />
          <p>{symbol}</p>
        </Grid>
        <Grid container width={"310px"} alignItems={"center"}>
          <p>{openPrice} $</p>
        </Grid>
      </Stack>
    </div>
  );
};
