import "./App.css";
import React, { useEffect, useState } from "react";
import { NameContext } from "./contexts/NameContext";
import { DataContext } from "./contexts/DataContext";
import { Grid, Stack } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ComponentD from "./components/Component D";
import { icons } from "./components/images";
import { logoImage } from "./components/images";
import { Footer } from "./components/Footer";
import { LogoTitle } from "./components/LogoTitle";
import { StocksFetch } from "./components/StocksFetch";

function App() {
  const [name, setName] = useState("Marko");
  const [data, setData] = useState([]); // [1, 2, 3, 4, 5

  useEffect(() => {
    fetch(`https://api.coincap.io/v2/assets`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data.slice(0, 5));
      })
      .catch((error) => console.error(error));
  }, []);

  setInterval(() => {
    fetch(`https://api.coincap.io/v2/assets`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data.slice(0, 5));
      })
      .catch((error) => console.error(error));
  }, 120000);

  return (
    <NameContext.Provider value={[name, setName]}>
      <DataContext.Provider value={[data, setData]}>
        <div className="box">
          <LogoTitle logoImg={logoImage} />
          <Stack
            spacing={2}
            paddingY={1.7}
            direction="column"
            style={{ minHeight: "330px" }}>
            {data.map((coin, index) => {
              const price = coin.priceUsd;
              const percentChng = coin.changePercent24Hr;
              return (
                <React.Fragment key={coin.name}>
                  <Stack spacing={2} paddingY={1.7} direction="row">
                    <Grid container alignItems={"center"} width={"20px"}>
                      {index + 1}.
                    </Grid>
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
                    <Grid
                      container
                      alignItems={"center"}
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                      }}>
                      {parseFloat(price).toFixed(2)} $
                    </Grid>
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
          {/* <StocksFetch /> */}
          <p className="greyed-text">
            * prices automatically updates every 120 seconds <br />* you can
            manually update prices by clicking the button below
          </p>
          <ComponentD />
        </div>
        <Footer />
      </DataContext.Provider>
    </NameContext.Provider>
  );
}

export default App;
