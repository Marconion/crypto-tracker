import { Grid, Stack } from "@mui/material";
import React, { useContext } from "react";
import { icons } from "./images";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { DataContext } from "../contexts/DataContext";

export const Table = () => {
  const [data, setData] = useContext(DataContext);
  return (
    <DataContext.Provider value={[data, setData]}>
      <Stack direction="column" style={{ minHeight: "300px" }}>
        {data.map((coin, index) => {
          const price = coin.priceUsd;
          const percentChng = coin.changePercent24Hr;
          return (
            <React.Fragment key={coin.name}>
              <Stack spacing={2} paddingY={1.7} direction="row">
                <Grid container alignItems={"center"} width={"20px"}>
                  {index + 1}.
                </Grid>

                {/* Prikaz imena coina */}

                <Grid container width={"300px"} alignItems={"center"}>
                  <img
                    src={icons[index]}
                    alt={coin.name}
                    style={{
                      width: "15px",
                    }}
                  />
                  {coin.name}
                </Grid>

                {/* Prikaz cene */}

                <Grid
                  container
                  alignItems={"center"}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}>
                  {parseFloat(price).toFixed(2)} $
                </Grid>

                {/* Prikaz up/down strelica */}

                <Grid
                  container
                  alignItems={"center"}
                  style={{ display: "flex", justifyContent: "flex-end" }}>
                  {parseFloat(percentChng).toFixed(2)}%
                  {percentChng > 0 ? (
                    <ArrowDropUpIcon style={{ color: "green" }} />
                  ) : (
                    <ArrowDropDownIcon style={{ color: "red" }} />
                  )}
                </Grid>
              </Stack>
            </React.Fragment>
          );
        })}
      </Stack>
    </DataContext.Provider>
  );
};
