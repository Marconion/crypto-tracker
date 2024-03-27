import { Grid } from "@mui/material";
import React from "react";

export const LogoTitle = (props) => {
  return (
    <div>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-around"}
        className="logo-anim">
        <img src={props.logoImg} className="logo-img" alt="logo" />
      </Grid>
      {/* <h1>Coin Market Tracker</h1> */}
      <div>
        <p style={{ fontSize: "2rem" }} className="coin-title ">
          Coins
        </p>
      </div>
    </div>
  );
};
