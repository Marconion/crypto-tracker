import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { LogoTitle } from "./LogoTitle";
import { logoImage } from "./images";
import styled from "@emotion/styled";
import { Footer } from "./Footer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Note } from "./Note";
// import { users } from "./users";

const CssTextField = styled(TextField)({
  "& label": { color: "#A0AAB4" },
  "& input": {
    color: "#A0AAB4",
  },
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});
console.log(localStorage.getItem("users"));
export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userExists = users.some(
      (user) => user.username === username && user.password === password,
    );

    if (!userExists) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    } else {
      setShowSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };

  function handleRegister() {
    navigate("/register");
  }

  return (
    <>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "tween", stiffness: 120 }}>
        {showAlert && (
          <Alert
            className="info-anim"
            icon={<CheckIcon fontSize="inherit" />}
            severity="error"
            style={{ position: "fixed" }}>
            Here is a gentle confirmation that your action was not successful.
          </Alert>
        )}
        {showSuccess && (
          <Alert
            className="info-anim"
            icon={<CheckIcon fontSize="inherit" />}
            severity="success"
            style={{ position: "fixed" }}>
            You have successfully logged in.
          </Alert>
        )}
        <div className="box">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Button
              variant="text"
              component="span"
              color="inherit"
              //   disableRipple
              style={{
                width: "10px",
                justifyContent: "start",
                color: "inherit",

                fontSize: "30px",
              }}>
              <ArrowBackIcon style={{ color: "inherit", fontSize: "30px" }} />
            </Button>
          </Link>

          {/* Logo i title */}

          <Stack
            direction="column"
            alignItems={"center"}
            style={{ minHeight: "300px" }}>
            <LogoTitle logoImg={logoImage} />

            <Typography variant="h5" marginTop={"50px"}>
              Login
            </Typography>

            {/* Form */}

            <form onSubmit={handleSubmit}>
              <Stack direction="column" alignItems={"center"}>
                <CssTextField
                  label="Enter username"
                  id="username"
                  value={username}
                  style={{ marginTop: "50px" }}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <CssTextField
                  type="password"
                  label="Enter password"
                  id="password"
                  value={password}
                  style={{ marginTop: "20px" }}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  style={{ marginTop: "20px", backgroundColor: "#638b8e" }}>
                  Login
                </Button>
              </Stack>
            </form>
            <Button
              type="submit"
              variant="text"
              style={{ marginTop: "20px", marginBottom: "20px" }}
              onClick={handleRegister}>
              Register
            </Button>
          </Stack>
          <Note
            text={
              <p>
                Here you can enter your credentials to access your portfolio
              </p>
            }
          />
        </div>
        <Footer />
      </motion.div>
    </>
  );
};
