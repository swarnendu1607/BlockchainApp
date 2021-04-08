import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Login.css";
import "./style.css";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import UserList from "./UserList";
import malicious from "./mal.jpg";
import verified from "./verfied.jpg";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// const fs = require("browserify-fs");

function Login() {
  const [userName, setUserName] = useState("");
  const [review, setReview] = useState("");
  const [subject, setSubject] = useState("");
  const [valid, setValid] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [showPop, setShowPop] = React.useState(false);

  const user = ["abcd1@user", "abcd2@user", "abcd3@user"];
  const developer = ["abcd1@dev", "abcd2@dev", "abcd3@dev"];

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setShowPop(false);
    setUserName("");
    console.log(userName);
  };
  const handleReport = () => {
    let postReview = {
      userName: userName,
      subject: subject,
      body: review,
    };
    // let data = JSON.stringify(postReview);
    // fs.writeFileSync("PostedReview.json", data);
    console.log("Data written to file");
    console.log(postReview);
    setOpen(false);
  };
  const displayDialogImage = () => {
    if (valid) {
      return (
        <img
          src={verified}
          className="App-logo"
          alt="logo"
          style={{
            width: "100%",
          }}
        />
      );
    }
    return (
      <img
        src={malicious}
        className="App-logo"
        alt="logo"
        style={{
          width: "100%",
        }}
      />
    );
  };
  const displayDialogText = () => {
    if (valid) {
      return "ACCESS GRANTED";
    }
    return "ACCESS DEBIED";
  };
  let dialogImage = displayDialogImage();
  let dialogText = displayDialogText();
  return (
    <>
      <Router>
        {" "}
        <div className="login w3-container w3-center w3-animate-left">
          <div className="loginForm">
            <TextField
              className="TextField"
              id="filled-basic"
              label="CAN I TRUST?"
              placeholder="username"
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
            disabled={!userName.length > 0}
            onClick={() => {
              console.log(userName);
              if (
                user.indexOf(userName) >= 0 ||
                developer.indexOf(userName) >= 0
              ) {
                setValid(true);
              } else {
                setValid(false);
              }
              setShowPop(true);
            }}
          >
            {/* <Link to={"/user"}>CHECK</Link> */}
            CHECK
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
            disabled={!userName.length > 0}
            style={{
              marginLeft: "3rem",
            }}
          >
            REPORT
          </Button>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Report User</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please insert your comments bellow.
            </DialogContentText>
            <TextField
              margin="dense"
              id="outlined-basic"
              variant="outlined"
              label="To"
              value={userName}
              placeholder="Username"
              fullWidth
              multiline
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              margin="dense"
              id="outlined-basic"
              variant="outlined"
              label="Subject"
              placeholder="what's most important to know?"
              fullWidth
              multiline
              onChange={(e) => setSubject(e.target.value)}
            />
            <TextField
              margin="dense"
              id="outlined-basic"
              variant="outlined"
              placeholder="what did you like or dislike?"
              label="Body"
              rows={4}
              fullWidth
              multiline
              onChange={(e) => setReview(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button variant="contained" onClick={handleReport} color="primary">
              Report
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={showPop}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          style={{
            backgroundColor: "rgba(230, 45, 45, 0.5)",
          }}
        >
          <DialogTitle id="form-dialog-title">{dialogText}</DialogTitle>
          <DialogContent>{dialogImage}</DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClose} color="primary">
              CLOSE
            </Button>
          </DialogActions>
        </Dialog>
        <Switch>
          <Route path="/user" component={UserList} />
        </Switch>
      </Router>
    </>
  );
}

export default Login;
