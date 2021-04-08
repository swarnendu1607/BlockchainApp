import React from "react";
import data from "./user.json";
import clsx from "clsx";
import { GridToolbar } from "@material-ui/data-grid";
import { DataGrid, GridRowsProp, GridColDef } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./UserList.css";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";

const riceFilterModel = {
  items: [
    { columnField: "commodity", operatorValue: "contains", value: "rice" },
  ],
};
function UserList() {
  const [open, setOpen] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [report, setReport] = React.useState([]);
  const [signatureState, setSignatureState] = React.useState("");
  const rows: GridRowsProp = data;

  const handleClose = () => {
    setOpen(false);
  };
  const handleShowMoreClose = () => {
    setShowMore(false);
  };
  const handelClickShowDetails = (name, sig, rep) => {
    setUserName(name);
    setSignatureState(sig);
    setReport(rep);
    setOpen(true);
  };
  const handleShowMore = () => {
    setShowMore(true);
    setOpen(false);
  };
  const getReview = () => {
    console.log(report);
    let x;
    x = report.map((obj) => {
      return (
        <li
          style={{
            padding: "0.5rem",
          }}
        >
          <label
            style={{
              backgroundColor: "rgba(244, 159, 159, 0.5)",
              width: "100%",
              padding: "0.5rem",
            }}
          >
            {obj}
          </label>
        </li>
      );
    });
    return x;
  };
  const columns: GridColDef[] = [
    {
      field: "account_name",
      headerName: "Account NAME",
      headerClassName: "super-app-theme--header",
      cellClassName: "super-app-theme--cell",
      flex: 0.3,
    },
    {
      field: "report_count",
      headerName: "TOTAL REPORT",
      headerClassName: "super-app-theme--header",
      cellClassName: (params) =>
        clsx("super-app", {
          negative: params.value < 3,
          positive: params.value > 8,
          moderate: params.value >= 3 && params.value < 8,
        }),
      flex: 0.3,
    },
    {
      field: "DETAILS",
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <strong>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() =>
              handelClickShowDetails(
                params.getValue("account_name"),
                params.getValue("signature"),
                params.getValue("report")
              )
            }
          >
            show detail
          </Button>
        </strong>
      ),
      cellClassName: "super-app-theme--cell",
      flex: 0.3,
    },
  ];
  const useStyles = makeStyles({
    root: {
      "& .super-app-theme--header": {
        backgroundColor: "rgba(148, 176, 255, 0.5)",
      },
      "& .super-app-theme--cell": {
        backgroundColor: "rgba(255, 254, 235, 1)",
        fontWeight: "600",
      },
      "& .super-app.negative": {
        backgroundColor: "rgba(157, 255, 118, 0.49)",
        fontWeight: "600",
      },
      "& .super-app.positive": {
        backgroundColor: "#d47483",
        fontWeight: "600",
      },
      "& .super-app.moderate": {
        backgroundColor: "rgba(224, 183, 60, 0.55)",
        fontWeight: "600",
      },
    },
  });
  const classes = useStyles();
  let ReportDisplay = getReview();
  return (
    <div className="userListBody">
      <h1 style={{ textAlign: "left" }} className="userListHeader">
        Malicious Account
      </h1>
      <div style={{ height: 650, width: "90%" }} className={classes.root}>
        <DataGrid
          rows={rows}
          columns={columns}
          filterModel={riceFilterModel}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">User Details</DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{
              width: "100%",
              height: "2.5rem",
              padding: "0.5rem",
              fontWeight: "600",
            }}
          >
            Detail Information About The Malicious Account.
          </DialogContentText>
          <div>
            <label
              style={{
                backgroundColor: "rgba(199, 203, 204, 0.5)",
                width: "100%",
                height: "2.5rem",
                padding: "0.5rem",
              }}
            >
              Account Name : {userName}
            </label>
          </div>
          <div>
            <label
              style={{
                backgroundColor: "rgba(199, 203, 204, 0.5)",
                width: "100%",
                height: "2.5rem",
                padding: "0.5rem",
              }}
            >
              User Signature : {signatureState}
            </label>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleShowMore} color="primary">
            Show more
          </Button>
          <Button variant="contained" onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={showMore}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Report Details</DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{
              width: "100%",
              height: "2.5rem",
              padding: "0.5rem",
              fontWeight: "600",
            }}
          >
            Report we got till now on this Malicious Account.
          </DialogContentText>
          <div>
            <label
              style={{
                backgroundColor: "rgba(199, 203, 204, 0.5)",
                width: "100%",
                height: "2.5rem",
                padding: "0.5rem",
              }}
            >
              Account Name : {userName}
            </label>
          </div>
          <div>
            <label
              style={{
                backgroundColor: "rgba(199, 203, 204, 0.5)",
                width: "100%",
                height: "2.5rem",
                padding: "0.5rem",
              }}
            >
              User Signature : {signatureState}
            </label>
          </div>
          <div>
            <label>Report messages:</label>
            {ReportDisplay}
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleShowMoreClose}
            color="primary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UserList;
