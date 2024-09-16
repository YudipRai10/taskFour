import React, { useEffect, useState } from "react";

import Login from "./Component/Login";
import Welcome from "./Component/Welcome";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [throwError, setThrowError] = useState("");
  const loginDetails = {
    username: "admin",
    password: "admin",
  };
  const checkIfUserValid = (dataFromLogin) => {
    console.log(dataFromLogin, "details from Login Function");
    if (
      loginDetails.username === dataFromLogin.username &&
      loginDetails.password === dataFromLogin.password
    ) {
      console.log("Welcome. You are logged in.");
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", true);
    } else {
      setThrowError("Kindly enter admin details");
    }
  };
  useEffect(() => {
    const logInFromLocalStorage = localStorage.getItem("isLoggedIn") || false;
    setIsLoggedIn(logInFromLocalStorage);
  }, []);
  if (isLoggedIn) {
    return (
      <Welcome
        logoutInWelcome={() => {
          localStorage.removeItem("isLoggedIn");
          setIsLoggedIn(false);
        }}
        username={loginDetails.username}
      />
    );
  }

  return (
    <>
      <Login
        childToParentFunction={(checkData) => {
          console.log(checkData, "data from Login function");
          checkIfUserValid(checkData);
        }}
      />
      {throwError && <div>{throwError}</div>}
    </>
  );
}

export default App;
