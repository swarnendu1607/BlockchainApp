import React, { useState } from "react";
import "./Login.css";
import "./style.css";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Rating } from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// const fs = require("browserify-fs");

function Login() {
  const [userName, setUserName] = useState("");
  const [review, setReview] = useState("");
  const [valid, setValid] = useState(false);
  const validUsername = ["valid@abcd"];
  const [ratingValue, setRatingValue] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleReport = () => {
    let postReview = {
      userName: userName,
      rating: ratingValue,
      review: review,
    };
    // let data = JSON.stringify(postReview);
    // fs.writeFileSync("PostedReview.json", data);
    console.log("Data written to file");
    console.log(postReview);
    setOpen(false);
  };
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
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
          disabled={!userName.length > 0}
          style={{
            marginLeft: "3rem",
          }}
        >
          Report
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
            Please insert your ratings and mention your comments bellow.
          </DialogContentText>
          <Typography component="legend">Overall trust rating</Typography>
          <Rating
            name="simple-controlled"
            value={ratingValue}
            onChange={(event, newValue) => {
              setRatingValue(newValue);
            }}
            max={10}
            size="large"
          />
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
            placeholder="what did you like or dislike?"
            label="Review"
            fullWidth
            multiline
            rows={4}
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
    </>
  );
}

export default Login;
