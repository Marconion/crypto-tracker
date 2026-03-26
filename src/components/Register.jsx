import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { LogoTitle } from "./LogoTitle";
import { logoImage } from "./images";
import styled from "@emotion/styled";
import { Footer } from "./Footer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckIcon from "@mui/icons-material/Check";
import { Link, useNavigate } from "react-router-dom";
import { users } from "./users";
import { Note } from "./Note";

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

// for (var i = 0; i < localStorage.length; i++) {
//   console.log(localStorage.getItem(localStorage.key(i)));
// }

console.log(users);

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || [],
  );

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { username, password, email };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    console.log(users);
    navigate("/login");
    // localStorage.clear();
  };

  function handleRegister() {
    navigate("/register");
  }

  return (
    <>
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
      <div className="box ">
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
        <Stack
          direction="column"
          alignItems={"center"}
          style={{ minHeight: "300px" }}>
          <LogoTitle logoImg={logoImage} />

          <Typography variant="h5" marginTop={"50px"}>
            Register
          </Typography>
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
              <CssTextField
                type="email"
                label="Enter email"
                id="email"
                value={email}
                style={{ marginTop: "20px" }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                style={{ marginTop: "20px", marginBottom: "20px" }}
                // onClick={handleRegister}
              >
                Register
              </Button>
              <Note
                text={<p>Please fill all the required fields to register.</p>}
              />
            </Stack>
          </form>
        </Stack>
      </div>
      <Footer />
    </>
  );
};
