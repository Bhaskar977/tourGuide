import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating"; // Correct import path

import useStyles from "./styles";

const Map = ({ setCoordinates, coordinates, setBound }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBCoM-l5vv2KLFqarj6y9pcS8W3g7IBH6k" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) =>{
          // console.log(e)
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBound({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
        }}
        onChildClick={''}
      >
        {/* Add your map markers or other components here */}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
