import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating"; // Correct import path

import useStyles from "./styles";

const Map = ({ setCoordinates, coordinates, setBound, places ,setChildClicked }) => {
  const classes = useStyles();
  const isDekstop = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBCoM-l5vv2KLFqarj6y9pcS8W3g7IBH6k" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          // console.log(e)
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBound({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child)=>{
          setChildClicked(child)
        }}
      >
        {/* Add your map markers or other components here */}
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={+place.latitude}
            lng={+place.longitude}
            key={i}
          >
            {!isDekstop ? (
              <LocationOnOutlinedIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  className={classes.typography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
                  }
                  alt={place?.name}
                />
                <Rating size="small" value={Number(place.rating)} readOnly/>
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
