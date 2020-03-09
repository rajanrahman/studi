import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import EditIcon from "@material-ui/icons/Edit";
import ChatIcon from "@material-ui/icons/Chat";
import PlaceIcon from "@material-ui/icons/Place";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import Map from "../Map/Map";
import Location from "../Map/Location";
import "./Dashboard.css";

const Dash = () => {
  const place = {
    location: {
      lat: 34.1531,
      lng: -118.261
    }
  };
  const useStyles = makeStyles(theme => ({
    icon: {
      color: "white",
      fontSize: "6rem",
      ["@media (min-width:891px)"]: {
        fontSize: "10rem"
      }
    }
  }));
  const classes = useStyles();

  return (
    <div className="dashboard-main">
      <NavLink to="/buddies" className="person-container">
        <PersonIcon className={classes.icon} />
        <p>Find a Buddi</p>
      </NavLink>
      <NavLink to="/profile" className="person-container">
        <EditIcon className={classes.icon} />
        <p>Edit Profile</p>
      </NavLink>
      <NavLink to="/dashboard" className="person-container">
        <ChatIcon className={classes.icon} />
        <p>Chat</p>
      </NavLink>
      <NavLink to="/studi_spots" className="person-container">
        <PlaceIcon className={classes.icon} />
        <p>Studi Spots</p>
      </NavLink>
    </div>
  );
};

export default Dash;
