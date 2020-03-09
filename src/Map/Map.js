import React, { useRef, useEffect } from "react";

import "./Map.css";

const Map = props => {
  //let infoNode = `<div><div>${place.name}</div><div>${place.formatted_address}</div></div>`
  const mapRef = useRef();

  const { center, zoom } = props;
  const request = {
    location: center,
    radius: 8047,
    type: ["cafe"]
  };
  const request2 = {
    location: center,
    radius: 8047,
    type: ["library"]
  };
  let service;
  let map;
  let infoWindow;
  function callbackMap(results, status) {
    if (status == window.google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        createMarker(results[i]);
      }
    }
  }

  function createMarker(place) {
    console.log(place.photos);
    let marker = new window.google.maps.Marker({
      position: place.geometry.location,
      map: map
    });

    window.google.maps.event.addListener(marker, "click", function() {
      infoWindow.setContent(
        `<div class"content-box"><div>${place.name}</div><div>${place.formatted_address}</div></div>`
      );
      infoWindow.open(map, this);
    });
  }

  useEffect(() => {
    map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom
    });
    infoWindow = new window.google.maps.InfoWindow();
    // new window.google.maps.Marker({ position: center, map: map });
    service = new window.google.maps.places.PlacesService(map);
    service.textSearch(request, callbackMap);
    service.textSearch(request2, callbackMap);
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
