import "./App.css";
import React, { useEffect, useState } from "react";
import { NameContext } from "./contexts/NameContext";
import { DataContext } from "./contexts/DataContext";
import { Stack, Typography } from "@mui/material";
import ComponentD from "./components/Component D";
import { logoImage } from "./components/images";
import { Footer } from "./components/Footer";
import { LogoTitle } from "./components/LogoTitle";
import { StocksFetch } from "./components/StocksFetch";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { motion } from "framer-motion";
import { Note } from "./components/Note";
import { Table } from "./components/Table";

function App() {
  const [name, setName] = useState("Marko");
  const [data, setData] = useState([]); // [1, 2, 3, 4, 5

  useEffect(() => {
    fetch(`https://rest.coincap.io/v3/assets`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data.slice(0, 5));
      })
      .catch((error) => console.error(error));
  }, []);

  setInterval(() => {
    fetch(`https://rest.coincap.io/v3/assets`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data.slice(0, 5));
      })
      .catch((error) => console.error(error));
  }, 120000);

  function LoginButton() {
    return (
      <>
        <LoginIcon style={{ paddingRight: "10px" }} />
        <Typography variant="h5">Login</Typography>
      </>
    );
  }

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "tween", stiffness: 120 }}>
      <NameContext.Provider value={[name, setName]}>
        <DataContext.Provider value={[data, setData]}>
          <div className="box">
            <Stack
              direction={"row"}
              spacing={2}
              style={{ justifyContent: "end", alignItems: "center" }}>
              <Link
                to="/login"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                }}>
                <LoginButton />
              </Link>
            </Stack>
            <LogoTitle logoImg={logoImage} />
            {/* <div> */}
            <p className="coin-title ">Coins</p>
            {/* </div> */}
            <Table />
            <Note
              text={
                <>
                  <p>
                    Login if you want to access your portfolio. Please register
                    first if you want to create your portfolio.
                  </p>
                </>
              }
            />
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
    </motion.div>
  );
}

export default App;
