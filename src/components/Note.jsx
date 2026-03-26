import { Stack } from "@mui/material";
import React from "react";
import "./Note.css";

export const Note = (props) => {
  return (
    <Stack direction={"column"} alignItems={"start"} className="note">
      <h1>Note</h1>
      {props.text}
    </Stack>
  );
};
