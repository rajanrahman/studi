import React, { useState } from "react";

import Map from "./Map";
import "./Location.css";
import "../UIElements/Button";
import Button from "../UIElements/Button";

let location = {
  lat: 0,
  lng: 0
};

const Location = () => {
  const [showMap, showMapHandler] = useState(false);
  const [userPermission, setUserPermission] = useState(null);
  const [zipCode, setZipCode] = useState();

  function displayMap(position) {
    location.lat = position.coords.latitude;
    location.lng = position.coords.longitude;
    showMapHandler(true);
  }

  const locationHandler = () => {
    if (window.navigator.geolocation) {
      setUserPermission(true);
      navigator.geolocation.getCurrentPosition(displayMap);
    } else {
      setUserPermission(false);
    }
  };

  let show = (
    <React.Fragment>
      <Button onClick={locationHandler}>Get My Location</Button>
      <Button onClick={() => setUserPermission(false)} styleProp="go-back">
        or enter zip code
      </Button>
    </React.Fragment>
  );

  if (!userPermission && userPermission !== null) {
    show = (
      <React.Fragment>
        <input
          className="zip-input"
          value={zipCode}
          onChange={e => setZipCode(e.target.value)}
          placeholder="Enter your Zip Code"
          minlength="5"
          name="zipCode"
        ></input>

        <Button onClick={locationHandler}>Show Map!</Button>
      </React.Fragment>
    );
  } else {
    show = (
      <React.Fragment>
        <Button onClick={locationHandler}>Get My Location</Button>
        <Button onClick={() => setUserPermission(false)} styleProp="go-back">
          or enter zip code
        </Button>
      </React.Fragment>
    );
  }

  return (
    <div className="location-main">
      <h2>Find Studi Spots Near You!</h2>
      {show}
      {showMap && <Map center={location} zoom={16} />}
    </div>
  );
};

export default Location;
