import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./Dashboard.css";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "5px",
    padding: theme.spacing(3, 2),
    textAlign: "center"
  },
  flex: {
    display: "flex",
    alignItems: "center"
  },
  buddiWindow: {
    width: "10vw",
    height: "60vh",
    borderRight: "1px solid grey"
  },
  chatWindow: {
    width: "70vw",
    height: "60vh",
    padding: "20px"
  },
  chatBox: {
    width: "100%"
  },
  btn: {
    background: "rgba(179, 220, 237, 0.99)",
    "&:hover": {
      background: "rgba(214, 183, 240, 0.9)"
    },
    color: "white"
  },
  button: {
    width: "15%"
  }
}));

const ret = classes => {
  console.log(classes);
};

export default function Dashboard() {
  const classes = useStyles();

  const [textValue, changeTextValue] = useState("");
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4">
          Buddies
        </Typography>
        <Typography varient="h5" component="h5">
          Set up your session!
        </Typography>
        <div className={classes.flex}>
          <div className={classes.buddiWindow}>
            <List>
              {["raj", "delia", "josh"].map(buddi => (
                <ListItem key={buddi} button>
                  <ListItemText primary={buddi} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatWindow}>
            {[{ from: "rajaaaaaa", msg: "lets set up something!" }].map(
              (msg, i) => (
                <div className={classes.flex} key={i}>
                  <Chip label={msg.from} className={classes.chip}></Chip>
                  <Typography varient="p">{msg.msg}</Typography>
                </div>
              )
            )}
          </div>
        </div>
        <div className={classes.flex}>
          <TextField
            label="Send a message!"
            className={classes.chatBox}
            value={textValue}
            onChange={e => changeTextValue(e.target.value)}
          />

          <Button variant="contained" className={classes.btn}>
            Send
          </Button>
        </div>
        {ret(classes)}
      </Paper>
    </div>
  );
}
