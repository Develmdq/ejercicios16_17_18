import React, { useState, useEffect } from "react";
import LoginFormik from "../../components/pure/forms/LoginFormik";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [credentials, setCreadentials] = useState(null);
  const navigate = useNavigate();
  const register = () => navigate("/register");
  const user = JSON.parse(sessionStorage.getItem("credentials")) || null;

  useEffect(() => {
    if (credentials && user) {
      if (
        user.email === credentials?.email &&
        user.password === credentials?.password
      ) {
        navigate("/tasks/" + user.username);
        console.log("correcto");
      } else {
        alert("Wrong credentials");
        console.log("incorrecto");
      }
    } else if (credentials && !user) {
      alert("User does not exist, please register");
    }
  });

  return (
    <>
      <h1>LoginPage</h1>
      <LoginFormik setCreadentials={(e) => setCreadentials(e)} />
      <Button variant="contained" onClick={register}>
        Go To Register Page
      </Button>
    </>
  );
};

export default LoginPage;
