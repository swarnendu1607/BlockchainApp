import React from "react";
import "./Header.css";
import { Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <div className="fullHeader">
      <h1 className="header">MANAGED SECURITY SERVICES</h1>
      <label className="HeaderLabel">Logged in as Shalini | My Account</label>
      <Avatar className="HeaderAvatar" src="/broken-image.jpg" />
      <Button
        variant="contained"
        color="primary"
        style={{
          marginLeft: "3rem",
        }}
      >
        Log Out
      </Button>
    </div>
  );
}

export default Header;
