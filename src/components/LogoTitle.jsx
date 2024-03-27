import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import React from "react";

export const LogoTitle = (props) => {
  const LogoButton = styled(Button)({
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
  });

  return (
    <div>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-around"}
        className="logo-anim">
        <LogoButton disableRipple>
          <img src={props.logoImg} className="logo-img" alt="logo" />
        </LogoButton>
      </Grid>
      <div>
        <p style={{ fontSize: "2rem" }} className="coin-title ">
          Coins
        </p>
      </div>
    </div>
  );
};
