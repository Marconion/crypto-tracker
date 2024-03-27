import { Button, Stack } from "@mui/material";
import "../App.css";
import { NameContext } from "../contexts/NameContext";
import { DataContext } from "../contexts/DataContext";
import { useContext } from "react";
import { icons } from "./images";
import styled from "@emotion/styled";

export const StyledButton = styled(Button)({
  variant: "contained",
  color: "black",
  backgroundColor: "lightblue",
  "&:hover": {
    backgroundColor: "lightblue",
  },
  "&:active": {
    backgroundColor: "lightgreen",
  },
});

function ComponentD() {
  // const [name] = useContext(NameContext);
  const [data, setData] = useContext(DataContext);

  function handleClick() {
    fetch(`https://api.coincap.io/v2/assets`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data.slice(0, 5));
      })
      .catch((error) => console.error(error));
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="box">
      {/* <h3>Welcome {name}</h3> */}
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="column">
          <div className="container">
            {icons.map((icon, index) => (
              <img key={index} src={icon} alt={`icon-${index}`} />
            ))}
          </div>
          <StyledButton onClick={handleClick}>Update prices</StyledButton>
        </Stack>
      </form>
    </div>
  );
}

export default ComponentD;
