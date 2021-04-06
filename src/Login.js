import React, { useState } from "react";
import "./Login.css";
import "./style.css";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

function Login() {
  const [userName, setUserName] = useState("");
  const [valid, setValid] = useState(false);
  const validUsername = ["valid@abcd"];
  return (
    <>
      <div className="login w3-container w3-center w3-animate-left">
        <div className="loginForm">
          <TextField
            className="TextField"
            id="filled-basic"
            label="USERNAME"
            variant="filled"
            fullWidth={true}
            size="medium"
            margin="dense"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            console.log(userName);
            if (validUsername.indexOf(userName) >= 0) {
              setValid(true);
            }
            setUserName("");
          }}
        >
          CONTINUE
        </Button>
      </div>
    </>
  );
}

export default Login;
